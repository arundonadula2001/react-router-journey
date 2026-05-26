VanLife About Page

This project is a simple About Page built using React and React Router for a VanLife travel rental website.

Currently, two official plugins are available:

Features
React functional component
React Router navigation using Link
Hero image section
Clean content layout
Call-to-action section
Separate CSS styling file
Technologies Used
React
React Router DOM
CSS3
Vite
Project Structure
src/
│
├── assets/
│   └── images/
│       └── about-hero.png
│
├── components/
│   └── About.jsx
│
├── styles/
│   └── About.css
About Component

The component includes:

A hero image
Company mission statement
Information about the vanlife community
CTA section with navigation button
Code Overview
Import Statements
import { Link } from "react-router-dom";
import aboutHero from "../assets/images/about-hero.png";
import "./About.css";
Navigation

Uses React Router's Link component for client-side routing.

<Link className="link-button" to="/vans">
    Explore our vans
</Link>
Installation
Clone the repository
git clone <your-repo-url>
Navigate to the project folder
cd project-name
Install dependencies
npm install
Start the development server
npm run dev
Learning Goals

This project helps practice:

React component structure
React Router navigation
Importing images in React
CSS styling
Layout design
Future Improvements
Add responsive design
Add animations
Create Vans listing page
Add dynamic routing
Connect backend APIs
Author

DONADULA ARUN
Java Full Stack Developer