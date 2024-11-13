# Blank Boilerplate CI/CD PNPM Project

Welcome to the simple Frontend project.

This project is a React application utilizing TailwindCSS for styling and Ethers.js for blockchain interactions. It is configured to use ~~Yarn v4 and Craco~~ VITE as a build tool and PNPM as the
package manager. It does use GitHub CI/CD.

## Table of Contents

- [Installation](#installation)
- [Available Scripts](#available-scripts)

## Installation

To install the dependencies for this project, run:

```bash
pnpm install
```

## Available Scripts

In the project directory, you can run:

```bash
pnpm dev
```

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:5173) to view it in your browser.

```bash
pnpm build
```

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

```bash
pnpm lint
```

Runs the linter to check for code style issues and potential errors.

```bash
pnpm typecheck
```

Runs TypeScript type checking across your project.

### CI/CD Process

This project uses GitHub Actions for Continuous Integration and Continuous Deployment. The branches below may be present partially or completely.

- **Production Branch**: Code pushed to the `prod` branch will trigger the CI/CD pipeline, which will build and deploy the application to the production environment.
- **Staging Branch**: Code pushed to the `staging` branch will trigger the CI/CD pipeline, which will build and deploy the application to the staging environment.
- **Development Branch**: The `dev` branch is used for development purposes and does not trigger any CI/CD pipeline.

The CI/CD process is defined in the `.github/workflows` directory and includes steps such as checking out the repository, setting up Node.js, installing dependencies, building the project, creating a
Docker image, and deploying it to the server.

## Contributing

Happy coding <(0_0)

