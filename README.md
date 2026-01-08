# Hiba Portfolio Website

A modern, minimalist personal portfolio website built with React, Vite, and Tailwind CSS.

## Features

- ✨ Modern and clean UI design
- 📱 Fully responsive (desktop, tablet, mobile)
- 🎨 Minimalist layout with smooth animations
- 🚀 Built with React and Vite
- 🎯 SEO-friendly and accessible
- 💫 Smooth scroll navigation

## Sections

- **Hero Section** - Introduction with call-to-action buttons
- **About Me** - Professional introduction
- **Skills** - Categorized technical skills
- **Projects** - Portfolio projects with GitHub and demo links
- **Education** - Academic background
- **Contact** - Contact form and social media links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero.jsx` to update name and tagline
2. **About Section**: Edit `src/components/About.jsx` to update your bio
3. **Skills**: Edit `src/components/Skills.jsx` to update skill categories
4. **Projects**: Edit `src/components/Projects.jsx` to add/update your projects
5. **Education**: Edit `src/components/Education.jsx` to update education details
6. **Contact**: Edit `src/components/Contact.jsx` to update email, LinkedIn, and GitHub links

### Styling

The project uses Tailwind CSS. You can customize:
- Colors in `tailwind.config.js`
- Font family in `tailwind.config.js`
- Global styles in `src/index.css`

### Contact Form

The contact form currently shows a success message. To integrate with a backend service:
1. Update the `handleSubmit` function in `src/components/Contact.jsx`
2. Add your form submission logic (e.g., using a service like Formspree, EmailJS, or your own backend)

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Inter Font (Google Fonts)

## License

This project is open source and available under the MIT License.

