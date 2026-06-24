// ORGANISED VANILLA TYPESCRIPT FOR AGBANAN ELISE PORTFOLIO
// NO REACT / NO RUNTIME FOOTPRINT - HIGH-PERFORMANCE MODERN WEB CONTROL

import './index.css';

// // 1. PROJECT DATA ENGINE
interface Project {
  id: number;
  title: string;
  category: string; // 'client' | 'mobile' | 'web'
  tagline: string;
  technologies: string[];
  context: string;
  problem: string;
  role: string;
  features: string[];
  challenges: string;
  skillsGained: string[];
  year: string;
  status: string;
  mainImage: string;
  objectives: string[];
  solutions: string[];
  gallery: { url: string; title: string; description: string }[];
}

const PROJECTS_DATABASE: Record<number, Project> = {
  1: {
    id: 1,
    title: "Wellness Thérapie",
    category: "client",
    tagline: "Plateforme web professionnelle complète pour un cabinet de kinésithérapie à Lomé.",
    technologies: ["WordPress", "Elementor Pro", "PHP local", "Astra Theme", "SEO Local", "CSS3 / HTML5"],
    context: "Projet de commande réelle développé en autonomie complète pour répondre aux besoins d'un cabinet de soin de kinésithérapie sous-médical cherchant à moderniser son image publique et son acquisition à Lomé.",
    problem: "Absence de présence sur les moteurs de recherche pour le cabinet entraînant un manque à gagner local. Prise de rendez-vous fastidieuse effectuée à la main exclusivement par appels téléphoniques, saturant le secrétariat médical.",
    role: "Développeur web & Concepteur UX principal. En charge de la conception ergonomique, développement de la charte de couleurs, personnalisation des templates WordPress, configuration administrative du module de réservations et optimisation du référencement local (SEO).",
    features: [
      "Système de réservation en ligne interactif avec choix autonome du créneau de soin par le patient.",
      "Blog santé administrable permettant la publication d'articles de prévention ergonomique et de soin.",
      "Module FAQ dynamique répondant aux interrogations fréquentes des patients.",
      "Page contact immersive avec formulaire de filtrage du type de pathologie et intégration de carte Google Maps."
    ],
    challenges: "Assurer un temps de chargement éclair pour les réseaux mobiles togolais fluctuants, malgré l'usage de constructeurs de pages graphiques denses. Résolu par l'optimisation drastique des images (format WebP) et la désactivation des scripts superflus de WordPress.",
    skillsGained: ["Maîtrise complète de l'architecture d'intégration CMS", "Optimisation SEO Local ", "Relation client directe"],
    year: "2024",
    status: "Développé & prêt à l'hébergement",
    mainImage: "/src/images/wellness/wellnessTherapie.PNG",
    objectives: [
      "Moderniser l'image de marque du cabinet et digitaliser complètement la prise de rendez-vous pour alléger le secrétariat.",
      "Développer un référencement local performant ciblant des requêtes spécialisées pour capter de nouveaux clients à Lomé.",
      "Garantir un temps d'accès extrêmement rapide (LCP < 1.5s) pour s'adapter à la connexion mobile fluctuante au Togo."
    ],
    solutions: [
      "Intégration d'un module de prise de rendez-vous personnalisé (Bookly) asynchrone avec validation automatique.",
      "Optimisation poussée des performances mobiles : compression WebP, minification CSS, déchargement partiel du header.",
      "Création de pages thématiques structurées par pathologie pour maximiser le maillage interne et le SEO sémantique local."
    ],
    gallery: [
      {
        url: "/src/images/wellness/wellnessTherapie.PNG",
        title: "Page d'accueil clinique",
        description: "Vue principale du site mettant en avant les spécialités de kinésithérapie et le calendrier d'inscription."
      },
      {
        url: "/src/images/wellness/rdv.PNG",
        title: "Formulaire de Réservation",
        description: "Calendrier de réservation fluide facilitant le choix de créneaux autonomes par les patients."
      },
      {
        url: "/src/images/wellness/blog.PNG",
        title: "Section Blog Santé",
        description: "Structure éditoriale et fiches conseils d'ergonomie pour stimuler le trafic d'acquisition local."
      }
    ]
  },
  2: {
    id: 2,
    title: "DinEase",
    category: "mobile",
    tagline: "MVP d'application mobile géolocalisée d'affichage de restaurants par plage de budget.",
    technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "ClickUp", "UML Modeling"],
    context: "Projet entrepreneurial de groupe développé au cours de la L1, conçu pour aider les résidents de Lomé à organiser leurs repas journaliers de manière stratégique selon leurs moyens financiers réels.",
    problem: "Les applications de livraison existantes cachent souvent le coût total ou ciblent les restaurants hauts de gamme. Il n'existait pas de moyen d'identifier de petits points de restauration de quartier (maquis) proposant des repas sains pour des budgets serrés (ex. 1000 - 1500 FCFA).",
    role: "Chef de projet & Lead développeur Flutter. Responsable de la mise en place de la structure Dart globale de l'application mobile, de l'élaboration du schéma de données NoSQL asynchrone et de la coordination des tâches via ClickUp.",
    features: [
      "Authentification utilisateur sécurisée via Firebase Authentication.",
      "Filtre asynchrone interactif par curseur de budget (ex. FCFA, Euros) en temps réel.",
      "Affichage géo-localisé des établissements correspondants avec fiches de produits clairs.",
      "Système de sauvegarde des restaurants favoris de l'utilisateur."
    ],
    challenges: "Maintenir une consommation de données internet minimale sur mobile. Résolu par l'implémentation de caches de cache locaux robustes dans le plugin Firestore, évitant les téléchargements de données redondants.",
    skillsGained: ["Gestion d'état au sein de Flutter (State Management)", "Conception de schémas NoSQL extensibles", "Coordination d'équipe en méthodes agiles", "Modélisation UML fine"],
    year: "2024",
    status: "MVP en cours de correction",
    mainImage: "/src/images/dinease/dinease.jpeg",
    objectives: [
      "Bâtir un MVP fonctionnel permettant de filtrer instantanément les restaurants locaux selon son budget restant en FCFA.",
      "Conserver de très hauts standards d'accessibilité hors-ligne en maintenant en cache les données précédemment lues.",
      "Organiser le backlog projet en sprints agiles rigoureux pour garantir un livrable stable en un temps record."
    ],
    solutions: [
      "Utilisation de Flutter/Dart avec bloc d'état (Cubit/Provider) pour gérer les événements du slider de budget instantanément.",
      "Configuration fine de Cloud Firestore avec persistance locale hors-ligne et indexation sémantique sur la géo-localisation.",
      "Pilotage collaboratif avec modélisation UML des cas d'utilisation et fiches fonctionnelles détaillées sur ClickUp."
    ],
    gallery: [
      {
        url: "/src/images/dinease/dinease.jpeg",
        title: "Écran d'Accueil & Choix du Budget",
        description: "Vue principale avec filtrage instantané selon la plage de budget de l'utilisateur."
      },
      {
        url: "/src/images/dinease/restoScreen.jpeg",
        title: "Liste des Restaurants & Maquis",
        description: "Affichage dynamique des établissements recommandés à Lomé avec prix transparents."
      },
      {
        url: "/src/images/dinease/detailscreen.jpeg",
        title: "Fiche Établissement Détaillée",
        description: "Détails complets, menu et coordonnées de l'établissement sélectionné."
      },
      {
        url: "/src/images/dinease/firestore.PNG",
        title: "Persistance Cloud Firestore",
        description: "Schéma de données asynchrone NoSQL optimisé pour un chargement hors-ligne rapide."
      },
      {
        url: "/src/images/dinease/logo.jpeg",
        title: "Logotype Officiel DinEase",
        description: "Conception graphique et charte d'identité visuelle de la startup mobile."
      }
    ]
  },
  3: {
    id: 3,
    title: "Platform Building",
    category: "web",
    tagline: "Portail immobilier robuste et de location d'outillages de construction en architecture MVC.",
    technologies: ["PHP Objet", "MySQL Database", "HTML5 / CSS3", "JavaScript Native", "AJAX", "MVC Maison"],
    context: "Projet académique dense en L2, axé sur l'élaboration d'un système robuste d'annonces de bâtiments et d'équipements de chantiers à Lomé.",
    problem: "Dispersion des offres de matériels pour les maçons et promoteurs à Lomé, et complexité d'accéder à des fiches de qualité pour les locations foncières à courte durée.",
    role: "Chef de projet & principal développeur Backend. En charge d'élaborer de toute pièce un modèle MVC (Modèle-Vue-Contrôleur) natif en PHP, d'optimiser l'organisation des données de la base MySQL et d'implémenter des interactions graphiques dynamiques.",
    features: [
      "Contrôle d'accès et rôles modulaires (Admin d'agence, Propriétaire, Locataire).",
      "Upload d'images sécurisé et système d'enregistrement d'annonces avec pièces jointes.",
      "Dashboard d'administration pour valider ou rejeter les annonces de matériel.",
      "Filtre de recherche asynchrone propulsé par des requêtes de communication AJAX."
    ],
    challenges: "Structurer un code PHP orienté objet et un routage d'URL propre sans utiliser de framework lourd externe (comme Laravel). Nous avons réussi à bâtir notre propre routeur léger d'URL de manière rigoureuse.",
    skillsGained: ["Maîtrise fine du paradigme MVC en programmation", "Sécurisation asynchrone des formulaires et des téléversements (Uploads)", "Requêtes relationnelles SQL imbriquées sous MySQL", "Liaisons AJAX fluides"],
    year: "2024",
    status: "Terminé (Livrable d'études validé)",
    mainImage: "/src/images/building/building.PNG",
    objectives: [
      "Mettre en relation directe promoteurs immobiliers et maçons/artisans pour la location d'engins et d'outils de chantiers.",
      "Bâtir une architecture de type MVC d'origine sans s'appuyer sur des frameworks lourds pour comprendre pleinement PHP objet.",
      "Sécuriser les flux d'uploads multiples de fichiers lourds d'illustrations d'équipements pour chaque publication."
    ],
    solutions: [
      "Développement d'un routeur d'URL personnalisé en POO gérant le routage sémantique, le parsing et le rendu HTML.",
      "Implémentation d'un contrôle d'accès granulaire (Admin, Manditaire d'équipements, Client) et chiffrement de mot de passe Bcrypt.",
      "Scripts de téléversements asynchrones AJAX gérant la validation de sécurité MIME, l'isolation par hash de répertoire et le redimensionnement."
    ],
    gallery: [
      {
        url: "/src/images/building/building.PNG",
        title: "Fiches de Matériels de Chantier",
        description: "Aperçu de la vue d'administration centralisant le catalogue d'annonces et l'état des validations foncières."
      },
      {
        url: "/src/images/building/about_hero.PNG",
        title: "Fiches de Matériels de Chantier",
        description: "Aperçu de la vue d'administration centralisant le catalogue d'annonces et l'état des validations foncières."
      },
      {
        url: "/src/images/building/avis_form.PNG",
        title: "Fiches de Matériels de Chantier",
        description: "Aperçu de la vue d'administration centralisant le catalogue d'annonces et l'état des validations foncières."
      },
      {
        url: "/src/images/building/avis.PNG",
        title: "Fiches de Matériels de Chantier",
        description: "Aperçu de la vue d'administration centralisant le catalogue d'annonces et l'état des validations foncières."
      },
      {
        url: "/src/images/building/admin_1.PNG",
        title: "Fiches de Matériels de Chantier",
        description: "Aperçu de la vue d'administration centralisant le catalogue d'annonces et l'état des validations foncières."
      },
      {
        url: "/src/images/building/login_form.PNG",
        title: "Fiches de Matériels de Chantier",
        description: "Aperçu de la vue d'administration centralisant le catalogue d'annonces et l'état des validations foncières."
      },
      {
        url: "/src/images/building/register_form.PNG",
        title: "",
        description: ""
      },
      {
        url: "/src/images/building/contact_form.PNG",
        title: "",
        description: ""
      }
    ]
  },
  4: {
    id: 4,
    title: "DistriPay",
    category: "mobile",
    tagline: "Application de paiement intelligent et de commande connectée pour distributeurs physiques.",
    technologies: ["Flutter", "Dart", "Firebase Database", "Firebase Auth", "IoT ESP32 simulation", "UML"],
    context: "Projet d'études collaboratif reliant une application Android/iOS à la logique d'un distributeur automatique connecté intelligent fictif.",
    problem: "Lenteurs d'attente aux guichets de distribution d'articles et de boissons, perte de pièces de monnaie physiques et manque de visibilité en temps réel sur la variation des stocks.",
    role: "Principal développeur mobile Flutter. Intégrateur système du module de connexion avec Firebase et créateur des flux asynchrones d'état d'achat.",
    features: [
      "Authentification des clients et gestion de solde en FCFA directement sur mobile.",
      "Achat rapide en un clic et génération de commande instantanée dans l'historique.",
      "Actualisation automatique des volumes de stock par écouteurs Firestore réactifs.",
      "Déclenchement asynchrone de signaux simulant l'activation de moteurs physiques d'un microcontrôleur ESP32."
    ],
    challenges: "La communication instantanée et la prévention des conditions de course concurrentes (deux utilisateurs achetant le dernier produit en même temps). Résolu par des transactions atomic Firestore sécurisées.",
    skillsGained: ["Introduction aux mécaniques de l'IoT et aux protocoles asynchrones", "Gestion de flux NoSQL de haute réactivité (Firestore Streams)", "Sécurisation de transactions financières"],
    year: "2024",
    status: "MVP fonctionnel testé en simulation",
    mainImage: "/src/images/distripay/product.PNG",
    objectives: [
      "Concevoir un écosystème de commandes sans contact interconnectant application mobile Android/iOS, cloud et distributeur physique.",
      "Prévenir la surcharge de commandes simultanées de stocks limités en gérant des transactions atomiques sécurisées.",
      "Modéliser le protocole de communication asynchrone simulant l'activation physique de la puce ESP32."
    ],
    solutions: [
      "Mise en œuvre des streams réactifs de Cloud Firestore pour diffuser immédiatement le nouveau crédit de l'utilisateur.",
      "Configuration de transactions Firestore atomic prévenant toute double vente d'articles si le stock comptable est nul.",
      "Simulation d'un WebSocket/MQTT captant le changement d'état d'un flag pour signifier le déclenchement des moteurs du distributeur."
    ],
    gallery: [
      {
        url: "/src/images/distriPay/login.PNG",
        title: "",
        description: ""
      },
      {
        url: "/src/images/distriPay/register.PNG",
        title: "",
        description: ""
      },
      {
        url: "/src/images/distriPay/achat.PNG",
        title: "",
        description: ""
      }
    ]
  },
  5: {
    id: 5,
    title: "Lavage Auto Pro",
    category: "web",
    tagline: "Plateforme interne de suivi financier et d'attribution de tickets pour station de lavage.",
    technologies: ["PHP", "HTML5", "CSS3", "JavaScript Vanilla", "MySQL Database", "Merise Scheme"],
    context: "Projet concret de fin d'année universitaire visant à digitaliser la gestion d'une station de nettoyage de voitures dense à Lomé.",
    problem: "Le suivi de l'entreprise sur carnets papier causait des fraudes récurrentes, des oublis de calculs de rémunération pour les employés laveurs (payés à la commission), et l'incapacité de visualiser les pics d'activité.",
    role: "Développeur de l'architecture backend et de la base relationnelle MySQL. En charge de la conception SQL selon la méthode de modélisation Merise.",
    features: [
      "Création d'un ticket de lavage dès l'arrivée du client (type de formule, plaque d'immatriculation).",
      "Attribution en direct du véhicule à un laveur disponible selon les rôles d'équipe.",
      "Module d'encaissement consolidé et historique récapitulatif comptable.",
      "Calculateurs de commissions mensuels simplifiés pour l'ensemble des agents."
    ],
    challenges: "Rendre l'application extrêmement sobre pour qu'elle soit facilement utilisable sur des vieux smartphones d'entrée de gamme par les chefs d'atelier. Résolu par un code HTML pur et un style CSS minimaliste.",
    skillsGained: ["Modélisation et conception de base de données relationnelle (MCD/MLD Merise)", "Maîtrise des jointures SQL complexes", "Prise en main des enjeux d'ergonomie terrain"],
    year: "2024",
    status: "Terminé et validé academiquement",
    mainImage: "/src/images/lavageautopro/home.PNG",
    objectives: [
      "Digitaliser le parcours de lavage en temps réel, de la création de la plaque d'immatriculation à la comptabilité variable.",
      "Garantir une traçabilité financière totale pour éliminer les vols de caisses répétés.",
      "Créer une vue performante et lisible fonctionnant de façon fluide sur d'anciens téléphones Android à Lomé."
    ],
    solutions: [
      "Conception modulaire Merise structurant formellement les liens d'association logiques (Client Laveur-Vente).",
      "Élaboration de requêtes SQL optimisées avec jointures complexes calculant automatiquement la commission à l'acte.",
      "Style minimaliste éliminant les scripts js parasites pour descendre la taille de chargement de page sous les 40 Ko."
    ],
    gallery: [
      {
        url: "/src/images/lavageautopro/login.PNG",
        title: "",
        description: ""
      },
      {
        url: "/src/images/lavageautopro/admin_service.PNG",
        title: "Générateur de ticket de lavage",
        description: "Formulaire d'ouverture de dossier simplifié pour les superviseurs terrain à l'accueil."
      },
      {
        url: "/src/images/lavageautopro/admin_dash.PNG",
        title: "",
        description: ""
      }
    ]
  }
};

// --- MODULE DES EXPÉRIENCES PROFESSIONNELLES (AJOUT) ---
interface Experience {
  id: number;
  poste: string;
  organisation: string;
  typeContrat: string;
  dateDebut: string;
  dateFin: string;
  localisation: string;
  description: string;
  missions: { title: string; tasks: string[] }[];
  competences: string[];
  technologies: string[];
  realisations: string[];
  cin?: string;
  logoText: string;
  logoBg: string;
}

const EXPERIENCES_DATABASE: Experience[] = [
  {
    id: 1,
    poste: "Full Stack Web Development Intern",
    organisation: "Future Interns",
    typeContrat: "Stage à distance (Remote Internship)",
    dateDebut: "11 Juin 2026",
    dateFin: "11 Juillet 2026",
    localisation: "À distance",
    cin: "FIT/JUN26/FS18610",
    logoText: "FI",
    logoBg: "from-blue-600 to-indigo-600",
    description: "Participation au programme international de stage de Future Interns en tant que stagiaire Full Stack Web Development. Réalisation de projets pratiques denses couvrant le développement de produits web modernes (conception d'interfaces utilisateurs animées, bases de données relationnelles, formulaires asynchrones et méthodologies de gestion de projets techniques).",
    missions: [
      {
        title: "Task 1 — Personal Professional Portfolio Website",
        tasks: [
          "Conception et modélisation d'une interface web moderne, optimisée pour mobile, tablette et desktop.",
          "Présentation structurée et interactive des compétences clés, des projets terminés et du parcours académique.",
          "Création d'un formulaire de contact asynchrone sécurisé avec validation instantanée côté client.",
          "Optimisation fine du référencement naturel (SEO) et de la performance globale de chargement.",
          "Amélioration de l'ergonomie utilisateur globale grâce à l'intégration de micro-animations fluides."
        ]
      },
      {
        title: "Task 2 — Client Lead Management System (Mini CRM)",
        tasks: [
          "Développement complet d'une application de gestion de prospects (Mini CRM) responsive.",
          "Implémentation intégrale des opérations d'écriture et de lecture dans la base de données (CRUD complet).",
          "Mise en place d'un tableau d'état dynamique pour suivre les opportunités commerciales selon leur statut.",
          "Connexion asynchrone sécurisée avec le backend pour synchroniser l'affichage en temps réel.",
          "Sécurisation des saisies et contrôle sémantique strict des formulaires pour éliminer les injections de données."
        ]
      },
      {
        title: "Task 3 — Local Business Website Project",
        tasks: [
          "Création sur-mesure d'un site vitrine haut de gamme et responsive pour le compte d'une entreprise locale.",
          "Modélisation UX/UI moderne mettant en avant l'identité sémantique et les forces commerciales du client.",
          "Présentation physique et démonstration directe de la solution technique au propriétaire de l'établissement.",
          "Mise en avant stratégique de la valeur commerciale ajoutée par la transformation digitale du commerce."
        ]
      }
    ],
    technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "Responsive Design", "UI/UX Design"],
    competences: ["Git", "GitHub", "VS Code Workflow", "Gestion de projet technique", "Qualité & SEO"],
    realisations: [
      "Conception et déploiement mondial d'un portfolio hautement interactif et performant accessible en ligne.",
      "Mise en place d'une architecture de dépôts GitHub propre et documentée pour assurer le suivi d'équipe des projets.",
      "Réalisation de projets informatiques complets de bout en bout répondant directement à des besoins réels du marché.",
      "Adoption stricte des bonnes pratiques d'ingénierie logicielle (contrôle de version, documentation technique sémantique et clean code)."
    ]
  }
];

// 2. LAUNCH CONTROLLER ON COMPLETE DOM LOAD
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileMenu();
  initSkillsFilter();
  initProjectsFilter();
  initProjectModals();
  initExperiences();
  initContactForm();
  initEmailCopy();
  initDevToolbox();
});

// NAVIGATION ADJUSTMENT ON WINDOW SCROLL
function initNavbarScroll(): void {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("bg-brand-dark/90", "backdrop-blur-md", "shadow-xl", "py-2");
      navbar.classList.remove("py-0");
    } else {
      navbar.classList.remove("bg-brand-dark/90", "backdrop-blur-md", "shadow-xl", "py-2");
    }
  });
}

// TOGGLING MOBILE Hamburger MENU
function initMobileMenu(): void {
  const btn = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-drawer");
  const iconOpen = document.getElementById("menu-icon-open");
  const iconClose = document.getElementById("menu-icon-close");
  const links = document.querySelectorAll(".mobile-link");

  if (!btn || !drawer || !iconOpen || !iconClose) return;

  const toggle = () => {
    const isHidden = drawer.classList.contains("hidden");
    if (isHidden) {
      drawer.classList.remove("hidden");
      iconOpen.classList.add("hidden");
      iconClose.classList.remove("hidden");
    } else {
      drawer.classList.add("hidden");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    }
  };

  btn.addEventListener("click", toggle);

  links.forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.add("hidden");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    });
  });
}

// INTERACTIVE TECH SKILLS CATEGORIZATION TABS
function initSkillsFilter(): void {
  const tabButtons = document.querySelectorAll<HTMLButtonElement>("[data-skill-tab]");
  const skillCards = document.querySelectorAll<HTMLElement>(".skill-card-block");

  if (tabButtons.length === 0) return;

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedCategory = btn.getAttribute("data-skill-tab");
      if (!selectedCategory) return;

      // Reset all buttons visual accent
      tabButtons.forEach(b => {
        b.classList.remove("bg-brand-blue", "text-white");
        b.classList.add("text-slate-400", "hover:text-white", "hover:bg-white/[0.02]");
      });

      // Highlight active button
      btn.classList.add("bg-brand-blue", "text-white");
      btn.classList.remove("text-slate-400", "hover:text-white", "hover:bg-white/[0.02]");

      // Filter cards
      skillCards.forEach(card => {
        const categories = card.getAttribute("data-skill-cat") || "";
        if (selectedCategory === "all" || categories.includes(selectedCategory)) {
          card.classList.remove("hidden");
          card.style.opacity = "1";
        } else {
          card.classList.add("hidden");
          card.style.opacity = "0";
        }
      });
    });
  });
}

// PORTFOLIO PROJECTS GRID FILTERING
function initProjectsFilter(): void {
  const filterButtons = document.querySelectorAll<HTMLButtonElement>("[data-project-filter]");
  const cards = document.querySelectorAll<HTMLElement>(".project-portfolio-card");

  if (filterButtons.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const activeFilter = btn.getAttribute("data-project-filter");
      if (!activeFilter) return;

      // Update button visual styles
      filterButtons.forEach(b => {
        b.classList.remove("bg-brand-blue", "text-white");
        b.classList.add("text-slate-400", "hover:text-white", "hover:bg-white/[0.02]");
      });

      btn.classList.add("bg-brand-blue", "text-white");
      btn.classList.remove("text-slate-400", "hover:text-white", "hover:bg-white/[0.02]");

      // Animate and filter project card visibility
      cards.forEach(card => {
        const categoryData = card.getAttribute("data-[#project-cat]") || "";
        const isMatch = activeFilter === "all" || categoryData.toLowerCase().includes(activeFilter.toLowerCase());

        if (isMatch) {
          card.classList.remove("hidden");
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.classList.add("hidden");
          }, 300);
        }
      });
    });
  });
}

// RENDER DETAILED PROPOSAL MODAL COMPONENT ON CLICK
function initProjectModals(): void {
  const openButtons = document.querySelectorAll<HTMLButtonElement>(".open-project-modal-btn");
  const modal = document.getElementById("project-detail-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const modalContentContainer = document.getElementById("modal-content");

  if (!modal || !closeModalBtn || !modalContentContainer) return;

  const showModal = (index: number) => {
    const data = PROJECTS_DATABASE[index];
    if (!data) return;

    // Identify category label and color theme
    const isMobile = data.category === 'mobile';
    const accentClass = data.category === 'client' ? 'text-emerald-400' : (isMobile ? 'text-blue-400' : 'text-cyan-400');
    const borderAccentClass = data.category === 'client' ? 'border-emerald-500/20' : (isMobile ? 'border-blue-500/20' : 'border-cyan-500/20');
    const bgAccentClass = data.category === 'client' ? 'bg-emerald-500/5' : (isMobile ? 'bg-blue-500/5' : 'bg-cyan-500/5');

    // Render premium immersive dual-column product-styled layout
    modalContentContainer.innerHTML = `
      <div class="space-y-8 select-none">

        <!-- I. OVERSIZED PRODUCT PAGE TITLE & HEADER BANNER -->
        <div class="relative w-full h-48 sm:h-64 rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl">
          <div class="absolute inset-0 bg-cover bg-center filter blur-md opacity-25 scale-105" style="background-image: url('${data.mainImage}');"></div>
          <img src="${data.mainImage}" alt="${data.title}" class="absolute inset-0 w-full h-full object-cover object-top opacity-90 mix-blend-screen" referrerPolicy="no-referrer" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20"></div>

          <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-left space-y-2">
            <span class="text-[9px] font-mono tracking-widest ${accentClass} bg-white/[0.02] border ${borderAccentClass} px-2.5 py-1 rounded-full uppercase">
              🚀 Case Study #${data.id}
            </span>
            <h2 class="text-2xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mt-1.5">${data.title}</h2>
            <p class="text-xs sm:text-sm text-slate-300 font-sans max-w-2xl font-light">${data.tagline}</p>
          </div>
        </div>

        <!-- II. SEGMENTED METADATA TABLE -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl text-left">
          <div class="space-y-1">
            <span class="block text-[10px] text-slate-500 uppercase font-mono tracking-wider">📦 Rôle exact</span>
            <span class="text-xs font-semibold text-slate-200">Lead Développeur / Concepteur</span>
          </div>
          <div class="space-y-1">
            <span class="block text-[10px] text-slate-500 uppercase font-mono tracking-wider">📅 Année de Dev</span>
            <span class="text-xs font-semibold text-slate-200">${data.year}</span>
          </div>
          <div class="space-y-1">
            <span class="block text-[10px] text-slate-500 uppercase font-mono tracking-wider">💡 Statut Livrable</span>
            <span class="text-xs font-medium ${accentClass} flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full ${accentClass === 'text-emerald-400' ? 'bg-emerald-400' : (accentClass === 'text-blue-400' ? 'bg-blue-400' : 'bg-cyan-400')} animate-pulse"></span>
              ${data.status}
            </span>
          </div>
          <div class="space-y-1">
            <span class="block text-[10px] text-slate-500 uppercase font-mono tracking-wider">📁 Code Source</span>
            <a href="https://github.com/aelise-lia27" target="_blank" class="text-xs font-bold text-brand-blue hover:underline inline-flex items-center gap-1">
              Voir sur GitHub
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>
        </div>

        <!-- III. RESPONSIVE DUAL-COLUMN LAYOUT -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">

          <!-- LEFT COLUMN (STORYTELLING ARCHITECTURE) -->
          <div class="lg:col-span-7 space-y-6 text-left">

            <!-- Context card -->
            <div class="bg-white/[0.01] border border-white/[0.03] rounded-2xl p-5 space-y-3">
              <h3 class="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <svg class="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                I. Contexte général &amp; Motivation
              </h3>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">${data.context}</p>

              <div class="pt-3 border-t border-white/[0.04]">
                <span class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">🎯 Objectifs stratégiques fixés :</span>
                <ul class="space-y-2">
                  ${data.objectives.map(obj => `
                    <li class="flex items-start gap-2.5 text-xs text-slate-300">
                      <span class="w-1.5 h-1.5 rounded-full ${accentClass === 'text-emerald-400' ? 'bg-emerald-400' : (accentClass === 'text-blue-400' ? 'bg-blue-400' : 'bg-cyan-400')} shrink-0 mt-1.5"></span>
                      <span>${obj}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <!-- Problem vs Solution splitting blocks -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-5 ${bgAccentClass} border ${borderAccentClass} rounded-2xl space-y-2">
                <span class="font-extrabold text-xs text-rose-400 tracking-wider uppercase font-mono flex items-center gap-1.5">
                  🛑 Problématique levée
                </span>
                <p class="text-xs text-slate-300 leading-relaxed">${data.problem}</p>
              </div>
              <div class="p-5 bg-white/[0.01] border border-white/[0.05] rounded-2xl space-y-2">
                <span class="font-extrabold text-xs text-emerald-400 tracking-wider uppercase font-mono flex items-center gap-1.5">
                  ✔ Réponse &amp; Architecture
                </span>
                <p class="text-xs text-slate-300 leading-relaxed">${data.solutions[0]}</p>
              </div>
            </div>

            <!-- Functional key features -->
            <div class="space-y-3 pt-2">
              <h3 class="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <svg class="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                II. Fonctionnalités Qualitatives Implémentées
              </h3>
              <div class="grid grid-cols-1 gap-3">
                ${data.features.map((feature, fIdx) => `
                  <div class="flex items-start gap-3 p-3 bg-white/[0.01] border border-white/[0.03] rounded-xl hover:bg-white/[0.02] transition-colors duration-200">
                    <span class="w-5 h-5 rounded-lg ${bgAccentClass} border ${borderAccentClass} text-[10px] sm:text-xs font-mono font-bold text-slate-200 flex items-center justify-center shrink-0">
                      0${fIdx + 1}
                    </span>
                    <div class="space-y-0.5">
                      <span class="text-xs font-bold text-slate-200">${feature}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Complex performance resolution block -->
            <div class="p-5 bg-amber-500/5 border border-amber-500/10 rounded-2xl space-y-3">
              <h4 class="text-xs font-extrabold text-amber-400 tracking-wider uppercase font-mono flex items-center gap-1.5">
                ⚡ Défi d'Ingénierie &amp; Solution fine
              </h4>
              <p class="text-xs text-slate-300 leading-relaxed font-sans">${data.challenges}</p>
            </div>

          </div>

          <!-- RIGHT COLUMN (MEDIA ASSETS & TECH SPECS SIDEBAR) -->
          <div class="lg:col-span-5 space-y-6 text-left border-t lg:border-t-0 border-white/[0.05] pt-6 lg:pt-0 lg:pl-6 lg:border-l">

            <!-- Interactive Image Gallery Viewer Widget -->
            <div class="space-y-3">
              <h3 class="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <svg class="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                III. Capture d'écran interactive
              </h3>

              <!-- Selected main viewport view -->
              <div class="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.06] bg-slate-950 shadow-xl group cursor-zoom-in">
                <img id="modal-gallery-main" src="${data.gallery[0] ? data.gallery[0].url : data.mainImage}" alt="${data.title}" class="w-full h-full object-cover transition-all duration-300 group-hover:scale-[1.02]" referrerPolicy="no-referrer" />
              </div>

              <!-- Thumbnails grid navigation -->
              <div class="grid grid-cols-3 gap-2">
                ${data.gallery.map((img, i) => `
                  <button class="modal-gallery-thumb-btn relative aspect-[14/9] rounded-xl overflow-hidden border ${i === 0 ? 'border-brand-blue/80' : 'border-white/[0.05]'} hover:border-brand-blue/60 transition-all focus:outline-none cursor-pointer" data-img-url="${img.url}" data-img-title="${img.title}" data-img-desc="${img.description}">
                    <img src="${img.url}" alt="${img.title}" class="w-full h-full object-cover transition-transform duration-300" referrerPolicy="no-referrer" />
                    <div class="absolute inset-0 bg-slate-950/20 hover:bg-transparent transition-colors"></div>
                  </button>
                `).join('')}
              </div>

              <!-- Dynamic caption footer -->
              <div class="p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl text-left space-y-1">
                <h4 id="modal-gallery-caption-title" class="text-xs font-bold text-white">${data.gallery[0] ? data.gallery[0].title : data.title}</h4>
                <p id="modal-gallery-caption-desc" class="text-[11px] text-slate-400 leading-relaxed font-light">${data.gallery[0] ? data.gallery[0].description : data.tagline}</p>
              </div>
            </div>

            <!-- Technology pills -->
            <div class="space-y-3 pt-2">
              <span class="block text-[11px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">IV. Stack technologique</span>
              <div class="flex flex-wrap gap-1.5">
                ${data.technologies.map(tech => `
                  <span class="text-[10px] font-mono bg-white/[0.03] text-brand-blue border border-brand-blue/15 px-2.5 py-1 rounded-md hover:border-brand-blue/30 duration-200">
                    ${tech}
                  </span>
                `).join('')}
              </div>
            </div>

            <!-- Soft/Hard skills Gained -->
            <div class="space-y-3 pt-2">
              <span class="block text-[11px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">V. Compétences Validées</span>
              <div class="space-y-2">
                ${data.skillsGained.map((sk) => `
                  <div class="flex items-center gap-2 p-2 bg-slate-900/60 border border-white/[0.02] rounded-xl text-[11px]">
                    <span class="w-1.5 h-1.5 rounded-full ${accentClass === 'text-emerald-400' ? 'bg-emerald-400' : (accentClass === 'text-blue-400' ? 'bg-blue-400' : 'bg-cyan-400')}"></span>
                    <span class="text-slate-300 font-sans text-xs">${sk}</span>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>

        </div>

      </div>
    `;

    // ATTACC INTERACTIVE CLIK CHECKS FOR MEDIA VIEWER PREVIEWS
    const thumbBtns = modalContentContainer.querySelectorAll<HTMLButtonElement>(".modal-gallery-thumb-btn");
    const mainImg = modalContentContainer.querySelector<HTMLImageElement>("#modal-gallery-main");
    const labelTitle = modalContentContainer.querySelector<HTMLHeadingElement>("#modal-gallery-caption-title");
    const labelDesc = modalContentContainer.querySelector<HTMLParagraphElement>("#modal-gallery-caption-desc");

    thumbBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        // Reset borders
        thumbBtns.forEach(b => {
          b.classList.remove("border-brand-blue/80");
          b.classList.add("border-white/[0.05]");
        });

        // Set active border style
        btn.classList.remove("border-white/[0.05]");
        btn.classList.add("border-brand-blue/80");

        const targetUrl = btn.getAttribute("data-img-url");
        const targetTitle = btn.getAttribute("data-img-title");
        const targetDesc = btn.getAttribute("data-img-desc");

        if (mainImg && targetUrl) {
          mainImg.style.opacity = "0.2";
          setTimeout(() => {
            mainImg.src = targetUrl;
            mainImg.style.opacity = "1";
          }, 150);
        }

        if (labelTitle && targetTitle) {
          labelTitle.textContent = targetTitle;
        }

        if (labelDesc && targetDesc) {
          labelDesc.textContent = targetDesc;
        }
      });
    });

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };

  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const idxStr = btn.getAttribute("data-project-idx");
      if (idxStr) {
        showModal(parseInt(idxStr, 10));
      }
    });
  });

  closeModalBtn.addEventListener("click", closeModal);

  // Close on outer click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}


// GÉNÉRATION DYNAMIQUE DES EXPÉRIENCES DANS LA FRISE CHRONOLOGIQUE
function initExperiences(): void {
  const container = document.getElementById("experiences-list-container");
  if (!container) return;

  container.innerHTML = EXPERIENCES_DATABASE.map(exp => {
    const missionsHTML = exp.missions.map(mission => `
      <div class="p-4 rounded-xl border border-white/[0.04] bg-slate-900/20 hover:border-brand-blue/20 hover:bg-slate-900/40 transition-all duration-300 space-y-3 flex flex-col justify-between">
        <div>
          <h5 class="text-xs font-bold font-display text-white flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
            ${mission.title}
          </h5>
          <ul class="space-y-1.5 mt-2.5">
            ${mission.tasks.map(task => `
              <li class="text-[11px] text-slate-400 leading-relaxed font-sans flex items-start gap-1.5">
                <svg class="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>${task}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `).join('');

    const realisationsHTML = exp.realisations.map(realisation => `
      <div class="flex items-start gap-2 text-xs text-slate-300 font-sans leading-relaxed">
        <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 shrink-0 mt-0.5">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </span>
        <span>${realisation}</span>
      </div>
    `).join('');

    const technologiesHTML = exp.technologies.map(tech => `
      <span class="text-[9px] font-mono bg-white/[0.03] hover:bg-brand-blue/10 hover:text-brand-blue border border-white/[0.05] hover:border-brand-blue/25 text-slate-300 px-2 py-0.5 rounded-md transition-colors duration-200 cursor-default">${tech}</span>
    `).join('');

    const competencesHTML = exp.competences.map(comp => `
      <span class="text-[9px] font-mono bg-white/[0.03] hover:bg-brand-teal/10 hover:text-brand-teal border border-white/[0.05] hover:border-brand-teal/25 text-slate-400 px-2 py-0.5 rounded-md transition-colors duration-200 cursor-default">${comp}</span>
    `).join('');

    const cinBadge = exp.cin ? `
      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 font-semibold shadow-inner animate-pulse">
        <svg class="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
        ID Certificat (CIN) : ${exp.cin}
      </div>
    ` : '';

    return `
      <!-- Événement de Frise Chronologique ${exp.id} -->
      <div class="relative group" id="exp-item-${exp.id}">
        <!-- Point d'ancrage lumineux sur la frise -->
        <div class="absolute left-4 sm:left-6 -translate-x-1.5 w-3.5 h-3.5 rounded-full bg-brand-blue border-4 border-brand-dark z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

        <!-- Corps de la carte de l'expérience -->
        <div class="pl-10 sm:pl-16 space-y-4">
          <div class="p-6 rounded-2xl border border-white/[0.05] bg-slate-900/10 hover:bg-slate-900/20 hover:border-brand-blue/20 transition-all duration-300">

            <!-- En-tête de la carte -->
            <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-white/[0.03]">

              <!-- Informations principales à gauche -->
              <div class="flex items-start gap-4">
                <!-- Logo stylisé avec dégradé -->
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${exp.logoBg} flex items-center justify-center font-display font-black text-white text-lg tracking-tight shrink-0 shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
                  ${exp.logoText}
                </div>
                <div>
                  <h3 class="text-base sm:text-lg font-extrabold font-display text-white group-hover:text-brand-blue transition-colors duration-300">${exp.poste}</h3>
                  <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1 text-xs">
                    <span class="text-brand-blue font-semibold">${exp.organisation}</span>
                    <span class="text-slate-500 font-mono">•</span>
                    <span class="text-slate-400">${exp.localisation}</span>
                  </div>
                </div>
              </div>

              <!-- Badges temporels et contractuels à droite -->
              <div class="flex flex-wrap items-center gap-2 md:text-right">
                <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold bg-brand-blue/10 border border-brand-blue/20 text-blue-400 uppercase tracking-wide">
                  ${exp.typeContrat}
                </span>
                <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold bg-white/[0.03] border border-white/[0.08] text-slate-300">
                  ${exp.dateDebut} – ${exp.dateFin}
                </span>
              </div>

            </div>

            <!-- Badge de Certification (CIN) -->
            ${cinBadge ? `<div class="mt-3.5">${cinBadge}</div>` : ''}

            <!-- Description générale -->
            <div class="mt-4">
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-4xl">
                ${exp.description}
              </p>
            </div>

            <!-- Bloc Missions & Tâches -->
            <div class="mt-6 space-y-3">
              <h4 class="text-[10px] uppercase font-bold tracking-widest font-mono text-slate-500">Missions principales &amp; Projets</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                ${missionsHTML}
              </div>
            </div>

            <!-- Bloc Réalisations Clés -->
            <div class="mt-6 space-y-3">
              <h4 class="text-[10px] uppercase font-bold tracking-widest font-mono text-slate-500">Réalisations Clés</h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/[0.01] border border-white/[0.03] p-4 rounded-xl">
                ${realisationsHTML}
              </div>
            </div>

            <!-- Mots-clés des compétences & technologies -->
            <div class="mt-6 pt-4 border-t border-white/[0.03] flex flex-wrap items-center gap-2">
              <span class="text-[10px] font-semibold text-slate-400 font-mono uppercase tracking-wider mr-1">Techs &amp; compétences :</span>
              <div class="flex flex-wrap gap-1.5">
                ${technologiesHTML}
                ${competencesHTML}
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  }).join('');
}

// INTERACTIVE VERIFICATION AND ALERT POPUPS FOR CONTACT MESSAGE
function initContactForm(): void {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  const submitBtn = document.getElementById("form-submit-btn") as HTMLButtonElement | null;
  const feedback = document.getElementById("form-feedback");

  if (!form || !submitBtn || !feedback) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Retrieve input elements
    const nameEl = document.getElementById("form-name") as HTMLInputElement | null;
    const contactEl = document.getElementById("form-contact") as HTMLInputElement | null;
    const subjectEl = document.getElementById("form-subject") as HTMLInputElement | null;
    const messageEl = document.getElementById("form-message") as HTMLTextAreaElement | null;

    if (!nameEl || !contactEl || !subjectEl || !messageEl) return;

    const name = nameEl.value.trim();
    const contact = contactEl.value.trim();
    const subject = subjectEl.value.trim();
    const message = messageEl.value.trim();

    // Trigger visual loading indicator
    submitBtn.setAttribute("disabled", "true");
    const originalText = "Envoyer ma demande";
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white inline-block" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Envoi en cours...
    `;

    // Hide any previous feedback
    feedback.classList.add("hidden");

    // Setting up AbortController with a 7-second safety timeout to avoid infinite spinning
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 7000);

    // Real integration via FormSubmit.co AJAX Endpoint
    fetch("https://formsubmit.co/ajax/liagbanan@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      signal: controller.signal,
      body: JSON.stringify({
        _subject: `Portfolio: ${subject}`,
        Nom_Entreprise: name,
        Contact_Email_Tel: contact,
        Message: message
      })
    })
      .then(response => {
        clearTimeout(timeoutId);
        // We read as text FIRST so that if FormSubmit returns HTML or an activation page, we don't crash
        return response.text().then(text => {
          if (!response.ok) {
            throw new Error(text || `HTTP ${response.status}`);
          }
          try {
            return JSON.parse(text);
          } catch {
            // Not JSON, but HTTP status was 200/OK (FormSubmit activation page, redirect or text confirmation)
            return { success: true, parsed: false };
          }
        });
      })
      .then(() => {
        // Success feedback
        feedback.classList.remove("hidden", "bg-red-500/10", "border-red-500/20", "text-red-400");
        feedback.classList.add("bg-teal-500/10", "border", "border-teal-500/20", "text-teal-400");
        feedback.innerHTML = `
          <p class="font-bold flex items-center justify-center gap-1.5">
            ✓ Message envoyé avec succès !
          </p>
          <p class="text-[10px] text-slate-300 mt-1">Merci pour votre confiance. Elise vous contactera sous 24h ouvrées.</p>
        `;

        showToast("Message envoyé à Elise !");
        form.reset();
      })
      .catch(err => {
        clearTimeout(timeoutId);
        console.error("FormSubmit Error: ", err);

        // Error feedback
        feedback.classList.remove("hidden", "bg-teal-500/10", "border-teal-500/20", "text-teal-400");
        feedback.classList.add("bg-red-500/10", "border", "border-red-500/20", "text-red-400");
        feedback.innerHTML = `
          <p class="font-bold flex items-center justify-center gap-1.5">
            ⚠ Échec de l'envoi du message
          </p>
          <p class="text-[10px] mt-1">L'envoi en direct a été ralenti ou bloqué. N'hésitez pas à m'écrire directement sur <a href="mailto:liagbanan@gmail.com" class="underline font-bold text-white hover:text-brand-blue">liagbanan@gmail.com</a>.</p>
        `;
        showToast("Erreur lors de l'envoi.");
      })
      .finally(() => {
        // Restore submit button
        submitBtn.removeAttribute("disabled");
        submitBtn.textContent = originalText;
      });
  });
}

// EMAIL INSTANT COPY CLIPTRAY ACTIONS
function initEmailCopy(): void {
  const btn = document.getElementById("copy-email-btn");
  const emailText = "liagbanan@gmail.com";

  if (!btn) return;

  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(emailText).then(() => {
      btn.textContent = "Copié ✓";
      btn.classList.add("bg-teal-500/10", "border-teal-500/20", "text-teal-400");

      showToast("Email professionnel copié !");

      setTimeout(() => {
        btn.textContent = "Copier";
        btn.classList.remove("bg-teal-500/10", "border-teal-500/20", "text-teal-400");
      }, 2500);
    }).catch(() => {
      showToast("Une erreur empêche la copie automatique.");
    });
  });
}

// TOAST MESSAGE ANIMATOR OVERLAY
function showToast(message: string): void {
  const toast = document.getElementById("toast");
  const toastTxt = document.getElementById("toast-text");

  if (!toast || !toastTxt) return;

  toastTxt.textContent = message;
  toast.classList.remove("opacity-0", "translate-y-20", "pointer-events-none");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-20", "pointer-events-none");
    toast.classList.remove("opacity-100", "translate-y-0");
  }, 3500);
}

// 7. EXPAND UTILITY ACADEMIC AND EXPORT TOOLBOX
function initDevToolbox(): void {
  const openBtn = document.getElementById("dev-toolbox-btn");
  const drawer = document.getElementById("dev-toolbox-drawer");
  const closeBtn = document.getElementById("close-drawer-btn");
  const copyCodeBtn = document.getElementById("copy-standalone-btn");
  const cvBtn = document.getElementById("cv-btn");

  if (!openBtn || !drawer || !closeBtn || !copyCodeBtn) return;

  const openDrawer = () => {
    drawer.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  };

  const closeDrawer = () => {
    drawer.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };

  openBtn.addEventListener("click", openDrawer);
  closeBtn.addEventListener("click", closeDrawer);

  drawer.addEventListener("click", (e) => {
    if (e.target === drawer) {
      closeDrawer();
    }
  });

  // ESC close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
    }
  });

  // CV Download Trigger message
  if (cvBtn) {
    cvBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Control behavior programmatically to ensure instant auto-download
      showToast("Téléchargement du CV d'Agbanan Elise lancé !");

      fetch("/cv.pdf")
        .then(response => {
          if (!response.ok) {
            throw new Error("Impossible de récupérer le fichier PDF.");
          }
          return response.blob();
        })
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          a.download = "CV_AGBANAN_ELISE.pdf";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        })
        .catch(err => {
          console.error("Erreur de téléchargement :", err);
          // Fallback if fetch fails or is locked down by permissions
          const fallbackWindow = window.open("/cv.pdf", "_blank");
          if (!fallbackWindow) {
            window.location.href = "/cv.pdf";
          }
        });
    });
  }

  // Injecting complete standalone index.html code template ready to copy
  copyCodeBtn.addEventListener("click", () => {
    const standaloneCode = generateCompleteStandaloneHTML();
    navigator.clipboard.writeText(standaloneCode).then(() => {
      copyCodeBtn.textContent = "Code Source Copié ✓";
      copyCodeBtn.classList.remove("bg-brand-blue");
      copyCodeBtn.classList.add("bg-teal-600");

      showToast("Fichier HTML autonome copié dans le presse-papiers!");

      setTimeout(() => {
        copyCodeBtn.textContent = "Copier ce Code";
        copyCodeBtn.classList.remove("bg-teal-600");
        copyCodeBtn.classList.add("bg-brand-blue");
      }, 3000);
    }).catch(() => {
      showToast("Copie impossible. Veuillez sélectionner le code à la main.");
    });
  });
}

// Dynamic exporter system providing zero-dependency standalone package
function generateCompleteStandaloneHTML(): string {
  // Extracting index.html structure, injecting tailwind CDN + scripts
  // to ensure 100% fidelity local hosting.
  return `<!doctype html>
<html lang="fr" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AGBANAN AMENUVEVE ELISE | Développeur d'Applications Web & Mobile</title>
    <!-- Tailwind Play CDN for easy zero-dependency preview/hosting -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              'brand-blue': '#3b82f6',
              'brand-teal': '#14b8a6',
              'brand-dark': '#070a13',
              'brand-card': '#0f172a',
            },
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              display: ['Space Grotesk', 'sans-serif'],
              mono: ['JetBrains Mono', 'monospace'],
            }
          }
        }
      }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
      /* Glowing animations and glassmorphism styling embedded directly */
      @keyframes pulseGlow {
        0%, 100% { opacity: 0.15; transform: scale(1); }
        50% { opacity: 0.25; transform: scale(1.05); }
      }
      .tech-glow {
        position: relative;
      }
      .tech-glow::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
        background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 70%);
        z-index: -1; pointer-events: none; animation: pulseGlow 8s infinite ease-in-out;
      }
      .glass-panel {
        background: rgba(15, 23, 42, 0.45);
        backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.05);
      }
      .text-gradient-accent {
        background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      }
      /* Custom Webkit scrollbar */
      ::-webkit-scrollbar { width: 8px; height: 8px; }
      ::-webkit-scrollbar-track { background: #070a13; }
      ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: #3b82f6; }
    </style>
  </head>
  <body class="bg-[#070a13] text-slate-100 font-sans antialiased min-h-screen selection:bg-blue-500 selection:text-white tech-glow overflow-x-hidden">
    <!-- Le corps HTML de index.html est embarqué ici pour d'un clic pouvoir lancer le portfolio dans n'importe quel hébergeur libre de ton choix ! -->
    ${document.body.innerHTML}
  </body>
</html>`;
}
