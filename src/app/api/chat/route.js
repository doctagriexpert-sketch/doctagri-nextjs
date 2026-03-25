const WHATSAPP_NUMBER = '22891774563' 
const CONTACT_EMAIL = 'contact@doctagri.tg'

const FAQ = [
  {
    keywords: ['telecharger', 'download', 'installer', 'installation', 'apk', 'google play'],
    question: 'Comment télécharger DoctAgri ?',
    answer: "Vous pouvez télécharger DoctAgri gratuitement sur Google Play Store ou en téléchargeant directement l'APK depuis notre site. Rendez-vous sur la page Télécharger.",
    link: '/download',
    linkText: 'Voir la page Télécharger',
  },
  {
    keywords: ['hors ligne', 'sans internet', 'connexion', 'offline', 'internet'],
    question: "DoctAgri fonctionne-t-il sans internet ?",
    answer: "Oui ! DoctAgri fonctionne 100% hors ligne. Toute l'intelligence artificielle est embarquée dans l'application. Vous n'avez besoin d'internet que pour les mises à jour.",
  },
  {
    keywords: ['langue', 'audio', 'ewe', 'kabye', 'francais', 'multilingue'],
    question: 'Dans quelles langues est disponible DoctAgri ?',
    answer: "DoctAgri est disponible en français, en éwé et en kabyè. Les conseils sont donnés en audio pour être accessibles à tous, même aux agriculteurs non-alphabétisés.",
  },
  {
    keywords: ['maladie', 'diagnostic', 'plante', 'feuille', 'photo', 'analyser', 'detecter'],
    question: 'Comment faire un diagnostic de maladie ?',
    answer: "C'est simple : ouvrez l'application, prenez une photo de la partie malade de votre plante, et l'IA analyse le problème en moins de 3 secondes. Vous recevez ensuite des recommandations de traitement.",
  },
  {
    keywords: ['culture', 'tomate', 'mais', 'piment', 'manioc', 'plante'],
    question: 'Quelles cultures sont supportées ?',
    answer: "DoctAgri est spécialisé dans la tomate, le maïs, le piment et le manioc. De nouvelles cultures sont ajoutées régulièrement.",
    link: '/features',
    linkText: 'Voir toutes les fonctionnalités',
  },
  {
    keywords: ['gratuit', 'prix', 'cout', 'payer', 'payant', 'abonnement'],
    question: "DoctAgri est-il gratuit ?",
    answer: "Oui, DoctAgri est entièrement gratuit ! Aucun abonnement, aucune publicité. Notre mission est de rendre la technologie accessible à tous les agriculteurs togolais.",
  },
  {
    keywords: ['pesticide', 'traitement', 'produit', 'biologique', 'chimique'],
    question: 'DoctAgri recommande-t-il des traitements ?',
    answer: "Oui ! Après le diagnostic, DoctAgri vous recommande des traitements biologiques et chimiques adaptés à chaque maladie détectée, avec des dosages précis.",
  },
  {
    keywords: ['precision', 'fiable', 'exact', 'pourcentage', 'efficace'],
    question: 'Quelle est la précision du diagnostic ?',
    answer: "Notre intelligence artificielle atteint une précision supérieure à 95% sur les cultures supportées. Elle a été entraînée sur des milliers d'images de plantes togolaises.",
  },
  {
    keywords: ['contact', 'aide', 'support', 'probleme', 'question', 'assistance'],
    question: 'Comment contacter le support ?',
    answer: "Vous pouvez nous contacter via notre formulaire de contact, par email à contact@doctagri.tg, ou sur WhatsApp. Notre équipe répond généralement dans les 24h.",
    link: '/contact',
    linkText: 'Nous contacter',
  },
]

function findAnswer(userMessage) {
  const msg = userMessage.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, ' ')

  for (const item of FAQ) {
    if (item.keywords.some(k => msg.includes(k))) {
      return item
    }
  }
  return null
}

export async function POST(request) {
  try {
    const { message } = await request.json()

    if (!message || message.trim().length === 0) {
      return Response.json({ error: 'Message vide.' }, { status: 400 })
    }

    const faqMatch = findAnswer(message)

    if (faqMatch) {
      return Response.json({
        type: 'faq',
        answer: faqMatch.answer,
        link: faqMatch.link || null,
        linkText: faqMatch.linkText || null,
        actions: [
          {
            type: 'whatsapp',
            label: 'Contacter sur WhatsApp',
            url: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour DoctAgri, j\'ai une question : ' + message)}`,
          },
          {
            type: 'email',
            label: 'Envoyer un email',
            url: `mailto:${CONTACT_EMAIL}?subject=Question DoctAgri&body=${encodeURIComponent(message)}`,
          },
        ],
      })
    }

    // Pas de réponse FAQ trouvée — redirection
    return Response.json({
      type: 'redirect',
      answer: "Je n'ai pas trouvé de réponse précise à votre question. Voici comment nous contacter directement :",
      actions: [
        {
          type: 'whatsapp',
          label: 'Contacter sur WhatsApp',
          url: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour DoctAgri, j\'ai une question : ' + message)}`,
        },
        {
          type: 'email',
          label: 'Envoyer un email',
          url: `mailto:${CONTACT_EMAIL}?subject=Question DoctAgri&body=${encodeURIComponent(message)}`,
        },
        {
          type: 'faq',
          label: 'Voir la FAQ complète',
          url: '/faq',
        },
      ],
    })

  } catch (err) {
    console.error('Chat error:', err)
    return Response.json({ error: 'Une erreur est survenue.' }, { status: 500 })
  }
}