'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Features() {
  useEffect(() => {
    // ── Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'))
    }

    // ── Rotation images feuilles malades + recommandations
    const diagnosticLeafFeature = document.getElementById('diagnostic-leaf-feature')
    const diagnosticRecommendations = document.getElementById('diagnostic-recommendations')
    const maladeImages = ['/assets/malade1.jpg','/assets/malade2.jpg','/assets/malade3.jpg','/assets/malade4.jpg']
    const recommendationsList = [
      [{icon:'ri-alert-line',color:'text-red-500',text:'Mildiou détecté'},{icon:'ri-alert-line',color:'text-orange-500',text:'Carence en azote'},{icon:'ri-checkbox-circle-line',color:'text-green-500',text:'Analyse terminée'}],
      [{icon:'ri-alert-line',color:'text-red-500',text:'Rouille détectée'},{icon:'ri-alert-line',color:'text-yellow-500',text:"Manque d'eau"},{icon:'ri-checkbox-circle-line',color:'text-green-500',text:'Analyse terminée'}],
      [{icon:'ri-alert-line',color:'text-red-500',text:'Parasites détectés'},{icon:'ri-alert-line',color:'text-orange-500',text:'Carence en potassium'},{icon:'ri-checkbox-circle-line',color:'text-green-500',text:'Analyse terminée'}],
      [{icon:'ri-alert-line',color:'text-red-500',text:'Maladie fongique'},{icon:'ri-alert-line',color:'text-yellow-500',text:'Exposition excessive'},{icon:'ri-checkbox-circle-line',color:'text-green-500',text:'Analyse terminée'}],
    ]
    if (diagnosticLeafFeature) {
      let currentMaladeIndex = 0
      let showRecommendations = false
      function updateRecommendations() {
        if (!diagnosticRecommendations) return
        const recsHTML = recommendationsList[currentMaladeIndex].map(rec =>
          `<div class="flex items-center gap-2 text-xs text-gray-700"><i class="${rec.icon} ${rec.color}"></i><span>${rec.text}</span></div>`
        ).join('')
        diagnosticRecommendations.innerHTML = `<div class="text-xs font-bold text-primary-dark mb-2">Problèmes détectés :</div><div class="space-y-1.5">${recsHTML}</div>`
      }
      if (diagnosticRecommendations) diagnosticRecommendations.style.transition = 'all 0.3s ease-in-out'
      setInterval(() => {
        if (!diagnosticRecommendations) return
        showRecommendations = !showRecommendations
        diagnosticRecommendations.style.opacity = showRecommendations ? '1' : '0'
        diagnosticRecommendations.style.transform = showRecommendations ? 'translate(-50%,-50%) scale(1)' : 'translate(-50%,-50%) scale(0.95)'
      }, 2000)
      setInterval(() => {
        currentMaladeIndex = (currentMaladeIndex + 1) % maladeImages.length
        diagnosticLeafFeature.src = maladeImages[currentMaladeIndex]
        updateRecommendations()
      }, 4000)
      updateRecommendations()
    }

    // ── Gestion des onglets
    function showTab(tabName) {
      document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'))
      document.querySelectorAll('.feature-tab').forEach(t => {
        t.classList.remove('active','bg-primary-light','text-white')
        t.classList.add('bg-gray-200','text-gray-700')
      })
      document.getElementById('content-' + tabName)?.classList.remove('hidden')
      const activeTab = document.getElementById('tab-' + tabName)
      if (activeTab) {
        activeTab.classList.add('active','bg-primary-light','text-white')
        activeTab.classList.remove('bg-gray-200','text-gray-700')
      }
    }
    ;['diagnostic','offline','audio','traitements'].forEach(tab => {
      document.getElementById('tab-' + tab)?.addEventListener('click', () => showTab(tab))
    })
  }, [])

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/assets/doct.jpeg" alt="DoctAgri Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-primary-dark">DoctAgri</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-light font-medium">Accueil</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-light font-medium">À propos</Link>
            <Link href="/features" className="text-primary-light font-medium">Fonctionnalités</Link>
            <Link href="/download" className="text-gray-700 hover:text-primary-light font-medium">Télécharger</Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary-light font-medium">FAQ</Link>
            <button id="translate-btn" className="text-gray-700 hover:text-primary-light font-medium flex items-center gap-2"><i className="ri-global-line"></i> EN</button>
            <Link href="/contact" className="bg-primary-light text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition">Contact</Link>
          </div>
          <button className="md:hidden text-gray-700" id="mobile-menu-btn">
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
        <div className="hidden md:hidden bg-white border-t" id="mobile-menu">
          <div className="container mx-auto px-4 py-2 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-primary-light font-medium">Accueil</Link>
            <Link href="/about" className="block text-gray-700 hover:text-primary-light font-medium">À propos</Link>
            <Link href="/features" className="block text-primary-light font-medium">Fonctionnalités</Link>
            <Link href="/download" className="block text-gray-700 hover:text-primary-light font-medium">Télécharger</Link>
            <Link href="/faq" className="block text-gray-700 hover:text-primary-light font-medium">FAQ</Link>
            <button id="translate-btn-mobile" className="block text-gray-700 hover:text-primary-light font-medium flex items-center gap-2"><i className="ri-global-line"></i> EN</button>
            <Link href="/contact" className="block bg-primary-light text-white px-4 py-2 rounded-lg text-center">Contact</Link>
          </div>
        </div>
      </nav>
      <div id="google_translate_element" style={{position:'absolute',top:0,left:0,opacity:0,pointerEvents:'none'}}></div>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-light/20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Fonctionnalités</span> <span className="text-primary-light">Complètes</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez toutes les capacités de DoctAgri pour transformer votre pratique agricole
          </p>
        </div>
      </section>

      {/* Tabs navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <button id="tab-diagnostic" className="feature-tab active px-6 py-3 rounded-full bg-primary-light text-white font-semibold flex items-center gap-2 transition shadow-md">
              <i className="ri-camera-line"></i> Diagnostic IA
            </button>
            <button id="tab-offline" className="feature-tab px-6 py-3 rounded-full bg-gray-200 text-gray-700 font-semibold flex items-center gap-2 transition hover:bg-gray-300">
              <i className="ri-wifi-off-line"></i> Mode Hors Ligne
            </button>
            <button id="tab-audio" className="feature-tab px-6 py-3 rounded-full bg-gray-200 text-gray-700 font-semibold flex items-center gap-2 transition hover:bg-gray-300">
              <i className="ri-volume-up-line"></i> Audio Multilingue
            </button>
            <button id="tab-traitements" className="feature-tab px-6 py-3 rounded-full bg-gray-200 text-gray-700 font-semibold flex items-center gap-2 transition hover:bg-gray-300">
              <i className="ri-medicine-bottle-line"></i> Traitements
            </button>
          </div>
        </div>
      </section>

      {/* ── Tab: Diagnostic IA ── */}
      <div id="content-diagnostic" className="tab-content">
        <section className="py-20 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">Diagnostic par Intelligence Artificielle</h2>
                <p className="text-lg text-gray-700 mb-6">Notre technologie <strong className="text-primary-dark">d'IA embarquée</strong> analyse instantanément les photos de vos plantes et détecte les maladies, carences et parasites.</p>
                <div className="space-y-4">
                  {[
                    {icon:'ri-flashlight-fill', title:'Détection instantanée', desc:'Résultats en moins de 3 secondes après la prise de photo'},
                    {icon:'ri-search-line', title:'Haute précision', desc:'Taux de précision supérieur à 95% pour les cultures prioritaires (tomate, maïs, manioc)'},
                    {icon:'ri-search-eye-line', title:'Multi-pathologies', desc:'Détection des maladies, carences nutritionnelles et attaques de parasites'},
                    {icon:'ri-history-line', title:'Historique des diagnostics', desc:'Conservez et consultez l\'historique de tous vos diagnostics'},
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
              {/* Smartphone Diagnostic */}
              <div className="relative flex items-center justify-center">
                <div className="relative" style={{maxWidth:'280px'}}>
                  <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl" style={{width:'280px',height:'560px'}}>
                    <div className="bg-white rounded-[2.5rem] overflow-hidden h-full flex flex-col">
                      <div className="bg-black px-3 py-2 flex items-center justify-between">
                        <i className="ri-arrow-left-s-line text-white text-lg"></i>
                        <span className="text-white font-bold text-xs">Scan</span>
                        <i className="ri-cursor-fill text-primary-light text-lg"></i>
                      </div>
                      <div className="flex-1 bg-gray-100 relative overflow-hidden">
                        <img src="/assets/malade1.jpg" alt="Feuille malade analysée" className="w-full h-full object-cover" id="diagnostic-leaf-feature" style={{objectPosition:'center'}} />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200" id="diagnostic-recommendations">
                          <div className="text-xs font-bold text-primary-dark mb-2">Problèmes détectés :</div>
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2 text-xs text-gray-700"><i className="ri-alert-line text-red-500"></i><span>Mildiou détecté</span></div>
                            <div className="flex items-center gap-2 text-xs text-gray-700"><i className="ri-alert-line text-orange-500"></i><span>Carence en azote</span></div>
                            <div className="flex items-center gap-2 text-xs text-gray-700"><i className="ri-checkbox-circle-line text-green-500"></i><span>Analyse terminée</span></div>
                          </div>
                        </div>
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-light rounded-full animate-pulse"></div>
                          <span>Analyse en cours...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Tab: Hors Ligne ── */}
      <div id="content-offline" className="tab-content hidden">
        <section className="py-20 bg-beige-light border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Smartphone Offline */}
              <div className="relative order-2 md:order-1 flex items-center justify-center">
                <div className="relative" style={{maxWidth:'240px'}}>
                  <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl" style={{width:'240px',height:'480px'}}>
                    <div className="bg-white rounded-[2.5rem] overflow-hidden h-full flex flex-col">
                      <div className="bg-primary-dark px-3 py-2 flex items-center justify-between">
                        <i className="ri-arrow-left-s-line text-white text-lg"></i>
                        <span className="text-white font-bold text-xs">DoctAgri</span>
                        <i className="ri-wifi-off-line text-white text-lg"></i>
                      </div>
                      <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 mb-3 flex items-center gap-2">
                          <i className="ri-wifi-off-line text-yellow-600 text-sm"></i>
                          <span className="text-xs text-yellow-800 font-medium">Mode Hors Ligne Actif</span>
                        </div>
                        <div className="space-y-2 mb-4">
                          {[{icon:'ri-camera-line',label:'Diagnostic IA',sub:'Disponible hors ligne'},{icon:'ri-book-line',label:'Bibliothèque',sub:'Base locale chargée'},{icon:'ri-calendar-line',label:'Calendrier',sub:'Synchronisé'}].map((item,i)=>(
                            <div key={i} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                  <i className={`${item.icon} text-primary-light`}></i>
                                </div>
                                <div className="flex-1">
                                  <div className="text-xs font-semibold text-gray-900">{item.label}</div>
                                  <div className="text-xs text-gray-500">{item.sub}</div>
                                </div>
                                <i className="ri-checkbox-circle-fill text-green-500 text-sm"></i>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="bg-primary-light/10 rounded-lg p-3 border border-primary-light/20">
                          <div className="text-xs font-bold text-primary-dark mb-1">Base de données</div>
                          <div className="text-xs text-gray-700">2,547 maladies</div>
                          <div className="text-xs text-gray-700">1,203 traitements</div>
                          <div className="text-xs text-gray-500 mt-1">Tout disponible hors ligne</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">Fonctionnement 100% Hors Ligne</h2>
                <p className="text-lg text-gray-700 mb-6">DoctAgri a été conçu pour fonctionner <strong className="text-primary-dark">sans connexion internet</strong>, répondant aux réalités des zones rurales togolaises.</p>
                <div className="space-y-4">
                  {[
                    {icon:'ri-database-2-line',title:'Base de données embarquée',desc:"Toutes les connaissances agricoles sont stockées directement dans l'application"},
                    {icon:'ri-smartphone-line',title:'Compatible smartphones bas de gamme',desc:'Fonctionne sur des appareils Android à partir de 2 Go de RAM'},
                    {icon:'ri-battery-2-line',title:"Économie d'énergie",desc:'Optimisé pour minimiser la consommation de batterie'},
                    {icon:'ri-refresh-line',title:'Mises à jour optionnelles',desc:'Synchronisez les nouvelles données quand vous avez accès au Wi-Fi'},
                  ].map((item,i)=>(
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
      </div>

      {/* ── Tab: Audio Multilingue ── */}
      <div id="content-audio" className="tab-content hidden">
        <section className="py-20 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">Conseils Audio Multilingues</h2>
                <p className="text-lg text-gray-700 mb-6">Pour garantir l'accessibilité à tous, DoctAgri propose des <strong className="text-primary-dark">explications audio</strong> en français et en langues locales.</p>
                <div className="space-y-4">
                  {[
                    {icon:'ri-global-line',title:'Français, Kabye et Éwé',desc:"Conseils disponibles en français, Kabye et en éwé pour toucher le maximum d'agriculteurs"},
                    {icon:'ri-user-voice-line',title:'Voix naturelles',desc:'Enregistrements audio clairs et naturels pour une meilleure compréhension'},
                    {icon:'ri-book-open-line',title:'Accessible aux analphabètes',desc:'Plus besoin de savoir lire pour bénéficier de conseils agricoles de qualité'},
                    {icon:'ri-repeat-2-line',title:'Réécoute illimitée',desc:'Écoutez les conseils autant de fois que nécessaire'},
                  ].map((item,i)=>(
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
              {/* Smartphone Audio */}
              <div className="relative flex items-center justify-center">
                <div className="relative" style={{maxWidth:'240px'}}>
                  <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl" style={{width:'240px',height:'480px'}}>
                    <div className="bg-white rounded-[2.5rem] overflow-hidden h-full flex flex-col">
                      <div className="bg-primary-dark px-3 py-2 flex items-center justify-between">
                        <i className="ri-arrow-left-s-line text-white text-lg"></i>
                        <span className="text-white font-bold text-xs">Audio</span>
                        <i className="ri-volume-up-line text-white text-lg"></i>
                      </div>
                      <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
                        <div className="mb-4">
                          <div className="text-xs font-bold text-gray-900 mb-2">Choisir la langue</div>
                          <div className="space-y-2">
                            <div className="bg-primary-light text-white rounded-lg p-3 flex items-center justify-between">
                              <div className="flex items-center gap-2"><i className="ri-global-line text-sm"></i><span className="text-xs font-semibold">Français</span></div>
                              <i className="ri-checkbox-circle-fill text-white text-sm"></i>
                            </div>
                            {['Éwé','Kabye'].map(lang=>(
                              <div key={lang} className="bg-white border-2 border-gray-200 rounded-lg p-3 flex items-center gap-2">
                                <i className="ri-global-line text-primary-light text-sm"></i>
                                <span className="text-xs font-semibold text-gray-900">{lang}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-3">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-primary-light/20 rounded-lg flex items-center justify-center">
                              <i className="ri-headphone-line text-primary-light text-xl"></i>
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-bold text-gray-900">Traitement Mildiou</div>
                              <div className="text-xs text-gray-500">Conseil audio</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center gap-4 mb-2">
                            <button className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center"><i className="ri-skip-back-line text-white text-sm"></i></button>
                            <button className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center"><i className="ri-pause-line text-white text-base"></i></button>
                            <button className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center"><i className="ri-skip-forward-line text-white text-sm"></i></button>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                            <div className="bg-primary-light h-1.5 rounded-full" style={{width:'45%'}}></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500"><span>1:23</span><span>3:15</span></div>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-white rounded-lg p-2 flex items-center justify-between border border-gray-100">
                            <div className="flex items-center gap-2"><i className="ri-repeat-line text-primary-light text-sm"></i><span className="text-xs text-gray-700">Réécouter</span></div>
                            <i className="ri-checkbox-circle-fill text-primary-light text-sm"></i>
                          </div>
                          <div className="bg-white rounded-lg p-2 flex items-center gap-2 border border-gray-100">
                            <i className="ri-speed-line text-primary-light text-sm"></i>
                            <span className="text-xs text-gray-700">Vitesse: Normal</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Tab: Traitements ── */}
      <div id="content-traitements" className="tab-content hidden">
        <section className="py-20 bg-beige-light border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Smartphone Traitements */}
              <div className="relative order-2 md:order-1 flex items-center justify-center">
                <div className="relative" style={{maxWidth:'240px'}}>
                  <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl" style={{width:'240px',height:'480px'}}>
                    <div className="bg-white rounded-[2.5rem] overflow-hidden h-full flex flex-col">
                      <div className="bg-primary-dark px-3 py-2 flex items-center justify-between">
                        <i className="ri-arrow-left-s-line text-white text-lg"></i>
                        <span className="text-white font-bold text-xs">Traitements</span>
                        <i className="ri-medicine-bottle-line text-white text-lg"></i>
                      </div>
                      <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
                          <div className="flex items-center gap-2 mb-1">
                            <i className="ri-alert-line text-red-600 text-sm"></i>
                            <span className="text-xs font-bold text-red-800">Mildiou détecté</span>
                          </div>
                          <div className="text-xs text-red-700">Tomate - Urgence: Élevée</div>
                        </div>
                        <div className="mb-3">
                          <div className="text-xs font-bold text-gray-900 mb-2">Traitements recommandés</div>
                          <div className="bg-white rounded-lg p-3 shadow-sm border border-green-200 mb-2">
                            <div className="flex items-start gap-2 mb-2">
                              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i className="ri-leaf-line text-primary-light text-sm"></i>
                              </div>
                              <div className="flex-1">
                                <div className="text-xs font-bold text-gray-900">Biologique</div>
                                <div className="text-xs text-gray-600">Bouillie bordelaise</div>
                              </div>
                              <span className="text-xs bg-green-100 text-primary-dark px-2 py-0.5 rounded-full font-semibold">Priorité</span>
                            </div>
                            <div className="text-xs text-gray-700 pl-10">2g/L d'eau, 3 applications</div>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm border border-orange-200">
                            <div className="flex items-start gap-2 mb-2">
                              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i className="ri-flask-line text-orange-600 text-sm"></i>
                              </div>
                              <div className="flex-1">
                                <div className="text-xs font-bold text-gray-900">Chimique</div>
                                <div className="text-xs text-gray-600">Fongicide systémique</div>
                              </div>
                            </div>
                            <div className="text-xs text-gray-700 pl-10">Si biologique insuffisant</div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-3">
                          <div className="flex items-center gap-2 mb-2">
                            <i className="ri-calendar-check-line text-primary-light text-sm"></i>
                            <span className="text-xs font-bold text-gray-900">Calendrier</span>
                          </div>
                          <div className="space-y-1.5 text-xs">
                            {[{l:'1ère application:',v:"Aujourd'hui",c:'text-primary-dark'},{l:'2ème:',v:'+7 jours',c:'text-gray-900'},{l:'3ème:',v:'+14 jours',c:'text-gray-900'}].map((r,i)=>(
                              <div key={i} className="flex justify-between">
                                <span className="text-gray-700">{r.l}</span>
                                <span className={`font-semibold ${r.c}`}>{r.v}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-primary-light/10 rounded-lg p-2 border border-primary-light/20">
                          <div className="flex items-center gap-2 mb-1">
                            <i className="ri-money-dollar-circle-line text-primary-light text-sm"></i>
                            <span className="text-xs font-bold text-primary-dark">Économie estimée</span>
                          </div>
                          <div className="text-xs text-gray-700 pl-5">Réduction de 25% des coûts</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">Recommandations de Traitements</h2>
                <p className="text-lg text-gray-700 mb-6">Pour chaque pathologie détectée, DoctAgri propose des <strong className="text-primary-dark">solutions de traitement adaptées</strong>, biologiques et chimiques.</p>
                <div className="space-y-4">
                  {[
                    {icon:'ri-leaf-line',title:'Traitements biologiques',desc:"Solutions naturelles et respectueuses de l'environnement en priorité"},
                    {icon:'ri-flask-line',title:'Traitements chimiques ciblés',desc:"Recommandations précises pour minimiser l'utilisation de pesticides"},
                    {icon:'ri-calendar-check-line',title:"Calendrier d'application",desc:'Instructions détaillées sur quand et comment appliquer les traitements'},
                    {icon:'ri-seedling-line',title:'Pratiques culturales',desc:"Conseils sur l'irrigation, la fertilisation et la prévention"},
                    {icon:'ri-money-dollar-circle-line',title:"Économie d'intrants",desc:'Réduction de 20-30% des coûts grâce à des applications ciblées'},
                  ].map((item,i)=>(
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
      </div>

      {/* ── Fonctionnalités Supplémentaires ── */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Fonctionnalités Supplémentaires</h2>
            <p className="text-xl text-gray-700">DoctAgri offre bien plus qu'un simple diagnostic</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon:'ri-book-line',title:'Bibliothèque de connaissances',desc:"Accédez à une base complète d'informations sur les cultures, maladies et traitements"},
              {icon:'ri-calendar-check-line',title:'Calendrier cultural',desc:'Planifiez vos activités agricoles selon les saisons et les cultures'},
              {icon:'ri-cloud-windy-line',title:'Alertes météo',desc:'Recevez des notifications sur les conditions météorologiques importantes'},
              {icon:'ri-line-chart-line',title:'Suivi des cultures',desc:"Enregistrez et suivez l'évolution de vos parcelles au fil du temps"},
              {icon:'ri-group-line',title:"Communauté d'agriculteurs",desc:'Partagez vos expériences et apprenez des autres producteurs'},
              {icon:'ri-customer-service-2-line',title:'Support technique',desc:'Assistance disponible pour répondre à toutes vos questions'},
            ].map((item,i)=>(
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 border-2 border-green-300">
                  <i className={`${item.icon} text-3xl text-primary-light`}></i>
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2 text-center">{item.title}</h3>
                <p className="text-gray-700 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-light/20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Prêt à Transformer Votre Agriculture ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Téléchargez DoctAgri maintenant et bénéficiez de toutes ces fonctionnalités gratuitement</p>
          <Link href="/download" className="inline-flex items-center gap-2 bg-primary-light text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-500 transition shadow-lg">
            <i className="ri-download-line text-xl"></i>
            Télécharger gratuitement
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-primary-dark text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{fontSize:'12rem',letterSpacing:'0.5rem'}}>
          <span className="text-white/5 font-black select-none">DOCTAGRI</span>
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
              <Link href="/privacy" className="text-primary-light text-sm hover:text-white transition">En savoir plus sur notre politique de confidentialité</Link>
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

      {/* Floating Button */}
      <Link href="/contact" className="fixed bottom-6 right-6 bg-primary-light text-white px-4 py-3 rounded-lg shadow-lg hover:bg-primary-500 transition flex items-center gap-2 z-50">
        <i className="ri-customer-service-2-line text-xl"></i>
        <span className="font-medium">Talk with Us</span>
      </Link>
    </div>
  )
}