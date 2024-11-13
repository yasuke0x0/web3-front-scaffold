# Blank Boilerplate CI/CD PNPM Project

Welcome to the Blank Boilerplate Frontend project. 

This project is a React application utilizing TailwindCSS for styling and Ethers.js for blockchain interactions. It is configured to use ~~Yarn v4 and Craco~~ VITE as a build tool and PNPM as the package manager. It does use Github CI/CD.

## Table of Contents

- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)

## Installation

To install the dependencies for this project, run:

```bash
pnpm install
```

## Available Scripts

In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:5173) to view it in your browser.

### `pnpm build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `pnpm lint`

Runs the linter to check for code style issues and potential errors.

### `pnpm preview`

Locally preview the production build. This command should be run after `pnpm build`.

### `pnpm typecheck`

Runs TypeScript type checking across your project.


## Project Structure

```
.
├── eslint.config.js
├── index.html
├── Makefile
├── package.json
├── pnpm-lock.yaml
├── postcss.config.cjs
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── tailwind.config.cjs
├── tsconfig.app.json
├── tsconfig.app.tsbuildinfo
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.node.tsbuildinfo
├── utils
│   ├── dockerfiles
│   │   ├── docker-compose.nginx.yml
│   │   └── Dockerfile.nginxbuild
│   └── nginx
│       └── nginx.conf
└── vite.config.ts
```

### CI/CD Process

This project uses GitHub Actions for Continuous Integration and Continuous Deployment. The branches below may be present partially or completely.

- **Production Branch**: Code pushed to the `prod` branch will trigger the CI/CD pipeline, which will build and deploy the application to the production environment.
- **Staging Branch**: Code pushed to the `staging` branch will trigger the CI/CD pipeline, which will build and deploy the application to the staging environment.
- **Testnet Branch**: Code pushed to the `testnet` branch will trigger the CI/CD pipeline, which will build and deploy the application to the testnet environment.
- **Development Branch**: The `dev` branch is used for development purposes and does not trigger any CI/CD pipeline.

The CI/CD process is defined in the `.github/workflows` directory and includes steps such as checking out the repository, setting up Node.js, installing dependencies, building the project, creating a Docker image, and deploying it to the server.

## Contributing

Happy coding <(0_0)

