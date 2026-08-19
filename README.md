# FUTURE_FS_01

Portfolio professionnel d’Agbanan Amenuveve Elise

## Description du projet

Ce dépôt contient un portfolio personnel moderne et responsive conçu pour présenter le profil, les compétences, les projets, l’expérience et les formations d’Agbanan Amenuveve Elise, développeur d’applications web et mobile.

Le site met en avant plusieurs projets académiques et professionnels réalisés dans le cadre d’études et d’interventions pratiques, avec une interface orientée UX/UI et une navigation claire pour les visiteurs, recruteurs et clients potentiels.

## Fonctionnalités principales

- Page d’accueil avec hero section, navigation et identité visuelle personnalisée
- Section “À propos” et présentation du profil
- Section de compétences triables par catégories
- Présentation des expériences professionnelles et académiques
- Galerie de projets avec filtres par type de projet
- Modales de détail pour chaque projet
- Formulaire de contact et actions de copie d’email
- Préchargeur visuel au chargement de la page
- Design responsive pour mobile, tablette et desktop
- Version portable / standalone disponible dans le dossier public

## Technologies utilisées

- Vite
- TypeScript
- HTML5
- CSS3
- JavaScript / DOM vanilla
- Tailwind CSS
- GitHub Pages deployment via gh-pages
- Node.js / npm

## Structure du projet

```bash
.
├── index.html                # Structure principale du portefeuille
├── metadata.json             # Métadonnées du projet / profil
├── package.json              # Scripts de build, dev et déploiement
├── tsconfig.json             # Configuration TypeScript
├── vite.config.ts            # Configuration Vite et déploiement
├── public/
│   └── home.html             # Version HTML standalone / export statique
├── src/
│   ├── App.tsx               # Fichier de base React, actuellement non utilisé dans l’application active
│   ├── main.tsx              # Logique principale de l’application, données et interactions
│   ├── index.css             # Styles globaux et personnalisés
│   └── images/               # Captures des projets et visuels du portfolio
├── README.md
└── dist/                     # Dossier généré lors du build
```

## Prérequis

Avant de lancer le projet, assurez-vous d’avoir installé :

- Node.js 18 ou plus récent
- npm
- Git

## Installation

1. Clonez le dépôt :

```bash
git clone <url-du-repo>
cd FUTURE_FS_01
```

2. Installez les dépendances :

```bash
npm install
```

## Exécution en local

Démarrer le serveur de développement :

```bash
npm run dev
```

Le site est configuré par défaut pour tourner sur :

- http://localhost:3000

## Build de production

Pour générer la version optimisée du projet :

```bash
npm run build
```

Pour prévisualiser le build :

```bash
npm run preview -- --host 0.0.0.0 --port 4173
```

## Déploiement

Le projet est prêt pour un déploiement GitHub Pages grâce au script suivant :

```bash
npm run deploy
```

Remarque : dans le fichier `vite.config.ts`, la propriété `base` est configurée pour un déploiement sur GitHub Pages dans un sous-chemin nommé `FUTURE_FS_01`.

## Configuration nécessaire

Aucune clé API ou variable d’environnement n’est requise pour le fonctionnement local de base du projet.

Cependant, si vous souhaitez déployer ailleurs ou modifier le chemin de publication, vérifiez :

- le fichier `vite.config.ts`
- la valeur `base` utilisée pour le déploiement
- la configuration de la page hébergée si elle est servie depuis un sous-dossier

## État actuel du projet

Le projet est fonctionnel comme portfolio statique moderne et prêt à être exécuté localement ou déployé sur GitHub Pages.

Il s’agit actuellement d’une application front-end de type portfolio, avec logique d’interactions clients et données intégrées directement dans le code.

## Améliorations / évolutions futures

Les évolutions possibles incluent :

- ajout d’un backend réel pour le formulaire de contact
- intégration d’une API ou d’une base de données pour les projets
- gestion de contenu plus simple via CMS
- ajout d’une version multilingue
- mise en place de tests automatisés et CI/CD
- optimisation de la structure pour un site plus facilement maintenable

## Licence

Ce projet est fourni à des fins de démonstration et de portfolio personnel. Vérifiez les droits d’utilisation des visuels et contenus avant toute diffusion externe commerciale.
