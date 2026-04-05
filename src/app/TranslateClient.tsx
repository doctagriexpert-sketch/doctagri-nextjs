'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

type Language = 'fr' | 'en'
type TranslationSource = Language | 'auto'

type TranslateApiResponse = {
  translations: string[]
}

async function fetchTranslations(texts: string[], source: TranslationSource = 'auto', target: Language = 'en'): Promise<string[]> {
  const requestPayload: { texts: string[]; target: Language; source?: TranslationSource } = {
    texts,
    target,
  }

  if (source && source !== 'auto') {
    requestPayload.source = source
  }

  const response = await fetch('/api/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestPayload),
  })

  if (!response.ok) {
    throw new Error('Translation service error')
  }

  const responseJson = (await response.json()) as TranslateApiResponse
  if (!responseJson?.translations || !Array.isArray(responseJson.translations)) {
    throw new Error('Invalid translation response')
  }

  return responseJson.translations
}

function updateButtonText(currentLang: Language, translateBtn: HTMLElement | null, translateBtnMobile: HTMLElement | null) {
  const langText = currentLang === 'fr' ? 'EN' : 'FR'
  const icon = '<i class="ri-global-line"></i>'
  if (translateBtn) translateBtn.innerHTML = icon + ' ' + langText
  if (translateBtnMobile) translateBtnMobile.innerHTML = icon + ' ' + langText
}

function collectTextNodes(): Text[] {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node: Node) {
        if (node.nodeType !== Node.TEXT_NODE) {
          return NodeFilter.FILTER_REJECT
        }

        const textNode = node as Text
        const parent = textNode.parentElement
        if (!parent) return NodeFilter.FILTER_REJECT

        const excludedTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'TEXTAREA', 'INPUT', 'SVG']
        if (excludedTags.includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT
        }

        if (parent.closest('#translate-btn, #translate-btn-mobile')) {
          return NodeFilter.FILTER_REJECT
        }

        const text = textNode.textContent?.trim()
        if (!text || text.length < 2) {
          return NodeFilter.FILTER_REJECT
        }

        return NodeFilter.FILTER_ACCEPT
      },
    }
  )

  const nodes: Text[] = []
  let currentNode = walker.nextNode()
  while (currentNode) {
    nodes.push(currentNode as Text)
    currentNode = walker.nextNode()
  }

  return nodes
}

export default function TranslateClient() {
  const pathname = usePathname()
  const currentLang = useRef<Language>('fr')
  const originalTextMap = useRef<WeakMap<Text, string>>(new WeakMap())
  const translationCache = useRef<Map<string, string>>(new Map())
  const isTranslating = useRef<boolean>(false)

  useEffect(() => {
    const translateBtn = document.getElementById('translate-btn')
    const translateBtnMobile = document.getElementById('translate-btn-mobile')

    async function applyLanguage(lang: Language): Promise<boolean> {
      const nodes = collectTextNodes()

      if (lang === 'fr') {
        nodes.forEach((node) => {
          const originalText = originalTextMap.current.get(node)
          if (originalText !== undefined) {
            node.textContent = originalText
          }
        })
        document.documentElement.lang = 'fr'
        currentLang.current = 'fr'
        return true
      }

      const nodesToTranslate: Text[] = []
      const textsToTranslate: string[] = []

      nodes.forEach((node) => {
        const originalText = node.textContent || ''
        if (!originalTextMap.current.has(node)) {
          originalTextMap.current.set(node, originalText)
        }

        if (translationCache.current.has(originalText)) {
          node.textContent = translationCache.current.get(originalText) ?? originalText
        } else {
          nodesToTranslate.push(node)
          textsToTranslate.push(originalText)
        }
      })

      if (nodesToTranslate.length === 0) {
        document.documentElement.lang = 'en'
        currentLang.current = 'en'
        return true
      }

      if (isTranslating.current) {
        return false
      }

      try {
        isTranslating.current = true
        const translatedTexts = await fetchTranslations(textsToTranslate, 'auto', 'en')

        nodesToTranslate.forEach((node, index) => {
          const originalText = textsToTranslate[index]
          const translated = translatedTexts[index] ?? originalText
          translationCache.current.set(originalText, translated)
          node.textContent = translated
        })

        document.documentElement.lang = 'en'
        currentLang.current = 'en'
        return true
      } catch (error) {
        console.error('Automatic translation failed:', error)
        return false
      } finally {
        isTranslating.current = false
      }
    }

    async function setLanguage(lang: Language) {
      const success = await applyLanguage(lang)
      if (!success) {
        return
      }
      localStorage.setItem('preferredLanguage', lang)
      updateButtonText(lang, translateBtn, translateBtnMobile)
    }

    function toggleLanguage() {
      const nextLang: Language = currentLang.current === 'fr' ? 'en' : 'fr'
      setLanguage(nextLang)
    }

    if (translateBtn) translateBtn.addEventListener('click', toggleLanguage)
    if (translateBtnMobile) translateBtnMobile.addEventListener('click', toggleLanguage)

    const storedLang = localStorage.getItem('preferredLanguage')
    const startingLang: Language = storedLang === 'en' ? 'en' : 'fr'
    applyLanguage(startingLang).then((success) => {
      if (success) {
        updateButtonText(startingLang, translateBtn, translateBtnMobile)
      }
    })

    return () => {
      if (translateBtn) translateBtn.removeEventListener('click', toggleLanguage)
      if (translateBtnMobile) translateBtnMobile.removeEventListener('click', toggleLanguage)
    }
  }, [pathname])

  return null
}
