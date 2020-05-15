# Modèle de configuration de Webpack pour WordPress

## Réutilisation

1. Cloner le repo `git clone git@github.com:O-clock-Quantum/WP-Pattern-Webpack-christopheOclock.git`
2. Renommer le dossier cloné `mv WP-Pattern-Webpack-christopheOclock <nomduprojet>`
3. Se rendre dans le dossier `cd <nomduprojet>`
4. Supprimer le dossier `.git` afin de repartir d'un repo tout neuf `sudo rm -R .git`
5. Initialisation d'un git tout beau tout neuf `git init`
6. Premier versionning de notre repo:
    - `git add .`
    - `git commit -m "First Commit"`
    - `git remote add origin git@github.com:<votre_orga>/<votre_repo>.git`
    - `git push -u origin master`

## Installation

1. Exécuter dans le répertoire la commande `npm install` qui va installer toute les dépendances Node.js nécessaire au bon fonctionnement de l'application.
2. Exécuter une des commandes ci-dessous.

## Commandes disponibles

- `npm run start` : Démarre le serveur de développement en utilisant [Browsersync](https://www.browsersync.io/)
- `npm run build:dev` : Génère les ressources front sans compression en vue d'une utilisation dans un environnement de développemnt
- `npm run build:prod` : Génère les ressources front avec compression (minify, uglify) en vue d'une utilisation dans un environnement de production
- `npm run clean` : Supprime les fichiers générés par Webpack
- `npm run clean:all` : Supprime les fichiers générés par Webpack ainsi que le répertoire des dépendances installées avec NPM (`node_modules`)
