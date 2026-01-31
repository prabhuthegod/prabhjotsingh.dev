# prabhjotsingh.dev

Personal portfolio website built with React, Vite, and Tailwind CSS. Deployed on Cloudflare Pages.

## 🚀 Features

- **Modern Stack**: React 18 + Vite for fast development and builds
- **Responsive Design**: Fully responsive layout with Tailwind CSS
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Custom CSS animations for enhanced UX
- **Fast Deployment**: Optimized for Cloudflare Pages

## 📦 Tech Stack

- **Frontend**: React 18.3
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4
- **Hosting**: Cloudflare Pages

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/prabhuthegod/prabhjotsingh.dev.git
cd prabhjotsingh.dev
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deploy to Cloudflare Pages

### Option 1: Using Cloudflare Dashboard (Recommended)

1. Push your code to GitHub
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Go to **Pages** → **Create a project**
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**

### Option 2: Using Wrangler CLI

1. Install Wrangler:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Deploy:
```bash
npm run build
wrangler pages deploy dist
```

## 📁 Project Structure

```
prabhjotsingh.dev/
├── public/              # Static assets
│   └── _redirects       # Cloudflare Pages routing config
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Projects.jsx
│   ├── App.jsx          # Main app component
│   ├── index.css        # Global styles + animations
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── wrangler.toml        # Cloudflare Pages configuration

```

## 🎨 Customization

- **Personal Info**: Update content in `src/components/Hero.jsx`
- **Projects**: Modify the projects array in `src/components/Projects.jsx`
- **Social Links**: Update links in `src/components/Hero.jsx`
- **Colors**: Adjust Tailwind theme in `tailwind.config.js`
- **Animations**: Customize animations in `src/index.css`

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Issues and pull requests are welcome!

---

Built with ❤️ by Prabhjot Singh
