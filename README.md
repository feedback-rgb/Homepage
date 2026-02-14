# PawByteLabs Official Website

A modern, responsive website for PawByteLabs - a company focused on developing fun mobile applications. The website features a clean blue-to-cyan gradient design with sections for app showcase, features, statistics, and legal documentation.

## 📋 Features

- 🎨 Modern UI with blue/cyan gradient color scheme
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 App showcase with 6 featured applications
- 📊 Statistics display section
- ✨ Features highlight section
- 📄 Privacy Policy page
- 📄 Terms of Service page
- 🔗 Google Play download link

## 🛠️ Technology Stack

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

## 📦 Installation

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** or **pnpm** (pnpm is recommended)

### Step 1: Download the Code

Since this is a Figma Make project, you can:
1. Copy all the files from this workspace
2. Or export the project if that option is available

### Step 2: Install Dependencies

Open a terminal in the project directory and run:

```bash
# If using npm
npm install

# If using pnpm (recommended)
pnpm install
```

### Step 3: Start Development Server

```bash
# If using npm
npm run dev

# If using pnpm
pnpm dev
```

The website should now be running at `http://localhost:5173` (or another port if 5173 is busy).

## 🚀 Building for Production

To create a production build:

```bash
# If using npm
npm run build

# If using pnpm
pnpm build
```

The built files will be in the `dist` folder, ready to be deployed to any static hosting service.

## 📁 Project Structure

```
pawbytelabs-website/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── figma/
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   ├── ui/              # Reusable UI components
│   │   │   ├── Header.tsx        # Navigation header
│   │   │   ├── Hero.tsx          # Hero section
│   │   │   ├── Stats.tsx         # Statistics section
│   │   │   ├── AppsShowcase.tsx  # App cards display
│   │   │   ├── Features.tsx      # Features section
│   │   │   ├── Footer.tsx        # Footer with links
│   │   │   ├── PrivacyPolicy.tsx # Privacy policy page
│   │   │   └── TermsOfService.tsx # Terms page
│   │   └── App.tsx               # Main app component
│   └── styles/
│       ├── index.css             # Global styles
│       ├── fonts.css             # Font imports
│       ├── tailwind.css          # Tailwind directives
│       └── theme.css             # Theme variables
├── package.json
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Changing Colors

The website uses a blue-to-cyan gradient color scheme. To customize:

1. **Tailwind Classes**: Update gradient classes in components:
   - `from-blue-600 to-cyan-500` (main gradient)
   - `from-blue-50 via-cyan-50 to-teal-50` (background gradient)

2. **Theme Variables**: Edit `/src/styles/theme.css` for global theme adjustments

### Adding/Removing Apps

Edit `/src/app/components/AppsShowcase.tsx`:

```typescript
const apps = [
  {
    id: 1,
    name: 'Your App Name',
    description: 'Your app description',
    icon: '📱', // Emoji icon
    downloads: '1M+',
    rating: 4.8,
    category: 'Category',
    gradient: 'from-blue-500 to-cyan-500',
  },
  // Add more apps...
];
```

### Updating Content

- **Hero Section**: `/src/app/components/Hero.tsx`
- **Statistics**: `/src/app/components/Stats.tsx`
- **Features**: `/src/app/components/Features.tsx`
- **Contact Info**: `/src/app/components/Footer.tsx`
- **Legal Pages**: `/src/app/components/PrivacyPolicy.tsx` and `TermsOfService.tsx`

## 🔗 App Store Links

Update the Google Play download link in:
- `/src/app/components/Hero.tsx` (main download button)
- `/src/app/components/Footer.tsx` (footer link)

Replace the placeholder link with your actual Google Play URL:
```typescript
// Google Play
href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
```

## 🌐 Deployment

This is a static site and can be deployed to any hosting service:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to your GitHub Pages branch

### Other Hosting Services
Simply upload the contents of the `dist` folder to your hosting provider.

## 📝 License

© 2026 PawByteLabs. All rights reserved.

## 🤝 Support

For questions or issues:
- Email: contact@pawbytelabs.com
- Phone: +86 400-123-4567
- Location: Shenzhen, China

## 🎯 Development Notes

- The project uses **Vite** for fast development and builds
- **Tailwind CSS 4** is configured for styling
- All components are built with **TypeScript** for type safety
- The design is fully **responsive** and mobile-friendly
- Navigation between pages (Home, Privacy, Terms) is handled client-side

---

**Built with ❤️ using Figma Make**