'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    // ── Mobile menu ──────────────────────────────────────────────
    const mobileMenuBtn = document.getElementById('mobile-menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden')
      })
    }

    // ── Rotation images cultivateurs ─────────────────────────────
    const missionFarmerImage = document.getElementById('mission-farmer-image')
    const farmerImages = [
      '/assets/cul1.jpg', '/assets/cul2.jpg', '/assets/cul3.jpg',
      '/assets/cul4.jpg', '/assets/cul5.jpg', '/assets/cul6.jpg',
      '/assets/cul7.jpg', '/assets/cul8.jpg', '/assets/cul9.jpg',
    ]
    let currentImageIndex = 0
    let imageRotationInterval

    if (missionFarmerImage) {
      function changeFarmerImage() {
        let newIndex
        do {
          newIndex = Math.floor(Math.random() * farmerImages.length)
        } while (newIndex === currentImageIndex && farmerImages.length > 1)
        currentImageIndex = newIndex
        missionFarmerImage.src = farmerImages[currentImageIndex]
      }

      missionFarmerImage.onerror = function () {
        currentImageIndex = (currentImageIndex + 1) % farmerImages.length
        this.src = farmerImages[currentImageIndex]
      }

      currentImageIndex = Math.floor(Math.random() * farmerImages.length)
      missionFarmerImage.src = farmerImages[currentImageIndex]
      imageRotationInterval = setInterval(changeFarmerImage, 5000)

      window.addEventListener('beforeunload', () => {
        if (imageRotationInterval) clearInterval(imageRotationInterval)
      })
    }

    // ── Animation smartphone ─────────────────────────────────────
    const smartphoneMockup = document.getElementById('smartphone-mockup')
    const appContent = document.getElementById('app-content')
    const screens = ['screen-1', 'screen-2', 'screen-3']
    let currentScreenIndex = 0

    if (smartphoneMockup && appContent) {
      screens.forEach((screenId) => {
        const screen = document.getElementById(screenId)
        if (screen) screen.style.transition = 'all 0.3s ease-in-out'
      })

      function changeScreen() {
        const currentScreen = document.getElementById(screens[currentScreenIndex])
        if (currentScreen) {
          currentScreen.style.opacity = '0'
          currentScreen.style.transform = 'translateX(-20px)'
          setTimeout(() => currentScreen.classList.add('hidden'), 300)
        }
        currentScreenIndex = (currentScreenIndex + 1) % screens.length
        setTimeout(() => {
          const nextScreen = document.getElementById(screens[currentScreenIndex])
          if (nextScreen) {
            nextScreen.classList.remove('hidden')
            nextScreen.style.opacity = '0'
            nextScreen.style.transform = 'translateX(20px)'
            setTimeout(() => {
              nextScreen.style.transition = 'all 0.3s ease-in-out'
              nextScreen.style.opacity = '1'
              nextScreen.style.transform = 'translateX(0)'
            }, 50)
          }
        }, 300)
      }

      setInterval(changeScreen, 4000)

      setInterval(() => {
        smartphoneMockup.style.transform = 'scale(1.02)'
        smartphoneMockup.style.transition = 'transform 0.3s ease'
        setTimeout(() => { smartphoneMockup.style.transform = 'scale(1)' }, 300)
      }, 5000)
    }

    // ── Image smartphone Innovation ──────────────────────────────
    const innovationSmartphoneImage = document.getElementById('innovation-smartphone-image')
    if (innovationSmartphoneImage) {
      innovationSmartphoneImage.onerror = function () {
        this.src = 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=400&q=80'
      }
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
            <Link href="/about" className="text-primary-light font-medium">À propos</Link>
            <Link href="/features" className="text-gray-700 hover:text-primary-light font-medium">Fonctionnalités</Link>
            <Link href="/download" className="text-gray-700 hover:text-primary-light font-medium">Télécharger</Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary-light font-medium">FAQ</Link>
            <button id="translate-btn" className="text-gray-700 hover:text-primary-light font-medium flex items-center gap-2">
              <i className="ri-global-line"></i> EN
            </button>
            <Link href="/contact" className="bg-primary-light text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition">Contact</Link>
          </div>
          <button className="md:hidden text-gray-700" id="mobile-menu-btn">
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="hidden md:hidden bg-white border-t" id="mobile-menu">
          <div className="container mx-auto px-4 py-2 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-primary-light font-medium">Accueil</Link>
            <Link href="/about" className="block text-primary-light font-medium">À propos</Link>
            <Link href="/features" className="block text-gray-700 hover:text-primary-light font-medium">Fonctionnalités</Link>
            <Link href="/download" className="block text-gray-700 hover:text-primary-light font-medium">Télécharger</Link>
            <Link href="/faq" className="block text-gray-700 hover:text-primary-light font-medium">FAQ</Link>
            <button id="translate-btn-mobile" className="block text-gray-700 hover:text-primary-light font-medium flex items-center gap-2">
              <i className="ri-global-line"></i> EN
            </button>
            <Link href="/contact" className="block bg-primary-light text-white px-4 py-2 rounded-lg text-center">Contact</Link>
          </div>
        </div>
      </nav>
      <div id="google_translate_element" style={{ position: 'absolute', top: 0, left: 0, opacity: 0, pointerEvents: 'none' }}></div>

      {/* ── Hero ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-light/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-primary-dark font-serif">À propos de </span>
            <span className="text-primary-light font-sans">DoctAgri</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Une innovation technologique au service des agriculteurs togolais pour un avenir agricole<br />durable et prospère
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-light/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-primary-100/50 shadow-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">Notre Mission</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong className="text-primary-dark">DoctAgri</strong> a pour mission de{' '}
                <strong className="text-primary-dark">démocratiser l'accès aux diagnostics agricoles</strong>{' '}
                en offrant une solution technologique accessible, même sans connexion internet, aux agriculteurs togolais.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Nous croyons que chaque agriculteur, quelle que soit sa localisation ou son niveau d'alphabétisation, mérite d'avoir accès à des{' '}
                <strong className="text-primary-dark">conseils agricoles de qualité</strong>{' '}
                pour protéger ses cultures et améliorer ses rendements.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Notre application fonctionne entièrement <strong className="text-primary-dark">hors ligne</strong>, utilise l'
                <strong className="text-primary-dark">intelligence artificielle embarquée</strong> et propose des conseils audio en{' '}
                <strong className="text-primary-dark">français, kabye et en éwé</strong>.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white/60 backdrop-blur-md p-4 rounded-3xl border border-primary-100/30 shadow-2xl">
                <img
                  src="/assets/cul1.jpg"
                  alt="Agriculteur utilisant DoctAgri"
                  className="w-full rounded-2xl shadow-xl object-cover"
                  id="mission-farmer-image"
                  style={{ height: '400px', width: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contexte Agricole ── */}
      <section className="py-20 bg-gradient-to-br from-green-50/30 via-beige-light/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Le Contexte Agricole au Togo</h2>
            <p className="text-xl text-gray-700">Comprendre les défis pour mieux y répondre</p>
          </div>

          {/* Cartes statistiques */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { bg: 'bg-green-100', border: 'border-green-300', icon: 'ri-time-line', color: 'text-green-600', stat: '40% du PIB', desc: "L'agriculture représente environ 40% du PIB togolais et occupe plus de 60% de la population active" },
              { bg: 'bg-red-100', border: 'border-red-300', icon: 'ri-error-warning-line', color: 'text-red-600', stat: '40-80% de pertes', desc: "Les maladies des plantes entraînent des pertes agricoles entre 40% et 80% selon les cultures" },
              { bg: 'bg-orange-100', border: 'border-orange-300', icon: 'ri-book-open-line', color: 'text-orange-600', stat: '70% analphabètes', desc: "Plus de 70% des agriculteurs en milieu rural sont analphabètes ou semi-alphabètes" },
            ].map((card, i) => (
              <div key={i} className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center border border-gray-100">
                <div className={`w-16 h-16 ${card.bg} rounded-xl flex items-center justify-center mx-auto mb-4 border-2 ${card.border}`}>
                  <i className={`${card.icon} text-3xl ${card.color}`}></i>
                </div>
                <h3 className="text-3xl font-bold text-primary-dark mb-3">{card.stat}</h3>
                <p className="text-gray-700 text-base">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Défis Majeurs */}
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-8 text-center">Les Défis Majeurs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Accès limité aux diagnostics', desc: "Peu d'agriculteurs ont accès à des diagnostics rapides et fiables pour leurs cultures" },
                { title: 'Utilisation inadaptée des intrants', desc: 'Surconsommation ou sous-utilisation de pesticides et engrais sans diagnostic précis' },
                { title: 'Absence de connexion internet', desc: 'Les zones rurales et périurbaines manquent de connexion internet stable' },
                { title: 'Barrière linguistique', desc: 'Les conseils agricoles sont rarement disponibles en langues locales' },
              ].map((defi, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="ri-close-circle-fill text-2xl text-red-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-dark mb-2">{defi.title}</h3>
                    <p className="text-gray-700">{defi.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Innovation ── */}
      <section className="py-20 bg-beige-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Smartphone mockup */}
            <div className="relative flex items-center justify-center">
              <div className="relative" style={{ maxWidth: '280px' }}>
                <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl" id="smartphone-mockup" style={{ width: '280px', height: '560px' }}>
                  <div className="bg-white rounded-[2.5rem] overflow-hidden h-full flex flex-col">
                    <div className="bg-primary-light px-3 py-2">
                      <div className="flex items-center justify-between text-white text-xs mb-1 px-1">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <i className="ri-signal-wifi-line text-xs"></i>
                          <i className="ri-battery-line text-xs"></i>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <i className="ri-arrow-left-s-line text-white text-lg"></i>
                        <span className="text-white font-bold text-sm">Plants</span>
                        <i className="ri-search-line text-white text-lg"></i>
                      </div>
                    </div>

                    <div className="flex-1 bg-gray-50 overflow-hidden relative" id="app-content">
                      {/* Écran 1 */}
                      <div className="absolute inset-0 overflow-y-auto app-screen" id="screen-1">
                        <div className="p-3 space-y-2">
                          <div className="bg-white p-2.5 rounded-lg border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                  <i className="ri-plant-line text-primary-light text-lg"></i>
                                </div>
                                <div>
                                  <p className="font-semibold text-gray-900 text-xs">Cell Falie</p>
                                  <p className="text-xs text-gray-500">The Flowers</p>
                                </div>
                              </div>
                              <i className="ri-heart-line text-gray-300 text-sm"></i>
                            </div>
                          </div>
                          <div className="bg-primary-light p-2.5 rounded-lg shadow-md">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                  <i className="ri-plant-fill text-white text-lg"></i>
                                </div>
                                <div>
                                  <p className="font-bold text-white text-xs">Plant Catiop</p>
                                  <p className="text-xs text-white/90">Fleur d'Anthurium</p>
                                </div>
                              </div>
                              <i className="ri-heart-fill text-white text-sm"></i>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white mx-3 mb-3 rounded-xl p-4 shadow-md">
                          <div className="relative" style={{ height: '220px' }}>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                              <div className="w-20 h-16 bg-gradient-to-b from-amber-700 to-amber-900 rounded-b-2xl shadow-lg"></div>
                            </div>
                            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                              <div className="w-28 h-28 bg-gradient-to-br from-green-600 to-green-800 rounded-full shadow-lg"></div>
                              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-full absolute -top-1 -left-6 shadow-md"></div>
                              <div className="w-22 h-22 bg-gradient-to-br from-green-700 to-green-900 rounded-full absolute -top-2 right-2 shadow-md"></div>
                            </div>
                            <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg">
                                <div className="w-10 h-10 bg-red-400 rounded-full"></div>
                                <div className="absolute w-1 h-6 bg-yellow-400 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 space-y-1.5">
                            <div className="flex items-center gap-2">
                              <i className="ri-information-line text-primary-light text-xs"></i>
                              <p className="text-xs text-gray-700"><span className="font-semibold">Anthurium</span> - Plante d'intérieur</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="ri-drop-line text-blue-500 text-xs"></i>
                              <p className="text-xs text-gray-600">Arrosage: 2-3 fois/semaine</p>
                            </div>
                          </div>
                        </div>
                        <div className="px-3 pb-3">
                          <button className="w-full bg-primary-light text-white py-2.5 rounded-lg font-semibold text-xs shadow-lg flex items-center justify-center gap-2">
                            <i className="ri-camera-line"></i>
                            <span>Diagnostiquer une maladie</span>
                          </button>
                        </div>
                      </div>

                      {/* Écran 2 */}
                      <div className="absolute inset-0 overflow-y-auto app-screen hidden" id="screen-2">
                        <div className="p-4 text-center">
                          <div className="mb-4"><i className="ri-camera-line text-6xl text-primary-light"></i></div>
                          <h3 className="font-bold text-gray-900 text-sm mb-2">Prenez une photo</h3>
                          <p className="text-xs text-gray-600 mb-6">Photographiez la feuille ou la partie malade de votre plante</p>
                          <div className="bg-gray-200 rounded-xl mx-3 mb-4" style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center">
                                <i className="ri-leaf-line text-4xl text-primary-light"></i>
                              </div>
                            </div>
                            <div className="absolute inset-4 border-2 border-dashed border-primary-light rounded-lg"></div>
                          </div>
                          <div className="flex justify-center gap-4 px-3">
                            <button className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center shadow-lg">
                              <i className="ri-camera-fill text-white text-2xl"></i>
                            </button>
                          </div>
                          <div className="mt-4 px-3">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                              <div className="flex items-start gap-2">
                                <i className="ri-lightbulb-line text-blue-600 text-sm mt-0.5"></i>
                                <p className="text-xs text-blue-800">Astuce: Assurez-vous que la feuille soit bien éclairée et nette</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Écran 3 */}
                      <div className="absolute inset-0 overflow-y-auto app-screen hidden" id="screen-3">
                        <div className="p-4">
                          <div className="text-center mb-4">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                              <i className="ri-checkbox-circle-fill text-4xl text-primary-light"></i>
                            </div>
                            <h3 className="font-bold text-gray-900 text-sm mb-1">Analyse terminée</h3>
                            <p className="text-xs text-gray-600">Résultats du diagnostic</p>
                          </div>
                          <div className="bg-gray-100 rounded-xl mx-3 mb-4" style={{ height: '150px', position: 'relative', overflow: 'hidden' }}>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-24 h-24 bg-green-200 rounded-lg flex items-center justify-center">
                                <i className="ri-leaf-line text-3xl text-primary-light"></i>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2 px-3 mb-4">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                              <div className="flex items-start gap-2">
                                <i className="ri-alert-line text-red-600 text-sm mt-0.5"></i>
                                <div className="flex-1">
                                  <p className="font-semibold text-red-900 text-xs mb-1">Maladie détectée</p>
                                  <p className="text-xs text-red-700">Rouille des feuilles (85% de confiance)</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                              <div className="flex items-start gap-2">
                                <i className="ri-alert-line text-yellow-600 text-sm mt-0.5"></i>
                                <div className="flex-1">
                                  <p className="font-semibold text-yellow-900 text-xs mb-1">Symptômes</p>
                                  <p className="text-xs text-yellow-700">Taches brunes, feuilles jaunissantes</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="px-3 mb-4">
                            <h4 className="font-bold text-gray-900 text-xs mb-2">Recommandations</h4>
                            <div className="space-y-2">
                              {[
                                { icon: 'ri-plant-line', title: 'Traitement bio', desc: 'Pulvériser avec du bicarbonate de soude' },
                                { icon: 'ri-flask-line', title: 'Traitement chimique', desc: 'Fongicide à base de cuivre' },
                              ].map((rec, i) => (
                                <div key={i} className="bg-white border border-gray-200 rounded-lg p-2.5">
                                  <div className="flex items-start gap-2">
                                    <i className={`${rec.icon} text-primary-light text-sm mt-0.5`}></i>
                                    <div className="flex-1">
                                      <p className="font-semibold text-gray-900 text-xs">{rec.title}</p>
                                      <p className="text-xs text-gray-600">{rec.desc}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="px-3 pb-3">
                            <button className="w-full bg-primary-light text-white py-2.5 rounded-lg font-semibold text-xs shadow-lg flex items-center justify-center gap-2">
                              <i className="ri-volume-up-line"></i>
                              <span>Écouter les conseils (Éwé)</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=400&q=80"
                  alt="Smartphone DoctAgri"
                  className="hidden w-full h-auto rounded-3xl shadow-2xl object-contain"
                  id="innovation-smartphone-image"
                  style={{ maxWidth: '280px' }}
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">Notre Innovation</h2>
              <p className="text-lg text-gray-700 mb-6">
                DoctAgri repose sur une <strong className="text-primary-dark">intelligence artificielle embarquée</strong> (TensorFlow Lite) qui fonctionne directement sur le smartphone, sans nécessiter de connexion internet.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'ri-camera-line', title: 'Diagnostic par photo', desc: "Prenez simplement une photo de votre plante malade pour obtenir un diagnostic instantané" },
                  { icon: 'ri-brain-line', title: 'IA embarquée', desc: "L'intelligence artificielle fonctionne directement sur votre téléphone, même sans internet" },
                  { icon: 'ri-volume-up-line', title: 'Conseils audio multilingues', desc: "Recevez des conseils personnalisés en audio, en français et en éwé" },
                  { icon: 'ri-leaf-line', title: 'Traitements adaptés', desc: "Recommandations bio et chimiques adaptées à chaque pathologie détectée" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center border-2 border-green-300">
                      <i className={`${item.icon} text-2xl text-primary-light`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Notre Impact Social et Environnemental</h2>
            <p className="text-xl text-white/90">DoctAgri contribue à un développement agricole durable et inclusif</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'ri-leaf-line', title: 'Impact Environnemental',
                items: [
                  "Réduction de 20-30% de l'utilisation des pesticides et engrais grâce à des diagnostics précis",
                  "Diminution de la pollution des sols et des eaux",
                  "Préservation de la biodiversité agricole",
                  "Fonctionnement hors ligne sans consommation énergétique cloud",
                ],
              },
              {
                icon: 'ri-group-line', title: 'Impact Social',
                items: [
                  "Objectif de 50% de bénéficiaires femmes parmi les 1000 producteurs pilotes",
                  "Renforcement de l'autonomie décisionnelle des agriculteurs",
                  "Réduction des coûts de production et augmentation des revenus",
                  "Inclusion numérique et empowerment féminin",
                ],
              },
            ].map((card, i) => (
              <div key={i} className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                    <i className={`${card.icon} text-3xl text-primary-light`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                </div>
                <ul className="space-y-4">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-primary-light text-xl mt-0.5 flex-shrink-0"></i>
                      <p className="text-white/90">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partenaires ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Nos Partenaires</h2>
            <p className="text-xl text-gray-700">DoctAgri collabore avec des acteurs clés du secteur agricole togolais</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Ministère de l'Agriculture", desc: 'Soutien institutionnel et validation des recommandations agricoles' },
              { title: 'Coopératives Agricoles', desc: 'Déploiement terrain et formation des agriculteurs' },
              { title: 'Institutions de Recherche', desc: "Validation scientifique et amélioration continue de l'IA" },
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100">
                <div className="w-24 h-24 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img src="/assets/cooperative agricoles.jpg" alt={p.title} className="w-full h-full object-cover rounded-xl" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">{p.title}</h3>
                <p className="text-gray-700">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-b from-primary-light via-primary-light/90 to-primary-dark relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Rejoignez la Révolution Agricole</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Téléchargez DoctAgri et bénéficiez d'un diagnostic agricole intelligent, accessible à tous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/download" className="bg-white text-primary-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2 shadow-lg border-2 border-gray-900">
              <i className="ri-download-line text-xl"></i>
              Télécharger l'application
            </Link>
            <Link href="/contact" className="bg-primary-light text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-500 transition flex items-center justify-center gap-2 shadow-lg border-2 border-white">
              <i className="ri-mail-line text-xl"></i>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-primary-dark text-white py-16 relative overflow-hidden mt-0">
        <div className="absolute inset-0 flex items-center justify-center text-white/5 font-black pointer-events-none select-none"
          style={{ fontSize: '12rem', letterSpacing: '0.5rem' }}>
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
                <input type="email" placeholder="Votre email" className="flex-1 px-2 py-2 bg-transparent text-white placeholder-white/60 border-b border-white/30 focus:border-white focus:outline-none" />
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
                  <a href="https://facebook.com/DoctAgri" className="text-white hover:text-primary-light transition" target="_blank" rel="noopener"><i className="ri-facebook-fill text-xl"></i></a>
                  <a href="https://twitter.com/DoctAgri" className="text-white hover:text-primary-light transition" target="_blank" rel="noopener"><i className="ri-twitter-x-fill text-xl"></i></a>
                  <a href="https://linkedin.com/company/DoctAgri" className="text-white hover:text-primary-light transition" target="_blank" rel="noopener"><i className="ri-linkedin-fill text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Floating Button ── */}
      <Link href="/contact" className="fixed bottom-6 right-6 bg-primary-light text-white px-4 py-3 rounded-lg shadow-lg hover:bg-primary-500 transition flex items-center gap-2 z-50">
        <i className="ri-customer-service-2-line text-xl"></i>
        <span className="font-medium">Talk with Us</span>
      </Link>
    </div>
  )
}