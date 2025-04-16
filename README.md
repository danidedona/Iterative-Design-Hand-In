## Setting Up the Frontend Project

### 1. Created the Project

```bash
npm create vite@latest your-project-name
```

- Select **React**
- Select **JavaScript**

---

### 2. Install Dependencies

#### Motion Animations
```bash
npm install framer-motion
```

#### Tailwind CSS
```bash
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npx tailwindcss init -p
```

---

### 3. Configured Tailwind

#### `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

#### `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Ensure full width + height */
html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
```

---

### 4. Run the Dev Server

```bash
npm run dev
```

---

### Files Edited

- `App.jsx`
- `Template.jsx`
