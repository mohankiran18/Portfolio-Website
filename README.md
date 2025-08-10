# Portfolio-Website
Portfolio Website (React + Tailwind) – A sleek, responsive portfolio for a Prompt Engineer &amp; AI Strategist with dark glassmorphism styling. Built in React with centralized mock.js data, it features a dynamic hero, EmailJS contact form, custom chatbot, smooth navigation, and resume download.
Portfolio Website (React + Tailwind + CRACO)
A modern, responsive portfolio website built with React, designed for a Prompt Engineer and AI Strategist.
The site uses a dark theme with a clean, functional aesthetic and centralizes all content in a single data file for easy updates.

Tech Stack
React – Core JavaScript library for building UI components

React Router DOM – Handles client-side routing and navigation

Tailwind CSS – Utility-first CSS framework for responsive styling

CRACO – Customize Create React App configuration without ejecting

EmailJS – Enables a working contact form without a backend

Lucide React – Clean, accessible SVG icon library

Key Features
Dynamic Content – All text, projects, and skills are stored in mock.js, allowing quick edits without touching component code

Responsive Design – Works seamlessly on mobile, tablet, and desktop

Smooth Navigation – Sticky header and smooth-scrolling links for a polished UX

Custom Chatbot – Floating chat button for interactive user engagement

Working Contact Form – Directly sends messages via EmailJS

Folder Structure
bash
Copy
Edit
portfolio-website/
│── public/
│   ├── index.html
│── src/
│   ├── assets/        # Images and icons
│   ├── components/    # Reusable UI components
│   ├── pages/         # Main page sections
│   ├── data/mock.js   # Centralized content
│   ├── App.js         # Main App component
│   ├── index.js       # Entry point
│── tailwind.config.js
│── craco.config.js
│── package.json
Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run Development Server
bash
Copy
Edit
npm start
Open http://localhost:3000 in your browser.

Customization
Update Site Content
Modify src/data/mock.js to change:

Name, title, and bio

Skills, projects, and education

Contact details

Change Theme Colors
Edit tailwind.config.js to update color palette.

Update Resume PDF
Replace the file in public/resume.pdf and ensure the hero button links to it.

Contact Form Setup
Create an account on EmailJS

Add your service ID, template ID, and public key to the form component

Test by sending a message through the site

Deployment
You can deploy easily to:

Vercel: vercel deploy

Netlify: Link repo and deploy

GitHub Pages: npm run build and upload the build/ folder

License
This project is licensed under the MIT License – feel free to modify and use it.

Acknowledgements
React

Tailwind CSS

CRACO

EmailJS

Lucide Icons
