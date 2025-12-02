# awd-nestjs-ci

Ein NestJS-Projekt mit Docker-Unterstützung für Continuous Integration und Deployment.

## Voraussetzungen

- [Node.js](https://nodejs.org/) (Version 22 oder höher)
- [Docker](https://www.docker.com/) ( für Container-Deployment)
- npm

## Installation

```sh
npm install
```

## Entwicklung

Starte den Entwicklungsserver:

```sh
npm run start:dev
```

Die Anwendung läuft standardmäßig auf `http://localhost:3000`.

## Docker

### Docker Image erstellen

```sh
docker build -t awd-nestjs-ci .
```

Die Anwendung ist dann unter `http://localhost:3000` erreichbar.

## Projektstruktur

```
awd-nestjs-ci/
├── src/                      # Quellcode
│   ├── main.ts              # Einstiegspunkt der Anwendung
│   ├── app.module.ts        # Haupt-Modul
│   ├── app.controller.ts    # Haupt-Controller
│   ├── app.controller.spec.ts
│   └── app.service.ts       # Haupt-Service
├── test/                     # E2E-Tests
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── dist/                     # Kompilierte Dateien (nach Build)
├── Dockerfile               # Docker-Konfiguration
├── package.json             # Projekt-Dependencies
├── tsconfig.json            # TypeScript-Konfiguration
├── tsconfig.build.json      # TypeScript Build-Konfiguration
├── nest-cli.json            # NestJS CLI-Konfiguration
├── eslint.config.mjs        # ESLint-Konfiguration
└── .prettierrc              # Prettier-Konfiguration
```

**Hinweis**
Hierbei handelt es sich um ein Lernprojekt.
