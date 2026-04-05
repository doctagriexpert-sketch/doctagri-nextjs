async function translateWithMyMemory(text, sourceLang, target) {
  const url = new URL('https://api.mymemory.translated.net/get')
  url.searchParams.set('q', text)
  url.searchParams.set('langpair', `${sourceLang}|${target}`)

  const response = await fetch(url.toString())
  if (!response.ok) {
    const responseText = await response.text()
    throw new Error(`MyMemory failed ${response.status}: ${responseText}`)
  }

  const data = await response.json()
  if (!data?.responseData?.translatedText) {
    throw new Error(`MyMemory invalid response: ${JSON.stringify(data)}`)
  }

  return data.responseData.translatedText
}

async function translateWithGoogle(text, sourceLang, target) {
  const url = new URL('https://translate.googleapis.com/translate_a/single')
  url.searchParams.set('client', 'gtx')
  url.searchParams.set('sl', sourceLang)
  url.searchParams.set('tl', target)
  url.searchParams.set('dt', 't')
  url.searchParams.set('q', text)

  const response = await fetch(url.toString())
  if (!response.ok) {
    const responseText = await response.text()
    throw new Error(`Google translate failed ${response.status}: ${responseText}`)
  }

  const data = await response.json()
  if (!Array.isArray(data) || !Array.isArray(data[0])) {
    throw new Error(`Google invalid response: ${JSON.stringify(data)}`)
  }

  return data[0].map((item) => item[0]).join('')
}

export async function POST(request) {
  try {
    const { texts, source = 'auto', target } = await request.json()

    if (!Array.isArray(texts) || texts.length === 0 || !target) {
      return Response.json({ error: 'Invalid request body.' }, { status: 400 })
    }

    const sourceLang = source === 'auto' ? 'fr' : source

    try {
      const translations = await Promise.all(
        texts.map((text) => translateWithMyMemory(text, sourceLang, target))
      )
      return Response.json({ translations }, { status: 200 })
    } catch (myMemoryError) {
      console.error('MyMemory translate failed, falling back to Google:', myMemoryError)
      const googleSource = source === 'auto' ? 'auto' : sourceLang
      try {
        const translations = await Promise.all(
          texts.map((text) => translateWithGoogle(text, googleSource, target))
        )
        return Response.json({ translations }, { status: 200 })
      } catch (googleError) {
        console.error('Google fallback failed:', googleError)
        return Response.json({ error: 'Translation service error.' }, { status: 502 })
      }
    }
  } catch (error) {
    console.error('Translate API error:', error)
    return Response.json({ error: 'Unable to translate text at this time.' }, { status: 500 })
  }
}
