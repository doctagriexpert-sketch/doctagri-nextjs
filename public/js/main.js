// Initialize when script loads
function initializeApp() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Translate button
    const translateBtn = document.getElementById('translate-btn');
    const translateBtnMobile = document.getElementById('translate-btn-mobile');
    let currentLang = localStorage.getItem('preferredLanguage') || 'fr';

    const translations = {
        fr: {
            accueil: 'Accueil',
            apropos: 'À propos',
            fonctionnalites: 'Fonctionnalités',
            telecharger: 'Télécharger',
            faq: 'FAQ',
            contact: 'Contact',
            telechargerGratuitement: 'Télécharger Gratuitement',
            decouvrirFonctionnalites: 'Découvrir les Fonctionnalités',
            heroesTitre: "Protégez Vos Cultures avec l'Intelligence Artificielle",
            heroesDescription: "DoctAgri diagnostique instantanément les maladies de vos plantes et vous guide avec des conseils personnalisés en français et en ewe, même sans connexion internet.",
            miseAJour: 'Mises à jour automatiques via Wi-Fi (optionnel)',
            horsLigneTitre: '100% Hors Ligne',
            horsLigneDesc: 'Fonctionne sans connexion internet',
            iaEmbarqueeTitre: 'IA Embarquée',
            iaEmbarqueeDesc: 'Diagnostic instantané par photo',
            audioMultilingueTitre: 'Audio Multilingue',
            audioMultilingueDesc: 'Conseils en français, ewe et kabye',
        },
        en: {
            accueil: 'Home',
            apropos: 'About',
            fonctionnalites: 'Features',
            telecharger: 'Download',
            faq: 'FAQ',
            contact: 'Contact',
            telechargerGratuitement: 'Download for Free',
            decouvrirFonctionnalites: 'Discover Features',
            heroesTitre: 'Protect Your Crops with Artificial Intelligence',
            heroesDescription: 'DoctAgri instantly diagnoses plant diseases and guides you with personalized advice in French and Ewe, even without internet connection.',
            miseAJour: 'Automatic updates via Wi-Fi (optional)',
            horsLigneTitre: '100% Offline',
            horsLigneDesc: 'Works without internet connection',
            iaEmbarqueeTitre: 'Embedded AI',
            iaEmbarqueeDesc: 'Instant diagnosis by photo',
            audioMultilingueTitre: 'Multilingual Audio',
            audioMultilingueDesc: 'Advice in French, Ewe and Kabye',
        },
    };

    function applyTranslations(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            if (key && translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        applyTranslations(lang);
        updateButtonText();
        return true;
    }

    function toggleLanguage() {
        const targetLang = currentLang === 'fr' ? 'en' : 'fr';
        setLanguage(targetLang);
    }

    function updateButtonText() {
        const langText = currentLang === 'fr' ? 'EN' : 'FR';
        const icon = '<i class="ri-global-line"></i>';
        if (translateBtn) {
            translateBtn.innerHTML = icon + ' ' + langText;
        }
        if (translateBtnMobile) {
            translateBtnMobile.innerHTML = icon + ' ' + langText;
        }
    }
    
    if (translateBtn) {
        translateBtn.addEventListener('click', toggleLanguage);
    }
    
    if (translateBtnMobile) {
        translateBtnMobile.addEventListener('click', toggleLanguage);
    }

    // Set initial button state
    updateButtonText();

    // Apply saved language preference on page load
    if (currentLang === 'en') {
        applyTranslations('en');
    }
    
    // Chat widget functionality
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatSend = document.getElementById('chat-send');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const chatRefresh = document.getElementById('chat-refresh');
    const chatVoice = document.getElementById('chat-voice');
    
    if (chatToggle && chatWindow) {
        chatToggle.addEventListener('click', function() {
            chatWindow.classList.toggle('hidden');
        });
    }
    
    if (chatClose) {
        chatClose.addEventListener('click', function() {
            chatWindow.classList.add('hidden');
        });
    }
    
    if (chatRefresh) {
        chatRefresh.addEventListener('click', function() {
            chatMessages.innerHTML = `
                <div class="text-center text-gray-500 py-8">
                    <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                        </svg>
                    </div>
                    <p>Use voice or text to communicate</p>
                </div>
            `;
        });
    }
    
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `mb-4 ${isUser ? 'text-right' : 'text-left'}`;
        messageDiv.innerHTML = `
            <div class="inline-block ${isUser ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-800'} px-4 py-2 rounded-lg max-w-xs">
                ${text}
            </div>
        `;
        
        // Remove placeholder if exists
        const placeholder = chatMessages.querySelector('.text-center');
        if (placeholder) {
            placeholder.remove();
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    if (chatSend && chatInput) {
        chatSend.addEventListener('click', function() {
            const message = chatInput.value.trim();
            if (message) {
                addMessage(message, true);
                chatInput.value = '';
                
                // Simulate bot response
                setTimeout(function() {
                    addMessage("Merci pour votre message ! Notre équipe vous répondra bientôt.");
                }, 1000);
            }
        });
        
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                chatSend.click();
            }
        });
    }
    
    if (chatVoice) {
        chatVoice.addEventListener('click', function() {
            alert('Fonctionnalité vocale à venir !');
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Merci pour votre inscription à la newsletter !');
                this.querySelector('input[type="email"]').value = '';
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') {
                return;
            }
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar scroll effect - change to white background on scroll
    const navbar = document.getElementById('navbar');
    
    if (navbar && navbar.classList.contains('navbar-transparent')) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            const navLinks = navbar.querySelectorAll('a');
            const logo = navbar.querySelector('.logo-white');
            const mobileBtn = document.getElementById('mobile-menu-btn');
            
            if (currentScroll > 100) {
                navbar.style.backgroundColor = 'white';
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.classList.add('shadow-md');
                navLinks.forEach(link => {
                    if (!link.classList.contains('bg-primary-500')) {
                        link.classList.remove('text-white');
                        link.classList.add('text-gray-700');
                    }
                });
                if (logo) {
                    logo.classList.remove('logo-white');
                    logo.classList.add('logo');
                }
                if (mobileBtn) {
                    mobileBtn.classList.remove('text-white');
                    mobileBtn.classList.add('text-gray-700');
                }
            } else {
                navbar.style.backgroundColor = 'transparent';
                navbar.style.backdropFilter = 'none';
                navbar.classList.remove('shadow-md');
                navLinks.forEach(link => {
                    if (!link.classList.contains('bg-primary-500')) {
                        link.classList.add('text-white');
                        link.classList.remove('text-gray-700');
                    }
                });
                if (logo) {
                    logo.classList.add('logo-white');
                    logo.classList.remove('logo');
                }
                if (mobileBtn) {
                    mobileBtn.classList.add('text-white');
                    mobileBtn.classList.remove('text-gray-700');
                }
            }
        });
    }
}

// Execute when script loads or on DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM is already ready
    initializeApp();
}


