# Les animaux du futur

## Éditer en local

- cloner le projet:

```sh
    git clone https://github.com/les-animaux-du-futur/animaux-du-futur.git
```

- installer les paquets:

```sh
    npm i
```

- lancer le serveur:

```sh
    npm run dev
```

- ✨Magic ✨

> À noter que lorsque vous rajoutez une entrée sur le cms (création/modification d'une espèce par exemple)
> la modification se fait directement sur le code en ligne, pour la retrouver dans votre code local, effectuez
> un `git pull`

## Architecture du projet

Dans le dossier racine du projet vous retrouvez deux dossier importants:

- `public/`: tout ce que vous mettez dans ce dossier se retrouve disponible sur le site, c'est içi que nous plassons les fonts, images et les icones.
- `src/`: ce dossier est très important si vous souhaitez apporter des modifications au site il contient:
  - `components/`: Les composants utilisés par les pages, les layouts ou encore d'autres composants
  - `content/`: C'est içi que le contenu du cms est enregistrer, c'est en qlq sorte la base de données du site
  - `functions/`: Ce dossier des fonctions utilitaire que nous avons coder -> `getSpecies` `getBiomes`
  - `layouts/`: Contient des layouts, ce sont des base de nos pages html composé des header et footer et balise seo
  - `pages/`: Pages du site
  - `styles/`: Style de base du site, les autres styles sont direcement dans les fichiers des composants pages ou encore layouts

## Accéder à l'interface admin(CMS)

- rendez-vous sur le /admin

> Cela signifie que vous avez créer un compte au préalable,

## Accéder aux données depuis l'extérieur

- espèces: effectuer une requête GET, ou naviguez sur `/api/species.json`
- biomes: effectuer une requête GET, ou naviguez sur `/api/biomes.json`
