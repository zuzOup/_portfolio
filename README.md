# Portfolio Website

A personal portfolio website built with React and Vite.

## Contact Form Setup

The contact form uses EmailJS and reCAPTCHA. To make it work properly, you need to set up the following environment variables:

### Required Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### How to Get EmailJS Credentials

1. Go to [EmailJS](https://www.emailjs.com/) and create an account
2. Create a new Email Service (Gmail, Outlook, etc.)
3. Create an Email Template
4. Get your Public Key from the Account tab
5. Add these values to your `.env` file

### reCAPTCHA

The reCAPTCHA site key is currently hardcoded in the HTML file. If you need to change it, update the script tag in `index.html`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
