/* global React */
// ============================================================
// FICHES — rich service content, keyed by "family".
// Copy taken from gemapprendre.com (content/site-content.md).
// A diagnostic RESULT key maps to a family via familyOf().
// ============================================================

// result key prefix → fiche family
function familyOf(resultKey) {
  if (!resultKey) return "bilan";
  if (resultKey.startsWith("ori_")) return "orientation";
  if (resultKey.startsWith("bilan_")) return "bilan";
  if (resultKey.startsWith("vae_")) return "vae";
  if (resultKey === "forme_entreprise") return "entreprise";
  if (resultKey === "forme_immobilier") return "immobilier";
  if (resultKey === "forme_autres") return "autres";
  return "bilan";
}

const FICHES = {
  // ============================================================
  orientation: {
    family: "orientation",
    univers: "Je suis dans le FLOU",
    uni: "flou",
    eyebrow: "Bilan d'orientation · 15-25 ans",
    title: "Trouver sa voie, sans le casse-tête",
    lead: "Le bilan d'orientation analyse la personnalité, les préférences et les capacités du jeune pour l'aider à choisir son orientation — et à mieux connaître le marché du travail.",
    ambiance: "Photo : un jeune en rendez-vous d'orientation",
    facts: [
      { icon: "layers", label: "4 étapes" },
      { icon: "target", label: "Tests MBTI & RIASEC" },
      { icon: "graduation-cap", label: "De la 3ᵉ au supérieur" },
      { icon: "gift", label: "1ᵉʳ entretien offert", price: true },
    ],
    painTitle: "L'orientation, un « casse-tête » ?",
    pains: [
      "Réformes, Parcoursup : vous ne savez plus où donner de la tête.",
      "Vous hésitez encore sur la filière ou la spécialité à choisir.",
      "Vous devez préparer un entretien de sélection, un recrutement.",
      "Vous cherchez un stage, une alternance — sans savoir par où commencer.",
      "Il faut un CV, des lettres de motivation, des vœux Parcoursup à rédiger.",
    ],
    steps: {
      label: "Le bilan, en 4 étapes",
      hint: "Pour les élèves de la 3ᵉ à la terminale, et les étudiants en réorientation.",
      items: [
        { title: "Cerner sa personnalité", body: "Personnalité, centres d'intérêt et profil scolaire, grâce à nos tests développés selon les modèles MBTI et RIASEC." },
        { title: "Désigner des métiers", body: "On désigne ensemble des domaines professionnels et des métiers de préférence, lors d'un premier entretien d'1 h 30." },
        { title: "Repérer les formations", body: "On repère les formations adaptées, leurs attendus et leurs modes de sélection, lors d'un second entretien." },
        { title: "Arrêter ses choix", body: "On arrête ses choix et on bâtit une stratégie pour valoriser la candidature, dossier de synthèse à l'appui." },
      ],
    },
    pourqui: {
      label: "C'est pour qui ?",
      body: "Collégiens, lycéens, étudiants — tout jeune entre 14 et 26 ans qui a besoin d'être accompagné dans son orientation scolaire et professionnelle.",
      stat: { num: "90%", lbl: "des adolescents vivent l'orientation comme une source de stress. On s'en occupe." },
    },
    pricing: {
      label: "Le tarif",
      intro: "Chaque accompagnement est construit sur mesure après un premier échange — sans engagement.",
      items: [
        { name: "Premier entretien d'orientation", detail: "On fait connaissance, on cible le besoin", price: "Offert" },
        { name: "Accompagnement complet", detail: "4 étapes · 2 entretiens · dossier de synthèse", price: "Sur devis" },
      ],
      note: "Des financements et aides sont possibles — on en parle ensemble.",
    },
    ctaTitle: "On commence par <em>un échange</em> ?",
    ctaBody: "Sans engagement. On regarde ensemble où en est votre ado, et ce qui l'aiderait vraiment.",
    ctaPrimary: "Réserver le 1ᵉʳ entretien",
  },

  // ============================================================
  bilan: {
    family: "bilan",
    univers: "Je suis dans le FLOU",
    uni: "flou",
    eyebrow: "Bilan de compétences",
    title: "Faire le point, choisir <em>la suite</em>",
    lead: "Un accompagnement individuel pour analyser vos compétences, vos motivations et vos aspirations — et définir un projet d'évolution ou de reconversion qui vous ressemble.",
    ambiance: "Photo : un entretien de bilan, lumineux et calme",
    facts: [
      { icon: "clock", label: "Dès 4 semaines" },
      { icon: "video", label: "Distanciel synchrone" },
      { icon: "shield", label: "Secret professionnel" },
      { icon: "gift", label: "Positionnement offert", price: true },
    ],
    steps: {
      label: "Comment ça se passe",
      hint: "3 phases clés et une phase de suivi. Pas de pré-requis : le bilan s'adresse à tous.",
      items: [
        { title: "Exploration", body: "On comprend votre situation, vos attentes et vos besoins — entretiens individuels, questionnaires et tests pour y voir clair." },
        { title: "Analyse des compétences", body: "On évalue compétences techniques, transversales et comportementales au regard de votre expérience et de vos réalisations." },
        { title: "Synthèse & plan d'action", body: "On met en perspective vos atouts, on explore métiers et formations, et on bâtit un plan d'action concret." },
      ],
    },
    pricing: {
      label: "GEM<em>'</em>Choisir — la formule qui vous ressemble",
      intro: "Après l'entretien de positionnement, vous déterminez le bilan qui vous correspond.",
      offer: "L'entretien de positionnement vous est OFFERT.",
      items: [
        { name: "GEM'Express", detail: "11 h · 6 h d'entretien + 5 h de travail", price: "1 195 €" },
        { name: "GEM'Essentiel", detail: "15 h · 8 h d'entretien + 7 h de travail", price: "1 595 €" },
        { name: "GEM'Confort", detail: "17 h · 10 h d'entretien + 7 h de travail", price: "1 995 €", popular: true },
        { name: "GEM'Premium", detail: "19 h · 12 h d'entretien + 7 h de travail", price: "2 395 €" },
        { name: "GEM'Bien-être", detail: "21 h · 14 h d'entretien + 7 h de travail", price: "2 749 €" },
        { name: "GEM'Excellence", detail: "24 h · 16 h d'entretien + 8 h de travail", price: "2 995 €" },
      ],
      note: "Des financements et aides sont possibles — on en parle ensemble.",
    },
    pourquoi: {
      label: "Pourquoi faire un bilan de compétences ?",
      bullets: [
        "Déterminer si vous avez pris la bonne direction professionnelle.",
        "Préparer une reconversion, vous ouvrir à de nouvelles perspectives.",
        "(Re)prendre confiance en vous, vous appuyer sur vos forces et vos acquis.",
        "Booster votre employabilité et redevenir acteur de votre carrière.",
      ],
    },
    ctaTitle: "Et si on faisait <em>le point</em> ?",
    ctaBody: "L'entretien de positionnement est offert. C'est souvent là que tout commence à se clarifier.",
    ctaPrimary: "Réserver l'entretien offert",
  },

  // ============================================================
  vae: {
    family: "vae",
    univers: "Je suis dans le FLOU",
    uni: "flou",
    eyebrow: "VAE · Validation des Acquis de l'Expérience",
    title: "Transformer l'expérience en <em>diplôme</em>",
    lead: "La VAE permet à toute personne de faire reconnaître officiellement les compétences acquises au fil de son parcours — quels que soient son âge, sa formation ou son statut.",
    ambiance: "Photo : des mains qui rédigent un dossier",
    facts: [
      { icon: "calendar", label: "4 à 9 mois" },
      { icon: "clock", label: "10 à 40 h d'accompagnement" },
      { icon: "users", label: "1 RDV / 7-10 jours" },
      { icon: "award", label: "Certification RNCP" },
    ],
    pourqui: {
      label: "C'est pour qui ?",
      body: "Pour faire reconnaître votre expérience par une certification inscrite au RNCP. Il suffit d'au moins 1 an d'expérience en rapport avec la certification visée — quels que soient votre âge, votre statut ou votre niveau de formation.",
    },
    steps: {
      label: "Les étapes de la VAE",
      hint: "À chaque étape, un appui. Le parcours est balisé du premier renseignement au jury.",
      items: [
        { title: "Information & choix", body: "On se renseigne, on choisit la certification en adéquation avec vos compétences et votre expérience." },
        { title: "Dossier de recevabilité", body: "On constitue le dossier qui vérifie les critères d'accès : parcours, emplois, formations, preuves de votre expérience." },
        { title: "Accompagnement Livret 2", body: "On vous accompagne pas à pas dans la rédaction, depuis votre espace personnel sécurisé, en visio avec votre consultant." },
        { title: "Évaluation & jury", body: "Entretien avec le jury ou mise en situation. On prépare ce passage pour que vous arriviez serein." },
      ],
    },
    pricing: {
      label: "Combien ça coûte ?",
      intro: "Quel que soit le niveau visé :",
      offer: "L'entretien de découverte est offert — sans engagement.",
      items: [
        { name: "Entretien de découverte", detail: "Est-ce la bonne voie pour vous ?", price: "Offert" },
        { name: "Accompagnement Livret 1", detail: "Constitution du dossier de recevabilité", price: "295 €" },
        { name: "Relecture du Livret 2", detail: "On affûte votre dossier avant dépôt", price: "595 €" },
        { name: "Jury blanc", detail: "On simule le passage devant le jury", price: "495 €" },
        { name: "Accompagnement Livret 2", detail: "Rédaction complète, pas à pas", price: "dès 1 195 €", popular: true },
      ],
      note: "Frais d'examen non inclus. Des financements et aides sont possibles.",
    },
    ctaTitle: "Votre expérience vaut <em>un diplôme</em>.",
    ctaBody: "Commençons par l'entretien de découverte, offert : on vérifie ensemble que la VAE est faite pour vous.",
    ctaPrimary: "Réserver l'entretien découverte",
  },

  // ============================================================
  entreprise: {
    family: "entreprise",
    univers: "Je me FORME",
    uni: "forme",
    eyebrow: "Je me forme · Création d'entreprise",
    title: "De l'idée à <em>la réussite</em>",
    lead: "Se lancer demande plus que de la motivation : une méthode éprouvée et l'accompagnement d'experts passés par là. Plus de 250 créateurs ont déjà transformé leur projet en réalité durable avec nous.",
    ambiance: "Photo : un entrepreneur au travail",
    facts: [
      { icon: "users", label: "+250 créateurs accompagnés" },
      { icon: "trending-up", label: "82% actives à 3 ans" },
      { icon: "credit-card", label: "Éligible CPF", price: true },
    ],
    steps: {
      label: "Ce que vous travaillez",
      hint: "Au-delà de la théorie, les compétences qui font vraiment la différence.",
      items: [
        { title: "Business plan stratégique", body: "Un plan réaliste et convaincant qui sert de feuille de route et rassure vos partenaires financiers." },
        { title: "Financement sur mesure", body: "Emprunt, aides publiques, financement participatif : on construit le mix le plus adapté à votre projet." },
        { title: "Marketing & commercial", body: "Une stratégie pour conquérir et fidéliser, avec des outils d'analyse de marché éprouvés." },
        { title: "Gestion au quotidien", body: "Les fondamentaux administratifs et financiers pour piloter sereinement, dès le premier jour." },
      ],
    },
    pourquoi: {
      label: "Une pédagogie concrète",
      bullets: [
        "Des ateliers pratiques où vous travaillez directement sur VOTRE projet.",
        "Des études de cas réelles issues de notre expérience d'accompagnement.",
        "Un suivi personnalisé pendant et après la formation.",
        "Une communauté d'entrepreneurs pour l'entraide et le networking.",
      ],
    },
    pricing: {
      label: "Financement accessible",
      intro: "Notre formation est éligible à l'ensemble des dispositifs :",
      items: [
        { name: "Compte Personnel de Formation (CPF)", detail: "Mobilisez vos droits acquis", price: "Éligible" },
        { name: "Pôle Emploi", detail: "Pour les demandeurs d'emploi", price: "Éligible" },
        { name: "OPCO", detail: "Pour les salariés", price: "Éligible" },
        { name: "Autofinancement", detail: "Possibilité d'échéancier", price: "Sur devis" },
      ],
      note: "Places limitées par session pour garantir un suivi personnalisé de qualité.",
    },
    ctaTitle: "Prêt à donner vie à <em>votre projet</em> ?",
    ctaBody: "Rejoignez les centaines d'entrepreneurs que nous avons accompagnés. Parlons de votre idée.",
    ctaPrimary: "Demander mon RDV",
  },

  // ============================================================
  immobilier: {
    family: "immobilier",
    univers: "Je me FORME",
    uni: "forme",
    eyebrow: "Je me forme · Immobilier",
    title: "L'immobilier, <em>« Comme une Pro »</em>",
    lead: "Acquérez toutes les compétences pour naviguer avec confiance dans l'immobilier et la finance — que vous validiez vos heures Loi ALUR, prépariez un diplôme, ou gagniez en autonomie.",
    ambiance: "Photo : visite d'un bien, lumière du Sud",
    facts: [
      { icon: "building", label: "Heures Loi ALUR" },
      { icon: "graduation-cap", label: "Préparation BTS" },
      { icon: "sparkles", label: "IA & mandat exclusif" },
    ],
    steps: {
      label: "Ce que vous apprenez",
      hint: "Une formation pensée pour l'indépendance et l'autonomie.",
      items: [
        { title: "Techniques de négociation", body: "Négociez comme une pro pour obtenir — ou défendre — les meilleures offres." },
        { title: "Analyse de marché", body: "Devenez expert·e pour acheter et vendre au bon moment, au bon prix." },
        { title: "Aspects juridiques", body: "Maîtrisez le cadre juridique pour sécuriser chacune de vos transactions." },
        { title: "Financement & fiscalité", body: "Optimisez vos investissements grâce aux outils financiers et fiscaux." },
      ],
    },
    pourquoi: {
      label: "Elles l'ont fait",
      testimonials: [
        { who: "Marie", text: "Grâce à « Comme une Pro », j'ai économisé 15 000 € sur l'achat de ma maison." },
        { who: "Sophie", text: "Cette formation m'a donné la confiance pour vendre mon appartement sans agence, et réaliser une belle plus-value." },
      ],
    },
    pricing: {
      label: "Les parcours",
      intro: "Validez vos obligations ou préparez votre diplôme :",
      items: [
        { name: "Loi ALUR", detail: "Validez vos heures de formation obligatoires", price: "Sur devis" },
        { name: "Préparation BTS Immobilier", detail: "Préparez votre diplôme", price: "Sur devis" },
        { name: "« Comme une Pro »", detail: "Autonomie complète : achat, vente, fiscalité", price: "Sur devis" },
      ],
      note: "Imaginez économiser plus de 5 000 € sur l'achat ou la vente de votre bien.",
    },
    ctaTitle: "Devenez <em>la pro</em> de vos transactions.",
    ctaBody: "Ne laissez pas passer l'occasion de transformer votre avenir. On en parle ?",
    ctaPrimary: "Demander mon RDV",
  },

  // ============================================================
  autres: {
    family: "autres",
    univers: "Je me FORME",
    uni: "forme",
    eyebrow: "Je me forme · Sur mesure",
    title: "Finance, communication & <em>vente</em>",
    lead: "Des parcours en finance, communication et techniques de vente, animés par des formateurs experts. On construit le programme autour de votre besoin réel.",
    ambiance: "Photo : un atelier en petit groupe",
    facts: [
      { icon: "sparkles", label: "Nouveau · 2026" },
      { icon: "users", label: "Intra ou individuel" },
      { icon: "pen-line", label: "Sur devis", price: true },
    ],
    steps: {
      label: "Trois domaines",
      hint: "Des formations concrètes, conçues avec des experts du terrain.",
      items: [
        { title: "Finance", body: "Lire ses chiffres, piloter sa trésorerie, décider sereinement." },
        { title: "Communication", body: "Faire passer le bon message, à la bonne personne, au bon moment." },
        { title: "Techniques de vente", body: "Convaincre avec justesse, sans jamais forcer la main." },
      ],
    },
    pourqui: {
      label: "Sur mesure, vraiment",
      body: "Ces parcours arrivent en 2026. On construit chaque programme autour de votre objectif — en individuel ou en intra-entreprise. Parlons de votre projet dès maintenant.",
    },
    ctaTitle: "On construit <em>votre parcours</em> ?",
    ctaBody: "Dites-nous votre besoin. On revient vers vous avec une proposition sur mesure.",
    ctaPrimary: "Demander un devis",
  },
};

window.FICHES = FICHES;
window.familyOf = familyOf;
