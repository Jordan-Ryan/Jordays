# Productivity App

A minimalist all-in-one productivity web app built with Next.js, TypeScript, and TailwindCSS. Features a clean black-and-white design with collapsible sidebar navigation and responsive layout.

## 🚀 Features

- **Modern Stack**: Next.js 15 with TypeScript and TailwindCSS
- **Responsive Design**: Mobile-first approach with collapsible sidebar
- **Clean UI**: Minimalist black-and-white aesthetic with bold typography
- **Navigation**: Today, Tasks, Calendar, Notes, and Habits pages
- **Global Search**: Search across all content (placeholder implementation)
- **Auto Deployment**: Automatic deployment to GitHub Pages on push to main

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Context
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd productivity-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run export` - Build and export static files
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Manual deployment to GitHub Pages

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000)
- **Background**: White (#FFFFFF)
- **Secondary**: Gray scale (various shades)
- **Accent**: Black for interactive elements

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: Regular, Medium, Semibold, Bold
- **Sizes**: Responsive scale from 12px to 32px

### Components
- **Layout**: Fixed header with collapsible sidebar
- **Navigation**: Icon-based with smooth animations
- **Cards**: Clean white cards with subtle borders
- **Buttons**: Black primary, white secondary with hover states

## 📱 Responsive Design

- **Mobile**: Sidebar collapses to hamburger menu
- **Tablet**: Sidebar can be toggled
- **Desktop**: Full sidebar with labels
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

## 🚀 Deployment

### Automatic Deployment
The app is configured for automatic deployment to GitHub Pages:

1. Push to the `main` branch
2. GitHub Actions will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

### Manual Deployment
```bash
npm run deploy
```

### GitHub Pages Setup
1. Go to your repository settings
2. Navigate to Pages section
3. Set source to "GitHub Actions"
4. The workflow will handle the rest

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── today/             # Today page
│   ├── tasks/             # Tasks page
│   ├── calendar/          # Calendar page
│   ├── notes/             # Notes page
│   ├── habits/            # Habits page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Top navigation bar
│   ├── Sidebar.tsx        # Side navigation
│   └── Layout.tsx         # Main layout wrapper
├── context/               # React Context
│   └── AppContext.tsx     # Global app state
└── types/                 # TypeScript types
    └── index.ts           # Type definitions
```

## 🔧 Configuration

### Next.js Configuration
- Static export enabled for GitHub Pages
- Trailing slashes enabled
- Images unoptimized for static hosting

### TailwindCSS Configuration
- Custom font family (Inter)
- Responsive breakpoints
- Custom color palette

## 🎯 Future Enhancements

- [ ] Task management functionality
- [ ] Calendar integration
- [ ] Note-taking features
- [ ] Habit tracking
- [ ] Search functionality
- [ ] User authentication
- [ ] Data persistence
- [ ] Dark mode toggle
- [ ] Keyboard shortcuts
- [ ] PWA capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- Vercel for the deployment platform
- GitHub for hosting and CI/CD