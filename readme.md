[![Netlify Status](https://api.netlify.com/api/v1/badges/1f0700e1-55c5-4d25-8546-a66bbd9861c2/deploy-status)](https://app.netlify.com/sites/mapa-app/deploys)

![MaPa App](https://github.com/mapa-app/source/raw/develop/assets/logo-mapa.png)

# MaPa App

* [Prepare](#prepare)
* [Build](#build)
* [Serve](#serve)

## Prepare
1. Use correct node version as defined in `.nvmrc`. The [node version manager](https://github.com/nvm-sh/nvm) is highly recommended.
1. Install dependencies with `npm install`

## Build
Simply run `npm run build`.

## Serve
For local development run `npm start`. This creates a development server on `http://localhost:3333`
with a file watcher and live reload.

The backend is served on `http://localhost:4000/graphql`, the graphql endpoint also serves a [playground](http://localhost:4000/graphql).

To use the local backend, you have to point the api url in the config (`packages/frontend/src/config.json`) to the graphql endpoint.

![#wirvsvirus](https://github.com/mapa-app/source/raw/develop/assets/logo-wirvsvirus.png)
