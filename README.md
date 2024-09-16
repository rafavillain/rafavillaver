# Intro

My site

## Tech Stack

|                            | Nombre    | Versión  |
| ---                        | ---       | ---      |
| **Language**               | Node      | v20.10.0 |
| **Dependency Manager**     | Npm       | v10.2.3  |

### Prerrequisitos

You must have at least Node version v20.10.0 installed on your premises and NPM >= 10.0.0. You can check your version with this command:

```bash
node --version && npm --version
```

If you don't have that version of Node, follow [these instructions to install Node Version Manager](https://medium.com/devops-techable/how-to-install-nvm-node-version-manager-on-macos-with-homebrew-1bc10626181)

# Install dependencies

```bash
npm install
```

# Run project

```bash
npm run dev
```

# Run production build

```bash
npm run build
```

The content of this build will appear in the /dist folder.

## Code format
In this repository we will not have tests as such, so our tests will be the linters, ESlint and StyleLint are being used, so it is recommended that you have them installed in your code editor to be able to detect problems while writing code.

Code cannot be uploaded that does not pass the linters; any exception must be discussed with the entire team.

To run the linters from the console you can do this with:

```bash
npm run lint
```

This will run both ESlint and Stylelint. If you want to run them separately, we will have to execute:
```bash
npm run lint:css
```
either
```bash
npm run lint:js
```

If warnings appear when running the linter, many times we can fix them automatically by running
```bash
npm run fix:css
```
either
```bash
npm run fix:js
```
each one in his case.

## Extensiones necesarias
| Extensión                 | Enlace                                                                         |
| ---                       | ---                                                                            |
| EditorConfig for VS Code  | https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig  |
| Stylelint                 | https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint |
| ESLint                    | https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint     |
| Prettier - Code formatter | https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode     |


## Docs

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
