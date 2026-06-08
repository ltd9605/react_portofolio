# Silvester - Personal Portfolio

A modern, dynamic, and fully responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. This portfolio showcases projects, certificates, and skills, with data dynamically fetched from a Supabase backend.

## 🌟 Features

- **Dynamic Welcome Screen**: An interactive preloader with smooth Framer Motion animations that ensures data is loaded before revealing the main content.
- **Modern UI/UX**: Utilizes glassmorphism, 3D elements, and smooth gradients for a premium visual experience.
- **Data-Driven**: Projects and Certificates are dynamically fetched from a Supabase database.
- **Contact Form**: Direct messaging feature integrated with Supabase to store messages securely.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports using Tailwind CSS.
- **Dark/Light Theme Support**: Built-in theme toggling for user preference.
- **Animated Components**: Smooth page transitions, hover effects, and scrolling animations powered by Framer Motion.

## 🚀 Technologies Used

- **Frontend Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React & FontAwesome
- **Backend/Database**: Supabase
- **Routing**: React Router DOM (if applicable)

## 📁 Database Schema (Supabase)

The portfolio relies on the following database tables:

1. **`projects`**: Stores project details, including name, description, features, technologies used, images, and links (demo, GitHub).
2. **`certificates`**: Stores certificate details, including name, issuer, issue date, images, and verification links.
3. **`Message`**: Stores messages submitted via the Contact section.

## ⚙️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ltd9605/react_portofolio.git
   cd react_portofolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## 🛠️ Project Structure

```
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components (Navbar, Footer, Loading, etc.)
│   ├── sections/         # Main page sections (Home, About, Projects, Skills, Contact)
│   ├── services/         # API and Supabase integration
│   ├── App.jsx           # Main application entry point
│   ├── main.jsx          # React DOM rendering
│   └── index.css         # Global styles and Tailwind imports
├── .env                  # Environment variables
├── vite.config.js        # Vite configuration
└── package.json          # Project metadata and dependencies
```

## 📜 License
This project is open-source and available under the MIT License.
