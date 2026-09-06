# Portfolio — Nicolas Boscasso

Portfolio personal desarrollado con **React + Vite**.

🔗 **Live:** [nicolas-boscasso.vercel.app](https://nicolas-boscasso.vercel.app/) · 💼 [LinkedIn](https://www.linkedin.com/in/nicolas-boscasso/) · 📧 [nicolasboscasso@gmail.com](mailto:nicolasboscasso@gmail.com)

![Portfolio](https://github.com/user-attachments/assets/3f6ac2ae-0695-4c8a-bc07-6cd1d428682c)

## Stack

- **React 18** + **Vite**
- **SCSS** + **Bootstrap 5**
- **EmailJS** + **reCAPTCHA** para el formulario de contacto
- **React Icons**

## Características

- Diseño responsive (mobile first)
- Bilingüe ES / EN con `Context API` y persistencia en `localStorage`
- Formulario de contacto con validación anti-spam
- 🚧 Dark mode pendiente

## Instalación

```bash
git clone https://github.com/nicob201/portfolio.git
cd portfolio
npm install
cp .env.example .env   # completar con las credenciales de EmailJS y reCAPTCHA
npm run dev
```

Abrir [http://localhost:5173](http://localhost:5173).

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build |
| `npm run lint` | ESLint |

## Deploy

Desplegado en **Vercel**: https://nicolas-boscasso.vercel.app/
