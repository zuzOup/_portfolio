# Zuzana's Portfolio Website

A personal portfolio website showcasing my projects, skills, and experience. Built with React, Vite, and CSS.

## ✨ Features

- **Responsive Design**
- **Dark/Light Mode** - Automatic theme switching with manual toggle
- **Interactive Animations** - Smooth transitions and engaging UI elements
- **Contact Form** - Functional contact form with basic spam protection
- **Project Showcase** - Detailed project presentations with images
- **Skills & Certificates** - Visual display of technical skills and achievements

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS3, Styled Components
- **Animations**: CSS Transitions, React Transition Group
- **Email Service**: EmailJS
- **Spam Protection**: Google reCAPTCHA v3
- **Deployment**: Firebase Hosting
- **Icons**: Custom SVG components

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd _portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📧 Contact Form Setup

The contact form uses EmailJS and reCAPTCHA for reliable email delivery and spam protection.

### Environment Variables

Create a `.env` file in the root directory:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

# Optional: reCAPTCHA (currently hardcoded in HTML)
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template
4. Get your credentials from the Account tab
5. Add them to your `.env` file

### reCAPTCHA Setup

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Create a new reCAPTCHA v3 key
3. Add your domains (localhost, production URL)
4. Update the script tag in `index.html`

## 📁 Project Structure

```
src/
├── Components/          # Reusable UI components
├── Home/               # Main page components
│   ├── AboutMe/        # About section
│   ├── Contact/        # Contact form
│   ├── Projects/       # Project showcase
│   └── Title/          # Hero section
├── Layout/             # Layout components
├── Nav/                # Navigation
├── hooks/              # Custom React hooks
└── helpers/            # Utility functions
```

## 🎨 Customization

### Colors & Themes

- CSS custom properties in `src/index.css`
- Dark/light mode variables
- Consistent color palette throughout

### Content

- Update project data in Projects-data and Project_list
- Modify personal info in AboutMe_text and AboutMe_slider section
- Add/remove certificates in Accomplishments/list

## 📝 Notes

- This is a personal project, not intended for commercial use
- All images and content are personal
- Feel free to use as inspiration for your own portfolio
- Contact form requires active EmailJS service

## 🤝 Contributing

Since this is a personal portfolio, contributions aren't expected, but feedback is always welcome!

---
