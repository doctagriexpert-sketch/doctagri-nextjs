'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Contact() {
  useEffect(() => {
    // ── Mobile menu ──────────────────────────────────────────────
    const mobileMenuBtn = document.getElementById('mobile-menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden')
      })
    }

    // ── Compteur de caractères ───────────────────────────────────
    const messageTextarea = document.getElementById('message')
    const charCount = document.getElementById('char-count')
    if (messageTextarea && charCount) {
      messageTextarea.addEventListener('input', function () {
        charCount.textContent = this.value.length
      })
    }

    // ── Formulaire de contact ────────────────────────────────────
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      contactForm.addEventListener('submit', async function (e) {
        e.preventDefault()
        const payload = {
          name: this.querySelector('[name="name"]').value,
          email: this.querySelector('[name="email"]').value,
          phone: this.querySelector('[name="phone"]').value || '',
          subject: this.querySelector('[name="subject"]').value,
          message: this.querySelector('[name="message"]').value,
        }
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          })
          if (response.ok) {
            alert('Merci ! Votre message a bien été envoyé. Nous vous répondrons bientôt.')
            this.reset()
            if (charCount) charCount.textContent = '0'
          } else {
            const data = await response.json().catch(() => ({}))
            alert(data.error || 'Une erreur est survenue. Veuillez réessayer.')
          }
        } catch {
          alert('Service indisponible. Lancez le serveur pour activer le formulaire de contact.')
        }
      })
    }

    // ── Newsletter ────────────────────────────────────────────────
    const newsletterForm = document.getElementById('newsletter-form-contact')
    const newsletterMsg = document.getElementById('newsletter-message-contact')
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', async function (e) {
        e.preventDefault()
        const email = this.querySelector('input[name="email"]').value
        try {
          const response = await fetch('/api/newsletter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
          })
          if (response.ok) {
            if (newsletterMsg) {
              newsletterMsg.textContent = 'Merci ! Vous êtes inscrit à notre newsletter.'
              newsletterMsg.classList.remove('hidden')
            }
            this.reset()
            setTimeout(() => newsletterMsg?.classList.add('hidden'), 5000)
          } else {
            const data = await response.json().catch(() => ({}))
            if (newsletterMsg) {
              newsletterMsg.textContent = data.error || 'Une erreur est survenue.'
              newsletterMsg.classList.remove('hidden')
            }
          }
        } catch {
          if (newsletterMsg) {
            newsletterMsg.textContent = 'Service indisponible. Lancez le serveur pour activer les inscriptions.'
            newsletterMsg.classList.remove('hidden')
          }
        }
      })
    }

    // ── Chatbot widget ────────────────────────────────────────────
    const chatToggle = document.getElementById('chat-toggle')
    const chatWidget = document.getElementById('chat-widget')
    const chatClose = document.getElementById('chat-close')
    const chatForm = document.getElementById('chat-form')
    const chatInput = document.getElementById('chat-input')
    const chatMessages = document.getElementById('chat-messages')

    function addChatMessage(text, from = 'bot') {
      if (!chatMessages) return
      const wrapper = document.createElement('div')
      wrapper.className = from === 'user' ? 'flex justify-end' : 'flex'
      const bubble = document.createElement('div')
      bubble.className =
        from === 'user'
          ? 'bg-primary-light text-white rounded-2xl px-3 py-2 max-w-[80%] text-sm'
          : 'bg-white border border-gray-200 rounded-2xl px-3 py-2 max-w-[80%] text-sm'
      bubble.textContent = text
      wrapper.appendChild(bubble)
      chatMessages.appendChild(wrapper)
      chatMessages.scrollTop = chatMessages.scrollHeight
    }

    if (chatToggle && chatWidget) {
      chatToggle.addEventListener('click', () => {
        chatWidget.classList.toggle('hidden')
        if (!chatWidget.classList.contains('hidden') && chatInput) {
          chatInput.focus()
        }
      })
    }

    if (chatClose && chatWidget) {
      chatClose.addEventListener('click', () => {
        chatWidget.classList.add('hidden')
      })
    }

    if (chatForm && chatInput) {
      chatForm.addEventListener('submit', async function (e) {
        e.preventDefault()
        const text = chatInput.value.trim()
        if (!text) return
        addChatMessage(text, 'user')
        chatInput.value = ''
        addChatMessage('Je réfléchis à votre question...', 'bot')
        try {
          const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text }),
          })
          const data = await response.json()
          if (chatMessages?.lastChild) chatMessages.removeChild(chatMessages.lastChild)
          addChatMessage(data.reply || "Désolé, je n'ai pas pu obtenir de réponse pour le moment.", 'bot')
        } catch {
          addChatMessage('Une erreur est survenue avec le service de chat.', 'bot')
        }
      })
    }
  }, [])

  return (
    <div className="bg-gray-50">
      {/* ── Navbar ── */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/assets/doct.jpeg" alt="DoctAgri Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-primary-dark">DoctAgri</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-light font-medium">Accueil</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-light font-medium">À propos</Link>
            <Link href="/features" className="text-gray-700 hover:text-primary-light font-medium">Fonctionnalités</Link>
            <Link href="/download" className="text-gray-700 hover:text-primary-light font-medium">Télécharger</Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary-light font-medium">FAQ</Link>
            <button id="translate-btn" className="text-gray-700 hover:text-primary-light font-medium flex items-center gap-2">
              <i className="ri-global-line"></i> EN
            </button>
            <Link href="/contact" className="bg-primary-light text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition">
              Contact
            </Link>
          </div>
          <button className="md:hidden text-gray-700" id="mobile-menu-btn">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="hidden md:hidden bg-white border-t" id="mobile-menu">
          <div className="container mx-auto px-4 py-2 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-primary-light font-medium">Accueil</Link>
            <Link href="/about" className="block text-gray-700 hover:text-primary-light font-medium">À propos</Link>
            <Link href="/features" className="block text-gray-700 hover:text-primary-light font-medium">Fonctionnalités</Link>
            <Link href="/download" className="block text-gray-700 hover:text-primary-light font-medium">Télécharger</Link>
            <Link href="/faq" className="block text-gray-700 hover:text-primary-light font-medium">FAQ</Link>
            <button id="translate-btn-mobile" className="block text-gray-700 hover:text-primary-light font-medium flex items-center gap-2">
              <i className="ri-global-line"></i> EN
            </button>
            <Link href="/contact" className="block bg-primary-light text-white px-4 py-2 rounded-lg text-center">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <div id="google_translate_element" style={{ position: 'absolute', top: 0, left: 0, opacity: 0, pointerEvents: 'none' }}></div>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-light/10 via-white to-beige-light/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-black text-primary-dark mb-6">Contactez-Nous</h1>
            <p className="text-xl text-gray-600">
              Notre équipe est à votre écoute pour répondre à toutes vos questions sur DoctAgri
            </p>
          </div>
        </div>
      </section>

      {/* ── Formulaire + Infos ── */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Colonne gauche — Formulaire */}
            <div>
              <h2 className="text-2xl font-bold text-primary-dark mb-2">Envoyez-nous un Message</h2>
              <p className="text-gray-600 mb-6">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.
              </p>
              <form className="space-y-6" id="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-primary-dark mb-2">Nom complet *</label>
                  <input
                    type="text" id="name" name="name" placeholder="Votre nom" required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-light outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-primary-dark mb-2">Email *</label>
                  <input
                    type="email" id="email" name="email" placeholder="votre@email.com" required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-light outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-primary-dark mb-2">Téléphone</label>
                  <input
                    type="tel" id="phone" name="phone" placeholder="+228 XX XX XX XX"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-light outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-primary-dark mb-2">Sujet *</label>
                  <select
                    id="subject" name="subject" required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-light outline-none cursor-pointer transition-colors"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="support-technique">Support technique</option>
                    <option value="question-generale">Question générale</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="medias">Médias</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-primary-dark mb-2">Message *</label>
                  <textarea
                    id="message" name="message" rows="6"
                    placeholder="Décrivez votre demande..." required maxLength="500"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-light outline-none resize-none transition-colors"
                  ></textarea>
                  <div className="mt-2 text-sm text-gray-500">
                    <span id="char-count">0</span>/500 caractères
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-light text-white px-8 py-4 rounded-full font-bold hover:bg-primary-light/90 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <i className="ri-send-plane-line text-xl"></i>
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Colonne droite — Infos */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10">
              <h2 className="text-2xl font-extrabold text-primary-dark mb-3">Informations de Contact</h2>
              <p className="text-gray-600 mb-8">
                Vous pouvez également nous joindre directement via les moyens suivants :
              </p>
              <div className="space-y-6 mb-10">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center">
                    <i className="ri-mail-line text-2xl text-primary-light"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-1">Email</h3>
                    <a href="mailto:doctagri.expert@gmail.com" className="text-primary-light hover:text-primary-500 underline-offset-2 hover:underline">
                      doctagri.expert@gmail.com
                    </a>
                  </div>
                </div>
                {/* Téléphone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center">
                    <i className="ri-phone-line text-2xl text-primary-light"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-1">Téléphone</h3>
                    <a href="tel:+22891774563" className="text-primary-light hover:text-primary-500">
                      +228 91 77 45 63
                    </a>
                  </div>
                </div>
                {/* Adresse */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center">
                    <i className="ri-map-pin-line text-2xl text-primary-light"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Lomé, Togo<br />
                      Quartier Administratif
                    </p>
                  </div>
                </div>
                {/* Horaires */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center">
                    <i className="ri-time-line text-2xl text-primary-light"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-1">Horaires</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi : 8h00 - 17h00<br />
                      Samedi : 9h00 - 13h00
                    </p>
                  </div>
                </div>
              </div>
              {/* Réseaux sociaux */}
              <div className="mt-6 rounded-3xl bg-primary-50/80 px-6 py-7">
                <h3 className="text-lg font-bold text-primary-dark mb-2">Suivez-nous sur les Réseaux Sociaux</h3>
                <p className="text-gray-600 mb-5 text-sm">
                  Restez informé de nos dernières actualités et conseils agricoles.
                </p>
                <div className="flex gap-4">
                  {[
                    { href: 'https://www.facebook.com', icon: 'ri-facebook-fill' },
                    { href: 'https://x.com', icon: 'ri-twitter-x-fill' },
                    { href: 'https://www.linkedin.com', icon: 'ri-linkedin-fill' },
                    { href: 'https://wa.me/22891774563', icon: 'ri-whatsapp-fill' },
                  ].map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition hover:bg-gray-50">
                      <i className={`${s.icon} text-xl text-primary-dark`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Carte ── */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Notre Localisation</h2>
            <p className="text-xl text-gray-600">Visitez-nous à notre bureau à Lomé</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d1.2157!3d6.1725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e83e782f8d63%3A0x9c7b8b8b8b8b8b8b!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">Vous pouvez zoomer sur la carte à l'aide de CTRL+Molette de défilement</p>
          </div>
        </div>
      </section>

      {/* ── FAQ CTA ── */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Vous avez une Question ?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Consultez notre FAQ pour trouver rapidement des réponses aux questions les plus fréquentes
            </p>
            <Link href="/faq" className="inline-flex items-center gap-3 bg-primary-light text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-500 transition shadow-lg">
              <i className="ri-question-answer-line text-2xl"></i>
              Consulter la FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/assets/doct.jpeg" alt="DoctAgri Logo" className="h-10 w-auto" />
                <span className="text-2xl font-bold text-white">DoctAgri</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                L'application mobile qui révolutionne le diagnostic agricole au Togo grâce à l'intelligence artificielle.
              </p>
              <div className="flex gap-4 mt-6">
                {[
                  { href: 'https://facebook.com/DoctAgri', icon: 'ri-facebook-fill' },
                  { href: 'https://twitter.com/DoctAgri', icon: 'ri-twitter-x-line' },
                  { href: 'https://www.linkedin.com/company/doctagri', icon: 'ri-linkedin-fill' },
                  { href: 'https://wa.me/22891774563', icon: 'ri-whatsapp-line' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light transition-all">
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Newsletter</h3>
              <p className="text-gray-300 mb-6">Recevez nos actualités et conseils agricoles</p>
              <form id="newsletter-form-contact" className="space-y-4">
                <input
                  type="email" name="email" required placeholder="Votre email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-primary-light outline-none"
                />
                <button type="submit" className="w-full bg-primary-light text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-light/90 transition-all flex items-center justify-center gap-2">
                  <i className="ri-mail-send-line"></i>
                  S'abonner
                </button>
              </form>
              <p id="newsletter-message-contact" className="text-sm text-primary-light mt-4 hidden"></p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Ressources</h3>
              <ul className="space-y-3">
                <li><Link href="/documentation" className="text-gray-300 hover:text-primary-light transition-colors flex items-center gap-2"><i className="ri-book-open-line"></i> Documentation</Link></li>
                <li><Link href="/faq" className="text-gray-300 hover:text-primary-light transition-colors flex items-center gap-2"><i className="ri-question-line"></i> FAQ</Link></li>
                <li><Link href="/download" className="text-gray-300 hover:text-primary-light transition-colors flex items-center gap-2"><i className="ri-download-line"></i> Téléchargement</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-primary-light transition-colors flex items-center gap-2"><i className="ri-file-text-line"></i> Politique de confidentialité</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Navigation</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-300 hover:text-primary-light transition-colors">Accueil</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-primary-light transition-colors">À propos</Link></li>
                <li><Link href="/features" className="text-gray-300 hover:text-primary-light transition-colors">Fonctionnalités</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-primary-light transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2026 DoctAgri. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* ── Chatbot widget ── */}
      <div id="chat-widget" className="fixed bottom-24 right-6 w-80 max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden hidden z-50">
        <div className="bg-primary-light text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="ri-customer-service-2-line text-xl"></i>
            <span className="font-semibold">DoctAgri Chat</span>
          </div>
          <button id="chat-close" type="button" className="text-white/80 hover:text-white">
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>
        <div id="chat-messages" className="p-4 space-y-3 text-sm h-64 overflow-y-auto bg-gray-50">
          <div className="flex">
            <div className="bg-white border border-gray-200 rounded-2xl px-3 py-2 max-w-[80%] text-sm">
              Bonjour 👋, je suis l'assistant virtuel de DoctAgri. Posez-moi votre question.
            </div>
          </div>
        </div>
        <form id="chat-form" className="border-t border-gray-200 flex items-center gap-2 px-3 py-2 bg-white">
          <input
            id="chat-input"
            type="text"
            placeholder="Écrivez votre message..."
            className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light"
            autoComplete="off"
          />
          <button type="submit" className="bg-primary-light text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-primary-500 transition">
            <i className="ri-send-plane-2-line text-lg"></i>
          </button>
        </form>
      </div>

      {/* ── Floating Chat Button ── */}
      <button
        id="chat-toggle"
        type="button"
        className="fixed bottom-6 right-6 bg-primary-light text-white px-4 py-3 rounded-lg shadow-lg hover:bg-primary-500 transition flex items-center gap-2 z-50"
      >
        <i className="ri-customer-service-2-line text-xl"></i>
        <span className="font-medium">Talk with Us</span>
      </button>
    </div>
  )
}