# SB Admin 2 (Reactjs Version)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Announcement

Aplikasi reactjs ini saya kembangkan dari free templates https://startbootstrap.com/theme/sb-admin-2 (berbasis html, bootstrap, jquery etc)
yang kemudian saya rewrite ke reactjs, tujuannya utamanya sebagai pembelajaran buat saya, sampai sejauh mana saya sudah memahami reactjs .
buat temen-temen  software developer/engineer (frontend) bebas menggunakan aplikasi ini, atau boleh dikembangkan 
untuk kebutuhan pribadi dll . semoga bermanfaat

## Reference 

npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons

npm install --save chart.js react-chartjs-2

## Project Structure

```text
react-sbadmin2/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Cards/
│   │   ├── Charts/
│   │   ├── Modal/
│   │   └── PageTitle/
│   ├── data/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   │   ├── Dashboard/
│   │   └── Animations/
│   ├── services/
│   ├── stores/
│   └── utils/

## Requirements

- **Node.js** v22 or higher (tested with v22.19.0)
- npm 11.6.1 or higher

## Installation

1. Clone this repository:

```bash
git clone https://github.com/panjiasmoroart/react-sbadmin2.git
cd react-sbadmin2

npm install

npm run dev
