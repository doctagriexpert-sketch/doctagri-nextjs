'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // ── Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'))
    }

    // ── Hero image aleatoire
    const heroSection = document.getElementById('hero-section')
    const oipImages = ['/assets/OIP1.jpg','/assets/OIP2.jpg','/assets/OIP3.jpg','/assets/OIP4.jpg','/assets/OIP5.jpg','/assets/OIP6.jpg','/assets/OIP7.jpg','/assets/OIP9.jpg','/assets/OIP.webp']
    if (heroSection) {
      heroSection.style.backgroundImage = `url('${oipImages[Math.floor(Math.random() * oipImages.length)]}')`
    }

    // ── Feuille malade aleatoire
    const diagnosticLeafImage = document.getElementById('diagnostic-leaf-image')
    const maladeImages = ['/assets/malade1.jpg','/assets/malade2.jpg','/assets/malade3.jpg','/assets/malade4.jpg']
    if (diagnosticLeafImage) {
      diagnosticLeafImage.src = maladeImages[Math.floor(Math.random() * maladeImages.length)]
    }

    // ── Temoignages
    const fallback = [
      { image: '/assets/cul1.jpg', name: 'Koffi Mensah', role: 'Producteur de tomates, Kpalime', text: "DoctAgri a reduit mes pertes de 60%. Les conseils audio en ewe sont vraiment utiles pour moi." },
      { image: '/assets/cul2.jpg', name: 'Afi Akossiwa', role: 'Agricultrice de mais, Sokode', text: "Avec les explications audio, je diagnostique mes cultures moi-meme. DoctAgri a change ma vie." },
      { image: '/assets/cul3.jpg', name: 'Yao Kokou', role: 'Cultivateur de piment, Atakpame', text: "Sans internet, DoctAgri fonctionne parfaitement. Enorme economie de pesticides." },
      { image: '/assets/cul4.jpg', name: 'Abla Dzigbodi', role: 'Productrice de manioc, Tsevie', text: "J'ai sauve toute ma recolte grace a DoctAgri. Je recommande a tous mes voisins." },
      { image: '/assets/cul5.jpg', name: 'Komlan Agbeko', role: 'Agriculteur polyvalent, Dapaong', text: "DoctAgri est comme avoir un expert dans ma poche. Resultats en quelques secondes." },
      { image: '/assets/cul6.jpg', name: 'Mawuli Gbedemah', role: 'Chef de cooperative, Lome', text: "Les pertes dans ma cooperative ont diminue de 40% en un trimestre. Outil indispensable." },
      { image: '/assets/cul7.jpg', name: 'Kossiwa Amegbo', role: 'Maraichere, Aneho', text: "Je sais maintenant quelle maladie attaque mes cultures et quel traitement appliquer." },
      { image: '/assets/cul8.jpg', name: 'Teko Dossou', role: 'Jeune agriculteur, Kara', text: "24 ans et fier d'utiliser DoctAgri chaque jour pour ameliorer mon agriculture." },
      { image: '/assets/cul9.jpg', name: 'Ama Tagbor', role: 'Responsable jardin communautaire, Vogan', text: "Notre jardin nourrit 200 familles. Pesticides reduits de 35% depuis DoctAgri." },
    ]

    const container = document.getElementById('testimonials-container')
    const dotsEl = document.getElementById('testimonial-dots')
    const prevBtn = document.getElementById('testimonial-prev')
    const nextBtn = document.getElementById('testimonial-next')
    let idx = 0
    const perSlide = 3
    const total = Math.ceil(fallback.length / perSlide)

    if (container) {
      container.innerHTML = ''
      if (dotsEl) dotsEl.innerHTML = ''

      for (let s = 0; s < total; s++) {
        const slide = document.createElement('div')
        slide.style.cssText = 'width:100%;flex-shrink:0;padding:0 8px'
        const items = fallback.slice(s * perSlide, s * perSlide + perSlide)
        slide.innerHTML = `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px">${items.map(t => `
          <div style="background:white;border-radius:16px;padding:24px;box-shadow:0 4px 20px rgba(0,0,0,0.08);border:1px solid #f0f0f0;display:flex;flex-direction:column">
            <img src="${t.image}" alt="${t.name}" style="width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid #00C853;margin-bottom:12px" onerror="this.style.display='none'"/>
            <div style="font-weight:700;color:#111827;font-size:15px;margin-bottom:2px">${t.name}</div>
            <div style="font-size:12px;color:#9ca3af;margin-bottom:12px">${t.role}</div>
            <p style="color:#4b5563;font-size:14px;line-height:1.7;font-style:italic;flex:1;margin-bottom:16px">"${t.text}"</p>
            <div style="color:#facc15;font-size:18px">★★★★★</div>
          </div>`).join('')}</div>`
        container.appendChild(slide)

        if (dotsEl) {
          const dot = document.createElement('button')
          dot.style.cssText = `width:12px;height:12px;border-radius:50%;border:none;cursor:pointer;background:${s === 0 ? '#00C853' : '#d1d5db'};transition:all 0.3s`
          dot.addEventListener('click', () => { idx = s; update() })
          dotsEl.appendChild(dot)
        }
      }

      function update() {
        container.style.transform = `translateX(-${idx * 100}%)`
        if (dotsEl) dotsEl.querySelectorAll('button').forEach((d, i) => {
          d.style.background = i === idx ? '#00C853' : '#d1d5db'
          d.style.width = i === idx ? '24px' : '12px'
          d.style.borderRadius = '999px'
        })
      }

      if (prevBtn) {
        prevBtn.classList.remove('hidden')
        prevBtn.addEventListener('click', () => { idx = (idx - 1 + total) % total; update() })
      }
      if (nextBtn) {
        nextBtn.classList.remove('hidden')
        nextBtn.addEventListener('click', () => { idx = (idx + 1) % total; update() })
      }

      setInterval(() => { idx = (idx + 1) % total; update() }, 6000)
      update()
    }

    // ── Newsletter
    const newsletterForm = document.getElementById('newsletter-form-index')
    const newsletterMsg = document.getElementById('newsletter-message-index')
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', async function(e) {
        e.preventDefault()
        const email = this.querySelector('input[name="email"]').value
        try {
          const response = await fetch('/api/newsletter', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
          if (response.ok) {
            newsletterMsg.textContent = 'Merci ! Vous etes inscrit a notre newsletter.'
            newsletterMsg.classList.remove('hidden')
            this.reset()
            setTimeout(() => newsletterMsg.classList.add('hidden'), 5000)
          }
        } catch {
          if (newsletterMsg) { newsletterMsg.textContent = 'Une erreur est survenue.'; newsletterMsg.classList.remove('hidden') }
        }
      })
    }
  }, [])

  return (
    <>
      {/* Navbar */}
      <nav className="navbar-transparent" id="navbar">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/assets/doct.jpeg" alt="DoctAgri Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-white">DoctAgri</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-primary-300 font-medium">Accueil</Link>
            <Link href="/about" className="text-white hover:text-primary-300 font-medium">A propos</Link>
            <Link href="/features" className="text-white hover:text-primary-300 font-medium">Fonctionnalites</Link>
            <Link href="/download" className="text-white hover:text-primary-300 font-medium">Telecharger</Link>
            <Link href="/faq" className="text-white hover:text-primary-300 font-medium">FAQ</Link>
            <button id="translate-btn" className="text-white hover:text-primary-300 font-medium flex items-center gap-2">
              <i className="ri-global-line"></i> EN
            </button>
            <Link href="/contact" className="bg-primary-light text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition">Contact</Link>
          </div>
          <button className="md:hidden text-white" id="mobile-menu-btn">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="hidden md:hidden bg-primary-900/95 border-t border-primary-700" id="mobile-menu">
          <div className="container mx-auto px-4 py-2 space-y-2">
            <Link href="/" className="block text-white font-medium">Accueil</Link>
            <Link href="/about" className="block text-white font-medium">A propos</Link>
            <Link href="/features" className="block text-white font-medium">Fonctionnalites</Link>
            <Link href="/download" className="block text-white font-medium">Telecharger</Link>
            <Link href="/faq" className="block text-white font-medium">FAQ</Link>
            <Link href="/contact" className="block bg-primary-500 text-white px-4 py-2 rounded-lg text-center">Contact</Link>
          </div>
        </div>
      </nav>

      <div id="google_translate_element" style={{ position: 'absolute', top: 0, left: 0, opacity: 0, pointerEvents: 'none' }}></div>

      {/* Hero */}
      <section className="hero-section relative overflow-hidden" id="hero-section">
        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow text-black">
              Protegez Vos Cultures avec<br />
              <span className="text-primary-light">l'Intelligence Artificielle</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-shadow">
              DoctAgri diagnostique instantanement les maladies de vos plantes et vous guide avec des conseils personnalises en francais et en ewe, meme sans connexion internet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/download" className="bg-primary-light text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-500 transition flex items-center justify-center gap-2 shadow-lg">
                <i className="ri-download-cloud-line text-xl"></i>Telecharger Gratuitement
              </Link>
              <Link href="/features" className="bg-white text-primary-dark border-2 border-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2 shadow-lg">
                <i className="ri-play-circle-line text-xl"></i>Decouvrir les Fonctionnalites
              </Link>
            </div>
          </div>
          <div className="container mx-auto px-4 pb-12">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="feature-card p-8 rounded-xl text-center">
                <div className="icon-container"><i className="ri-wifi-off-line text-4xl text-white"></i></div>
                <h3 className="text-xl font-bold text-white mb-2">100% Hors Ligne</h3>
                <p className="text-white/90">Fonctionne sans connexion internet</p>
              </div>
              <div className="feature-card p-8 rounded-xl text-center">
                <div className="icon-container"><i className="ri-brain-line text-4xl text-white"></i></div>
                <h3 className="text-xl font-bold text-white mb-2">IA Embarquee</h3>
                <p className="text-white/90">Diagnostic instantane par photo</p>
              </div>
              <div className="feature-card p-8 rounded-xl text-center">
                <div className="icon-container"><i className="ri-volume-up-line text-4xl text-white"></i></div>
                <h3 className="text-xl font-bold text-white mb-2">Audio Multilingue</h3>
                <p className="text-white/90">Conseils en francais, ewe et kabye</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Diagnostic */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-beige-light text-primary-dark px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">DIAGNOSTIC INTELLIGENT</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">Un Diagnostic Precis en Quelques Secondes</h2>
              <p className="text-lg text-primary-600 mb-8">
                Grace a l'intelligence artificielle embarquee, <span className="text-primary-light font-semibold">DoctAgri</span> analyse instantanement les photos de vos plantes avec une precision superieure a 95%.
              </p>
              <div className="space-y-6">
                {[
                  { icon: 'ri-camera-line', title: 'Prenez une photo', desc: 'Photographiez simplement la partie malade de votre plante' },
                  { icon: 'ri-flashlight-line', title: 'Analyse instantanee', desc: "L'IA identifie le probleme en moins de 3 secondes" },
                  { icon: 'ri-shield-check-line', title: 'Recevez des conseils', desc: 'Obtenez des recommandations de traitement personnalisees' },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-beige-light rounded-xl flex items-center justify-center">
                      <i className={`${s.icon} text-2xl text-primary-dark`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-dark mb-1">{s.title}</h3>
                      <p className="text-primary-600">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/features" className="inline-flex items-center gap-2 mt-8 text-primary-light font-semibold hover:text-primary-500 transition">
                En savoir plus <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <div className="relative z-10 max-w-[320px] w-full">
                <div className="relative transform rotate-[-5deg]">
                  <div className="bg-white rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-primary-dark rounded-[2rem] p-1">
                      <div className="bg-gradient-to-br from-green-50 via-green-100 to-green-50 rounded-[1.75rem] overflow-hidden relative flex flex-col" style={{ aspectRatio: '9/19.5', minHeight: '440px' }}>
                        <div className="flex-shrink-0 flex items-start justify-center pt-4 px-4 relative" style={{ height: '35%' }}>
                          <div className="relative w-full max-w-[85%]">
                            <img id="diagnostic-leaf-image" src="/assets/malade1.jpg" alt="Feuille analysee" className="w-full h-auto object-contain rounded-lg shadow-md" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                              <div className="w-20 h-20 rounded-full border-2 border-primary-light shadow-lg" style={{ boxShadow: '0 0 15px rgba(0, 200, 83, 0.5)' }}>
                                <div className="w-full h-full rounded-full bg-primary-light/30 flex items-center justify-center backdrop-blur-sm">
                                  <div className="w-12 h-12 rounded-full bg-primary-light/50 flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full bg-primary-light"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 px-4 py-3 overflow-y-auto" style={{ maxHeight: '45%' }}>
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                            <h4 className="text-xs font-bold text-primary-dark mb-2 flex items-center gap-1">
                              <i className="ri-alert-line text-primary-light"></i>Problemes detectes
                            </h4>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2 bg-red-50 rounded-lg p-2">
                                <i className="ri-error-warning-line text-red-500 text-sm mt-0.5"></i>
                                <div><p className="text-xs font-semibold text-primary-dark">Maladie fongique detectee</p><p className="text-xs text-primary-600">Taches brunes sur les feuilles</p></div>
                              </div>
                              <div className="flex items-start gap-2 bg-yellow-50 rounded-lg p-2">
                                <i className="ri-alert-line text-yellow-600 text-sm mt-0.5"></i>
                                <div><p className="text-xs font-semibold text-primary-dark">Carence nutritionnelle</p><p className="text-xs text-primary-600">Manque d'azote probable</p></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 pb-6 px-6 text-center">
                          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full shadow-lg">
                            <div className="w-2 h-2 bg-primary-light rounded-full animate-pulse"></div>
                            <span className="text-primary-dark font-semibold text-xs">Analyse en cours...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 via-primary-200/15 to-primary-light/25 rounded-[2.5rem] blur-3xl -z-10 transform scale-125"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalites */}
      <section className="py-20 bg-beige-light/50 backdrop-blur-sm relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary-100 text-primary-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">FONCTIONNALITES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Une Solution Complete pour Vos Cultures</h2>
            <p className="text-xl text-primary-600">DoctAgri combine technologie de pointe et accessibilite pour tous les agriculteurs togolais</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'ri-wifi-off-line', title: 'Fonctionnement Hors Ligne', desc: "Utilisez DoctAgri partout, meme sans connexion internet." },
              { icon: 'ri-brain-line', title: 'Intelligence Artificielle', desc: 'Detection precise des maladies, carences et parasites.' },
              { icon: 'ri-volume-up-line', title: 'Audio Multilingue', desc: 'Conseils en francais, kabye et ewe pour tous.' },
              { icon: 'ri-plant-line', title: 'Cultures Prioritaires', desc: 'Tomate, mais, piment et manioc couverts.' },
              { icon: 'ri-medicine-bottle-line', title: 'Traitements Adaptes', desc: 'Recommandations biologiques et chimiques ciblees.' },
              { icon: 'ri-leaf-line', title: 'Approche Ecologique', desc: 'Reduction de 20-30% des pesticides grace aux diagnostics precis.' },
            ].map((c, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-50 rounded-xl border-2 border-primary-light flex items-center justify-center mx-auto mb-4">
                  <i className={`${c.icon} text-3xl text-primary-light`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{c.title}</h3>
                <p className="text-gray-900 text-center">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/features" className="inline-flex items-center gap-2 bg-primary-light text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-500 transition shadow-lg">
              Decouvrir toutes les fonctionnalites <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-primary-dark relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary-light text-white px-4 py-2 rounded-lg text-sm font-semibold mb-4">NOTRE IMPACT</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Un Impact Social et Environnemental Positif</h2>
            <p className="text-xl text-white">DoctAgri contribue au developpement durable de l'agriculture togolaise</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: 'ri-leaf-line', title: 'Impact Environnemental', items: ["Reduction de 20-30% des pesticides et engrais","Diminution de la pollution des sols et des eaux","Preservation de la biodiversite agricole","Fonctionnement hors ligne sans consommation cloud"] },
              { icon: 'ri-group-line', title: 'Impact Social', items: ["Objectif de 50% de beneficiaires femmes","Renforcement de l'autonomie des agriculteurs","Reduction des couts de production","Inclusion numerique et empowerment feminin"] },
            ].map((card, i) => (
              <div key={i} className="impact-card bg-primary-dark/60 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl">
                <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                  <i className={`${card.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{card.title}</h3>
                <ul className="space-y-4">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-white">
                      <i className="ri-checkbox-circle-fill text-primary-light flex-shrink-0 mt-0.5 text-xl"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[{stat:'1000+',label:'Agriculteurs pilotes'},{stat:'95%',label:'Precision de diagnostic'},{stat:'30%',label:"Economie d'intrants"},{stat:'100%',label:'Hors ligne'}].map((s,i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary-light mb-2">{s.stat}</div>
                <div className="text-white text-lg">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/about" className="inline-flex items-center gap-2 text-primary-light font-semibold hover:text-primary-300 transition text-lg">
              En savoir plus sur notre mission <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Temoignages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary-light text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">TEMOIGNAGES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Ce Que Disent Nos Agriculteurs</h2>
            <p className="text-xl text-gray-600">Des milliers d'agriculteurs togolais font deja confiance a DoctAgri</p>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-out" id="testimonials-container"></div>
            </div>
            <button id="testimonial-prev" className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-200 shadow-lg w-11 h-11 rounded-full items-center justify-center text-gray-700 hover:bg-primary-light hover:text-white transition-all z-10">
              <i className="ri-arrow-left-s-line text-xl"></i>
            </button>
            <button id="testimonial-next" className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-200 shadow-lg w-11 h-11 rounded-full items-center justify-center text-gray-700 hover:bg-primary-light hover:text-white transition-all z-10">
              <i className="ri-arrow-right-s-line text-xl"></i>
            </button>
            <div className="flex justify-center mt-8 gap-2" id="testimonial-dots"></div>
          </div>
          <div className="text-center mt-12">
            <Link href="/download" className="inline-flex items-center gap-2 bg-primary-light text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-500 transition shadow-lg">
              <i className="ri-download-cloud-line text-xl"></i>Telecharger gratuitement
            </Link>
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="py-20 bg-primary-light relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pret a Revolutionner Votre Agriculture ?</h2>
          <p className="text-xl text-white mb-10">Rejoignez les milliers d'agriculteurs togolais qui utilisent deja DoctAgri</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#" className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2 shadow-lg">
              <i className="ri-play-fill text-2xl"></i>Telecharger sur Google Play
            </a>
            <a href="#" className="bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2 shadow-lg">
              <i className="ri-download-cloud-line text-xl"></i>Telecharger l'APK
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white">
            {['100% Gratuit','Sans Publicite','Hors Ligne','Multilingue'].map((l,i) => (
              <div key={i} className="flex items-center gap-2">
                <i className="ri-checkbox-circle-fill"></i><span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[200px] md:text-[300px] font-black text-white/5 select-none">DOCTAGRI</span>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/assets/doct.jpeg" alt="DoctAgri Logo" className="h-10 w-auto" />
                <span className="text-2xl font-bold text-white">DoctAgri</span>
              </div>
              <p className="text-white leading-relaxed mb-4">Plateforme numerique inclusive pour l'assistance agricole intelligente au Togo</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 uppercase tracking-wide">RESTEZ INFORME</h3>
              <form id="newsletter-form-index" className="mb-4">
                <div className="flex items-center border-b border-white/30 pb-2">
                  <input type="email" name="email" required placeholder="Votre email" className="flex-1 bg-transparent text-white placeholder-white/60 focus:outline-none" />
                  <button type="submit" className="text-white hover:text-primary-light transition-colors">
                    <i className="ri-arrow-right-line text-xl"></i>
                  </button>
                </div>
              </form>
              <p id="newsletter-message-index" className="text-sm text-primary-light mt-2 hidden"></p>
              <Link href="/privacy" className="text-white/80 hover:text-primary-light transition-colors text-sm underline">Politique de confidentialite</Link>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 uppercase tracking-wide">RESSOURCES</h3>
              <ul className="space-y-3">
                <li><Link href="/documentation" className="text-white hover:text-primary-light transition-colors">Documentation</Link></li>
                <li><Link href="/faq" className="text-white hover:text-primary-light transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="text-white hover:text-primary-light transition-colors">Support technique</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 uppercase tracking-wide">NAVIGATION</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-white hover:text-primary-light transition-colors">A propos</Link></li>
                <li><Link href="/features" className="text-white hover:text-primary-light transition-colors">Fonctionnalites</Link></li>
                <li><Link href="/download" className="text-white hover:text-primary-light transition-colors">Telecharger</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">© 2026 DoctAgri. Tous droits reserves.</p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/DoctAgri" className="text-white hover:text-primary-light transition-colors" target="_blank" rel="noopener"><i className="ri-facebook-fill text-xl"></i></a>
              <a href="https://twitter.com/DoctAgri" className="text-white hover:text-primary-light transition-colors" target="_blank" rel="noopener"><i className="ri-twitter-x-line text-xl"></i></a>
              <a href="https://linkedin.com/company/DoctAgri" className="text-white hover:text-primary-light transition-colors" target="_blank" rel="noopener"><i className="ri-linkedin-fill text-xl"></i></a>
            </div>
          </div>
        </div>
      </footer>

      <Link href="/contact" className="fixed bottom-6 right-6 bg-primary-light text-white px-4 py-3 rounded-full shadow-lg hover:bg-primary-500 transition flex items-center gap-2 z-50">
        <i className="ri-customer-service-2-line text-xl"></i>
        <span className="font-medium">Talk with Us</span>
      </Link>
    </>
  )
}