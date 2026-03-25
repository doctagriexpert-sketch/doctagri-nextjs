'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Download() {
  useEffect(() => {
    // ── Mobile menu ──────────────────────────────────────────────
    const mobileMenuBtn = document.getElementById('mobile-menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden')
      })
    }
  }, [])

  return (
    <div className="bg-white">
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
            <Link href="/download" className="text-primary-light font-medium">Télécharger</Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary-light font-medium">FAQ</Link>
            <button id="translate-btn" className="text-gray-700 hover:text-primary-light font-medium flex items-center gap-2">
              <i className="ri-global-line"></i> EN
            </button>
            <Link href="/contact" className="bg-primary-light text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition">
              Contact
            </Link>
          </div>
          <button className="md:hidden text-gray-700" id="mobile-menu-btn">
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="hidden md:hidden bg-white border-t" id="mobile-menu">
          <div className="container mx-auto px-4 py-2 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-primary-light font-medium">Accueil</Link>
            <Link href="/about" className="block text-gray-700 hover:text-primary-light font-medium">À propos</Link>
            <Link href="/features" className="block text-gray-700 hover:text-primary-light font-medium">Fonctionnalités</Link>
            <Link href="/download" className="block text-primary-light font-medium">Télécharger</Link>
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

      {/* ── Banner ── */}
      <div className="bg-primary-light/10 border-b border-primary-light/20 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-primary-dark">
            <i className="ri-checkbox-circle-fill text-primary-light"></i>
            <span className="text-sm font-medium">Mises à jour automatiques via Wi-Fi (optionnel)</span>
          </div>
        </div>
      </div>

      {/* ── Hero Download ── */}
      <section className="py-20 bg-gradient-to-br from-primary-light via-primary-light to-primary-dark relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">Téléchargez DoctAgri</h1>
              <p className="text-xl text-white/90 mb-8">
                Commencez dès maintenant à diagnostiquer vos cultures avec l'intelligence artificielle. Application 100% gratuite et hors ligne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="#"
                  className="bg-white text-primary-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <i className="ri-play-fill text-2xl"></i>
                  Google Play
                </a>
                <a
                  href="#"
                  className="bg-primary-dark border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <i className="ri-download-line text-xl"></i>
                  APK Direct
                </a>
              </div>
              <div className="text-white/80 text-sm">
                Version 1.0.0 • Compatible Android 8.0 et supérieur • 45 MB
              </div>
            </div>

            {/* Smartphone mockup */}
            <div className="relative flex items-center justify-center">
              <div className="relative" style={{ maxWidth: '300px' }}>
                <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl" style={{ width: '300px', height: '600px' }}>
                  <div className="bg-gradient-to-b from-primary-light/20 to-primary-light/10 rounded-[2.5rem] overflow-hidden h-full flex flex-col items-center justify-center px-6 relative">
                    <div className="absolute top-4 right-4">
                      <img src="/assets/logo.svg" alt="DoctAgri Logo" className="h-8 w-auto" />
                    </div>
                    <div className="mb-6">
                      <img src="/assets/doct.jpeg" alt="DoctAgri Logo" className="w-24 h-24 mx-auto object-contain" />
                    </div>
                    <h3 className="text-white text-xl font-bold text-center mb-3">
                      Diagnostiquez vos cultures en un instant
                    </h3>
                    <p className="text-white/90 text-sm text-center leading-relaxed">
                      L'intelligence artificielle au service de votre agriculture
                    </p>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <i className="ri-arrow-up-line text-primary-light text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Configuration Requise ── */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Configuration Requise</h2>
            <p className="text-xl text-gray-700">DoctAgri est optimisé pour fonctionner sur la plupart des smartphones Android</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: 'ri-android-line', title: 'Système', desc: 'Android 8.0 (Oreo) ou supérieur' },
              { icon: 'ri-cpu-line', title: 'Mémoire RAM', desc: 'Minimum 2 GB\nrecommandé 3 GB' },
              { icon: 'ri-folder-line', title: 'Stockage', desc: "150 MB d'espace libre" },
              { icon: 'ri-camera-line', title: 'Caméra', desc: '5 MP minimum\nrecommandé 8 MP' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl text-center border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-3xl text-primary-light`}></i>
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Bon à savoir */}
          <div className="bg-primary-light/5 border-2 border-primary-light/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <i className="ri-information-line text-3xl text-primary-light flex-shrink-0"></i>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary-dark mb-4">Bon à savoir</h3>
                <ul className="space-y-3">
                  {[
                    "Aucune connexion internet requise après l'installation",
                    'Compatible avec les smartphones bas de gamme',
                    'Optimisé pour économiser la batterie',
                    'Mises à jour automatiques via Wi-Fi (optionnel)',
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-primary-light text-xl flex-shrink-0 mt-0.5"></i>
                      <span className="text-gray-700">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guide d'Installation ── */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Guide d'Installation</h2>
            <p className="text-xl text-gray-700">Suivez ces étapes simples pour installer DoctAgri sur votre smartphone</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Via Google Play */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <i className="ri-play-fill text-3xl text-primary-light"></i>
                <h3 className="text-2xl font-bold text-primary-dark">Via Google Play</h3>
              </div>
              <div className="space-y-5">
                {[
                  { title: 'Ouvrez Google Play Store', desc: 'Lancez l\'application Google Play Store sur votre smartphone' },
                  { title: 'Recherchez "DoctAgri"', desc: 'Tapez "DoctAgri" dans la barre de recherche' },
                  { title: "Installez l'application", desc: 'Appuyez sur "Installer" et attendez la fin du téléchargement' },
                  { title: 'Lancez DoctAgri', desc: "Ouvrez l'application et suivez le tutoriel de démarrage" },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-dark mb-1">{step.title}</h4>
                      <p className="text-gray-700 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="mt-6 w-full bg-primary-light text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-500 transition flex items-center justify-center gap-2"
              >
                <i className="ri-play-fill text-xl"></i>
                Télécharger sur Google Play
              </a>
            </div>

            {/* Téléchargement Direct APK */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <i className="ri-download-line text-3xl text-primary-light"></i>
                <h3 className="text-2xl font-bold text-primary-dark">Téléchargement Direct (APK)</h3>
              </div>
              <div className="space-y-5">
                {[
                  { title: 'Téléchargez le fichier APK', desc: 'Cliquez sur le bouton de téléchargement ci-dessous' },
                  { title: 'Autorisez les sources inconnues', desc: 'Allez dans Paramètres > Sécurité > Sources inconnues' },
                  { title: "Installez le fichier APK", desc: "Ouvrez le fichier téléchargé et suivez les instructions" },
                  { title: 'Lancez DoctAgri', desc: "Ouvrez l'application et commencez à l'utiliser" },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-dark mb-1">{step.title}</h4>
                      <p className="text-gray-700 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="mt-6 w-full bg-primary-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2"
              >
                <i className="ri-download-line text-xl"></i>
                Télécharger l'APK (45 MB)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Questions Fréquentes ── */}
      <section className="py-20 bg-beige-light border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Questions Fréquentes</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "L'application est-elle vraiment gratuite ?",
                a: "Oui, DoctAgri est 100% gratuite. Aucun frais caché, aucun abonnement requis. Notre mission est de rendre l'assistance agricole accessible à tous les agriculteurs togolais.",
              },
              {
                q: "Ai-je besoin d'internet pour utiliser DoctAgri ?",
                a: "Non ! DoctAgri fonctionne entièrement hors ligne après l'installation. Vous n'avez besoin d'internet que pour télécharger l'application et les mises à jour optionnelles.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <i className="ri-question-line text-primary-light text-2xl flex-shrink-0"></i>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary-dark mb-2">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-primary-light font-semibold hover:text-primary-dark transition flex items-center justify-center gap-2"
            >
              Voir toutes les questions
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Besoin d'Aide ── */}
      <section className="py-20 bg-primary-dark border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Besoin d'Aide ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Notre équipe est disponible pour vous accompagner dans l'utilisation de DoctAgri
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-light text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-500 transition flex items-center justify-center gap-2 shadow-lg"
            >
              <i className="ri-customer-service-2-line text-xl"></i>
              Contacter le support
            </Link>
            <Link
              href="/faq"
              className="bg-white text-primary-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2 shadow-lg"
            >
              <i className="ri-question-answer-line text-xl"></i>
              Consulter la FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-primary-dark text-white py-16 relative overflow-hidden border-t border-gray-200">
        <div
          className="absolute inset-0 flex items-center justify-center text-white/5 font-black pointer-events-none select-none"
          style={{ fontSize: '12rem', letterSpacing: '0.5rem' }}
        >
          DOCTAGRI
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/assets/doct.jpeg" alt="DoctAgri Logo" className="h-10 w-auto" />
                <span className="text-2xl font-bold text-white">DoctAgri</span>
              </div>
              <p className="text-white/80 mb-4">Plateforme numérique inclusive pour l'assistance agricole intelligente au Togo.</p>
              <p className="text-white/60 text-sm">© 2026 DoctAgri. Tous droits réservés.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white uppercase">RESTEZ INFORMÉ</h4>
              <div className="flex gap-2 mb-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-2 py-2 bg-transparent text-white placeholder-white/60 border-b border-white/30 focus:border-white focus:outline-none"
                />
                <button className="bg-transparent px-2 py-2 hover:opacity-80 transition">
                  <i className="ri-arrow-right-line text-xl text-white"></i>
                </button>
              </div>
              <Link href="/privacy" className="text-primary-light text-sm hover:text-white transition">
                En savoir plus sur notre politique de confidentialité
              </Link>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white uppercase">RESSOURCES</h4>
              <ul className="space-y-2">
                <li><Link href="/documentation" className="text-white/80 hover:text-white transition">Documentation</Link></li>
                <li><Link href="/faq" className="text-white/80 hover:text-white transition">FAQ</Link></li>
                <li><Link href="/contact" className="text-white/80 hover:text-white transition">Support technique</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white uppercase">NAVIGATION</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white/80 hover:text-white transition">À propos</Link></li>
                <li><Link href="/features" className="text-white/80 hover:text-white transition">Fonctionnalités</Link></li>
                <li><Link href="/download" className="text-white/80 hover:text-white transition">Télécharger</Link></li>
              </ul>
              <div className="mt-6 flex items-center gap-4">
                <span className="text-primary-light text-sm">Visitez-nous sur les réseaux sociaux</span>
                <div className="flex gap-3">
                  <a href="https://facebook.com/DoctAgri" className="text-white hover:text-primary-light transition" target="_blank" rel="noopener">
                    <i className="ri-facebook-fill text-xl"></i>
                  </a>
                  <a href="https://twitter.com/DoctAgri" className="text-white hover:text-primary-light transition" target="_blank" rel="noopener">
                    <i className="ri-twitter-x-fill text-xl"></i>
                  </a>
                  <a href="https://linkedin.com/company/DoctAgri" className="text-white hover:text-primary-light transition" target="_blank" rel="noopener">
                    <i className="ri-linkedin-fill text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Floating Button ── */}
      <Link
        href="/contact"
        className="fixed bottom-6 right-6 bg-primary-light text-white px-4 py-3 rounded-lg shadow-lg hover:bg-primary-500 transition flex items-center gap-2 z-50"
      >
        <i className="ri-customer-service-2-line text-xl"></i>
        <span className="font-medium">Talk with Us</span>
      </Link>
    </div>
  )
}