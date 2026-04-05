'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Privacy() {
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
      title: '1. Responsable du traitement',
      content: (
        <p className="text-gray-700 leading-relaxed">
          Le responsable du traitement des données personnelles est <strong>DoctAgri</strong>. Pour toute question relative à la présente politique ou à l'exercice de vos droits, vous pouvez nous contacter à l'adresse{' '}
          <a href="mailto:doctagri.expert@gmail.com" className="text-primary-light font-semibold hover:underline">
            doctagri.expert@gmail.com
          </a>{' '}
          ou via la page{' '}
          <Link href="/contact" className="text-primary-light font-semibold hover:underline">
            Contact
          </Link>{' '}
          du site.
        </p>
      ),
    },
    {
      title: '2. Données collectées',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-3">
            Nous sommes susceptibles de collecter les données suivantes, dans le strict cadre des finalités indiquées ci-dessous :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
            <li><strong>Données d'identification et de contact</strong> : nom, adresse électronique, numéro de téléphone (lorsque vous nous contactez ou vous inscrivez à notre newsletter).</li>
            <li><strong>Données relatives à l'utilisation du site</strong> : pages consultées, date et heure d'accès (données techniques ou de connexion, le cas échéant).</li>
            <li><strong>Contenu des échanges</strong> : messages que vous nous adressez via le formulaire de contact ou par courrier électronique.</li>
            <li><strong>Témoignages</strong> : si vous nous transmettez volontairement un témoignage (texte, photo), avec votre accord explicite pour publication.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-sm">
            L'application mobile DoctAgri peut fonctionner sans collecter de données personnelles identifiantes sur votre appareil ; les diagnostics sont traités localement.
          </p>
        </>
      ),
    },
    {
      title: '3. Finalités et base légale',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-3">
            Les données sont traitées pour les finalités suivantes, sur les bases légales indiquées :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Réponse à vos demandes (contact, support)</strong> : exécution de mesures précontractuelles / intérêt légitime.</li>
            <li><strong>Envoi de la newsletter</strong> : consentement.</li>
            <li><strong>Amélioration de nos services et du site</strong> : intérêt légitime (données agrégées ou anonymisées lorsque c'est possible).</li>
            <li><strong>Publication de témoignages</strong> : consentement explicite préalable.</li>
          </ul>
        </>
      ),
    },
    {
      title: '4. Destinataires et transferts',
      content: (
        <p className="text-gray-700 leading-relaxed">
          Les données sont destinées aux services internes de DoctAgri habilités à traiter vos demandes. Elles peuvent être communiquées à des prestataires techniques (hébergement du site, envoi d'e-mails) dans le cadre strict de la fourniture du service, et dans le respect de la réglementation en vigueur. Nous ne vendons pas vos données. Aucun transfert hors Union européenne n'est effectué sans garanties appropriées (clauses types, décision d'adéquation, etc.) si la situation devait se présenter.
        </p>
      ),
    },
    {
      title: '5. Durée de conservation',
      content: (
        <p className="text-gray-700 leading-relaxed">
          Les données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées : demandes de contact et support (durée adaptée au suivi du dossier, puis archivage ou suppression), newsletter (jusqu'à désinscription), témoignages (durée de publication convenue avec vous). Au-delà, les données sont supprimées ou anonymisées, sauf obligation légale de conservation.
        </p>
      ),
    },
    {
      title: '6. Vos droits',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-3">
            Conformément au Règlement général sur la protection des données (RGPD) et aux lois applicables, vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
            <li><strong>Droit d'accès</strong> : obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie.</li>
            <li><strong>Droit de rectification</strong> : faire corriger des données inexactes ou incomplètes.</li>
            <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données dans les cas prévus par la loi.</li>
            <li><strong>Droit à la limitation du traitement</strong> : demander la limitation du traitement dans certaines conditions.</li>
            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré et couramment utilisé.</li>
            <li><strong>Droit d'opposition</strong> : vous opposer au traitement pour des motifs légitimes.</li>
            <li><strong>Droit de retirer votre consentement</strong> : lorsque le traitement est fondé sur le consentement.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Pour exercer ces droits, contactez-nous à{' '}
            <a href="mailto:doctagri.expert@gmail.com" className="text-primary-light font-semibold hover:underline">
              doctagri.expert@gmail.com
            </a>. Vous avez également le droit d'introduire une réclamation auprès de l'autorité de contrôle compétente (CNIL pour la France, ou autorité équivalente selon votre pays de résidence).
          </p>
        </>
      ),
    },
    {
      title: '7. Cookies et traceurs',
      content: (
        <p className="text-gray-700 leading-relaxed">
          Le site peut utiliser des cookies ou traceurs strictement nécessaires au fonctionnement du site (par exemple mémorisation de préférences). Nous ne mettons en œuvre, sans votre consentement, que les cookies essentiels. Tout autre cookie (analytics, etc.) ferait l'objet d'une information claire et d'un consentement préalable conformément à la réglementation.
        </p>
      ),
    },
    {
      title: '8. Sécurité',
      content: (
        <p className="text-gray-700 leading-relaxed">
          Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre l'accès non autorisé, la perte, la destruction ou l'altération, dans le respect des usages et de la réglementation applicables.
        </p>
      ),
    },
    {
      title: '9. Modifications',
      content: (
        <p className="text-gray-700 leading-relaxed">
          Nous nous réservons le droit de modifier la présente politique de confidentialité. Toute modification substantielle sera portée à votre connaissance par une mise à jour de la date en tête de document et, le cas échéant, par un message sur le site ou par tout autre moyen approprié. Nous vous invitons à la consulter régulièrement.
        </p>
      ),
    },
    {
      title: '10. Contact',
      content: (
        <p className="text-gray-700 leading-relaxed">
          Pour toute question relative à la protection de vos données personnelles :{' '}
          <a href="mailto:doctagri.expert@gmail.com" className="text-primary-light font-semibold hover:underline">
            doctagri.expert@gmail.com
          </a>. Vous pouvez également utiliser notre{' '}
          <Link href="/contact" className="text-primary-light font-semibold hover:underline">
            formulaire de contact
          </Link>.
        </p>
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

      {/* ── Contenu principal ── */}
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
              Politique de confidentialité
            </h1>
            <p className="text-gray-500 text-sm">Dernière mise à jour : mars 2026</p>
          </header>

          {/* Sections */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 space-y-10">
            {sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl font-bold text-primary-dark mb-3">{section.title}</h2>
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
