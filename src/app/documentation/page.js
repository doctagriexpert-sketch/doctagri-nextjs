'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Documentation() {
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

  const sections = [
    {
      id: 'introduction',
      icon: 'ri-book-open-line',
      title: '1. Introduction',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>DoctAgri</strong> est une application mobile de diagnostic des maladies des plantes par intelligence artificielle, conçue pour les agriculteurs togolais. Elle fonctionne{' '}
            <strong>entièrement hors ligne</strong> après installation et propose des conseils en{' '}
            <strong>français</strong>, en <strong>éwé</strong> et en <strong>kabye</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cette documentation décrit l'installation, la prise en main et les bonnes pratiques pour obtenir des diagnostics fiables et appliquer les traitements recommandés.
          </p>
        </>
      ),
    },
    {
      id: 'installation',
      icon: 'ri-download-cloud-line',
      title: '2. Installation',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            DoctAgri est disponible sur <strong>Google Play Store</strong> et en téléchargement direct (APK) pour les appareils Android 8.0 et supérieur.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Espace requis : environ 150 Mo (application + modèles IA).</li>
            <li>RAM recommandée : 2 Go minimum, 3 Go pour un confort optimal.</li>
            <li>Une connexion internet est nécessaire uniquement pour le téléchargement initial.</li>
          </ul>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 text-primary-light font-semibold hover:text-primary-600"
          >
            Voir le guide d'installation détaillé
            <i className="ri-arrow-right-line"></i>
          </Link>
        </>
      ),
    },
    {
      id: 'premier-usage',
      icon: 'ri-smartphone-line',
      title: '3. Premier usage',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Au premier lancement, vous pouvez choisir la langue de l'interface et la langue des conseils audio. Les diagnostics sont enregistrés dans l'historique de l'application pour un suivi de vos cultures.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Aucun compte utilisateur n'est requis : l'application est utilisable immédiatement après l'installation.
          </p>
        </>
      ),
    },
    {
      id: 'diagnostic',
      icon: 'ri-camera-line',
      title: '4. Réaliser un diagnostic',
      content: (
        <>
          <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-4">
            <li><strong>Sélectionnez la culture</strong> concernée (tomate, maïs, piment, manioc).</li>
            <li><strong>Photographiez</strong> la partie malade de la plante (feuille, tige, fruit) en veillant à un bon éclairage et à une mise au point nette.</li>
            <li>L'application analyse l'image localement et affiche le <strong>résultat du diagnostic</strong> en quelques secondes.</li>
            <li>Consultez les <strong>recommandations de traitement</strong> (biologiques et/ou chimiques) et, si besoin, écoutez les conseils audio.</li>
          </ol>
          <div className="bg-primary-50 border border-primary-100 rounded-xl p-4">
            <p className="text-primary-dark text-sm font-medium flex items-start gap-2">
              <i className="ri-lightbulb-line text-primary-light flex-shrink-0 mt-0.5"></i>
              Pour de meilleurs résultats : prenez la photo en plein jour, cadrez uniquement la zone symptomatique et évitez les ombres portées.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'cultures',
      icon: 'ri-plant-line',
      title: '5. Cultures supportées',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les cultures actuellement prises en charge sont :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Tomate</li>
            <li>Maïs</li>
            <li>Piment</li>
            <li>Manioc</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            D'autres cultures peuvent être ajoutées lors des mises à jour. Les mises à jour sont optionnelles et peuvent être téléchargées via Wi-Fi.
          </p>
        </>
      ),
    },
    {
      id: 'conseils-audio',
      icon: 'ri-volume-up-line',
      title: '6. Conseils audio (éwé, kabye, français)',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Après chaque diagnostic, un bouton permet d'écouter les conseils et recommandations dans la langue choisie (français, éwé ou kabye). Cette fonctionnalité est particulièrement utile pour les utilisateurs peu ou pas alphabétisés.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vous pouvez modifier la langue des conseils audio dans les paramètres de l'application à tout moment.
          </p>
        </>
      ),
    },
    {
      id: 'hors-ligne',
      icon: 'ri-wifi-off-line',
      title: '7. Utilisation hors ligne',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            DoctAgri ne nécessite <strong>aucune connexion internet</strong> pour réaliser les diagnostics. Les modèles d'intelligence artificielle sont embarqués dans l'application. Seuls le téléchargement initial et les mises à jour optionnelles requièrent une connexion.
          </p>
          <p className="text-gray-700 leading-relaxed">
            L'utilisation hors ligne permet un usage en zone rurale sans couverture réseau et sans coût de données.
          </p>
        </>
      ),
    },
    {
      id: 'support',
      icon: 'ri-customer-service-2-line',
      title: '8. Support',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour toute question technique, signalement de bug ou suggestion d'amélioration, vous pouvez nous contacter via la page Contact ou par email à{' '}
            <a href="mailto:doctagri.expert@gmail.com" className="text-primary-light font-semibold hover:underline">
              doctagri.expert@gmail.com
            </a>.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary-light text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition"
          >
            <i className="ri-mail-line"></i>
            Nous contacter
          </Link>
        </>
      ),
    },
  ]

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
            <i className="ri-menu-line text-2xl"></i>
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

      {/* ── Hero ── */}
      <section className="py-16 bg-gradient-to-b from-primary-light/20 to-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Documentation</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Guide d'utilisation de l'application DoctAgri : prise en main, diagnostic des maladies et bonnes pratiques.
          </p>
        </div>
      </section>

      {/* ── Contenu principal ── */}
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Sommaire */}
          <nav className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-12">
            <h2 className="text-lg font-bold text-primary-dark mb-4">Sommaire</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                { href: '#introduction', label: '1. Introduction' },
                { href: '#installation', label: '2. Installation' },
                { href: '#premier-usage', label: '3. Premier usage' },
                { href: '#diagnostic', label: '4. Réaliser un diagnostic' },
                { href: '#cultures', label: '5. Cultures supportées' },
                { href: '#conseils-audio', label: '6. Conseils audio (éwé, kabye, français)' },
                { href: '#hors-ligne', label: '7. Utilisation hors ligne' },
                { href: '#support', label: '8. Support' },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="text-primary-light hover:text-primary-600 font-medium">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
              >
                <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center gap-2">
                  <i className={`${section.icon} text-primary-light`}></i>
                  {section.title}
                </h2>
                {section.content}
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-primary-dark text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">© 2026 DoctAgri. Tous droits réservés.</p>
            <Link href="/" className="text-primary-light hover:text-white text-sm font-medium">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
