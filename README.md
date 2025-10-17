# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

GitHub Pages deployment
- I added a GitHub Actions workflow that builds the Vite frontend and publishes `dist/` to GitHub Pages on each push to `main`.
- The Pages site will be published at: https://bashSunny101.github.io/SmartController-SIH/ (it may take a minute after the workflow completes).

If you prefer a different domain or a CI/CD flow that also deploys the backend, I can add that next.
