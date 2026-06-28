/* global React */
// ============================================================
// DIAGNOSTIC — branching data
// Q1 (qui ?) → Q2 (besoin) → Résultat (prestation réelle Gem'Apprendre)
// Tout le contenu est repris du site : formules, durées, prix, dispositifs.
// ============================================================

const RESULTS = {
  // ---------- ORIENTATION ----------
  ori_filiere: {
    tier: "Bilan d'orientation · 15-25 ans",
    title: "Trouver sa voie, méthodiquement",
    meta: [
      { icon: "layers", label: "4 étapes" },
      { icon: "target", label: "Tests MBTI & RIASEC" },
      { icon: "graduation-cap", label: "De la 3e au supérieur" },
    ],
    why: [
      "On cerne d'abord votre personnalité, vos centres d'intérêt et votre profil scolaire.",
      "On désigne ensemble des domaines et des métiers qui vous ressemblent.",
      "On repère les formations adaptées et leurs attendus.",
    ],
    offer: "Le premier entretien d'orientation se fait sans engagement.",
  },
  ori_parcoursup: {
    tier: "Bilan d'orientation · 15-25 ans",
    title: "Réussir Parcoursup, sereinement",
    meta: [
      { icon: "file-text", label: "Dossier de synthèse" },
      { icon: "target", label: "Stratégie de vœux" },
      { icon: "users", label: "Conseiller dédié" },
    ],
    why: [
      "On arrête vos choix et on bâtit une stratégie pour valoriser votre candidature.",
      "On vous accompagne sur la rédaction de vos motivations sur Parcoursup.",
      "Vous repartez avec un dossier de synthèse et des préconisations claires.",
    ],
    offer: "90% des ados vivent l'orientation comme un stress — on s'en occupe.",
  },
  ori_stage: {
    tier: "Bilan d'orientation · 15-25 ans",
    title: "Décrocher son stage ou son alternance",
    meta: [
      { icon: "file-text", label: "CV & lettres" },
      { icon: "message-circle", label: "Préparation entretiens" },
      { icon: "graduation-cap", label: "14-26 ans" },
    ],
    why: [
      "On prépare ensemble votre CV et vos lettres de motivation.",
      "On s'entraîne aux entretiens de sélection et de recrutement.",
      "On structure votre recherche pour ne plus avancer à l'aveugle.",
    ],
    offer: "Pour tout jeune entre 14 et 26 ans qui cherche sa place.",
  },

  // ---------- BILAN DE COMPÉTENCES ----------
  bilan_reconversion: {
    tier: "Bilan de compétences",
    title: "GEM<em>'</em>Premium",
    meta: [
      { icon: "clock", label: "19 h" },
      { icon: "euro", label: "2 395 €", price: true },
      { icon: "users", label: "12 h d'entretien" },
    ],
    why: [
      "L'exploration la plus complète pour préparer une reconversion totale.",
      "On analyse vos compétences transférables, vos valeurs et vos motivations.",
      "Vous repartez avec un projet réaliste et un plan d'action concret.",
    ],
    offer: "L'entretien de positionnement vous est OFFERT.",
  },
  bilan_evolution: {
    tier: "Bilan de compétences",
    title: "GEM<em>'</em>Confort",
    meta: [
      { icon: "clock", label: "17 h" },
      { icon: "euro", label: "1 995 €", price: true },
      { icon: "users", label: "10 h d'entretien" },
    ],
    why: [
      "Le bon équilibre pour faire le point et viser une évolution.",
      "On identifie les leviers pour évoluer, négocier, augmenter votre salaire.",
      "On sécurise votre parcours et on booste votre employabilité.",
    ],
    offer: "L'entretien de positionnement vous est OFFERT.",
  },
  bilan_confiance: {
    tier: "Bilan de compétences",
    title: "GEM<em>'</em>Bien-être",
    meta: [
      { icon: "clock", label: "21 h" },
      { icon: "euro", label: "2 749 €", price: true },
      { icon: "heart", label: "14 h d'entretien" },
    ],
    why: [
      "Le format le plus enveloppant pour (re)prendre confiance en soi.",
      "On s'appuie sur vos forces et vos acquis pour avancer apaisé.",
      "Une projection positive vers l'avenir, à votre rythme.",
    ],
    offer: "L'entretien de positionnement vous est OFFERT.",
  },

  // ---------- VAE ----------
  vae_decouvre: {
    tier: "VAE · validation des acquis",
    title: "Entretien de découverte",
    meta: [
      { icon: "gift", label: "Offert", price: true },
      { icon: "file-text", label: "Accompagnement Livret 1 · 295 €" },
      { icon: "calendar", label: "4 à 9 mois" },
    ],
    why: [
      "On vérifie ensemble que la VAE est la bonne voie pour vous.",
      "Dès 1 an d'expérience suffit, quel que soit votre âge ou statut.",
      "On choisit la certification (RNCP) en phase avec votre parcours.",
    ],
    offer: "L'entretien de découverte est offert — sans engagement.",
  },
  vae_livret: {
    tier: "VAE · validation des acquis",
    title: "Accompagnement Livret 2",
    meta: [
      { icon: "euro", label: "Dès 1 195 €", price: true },
      { icon: "clock", label: "10 à 40 h" },
      { icon: "users", label: "1 RDV / 7-10 jours" },
    ],
    why: [
      "On vous accompagne pas à pas dans la rédaction de votre Livret 2.",
      "Espace personnel sécurisé + visio avec votre consultant dédié.",
      "Objectif : un dossier qui démontre vos compétences au jury.",
    ],
    offer: "Des financements et aides sont possibles — on en parle.",
  },
  vae_jury: {
    tier: "VAE · validation des acquis",
    title: "Relecture & Jury blanc",
    meta: [
      { icon: "file-text", label: "Relecture · 595 €" },
      { icon: "users", label: "Jury blanc · 495 €" },
      { icon: "shield", label: "Mise en confiance" },
    ],
    why: [
      "On relit votre Livret 2 et on l'affûte avant dépôt.",
      "On simule le passage devant le jury pour arriver serein.",
      "Vous démontrez que vos acquis correspondent au diplôme visé.",
    ],
    offer: "Frais d'examen non inclus — tout le reste est balisé.",
  },

  // ---------- JE ME FORME ----------
  forme_entreprise: {
    tier: "Je me forme · création d'entreprise",
    title: "Création & reprise d'entreprise",
    meta: [
      { icon: "trending-up", label: "82% actives à 3 ans" },
      { icon: "euro", label: "Éligible CPF", price: true },
      { icon: "users", label: "+250 créateurs" },
    ],
    why: [
      "Business plan, financement, marketing, gestion — du concret, testé sur le terrain.",
      "Ateliers pratiques sur VOTRE projet + études de cas réelles.",
      "Un suivi personnalisé pendant et après la formation.",
    ],
    offer: "Éligible CPF, Pôle Emploi, OPCO — financement sur mesure.",
  },
  forme_immobilier: {
    tier: "Je me forme · immobilier",
    title: "Immobilier <em>« Comme une Pro »</em>",
    meta: [
      { icon: "building", label: "Loi ALUR" },
      { icon: "award", label: "Préparation BTS" },
      { icon: "target", label: "Négociation & juridique" },
    ],
    why: [
      "Validez vos heures de formation en Loi ALUR.",
      "Techniques de négociation, analyse de marché, fiscalité, juridique.",
      "Mobilisez l'IA pour augmenter vos ventes en mandat exclusif.",
    ],
    offer: "Préparez aussi votre diplôme en immobilier (BTS).",
  },
  forme_autres: {
    tier: "Je me forme · sur mesure",
    title: "Finance, communication & vente",
    meta: [
      { icon: "sparkles", label: "Nouveau · 2026" },
      { icon: "users", label: "Intra ou individuel" },
      { icon: "message-circle", label: "Sur devis" },
    ],
    why: [
      "Des parcours en finance, communication et techniques de vente.",
      "Formateurs experts, contenus pédagogiques de pointe.",
      "On construit le programme autour de votre besoin réel.",
    ],
    offer: "Ces parcours arrivent — parlons de votre projet dès maintenant.",
  },
};

const FLOW = {
  start: {
    eyebrow: "Faites le choix de la liberté",
    q: "Où en êtes-vous <em>aujourd'hui</em> ?",
    hint: "Choisissez ce qui vous ressemble le plus — comme en rendez-vous.",
    cols: 2,
    options: [
      { key: "A", icon: "compass", t: "Je cherche ma voie", s: "Lycéen, étudiant · 15-25 ans", next: "q_ori" },
      { key: "B", icon: "refresh", t: "Je veux changer, faire le point", s: "Salarié, en reconversion", next: "q_bilan" },
      { key: "C", icon: "award", t: "Je veux valider mon expérience", s: "Au moins 1 an de métier", next: "q_vae" },
      { key: "D", icon: "trending-up", t: "Je veux monter en compétences", s: "Entreprise, immobilier, vente", next: "q_forme" },
    ],
  },
  q_ori: {
    eyebrow: "Orientation",
    q: "Qu'est-ce qui vous <em>bloque</em> le plus ?",
    hint: "L'orientation est un casse-tête ? On déroule le fil.",
    options: [
      { key: "1", icon: "map", t: "Choisir une filière, une spécialité", s: "Je ne sais pas quelle voie prendre", result: "ori_filiere" },
      { key: "2", icon: "file-text", t: "Réussir Parcoursup, mes vœux", s: "Réformes, sélection, motivations", result: "ori_parcoursup" },
      { key: "3", icon: "message-circle", t: "Décrocher un stage, une alternance", s: "CV, lettres, entretiens", result: "ori_stage" },
    ],
  },
  q_bilan: {
    eyebrow: "Bilan de compétences",
    q: "Votre <em>objectif</em> principal ?",
    hint: "Choisissez le bilan qui vous ressemble — on l'ajuste ensuite.",
    options: [
      { key: "1", icon: "refresh", t: "Une reconversion complète", s: "Changer de métier, de cap", result: "bilan_reconversion" },
      { key: "2", icon: "trending-up", t: "Évoluer, négocier mon salaire", s: "Avancer là où je suis", result: "bilan_evolution" },
      { key: "3", icon: "heart", t: "Reprendre confiance, faire le point", s: "Me retrouver, m'apaiser", result: "bilan_confiance" },
    ],
  },
  q_vae: {
    eyebrow: "VAE",
    q: "Où en êtes-vous dans votre <em>VAE</em> ?",
    hint: "Validation des Acquis de l'Expérience — à chaque étape, un appui.",
    options: [
      { key: "1", icon: "compass", t: "Je découvre, je me renseigne", s: "Est-ce fait pour moi ?", result: "vae_decouvre" },
      { key: "2", icon: "file-text", t: "Je rédige mon Livret 2", s: "J'ai choisi ma certification", result: "vae_livret" },
      { key: "3", icon: "shield", t: "Je prépare le jury", s: "Relecture, jury blanc", result: "vae_jury" },
    ],
  },
  q_forme: {
    eyebrow: "Je me forme",
    q: "Quel <em>domaine</em> vous attire ?",
    hint: "Des formations concrètes, animées par des experts du terrain.",
    options: [
      { key: "1", icon: "briefcase", t: "Création / reprise d'entreprise", s: "De l'idée à la réussite", result: "forme_entreprise" },
      { key: "2", icon: "building", t: "Immobilier", s: "Loi ALUR, BTS, « Comme une Pro »", result: "forme_immobilier" },
      { key: "3", icon: "layers", t: "Finance, communication, vente", s: "Parcours sur mesure", result: "forme_autres" },
    ],
  },
};

window.FLOW = FLOW;
window.RESULTS = RESULTS;
