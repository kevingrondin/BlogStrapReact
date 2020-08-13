# Backend

Excellente [formation](https://github.com/GalloDaSballo/) sur l'utilisation de Strapi.

Beaucoup de mes projets sont réalisé avec **firebase** en back, c'est un vrais gain de temps.

Aspect positif de **firebase**

- Base de donnée
- temp réel
- Stockage
- Rapidité
- Stabilité
- Deploiement

Aspect negatif de **firebase**

- Donnée stocké chez Google (RGPD)
- Peux devenir limité si le projet commence a avoir beaucoup de trafic
- Non scallable

Aspect positif de **Strapi**

- Base de donnée
- Stockage
- Rapidité
- Stabilité
- Pas de limite
- Scallable

Aspect negatif de **Strapi**

- Deploiement

Quand le client est assez limité dans le temps, et qu'il veux absolument avoir ces donnée chez lui **Strapi** est la meilleur solution, mais si client est au début de sont projet, et que le trafic reste moyen **firebase** seras préféré

## Install

```Shell
npx create-strapi-app ig-backend --quickstart
```

## Collection

Il faut creer les collections

> Post

- image | `single media`
- description | `rich text`
- likes | `interger`
- author | `relation` user has many post

> Likes

- user | `relation` user has many likes
- post | `relation` Post has many likes

## ig-backend

[Source](https://github.com/GalloDaSballo/Strapi-Quickstart-Backend)

remplacer le dossier **api** et **config** de votre projet strapi

## ig-frontend

[Source](https://github.com/GalloDaSballo/Strapi-Quickstart-Frontend)

La différence avec le projet source c'est **react-router-dom@6** **history@5** **l'optional shining** et quelque optimisation, mais le code react est tres basic, c'est la parti intéraction avec Strapi est la plus intéréssente
