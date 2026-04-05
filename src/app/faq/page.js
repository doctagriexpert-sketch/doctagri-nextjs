'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function FAQ() {
  useEffect(() => {
    // ── Mobile menu ──────────────────────────────────────────────
    const mobileMenuBtn = document.getElementById('mobile-menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden')
      })
    }

    // ── Accordion FAQ ────────────────────────────────────────────
    function toggleFaq(button) {
      const faqItem = button.closest('.faq-item')
      const answer = faqItem.querySelector('.faq-answer')
      const icon = button.querySelector('i')

      // Fermer tous les autres
      document.querySelectorAll('.faq-item').forEach((item) => {
        if (item !== faqItem) {
          item.querySelector('.faq-answer').classList.add('hidden')
          item.querySelector('i').classList.remove('rotate-180')
        }
      })

      // Toggle celui cliqué
      answer.classList.toggle('hidden')
      icon.classList.toggle('rotate-180')
    }

    document.querySelectorAll('.faq-toggle-btn').forEach((btn) => {
      btn.addEventListener('click', () => toggleFaq(btn))
    })
  }, [])

  const categories = [
    {
      title: 'Général',
      items: [
        {
          q: "Qu'est-ce que DoctAgri ?",
          a: "DoctAgri est une application mobile hors ligne qui utilise l'intelligence artificielle pour diagnostiquer les maladies des plantes. Elle fournit des conseils personnalisés en français et en éwé pour aider les agriculteurs togolais à protéger leurs cultures.",
        },
        {
          q: "L'application est-elle vraiment gratuite ?",
          a: "Oui, DoctAgri est 100% gratuite. Aucun frais caché, aucun abonnement requis. Notre mission est de rendre l'assistance agricole accessible à tous les agriculteurs togolais.",
        },
        {
          q: 'Quelles cultures sont supportées ?',
          a: "La version actuelle se concentre sur la tomate, le maïs, le piment et le manioc. Nous ajoutons régulièrement de nouvelles cultures en fonction des besoins des agriculteurs.",
        },
      ],
    },
    {
      title: 'Technique',
      items: [
        {
          q: "Ai-je besoin d'internet pour utiliser DoctAgri ?",
          a: "Non ! DoctAgri fonctionne entièrement hors ligne après l'installation. Vous n'avez besoin d'internet que pour télécharger l'application et les mises à jour optionnelles.",
        },
        {
          q: 'Mon téléphone est-il compatible ?',
          a: "DoctAgri fonctionne sur la plupart des smartphones Android à partir de la version 8.0 avec au moins 2 GB de RAM. L'application est optimisée pour les appareils bas de gamme.",
        },
        {
          q: "Quelle est la taille de l'application ?",
          a: "L'application DoctAgri pèse environ 45 MB. Vous aurez besoin d'environ 150 MB d'espace libre pour l'installation et le fonctionnement optimal.",
        },
        {
          q: "L'application consomme-t-elle beaucoup de batterie ?",
          a: "Non, DoctAgri est optimisée pour minimiser la consommation de batterie. L'IA embarquée fonctionne de manière efficace et ne nécessite pas de connexion internet constante.",
        },
        {
          q: "Comment mettre à jour l'application ?",
          a: "Les mises à jour sont optionnelles et peuvent être téléchargées via Wi-Fi. Si vous avez téléchargé via Google Play, les mises à jour se feront automatiquement. Pour l'APK, vous devrez télécharger la nouvelle version manuellement.",
        },
      ],
    },
    {
      title: 'Utilisation',
      items: [
        {
          q: 'Comment prendre une bonne photo pour le diagnostic ?',
          a: "Pour un meilleur diagnostic, prenez la photo en plein jour avec une bonne luminosité. Photographiez la partie malade de la plante de près, en vous assurant que la zone problématique est bien visible et nette.",
        },
        {
          q: "Puis-je utiliser l'application en éwé ?",
          a: "Oui, DoctAgri propose des conseils audio en éwé. Vous pouvez choisir votre langue préférée dans les paramètres de l'application.",
        },
        {
          q: 'Que faire si le diagnostic semble incorrect ?',
          a: "Si le diagnostic ne correspond pas à votre situation, vous pouvez prendre une nouvelle photo avec un meilleur éclairage ou contacter notre support technique via la page de contact.",
        },
        {
          q: 'Puis-je sauvegarder mes diagnostics ?',
          a: "Oui, tous vos diagnostics sont automatiquement sauvegardés dans l'historique de l'application. Vous pouvez les consulter à tout moment et suivre l'évolution de vos cultures.",
        },
        {
          q: 'Comment écouter les conseils audio ?',
          a: "Après chaque diagnostic, un bouton de lecture audio apparaît. Cliquez dessus pour écouter les conseils dans votre langue préférée. Vous pouvez réécouter autant de fois que nécessaire.",
        },
      ],
    },
    {
      title: 'Traitements',
      items: [
        {
          q: 'Les traitements recommandés sont-ils sûrs ?',
          a: "Oui, tous les traitements recommandés par DoctAgri sont validés par des experts agricoles et des institutions de recherche. Nous privilégions toujours les solutions biologiques et naturelles en priorité.",
        },
        {
          q: 'Où puis-je acheter les produits recommandés ?',
          a: "Les produits recommandés sont disponibles dans les coopératives agricoles et les magasins d'intrants agricoles. L'application vous fournira des informations sur les produits spécifiques à utiliser.",
        },
        {
          q: 'Puis-je utiliser des alternatives naturelles ?',
          a: "Absolument ! DoctAgri propose toujours des solutions biologiques et naturelles en priorité. Ces alternatives sont respectueuses de l'environnement et souvent plus économiques.",
        },
        {
          q: 'Comment appliquer les traitements ?',
          a: "L'application fournit des instructions détaillées pour chaque traitement, incluant le dosage, le moment d'application et les précautions à prendre. Des conseils audio sont également disponibles.",
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          q: "Comment obtenir de l'aide ?",
          a: "Vous pouvez nous contacter via la page de contact ou utiliser le support intégré dans l'application. Notre équipe est là pour vous aider.",
        },
        {
          q: "L'application est-elle disponible en plusieurs langues ?",
          a: "Oui, l'interface est disponible en français et les conseils audio sont disponibles en français et en éwé. Nous travaillons à ajouter d'autres langues locales.",
        },
        {
          q: "Puis-je suggérer des améliorations ?",
          a: "Absolument ! Vos suggestions sont les bienvenues. Vous pouvez nous contacter via la page de contact ou utiliser le formulaire de feedback dans l'application.",
        },
        {
          q: 'Y a-t-il des formations disponibles ?',
          a: "Oui, nous organisons régulièrement des formations avec nos partenaires (coopératives agricoles) pour aider les agriculteurs à utiliser efficacement DoctAgri. Contactez-nous pour plus d'informations.",
        },
        {
          q: 'Comment signaler un bug ?',
          a: 'Vous pouvez signaler un bug via la page de contact en sélectionnant "Support technique" comme sujet. Décrivez le problème rencontré et nous vous répondrons rapidement.',
        },
      ],
    },
  ]

  return (
    <div className="bg-white">
      {/* ── Navbar ── */}
      <nav className="bg-gradient-to-br from-primary-light via-primary-light to-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/assets/doct.jpeg" alt="DoctAgri Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-white">DoctAgri</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-white/80 font-medium">Accueil</Link>
            <Link href="/about" className="text-white hover:text-white/80 font-medium">À propos</Link>
            <Link href="/features" className="text-white font-medium">Fonctionnalités</Link>
            <Link href="/download" className="text-white hover:text-white/80 font-medium">Télécharger</Link>
            <Link href="/faq" className="text-white hover:text-white/80 font-medium">FAQ</Link>
            <button id="translate-btn" className="text-white hover:text-white/80 font-medium flex items-center gap-2">
              <i className="ri-global-line"></i> EN
            </button>
            <Link href="/contact" className="bg-primary-dark text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">
              Contact
            </Link>
          </div>
          <button className="md:hidden text-white" id="mobile-menu-btn">
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="hidden md:hidden bg-gradient-to-br from-primary-light via-primary-light to-white border-t" id="mobile-menu">
          <div className="container mx-auto px-4 py-2 space-y-3">
            <Link href="/" className="block text-white hover:text-white/80 font-medium">Accueil</Link>
            <Link href="/about" className="block text-white hover:text-white/80 font-medium">À propos</Link>
            <Link href="/features" className="block text-white font-medium">Fonctionnalités</Link>
            <Link href="/download" className="block text-white hover:text-white/80 font-medium">Télécharger</Link>
            <Link href="/faq" className="block text-white hover:text-white/80 font-medium">FAQ</Link>
            <button id="translate-btn-mobile" className="block text-white hover:text-white/80 font-medium flex items-center gap-2">
              <i className="ri-global-line"></i> EN
            </button>
            <Link href="/contact" className="block bg-primary-dark text-white px-4 py-2 rounded-lg text-center">Contact</Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="py-20 bg-gradient-to-b from-primary-light via-primary-light/50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-dark mb-4">Questions Fréquentes</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Trouvez rapidement des réponses à vos questions sur DoctAgri
          </p>
        </div>
      </section>

      {/* ── FAQ Content ── */}
      <section className="py-12 bg-primary-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          {categories.map((category, ci) => (
            <div key={ci} className="mb-12">
              {/* En-tête de catégorie */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                  <i className="ri-question-mark text-2xl text-white"></i>
                </div>
                <h2 className="text-3xl font-bold text-primary-dark">{category.title}</h2>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {category.items.map((item, ii) => (
                  <div key={ii} className="faq-item bg-white rounded-xl shadow-md overflow-hidden">
                    <button className="faq-toggle-btn w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition">
                      <span className="font-semibold text-primary-dark">{item.q}</span>
                      <i className="ri-arrow-down-s-line text-primary-light text-xl transition-transform"></i>
                    </button>
                    <div className="faq-answer hidden px-6 pb-4 text-gray-700">
                      {item.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="py-20 bg-gradient-to-br from-primary-light/30 via-primary-light/20 to-primary-light/10 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-light">
              <i className="ri-customer-service-2-line text-3xl text-primary-light"></i>
            </div>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
            <p className="text-gray-700 mb-6 text-sm">
              Notre équipe est là pour vous aider. Contactez-nous et nous vous répondrons dans les plus brefs délais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-light text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition flex items-center justify-center gap-2"
              >
                <i className="ri-mail-line text-xl"></i>
                Nous contacter
              </Link>
              <a
                href="tel:+22891774563"
                className="bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2"
              >
                <i className="ri-phone-line text-xl"></i>
                +228 91 77 45 63
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ressources Utiles ── */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-12 text-center">Ressources Utiles</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { href: '/download', icon: 'ri-download-line', title: "Télécharger l'App", desc: 'Installez DoctAgri sur votre smartphone' },
              { href: '/features', icon: 'ri-apps-2-line', title: 'Fonctionnalités', desc: 'Découvrez tout ce que DoctAgri peut faire' },
              { href: '/about', icon: 'ri-information-line', title: 'À Propos', desc: 'En savoir plus sur notre mission' },
            ].map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className="bg-primary-light/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary-light/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${card.icon} text-3xl text-primary-light`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{card.title}</h3>
                <p className="text-gray-600 text-center text-sm">{card.desc}</p>
              </Link>
            ))}
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