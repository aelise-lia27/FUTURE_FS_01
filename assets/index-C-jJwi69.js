(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const L={1:{id:1,title:"Wellness Thérapie",category:"client",tagline:"Plateforme web professionnelle complète pour un cabinet de kinésithérapie à Lomé.",technologies:["WordPress","Elementor Pro","PHP local","Astra Theme","SEO Local","CSS3 / HTML5"],context:"Projet de commande réelle développé en autonomie complète pour répondre aux besoins d'un cabinet de soin de kinésithérapie sous-médical cherchant à moderniser son image publique et son acquisition à Lomé.",problem:"Absence de présence sur les moteurs de recherche pour le cabinet entraînant un manque à gagner local. Prise de rendez-vous fastidieuse effectuée à la main exclusivement par appels téléphoniques, saturant le secrétariat médical.",role:"Développeur web & Concepteur UX principal. En charge de la conception ergonomique, développement de la charte de couleurs, personnalisation des templates WordPress, configuration administrative du module de réservations et optimisation du référencement local (SEO).",features:["Système de réservation en ligne interactif avec choix autonome du créneau de soin par le patient.","Blog santé administrable permettant la publication d'articles de prévention ergonomique et de soin.","Module FAQ dynamique répondant aux interrogations fréquentes des patients.","Page contact immersive avec formulaire de filtrage du type de pathologie et intégration de carte Google Maps."],challenges:"Assurer un temps de chargement éclair pour les réseaux mobiles togolais fluctuants, malgré l'usage de constructeurs de pages graphiques denses. Résolu par l'optimisation drastique des images (format WebP) et la désactivation des scripts superflus de WordPress.",skillsGained:["Maîtrise complète de l'architecture d'intégration CMS","Optimisation SEO Local ","Relation client directe"],year:"2024",status:"Développé & prêt à l'hébergement",mainImage:"/src/images/wellness/wellnessTherapie.PNG",objectives:["Moderniser l'image de marque du cabinet et digitaliser complètement la prise de rendez-vous pour alléger le secrétariat.","Développer un référencement local performant ciblant des requêtes spécialisées pour capter de nouveaux clients à Lomé.","Garantir un temps d'accès extrêmement rapide (LCP < 1.5s) pour s'adapter à la connexion mobile fluctuante au Togo."],solutions:["Intégration d'un module de prise de rendez-vous personnalisé (Bookly) asynchrone avec validation automatique.","Optimisation poussée des performances mobiles : compression WebP, minification CSS, déchargement partiel du header.","Création de pages thématiques structurées par pathologie pour maximiser le maillage interne et le SEO sémantique local."],gallery:[{url:"/src/images/wellness/wellnessTherapie.PNG",title:"Page d'accueil clinique",description:"Vue principale du site mettant en avant les spécialités de kinésithérapie et le calendrier d'inscription."},{url:"/src/images/wellness/rdv.PNG",title:"Formulaire de Réservation",description:"Calendrier de réservation fluide facilitant le choix de créneaux autonomes par les patients."},{url:"/src/images/wellness/blog.PNG",title:"Section Blog Santé",description:"Structure éditoriale et fiches conseils d'ergonomie pour stimuler le trafic d'acquisition local."}]},2:{id:2,title:"DinEase",category:"mobile",tagline:"MVP d'application mobile géolocalisée d'affichage de restaurants par plage de budget.",technologies:["Flutter","Dart","Firebase","Cloud Firestore","ClickUp","UML Modeling"],context:"Projet entrepreneurial de groupe développé au cours de la L1, conçu pour aider les résidents de Lomé à organiser leurs repas journaliers de manière stratégique selon leurs moyens financiers réels.",problem:"Les applications de livraison existantes cachent souvent le coût total ou ciblent les restaurants hauts de gamme. Il n'existait pas de moyen d'identifier de petits points de restauration de quartier (maquis) proposant des repas sains pour des budgets serrés (ex. 1000 - 1500 FCFA).",role:"Chef de projet & Lead développeur Flutter. Responsable de la mise en place de la structure Dart globale de l'application mobile, de l'élaboration du schéma de données NoSQL asynchrone et de la coordination des tâches via ClickUp.",features:["Authentification utilisateur sécurisée via Firebase Authentication.","Filtre asynchrone interactif par curseur de budget (ex. FCFA, Euros) en temps réel.","Affichage géo-localisé des établissements correspondants avec fiches de produits clairs.","Système de sauvegarde des restaurants favoris de l'utilisateur."],challenges:"Maintenir une consommation de données internet minimale sur mobile. Résolu par l'implémentation de caches de cache locaux robustes dans le plugin Firestore, évitant les téléchargements de données redondants.",skillsGained:["Gestion d'état au sein de Flutter (State Management)","Conception de schémas NoSQL extensibles","Coordination d'équipe en méthodes agiles","Modélisation UML fine"],year:"2024",status:"MVP en cours de correction",mainImage:"/src/images/dinease/dinease.jpeg",objectives:["Bâtir un MVP fonctionnel permettant de filtrer instantanément les restaurants locaux selon son budget restant en FCFA.","Conserver de très hauts standards d'accessibilité hors-ligne en maintenant en cache les données précédemment lues.","Organiser le backlog projet en sprints agiles rigoureux pour garantir un livrable stable en un temps record."],solutions:["Utilisation de Flutter/Dart avec bloc d'état (Cubit/Provider) pour gérer les événements du slider de budget instantanément.","Configuration fine de Cloud Firestore avec persistance locale hors-ligne et indexation sémantique sur la géo-localisation.","Pilotage collaboratif avec modélisation UML des cas d'utilisation et fiches fonctionnelles détaillées sur ClickUp."],gallery:[{url:"/src/images/dinease/dinease.jpeg",title:"Écran d'Accueil & Choix du Budget",description:"Vue principale avec filtrage instantané selon la plage de budget de l'utilisateur."},{url:"/src/images/dinease/restoScreen.jpeg",title:"Liste des Restaurants & Maquis",description:"Affichage dynamique des établissements recommandés à Lomé avec prix transparents."},{url:"/src/images/dinease/detailscreen.jpeg",title:"Fiche Établissement Détaillée",description:"Détails complets, menu et coordonnées de l'établissement sélectionné."},{url:"/src/images/dinease/firestore.PNG",title:"Persistance Cloud Firestore",description:"Schéma de données asynchrone NoSQL optimisé pour un chargement hors-ligne rapide."},{url:"/src/images/dinease/logo.jpeg",title:"Logotype Officiel DinEase",description:"Conception graphique et charte d'identité visuelle de la startup mobile."}]},3:{id:3,title:"Platform Building",category:"web",tagline:"Portail immobilier robuste et de location d'outillages de construction en architecture MVC.",technologies:["PHP Objet","MySQL Database","HTML5 / CSS3","JavaScript Native","AJAX","MVC Maison"],context:"Projet académique dense en L2, axé sur l'élaboration d'un système robuste d'annonces de bâtiments et d'équipements de chantiers à Lomé.",problem:"Dispersion des offres de matériels pour les maçons et promoteurs à Lomé, et complexité d'accéder à des fiches de qualité pour les locations foncières à courte durée.",role:"Chef de projet & principal développeur Backend. En charge d'élaborer de toute pièce un modèle MVC (Modèle-Vue-Contrôleur) natif en PHP, d'optimiser l'organisation des données de la base MySQL et d'implémenter des interactions graphiques dynamiques.",features:["Contrôle d'accès et rôles modulaires (Admin d'agence, Propriétaire, Locataire).","Upload d'images sécurisé et système d'enregistrement d'annonces avec pièces jointes.","Dashboard d'administration pour valider ou rejeter les annonces de matériel.","Filtre de recherche asynchrone propulsé par des requêtes de communication AJAX."],challenges:"Structurer un code PHP orienté objet et un routage d'URL propre sans utiliser de framework lourd externe (comme Laravel). Nous avons réussi à bâtir notre propre routeur léger d'URL de manière rigoureuse.",skillsGained:["Maîtrise fine du paradigme MVC en programmation","Sécurisation asynchrone des formulaires et des téléversements (Uploads)","Requêtes relationnelles SQL imbriquées sous MySQL","Liaisons AJAX fluides"],year:"2024",status:"Terminé (Livrable d'études validé)",mainImage:"/src/images/building/building.PNG",objectives:["Mettre en relation directe promoteurs immobiliers et maçons/artisans pour la location d'engins et d'outils de chantiers.","Bâtir une architecture de type MVC d'origine sans s'appuyer sur des frameworks lourds pour comprendre pleinement PHP objet.","Sécuriser les flux d'uploads multiples de fichiers lourds d'illustrations d'équipements pour chaque publication."],solutions:["Développement d'un routeur d'URL personnalisé en POO gérant le routage sémantique, le parsing et le rendu HTML.","Implémentation d'un contrôle d'accès granulaire (Admin, Manditaire d'équipements, Client) et chiffrement de mot de passe Bcrypt.","Scripts de téléversements asynchrones AJAX gérant la validation de sécurité MIME, l'isolation par hash de répertoire et le redimensionnement."],gallery:[{url:"/src/images/building/building.PNG",title:"Fiches de Matériels de Chantier",description:"Aperçu de la vue d'administration centralisant le catalogue d'annonces et l'état des validations foncières."},{url:"/src/images/building/about_hero.PNG",title:"Fiches de Matériels de Chantier",description:"Aperçu de la vue d'administration centralisant le catalogue d'annonces et l'état des validations foncières."},{url:"/src/images/building/avis_form.PNG",title:"Fiches de Matériels de Chantier",description:"Aperçu de la vue d'administration centralisant le catalogue d'annonces et l'état des validations foncières."},{url:"/src/images/building/avis.PNG",title:"Fiches de Matériels de Chantier",description:"Aperçu de la vue d'administration centralisant le catalogue d'annonces et l'état des validations foncières."},{url:"/src/images/building/admin_1.PNG",title:"Fiches de Matériels de Chantier",description:"Aperçu de la vue d'administration centralisant le catalogue d'annonces et l'état des validations foncières."},{url:"/src/images/building/login_form.PNG",title:"Fiches de Matériels de Chantier",description:"Aperçu de la vue d'administration centralisant le catalogue d'annonces et l'état des validations foncières."},{url:"/src/images/building/register_form.PNG",title:"",description:""},{url:"/src/images/building/contact_form.PNG",title:"",description:""}]},4:{id:4,title:"DistriPay",category:"mobile",tagline:"Application de paiement intelligent et de commande connectée pour distributeurs physiques.",technologies:["Flutter","Dart","Firebase Database","Firebase Auth","IoT ESP32 simulation","UML"],context:"Projet d'études collaboratif reliant une application Android/iOS à la logique d'un distributeur automatique connecté intelligent fictif.",problem:"Lenteurs d'attente aux guichets de distribution d'articles et de boissons, perte de pièces de monnaie physiques et manque de visibilité en temps réel sur la variation des stocks.",role:"Principal développeur mobile Flutter. Intégrateur système du module de connexion avec Firebase et créateur des flux asynchrones d'état d'achat.",features:["Authentification des clients et gestion de solde en FCFA directement sur mobile.","Achat rapide en un clic et génération de commande instantanée dans l'historique.","Actualisation automatique des volumes de stock par écouteurs Firestore réactifs.","Déclenchement asynchrone de signaux simulant l'activation de moteurs physiques d'un microcontrôleur ESP32."],challenges:"La communication instantanée et la prévention des conditions de course concurrentes (deux utilisateurs achetant le dernier produit en même temps). Résolu par des transactions atomic Firestore sécurisées.",skillsGained:["Introduction aux mécaniques de l'IoT et aux protocoles asynchrones","Gestion de flux NoSQL de haute réactivité (Firestore Streams)","Sécurisation de transactions financières"],year:"2024",status:"MVP fonctionnel testé en simulation",mainImage:"/src/images/distripay/product.PNG",objectives:["Concevoir un écosystème de commandes sans contact interconnectant application mobile Android/iOS, cloud et distributeur physique.","Prévenir la surcharge de commandes simultanées de stocks limités en gérant des transactions atomiques sécurisées.","Modéliser le protocole de communication asynchrone simulant l'activation physique de la puce ESP32."],solutions:["Mise en œuvre des streams réactifs de Cloud Firestore pour diffuser immédiatement le nouveau crédit de l'utilisateur.","Configuration de transactions Firestore atomic prévenant toute double vente d'articles si le stock comptable est nul.","Simulation d'un WebSocket/MQTT captant le changement d'état d'un flag pour signifier le déclenchement des moteurs du distributeur."],gallery:[{url:"/src/images/distriPay/login.PNG",title:"",description:""},{url:"/src/images/distriPay/register.PNG",title:"",description:""},{url:"/src/images/distriPay/achat.PNG",title:"",description:""}]},5:{id:5,title:"Lavage Auto Pro",category:"web",tagline:"Plateforme interne de suivi financier et d'attribution de tickets pour station de lavage.",technologies:["PHP","HTML5","CSS3","JavaScript Vanilla","MySQL Database","Merise Scheme"],context:"Projet concret de fin d'année universitaire visant à digitaliser la gestion d'une station de nettoyage de voitures dense à Lomé.",problem:"Le suivi de l'entreprise sur carnets papier causait des fraudes récurrentes, des oublis de calculs de rémunération pour les employés laveurs (payés à la commission), et l'incapacité de visualiser les pics d'activité.",role:"Développeur de l'architecture backend et de la base relationnelle MySQL. En charge de la conception SQL selon la méthode de modélisation Merise.",features:["Création d'un ticket de lavage dès l'arrivée du client (type de formule, plaque d'immatriculation).","Attribution en direct du véhicule à un laveur disponible selon les rôles d'équipe.","Module d'encaissement consolidé et historique récapitulatif comptable.","Calculateurs de commissions mensuels simplifiés pour l'ensemble des agents."],challenges:"Rendre l'application extrêmement sobre pour qu'elle soit facilement utilisable sur des vieux smartphones d'entrée de gamme par les chefs d'atelier. Résolu par un code HTML pur et un style CSS minimaliste.",skillsGained:["Modélisation et conception de base de données relationnelle (MCD/MLD Merise)","Maîtrise des jointures SQL complexes","Prise en main des enjeux d'ergonomie terrain"],year:"2024",status:"Terminé et validé academiquement",mainImage:"/src/images/lavageautopro/home.PNG",objectives:["Digitaliser le parcours de lavage en temps réel, de la création de la plaque d'immatriculation à la comptabilité variable.","Garantir une traçabilité financière totale pour éliminer les vols de caisses répétés.","Créer une vue performante et lisible fonctionnant de façon fluide sur d'anciens téléphones Android à Lomé."],solutions:["Conception modulaire Merise structurant formellement les liens d'association logiques (Client Laveur-Vente).","Élaboration de requêtes SQL optimisées avec jointures complexes calculant automatiquement la commission à l'acte.","Style minimaliste éliminant les scripts js parasites pour descendre la taille de chargement de page sous les 40 Ko."],gallery:[{url:"/src/images/lavageautopro/login.PNG",title:"",description:""},{url:"/src/images/lavageautopro/admin_service.PNG",title:"Générateur de ticket de lavage",description:"Formulaire d'ouverture de dossier simplifié pour les superviseurs terrain à l'accueil."},{url:"/src/images/lavageautopro/admin_dash.PNG",title:"",description:""}]}},k=[{id:1,poste:"Full Stack Web Development Intern",organisation:"Future Interns",typeContrat:"Stage à distance (Remote Internship)",dateDebut:"11 Juin 2026",dateFin:"11 Juillet 2026",localisation:"À distance",logoText:"FI",logoBg:"from-blue-600 to-indigo-600",description:"Participation au programme international de stage de Future Interns en tant que stagiaire Full Stack Web Development. Réalisation de projets pratiques denses couvrant le développement de produits web modernes (conception d'interfaces utilisateurs animées, bases de données relationnelles, formulaires asynchrones et méthodologies de gestion de projets techniques).",missions:[{title:"Task 1 — Personal Professional Portfolio Website",tasks:["Conception et modélisation d'une interface web moderne, optimisée pour mobile, tablette et desktop.","Présentation structurée et interactive des compétences clés, des projets terminés et du parcours académique.","Création d'un formulaire de contact asynchrone sécurisé avec validation instantanée côté client.","Optimisation fine du référencement naturel (SEO) et de la performance globale de chargement.","Amélioration de l'ergonomie utilisateur globale grâce à l'intégration de micro-animations fluides."]},{title:"Task 2 — Client Lead Management System (Mini CRM)",tasks:["Développement complet d'une application de gestion de prospects (Mini CRM) responsive.","Implémentation intégrale des opérations d'écriture et de lecture dans la base de données (CRUD complet).","Mise en place d'un tableau d'état dynamique pour suivre les opportunités commerciales selon leur statut.","Connexion asynchrone sécurisée avec le backend pour synchroniser l'affichage en temps réel.","Sécurisation des saisies et contrôle sémantique strict des formulaires pour éliminer les injections de données."]},{title:"Task 3 — Local Business Website Project",tasks:["Création sur-mesure d'un site vitrine haut de gamme et responsive pour le compte d'une entreprise locale.","Modélisation UX/UI moderne mettant en avant l'identité sémantique et les forces commerciales du client.","Présentation physique et démonstration directe de la solution technique au propriétaire de l'établissement.","Mise en avant stratégique de la valeur commerciale ajoutée par la transformation digitale du commerce."]}],technologies:["HTML5","CSS3","JavaScript (ES6)","Responsive Design","UI/UX Design"],competences:["Git","GitHub","VS Code Workflow","Gestion de projet technique","Qualité & SEO"],realisations:["Conception et déploiement mondial d'un portfolio hautement interactif et performant accessible en ligne.","Mise en place d'une architecture de dépôts GitHub propre et documentée pour assurer le suivi d'équipe des projets.","Réalisation de projets informatiques complets de bout en bout répondant directement à des besoins réels du marché.","Adoption stricte des bonnes pratiques d'ingénierie logicielle (contrôle de version, documentation technique sémantique et clean code)."]}];document.addEventListener("DOMContentLoaded",()=>{C(),E(),M(),S(),P(),A(),q(),j(),I(),typeof window.completePreloader=="function"&&window.completePreloader()});function C(){const i=document.getElementById("navbar");i&&window.addEventListener("scroll",()=>{window.scrollY>40?(i.classList.add("bg-brand-dark/90","backdrop-blur-md","shadow-xl","py-2"),i.classList.remove("py-0")):i.classList.remove("bg-brand-dark/90","backdrop-blur-md","shadow-xl","py-2")})}function E(){const i=document.getElementById("mobile-menu-btn"),e=document.getElementById("mobile-drawer"),a=document.getElementById("menu-icon-open"),n=document.getElementById("menu-icon-close"),s=document.querySelectorAll(".mobile-link");if(!i||!e||!a||!n)return;const r=()=>{e.classList.contains("hidden")?(e.classList.remove("hidden"),a.classList.add("hidden"),n.classList.remove("hidden")):(e.classList.add("hidden"),a.classList.remove("hidden"),n.classList.add("hidden"))};i.addEventListener("click",r),s.forEach(o=>{o.addEventListener("click",()=>{e.classList.add("hidden"),a.classList.remove("hidden"),n.classList.add("hidden")})})}function M(){const i=document.querySelectorAll("[data-skill-tab]"),e=document.querySelectorAll(".skill-card-block");i.length!==0&&i.forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-skill-tab");n&&(i.forEach(s=>{s.classList.remove("bg-brand-blue","text-white"),s.classList.add("text-slate-400","hover:text-white","hover:bg-white/[0.02]")}),a.classList.add("bg-brand-blue","text-white"),a.classList.remove("text-slate-400","hover:text-white","hover:bg-white/[0.02]"),e.forEach(s=>{const r=s.getAttribute("data-skill-cat")||"";n==="all"||r.includes(n)?(s.classList.remove("hidden"),s.style.opacity="1"):(s.classList.add("hidden"),s.style.opacity="0")}))})})}function S(){const i=document.querySelectorAll("[data-project-filter]"),e=document.querySelectorAll(".project-portfolio-card");i.length!==0&&i.forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-project-filter");n&&(i.forEach(s=>{s.classList.remove("bg-brand-blue","text-white"),s.classList.add("text-slate-400","hover:text-white","hover:bg-white/[0.02]")}),a.classList.add("bg-brand-blue","text-white"),a.classList.remove("text-slate-400","hover:text-white","hover:bg-white/[0.02]"),e.forEach(s=>{const r=s.getAttribute("data-[#project-cat]")||"";n==="all"||r.toLowerCase().includes(n.toLowerCase())?(s.classList.remove("hidden"),setTimeout(()=>{s.style.opacity="1",s.style.transform="scale(1)"},50)):(s.style.opacity="0",s.style.transform="scale(0.95)",setTimeout(()=>{s.classList.add("hidden")},300))}))})})}function P(){const i=document.querySelectorAll(".open-project-modal-btn"),e=document.getElementById("project-detail-modal"),a=document.getElementById("close-modal-btn"),n=document.getElementById("modal-content");if(!e||!a||!n)return;const s=o=>{const t=L[o];if(!t)return;const d=t.category==="mobile",c=t.category==="client"?"text-emerald-400":d?"text-blue-400":"text-cyan-400",u=t.category==="client"?"border-emerald-500/20":d?"border-blue-500/20":"border-cyan-500/20",f=t.category==="client"?"bg-emerald-500/5":d?"bg-blue-500/5":"bg-cyan-500/5";n.innerHTML=`
      <div class="space-y-8 select-none">

        <!-- I. OVERSIZED PRODUCT PAGE TITLE & HEADER BANNER -->
        <div class="relative w-full h-48 sm:h-64 rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl">
          <div class="absolute inset-0 bg-cover bg-center filter blur-md opacity-25 scale-105" style="background-image: url('${t.mainImage}');"></div>
          <img src="${t.mainImage}" alt="${t.title}" class="absolute inset-0 w-full h-full object-cover object-top opacity-90 mix-blend-screen" referrerPolicy="no-referrer" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20"></div>

          <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-left space-y-2">
            <span class="text-[9px] font-mono tracking-widest ${c} bg-white/[0.02] border ${u} px-2.5 py-1 rounded-full uppercase">
              🚀 Case Study #${t.id}
            </span>
            <h2 class="text-2xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mt-1.5">${t.title}</h2>
            <p class="text-xs sm:text-sm text-slate-300 font-sans max-w-2xl font-light">${t.tagline}</p>
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
            <span class="text-xs font-semibold text-slate-200">${t.year}</span>
          </div>
          <div class="space-y-1">
            <span class="block text-[10px] text-slate-500 uppercase font-mono tracking-wider">💡 Statut Livrable</span>
            <span class="text-xs font-medium ${c} flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full ${c==="text-emerald-400"?"bg-emerald-400":c==="text-blue-400"?"bg-blue-400":"bg-cyan-400"} animate-pulse"></span>
              ${t.status}
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
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">${t.context}</p>

              <div class="pt-3 border-t border-white/[0.04]">
                <span class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">🎯 Objectifs stratégiques fixés :</span>
                <ul class="space-y-2">
                  ${t.objectives.map(l=>`
                    <li class="flex items-start gap-2.5 text-xs text-slate-300">
                      <span class="w-1.5 h-1.5 rounded-full ${c==="text-emerald-400"?"bg-emerald-400":c==="text-blue-400"?"bg-blue-400":"bg-cyan-400"} shrink-0 mt-1.5"></span>
                      <span>${l}</span>
                    </li>
                  `).join("")}
                </ul>
              </div>
            </div>

            <!-- Problem vs Solution splitting blocks -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-5 ${f} border ${u} rounded-2xl space-y-2">
                <span class="font-extrabold text-xs text-rose-400 tracking-wider uppercase font-mono flex items-center gap-1.5">
                  🛑 Problématique levée
                </span>
                <p class="text-xs text-slate-300 leading-relaxed">${t.problem}</p>
              </div>
              <div class="p-5 bg-white/[0.01] border border-white/[0.05] rounded-2xl space-y-2">
                <span class="font-extrabold text-xs text-emerald-400 tracking-wider uppercase font-mono flex items-center gap-1.5">
                  ✔ Réponse &amp; Architecture
                </span>
                <p class="text-xs text-slate-300 leading-relaxed">${t.solutions[0]}</p>
              </div>
            </div>

            <!-- Functional key features -->
            <div class="space-y-3 pt-2">
              <h3 class="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <svg class="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                II. Fonctionnalités Qualitatives Implémentées
              </h3>
              <div class="grid grid-cols-1 gap-3">
                ${t.features.map((l,b)=>`
                  <div class="flex items-start gap-3 p-3 bg-white/[0.01] border border-white/[0.03] rounded-xl hover:bg-white/[0.02] transition-colors duration-200">
                    <span class="w-5 h-5 rounded-lg ${f} border ${u} text-[10px] sm:text-xs font-mono font-bold text-slate-200 flex items-center justify-center shrink-0">
                      0${b+1}
                    </span>
                    <div class="space-y-0.5">
                      <span class="text-xs font-bold text-slate-200">${l}</span>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- Complex performance resolution block -->
            <div class="p-5 bg-amber-500/5 border border-amber-500/10 rounded-2xl space-y-3">
              <h4 class="text-xs font-extrabold text-amber-400 tracking-wider uppercase font-mono flex items-center gap-1.5">
                ⚡ Défi d'Ingénierie &amp; Solution fine
              </h4>
              <p class="text-xs text-slate-300 leading-relaxed font-sans">${t.challenges}</p>
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
                <img id="modal-gallery-main" src="${t.gallery[0]?t.gallery[0].url:t.mainImage}" alt="${t.title}" class="w-full h-full object-cover transition-all duration-300 group-hover:scale-[1.02]" referrerPolicy="no-referrer" />
              </div>

              <!-- Thumbnails grid navigation -->
              <div class="grid grid-cols-3 gap-2">
                ${t.gallery.map((l,b)=>`
                  <button class="modal-gallery-thumb-btn relative aspect-[14/9] rounded-xl overflow-hidden border ${b===0?"border-brand-blue/80":"border-white/[0.05]"} hover:border-brand-blue/60 transition-all focus:outline-none cursor-pointer" data-img-url="${l.url}" data-img-title="${l.title}" data-img-desc="${l.description}">
                    <img src="${l.url}" alt="${l.title}" class="w-full h-full object-cover transition-transform duration-300" referrerPolicy="no-referrer" />
                    <div class="absolute inset-0 bg-slate-950/20 hover:bg-transparent transition-colors"></div>
                  </button>
                `).join("")}
              </div>

              <!-- Dynamic caption footer -->
              <div class="p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl text-left space-y-1">
                <h4 id="modal-gallery-caption-title" class="text-xs font-bold text-white">${t.gallery[0]?t.gallery[0].title:t.title}</h4>
                <p id="modal-gallery-caption-desc" class="text-[11px] text-slate-400 leading-relaxed font-light">${t.gallery[0]?t.gallery[0].description:t.tagline}</p>
              </div>
            </div>

            <!-- Technology pills -->
            <div class="space-y-3 pt-2">
              <span class="block text-[11px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">IV. Stack technologique</span>
              <div class="flex flex-wrap gap-1.5">
                ${t.technologies.map(l=>`
                  <span class="text-[10px] font-mono bg-white/[0.03] text-brand-blue border border-brand-blue/15 px-2.5 py-1 rounded-md hover:border-brand-blue/30 duration-200">
                    ${l}
                  </span>
                `).join("")}
              </div>
            </div>

            <!-- Soft/Hard skills Gained -->
            <div class="space-y-3 pt-2">
              <span class="block text-[11px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">V. Compétences Validées</span>
              <div class="space-y-2">
                ${t.skillsGained.map(l=>`
                  <div class="flex items-center gap-2 p-2 bg-slate-900/60 border border-white/[0.02] rounded-xl text-[11px]">
                    <span class="w-1.5 h-1.5 rounded-full ${c==="text-emerald-400"?"bg-emerald-400":c==="text-blue-400"?"bg-blue-400":"bg-cyan-400"}"></span>
                    <span class="text-slate-300 font-sans text-xs">${l}</span>
                  </div>
                `).join("")}
              </div>
            </div>

          </div>

        </div>

      </div>
    `;const v=n.querySelectorAll(".modal-gallery-thumb-btn"),m=n.querySelector("#modal-gallery-main"),h=n.querySelector("#modal-gallery-caption-title"),p=n.querySelector("#modal-gallery-caption-desc");v.forEach(l=>{l.addEventListener("click",()=>{v.forEach(w=>{w.classList.remove("border-brand-blue/80"),w.classList.add("border-white/[0.05]")}),l.classList.remove("border-white/[0.05]"),l.classList.add("border-brand-blue/80");const b=l.getAttribute("data-img-url"),x=l.getAttribute("data-img-title"),y=l.getAttribute("data-img-desc");m&&b&&(m.style.opacity="0.2",setTimeout(()=>{m.src=b,m.style.opacity="1"},150)),h&&x&&(h.textContent=x),p&&y&&(p.textContent=y)})}),e.classList.remove("hidden"),document.body.classList.add("overflow-hidden")},r=()=>{e.classList.add("hidden"),document.body.classList.remove("overflow-hidden")};i.forEach(o=>{o.addEventListener("click",()=>{const t=o.getAttribute("data-project-idx");t&&s(parseInt(t,10))})}),a.addEventListener("click",r),e.addEventListener("click",o=>{o.target===e&&r()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&r()})}function A(){const i=document.getElementById("experiences-list-container");i&&(i.innerHTML=k.map(e=>{const a=e.missions.map(t=>`
      <div class="p-4 rounded-xl border border-white/[0.04] bg-slate-900/20 hover:border-brand-blue/20 hover:bg-slate-900/40 transition-all duration-300 space-y-3 flex flex-col justify-between">
        <div>
          <h5 class="text-xs font-bold font-display text-white flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
            ${t.title}
          </h5>
          <ul class="space-y-1.5 mt-2.5">
            ${t.tasks.map(d=>`
              <li class="text-[11px] text-slate-400 leading-relaxed font-sans flex items-start gap-1.5">
                <svg class="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>${d}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    `).join(""),n=e.realisations.map(t=>`
      <div class="flex items-start gap-2 text-xs text-slate-300 font-sans leading-relaxed">
        <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 shrink-0 mt-0.5">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </span>
        <span>${t}</span>
      </div>
    `).join(""),s=e.technologies.map(t=>`
      <span class="text-[9px] font-mono bg-white/[0.03] hover:bg-brand-blue/10 hover:text-brand-blue border border-white/[0.05] hover:border-brand-blue/25 text-slate-300 px-2 py-0.5 rounded-md transition-colors duration-200 cursor-default">${t}</span>
    `).join(""),r=e.competences.map(t=>`
      <span class="text-[9px] font-mono bg-white/[0.03] hover:bg-brand-teal/10 hover:text-brand-teal border border-white/[0.05] hover:border-brand-teal/25 text-slate-400 px-2 py-0.5 rounded-md transition-colors duration-200 cursor-default">${t}</span>
    `).join(""),o=e.cin?`
      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 font-semibold shadow-inner animate-pulse">
        <svg class="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
        ID Certificat (CIN) : ${e.cin}
      </div>
    `:"";return`
      <!-- Événement de Frise Chronologique ${e.id} -->
      <div class="relative group" id="exp-item-${e.id}">
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
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${e.logoBg} flex items-center justify-center font-display font-black text-white text-lg tracking-tight shrink-0 shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
                  ${e.logoText}
                </div>
                <div>
                  <h3 class="text-base sm:text-lg font-extrabold font-display text-white group-hover:text-brand-blue transition-colors duration-300">${e.poste}</h3>
                  <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1 text-xs">
                    <span class="text-brand-blue font-semibold">${e.organisation}</span>
                    <span class="text-slate-500 font-mono">•</span>
                    <span class="text-slate-400">${e.localisation}</span>
                  </div>
                </div>
              </div>

              <!-- Badges temporels et contractuels à droite -->
              <div class="flex flex-wrap items-center gap-2 md:text-right">
                <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold bg-brand-blue/10 border border-brand-blue/20 text-blue-400 uppercase tracking-wide">
                  ${e.typeContrat}
                </span>
                <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold bg-white/[0.03] border border-white/[0.08] text-slate-300">
                  ${e.dateDebut} – ${e.dateFin}
                </span>
              </div>

            </div>

            <!-- Badge de Certification (CIN) -->
            ${o?`<div class="mt-3.5">${o}</div>`:""}

            <!-- Description générale -->
            <div class="mt-4">
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-4xl">
                ${e.description}
              </p>
            </div>

            <!-- Bloc Missions & Tâches -->
            <div class="mt-6 space-y-3">
              <h4 class="text-[10px] uppercase font-bold tracking-widest font-mono text-slate-500">Missions principales &amp; Projets</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                ${a}
              </div>
            </div>

            <!-- Bloc Réalisations Clés -->
            <div class="mt-6 space-y-3">
              <h4 class="text-[10px] uppercase font-bold tracking-widest font-mono text-slate-500">Réalisations Clés</h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/[0.01] border border-white/[0.03] p-4 rounded-xl">
                ${n}
              </div>
            </div>

            <!-- Mots-clés des compétences & technologies -->
            <div class="mt-6 pt-4 border-t border-white/[0.03] flex flex-wrap items-center gap-2">
              <span class="text-[10px] font-semibold text-slate-400 font-mono uppercase tracking-wider mr-1">Techs &amp; compétences :</span>
              <div class="flex flex-wrap gap-1.5">
                ${s}
                ${r}
              </div>
            </div>

          </div>
        </div>
      </div>
    `}).join(""))}function q(){const i=document.getElementById("contact-form"),e=document.getElementById("form-submit-btn"),a=document.getElementById("form-feedback");!i||!e||!a||i.addEventListener("submit",n=>{n.preventDefault();const s=document.getElementById("form-name"),r=document.getElementById("form-contact"),o=document.getElementById("form-subject"),t=document.getElementById("form-message");if(!s||!r||!o||!t)return;const d=s.value.trim(),c=r.value.trim(),u=o.value.trim(),f=t.value.trim();e.setAttribute("disabled","true");const v="Envoyer ma demande";e.innerHTML=`
      <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white inline-block" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Envoi en cours...
    `,a.classList.add("hidden");const m=new AbortController,h=setTimeout(()=>{m.abort()},7e3);fetch("https://formsubmit.co/ajax/liagbanan@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},signal:m.signal,body:JSON.stringify({_subject:`Portfolio: ${u}`,Nom_Entreprise:d,Contact_Email_Tel:c,Message:f})}).then(p=>(clearTimeout(h),p.text().then(l=>{if(!p.ok)throw new Error(l||`HTTP ${p.status}`);try{return JSON.parse(l)}catch{return{success:!0,parsed:!1}}}))).then(()=>{a.classList.remove("hidden","bg-red-500/10","border-red-500/20","text-red-400"),a.classList.add("bg-teal-500/10","border","border-teal-500/20","text-teal-400"),a.innerHTML=`
          <p class="font-bold flex items-center justify-center gap-1.5">
            ✓ Message envoyé avec succès !
          </p>
          <p class="text-[10px] text-slate-300 mt-1">Merci pour votre confiance. Elise vous contactera sous 24h ouvrées.</p>
        `,g("Message envoyé à Elise !"),i.reset()}).catch(p=>{clearTimeout(h),console.error("FormSubmit Error: ",p),a.classList.remove("hidden","bg-teal-500/10","border-teal-500/20","text-teal-400"),a.classList.add("bg-red-500/10","border","border-red-500/20","text-red-400"),a.innerHTML=`
          <p class="font-bold flex items-center justify-center gap-1.5">
            ⚠ Échec de l'envoi du message
          </p>
          <p class="text-[10px] mt-1">L'envoi en direct a été ralenti ou bloqué. N'hésitez pas à m'écrire directement sur <a href="mailto:liagbanan@gmail.com" class="underline font-bold text-white hover:text-brand-blue">liagbanan@gmail.com</a>.</p>
        `,g("Erreur lors de l'envoi.")}).finally(()=>{e.removeAttribute("disabled"),e.textContent=v})})}function j(){const i=document.getElementById("copy-email-btn"),e="liagbanan@gmail.com";i&&i.addEventListener("click",()=>{navigator.clipboard.writeText(e).then(()=>{i.textContent="Copié ✓",i.classList.add("bg-teal-500/10","border-teal-500/20","text-teal-400"),g("Email professionnel copié !"),setTimeout(()=>{i.textContent="Copier",i.classList.remove("bg-teal-500/10","border-teal-500/20","text-teal-400")},2500)}).catch(()=>{g("Une erreur empêche la copie automatique.")})})}function g(i){const e=document.getElementById("toast"),a=document.getElementById("toast-text");!e||!a||(a.textContent=i,e.classList.remove("opacity-0","translate-y-20","pointer-events-none"),e.classList.add("opacity-100","translate-y-0"),setTimeout(()=>{e.classList.add("opacity-0","translate-y-20","pointer-events-none"),e.classList.remove("opacity-100","translate-y-0")},3500))}function I(){const i=document.getElementById("dev-toolbox-btn"),e=document.getElementById("dev-toolbox-drawer"),a=document.getElementById("close-drawer-btn"),n=document.getElementById("copy-standalone-btn"),s=document.getElementById("cv-btn");if(!i||!e||!a||!n)return;const r=()=>{e.classList.remove("hidden"),document.body.classList.add("overflow-hidden")},o=()=>{e.classList.add("hidden"),document.body.classList.remove("overflow-hidden")};i.addEventListener("click",r),a.addEventListener("click",o),e.addEventListener("click",t=>{t.target===e&&o()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&o()}),s&&s.addEventListener("click",t=>{t.preventDefault(),g("Téléchargement du CV d'Agbanan Elise lancé !"),fetch("/cv.pdf").then(d=>{if(!d.ok)throw new Error("Impossible de récupérer le fichier PDF.");return d.blob()}).then(d=>{const c=window.URL.createObjectURL(d),u=document.createElement("a");u.style.display="none",u.href=c,u.download="CV_AGBANAN_ELISE.pdf",document.body.appendChild(u),u.click(),window.URL.revokeObjectURL(c),document.body.removeChild(u)}).catch(d=>{console.error("Erreur de téléchargement :",d),window.open("/cv.pdf","_blank")||(window.location.href="/cv.pdf")})}),n.addEventListener("click",()=>{const t=T();navigator.clipboard.writeText(t).then(()=>{n.textContent="Code Source Copié ✓",n.classList.remove("bg-brand-blue"),n.classList.add("bg-teal-600"),g("Fichier HTML autonome copié dans le presse-papiers!"),setTimeout(()=>{n.textContent="Copier ce Code",n.classList.remove("bg-teal-600"),n.classList.add("bg-brand-blue")},3e3)}).catch(()=>{g("Copie impossible. Veuillez sélectionner le code à la main.")})})}function T(){return`<!doctype html>
<html lang="fr" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AGBANAN AMENUVEVE ELISE | Développeur d'Applications Web & Mobile</title>
    <!-- Tailwind Play CDN for easy zero-dependency preview/hosting -->
    <script src="https://cdn.tailwindcss.com"><\/script>
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
    <\/script>
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
</html>`}
