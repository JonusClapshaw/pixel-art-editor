# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# pixel-art-editor

## Deploy To GitHub Pages

1. Push this repository to GitHub as `pixel-art-editor`.
2. Run:

```bash
npm run deploy
```

3. In GitHub repo settings, go to Pages and set:
	- Source: `Deploy from a branch`
	- Branch: `gh-pages`
	- Folder: `/ (root)`

Your site will be available at:

`https://<your-github-username>.github.io/pixel-art-editor/`

If your repo name changes, update `base` in `vite.config.js` to match that repository name.
