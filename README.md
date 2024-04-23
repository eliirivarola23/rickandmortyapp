## ¡Bienvenido a Rick and Morty App!

### Este proyecto te permite seleccionar dos personajes de la serie Rick and Morty y ver los episodios en los que aparecen.

- Puedes visitar el proyecto en línea aquí: [Rick and Morty App](https://rickandmortydev.vercel.app/)
- Este proyecto se ha desarrollado utilizando React, Vite, TypeScript y Chakra UI.
- La arquitectura del proyecto fue desarrollada en base a clean architecture en modulos:

```
src/
├── pages/
│
├── assets/
│
├── components/
│
├── hooks/
│
├── hocs/
│
├── services/
│   ├── apiConfig.ts
│   └──interceptor.ts
│
├── config/
│   └──settings.ts
│
├── modules/
│   ├── characters/
│   │   ├── components/
│   │   ├── styles/
│   │   ├── hooks/
│   │   ├── interfaces/
│   │   ├── tests/
│   │   ├── services/
│   │   └── utils/
│   │
│   └── episodes/
│       ├── components/
│       ├── styles/
│       ├── hooks/
│       ├── interfaces/
│       ├── tests/
│       ├── services/
│       └── utils/
│
└── contexts/
    └── SelectedCardsContext.tsx

```

Cómo levantar el proyecto localmente Para levantar este proyecto localmente, sigue estos pasos:

Clona este repositorio en tu máquina local:

```
git clone https://github.com/eliirivarola23/rickandmortyapp.git
```

Navega al directorio del proyecto:

```
cd rickandmortyapp
```

Instala las dependencias utilizando Yarn:

```
yarn
```

Inicia el desarrollo en local:

```
yarn run dev
```

En http://localhost:5173 podrás ver la aplicación en funcionamiento. ¡Y eso es todo! Ahora puedes explorar los episodios de Rick and Morty
en los que aparecen tus personajes favoritos.
