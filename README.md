# Portfolio Website using React.js

This project is a portfolio website built using React.js, where candidate data is fetched from an API and dynamically displayed on the frontend.

## Overview:
- Displays candidate information dynamically fetched from an API.
- Built using React.js for frontend development.
- Responsive design for seamless user experience across devices.

## Technologies Used:
- React.js
- HTML5
- CSS3
- JavaScript
- RESTful API
- Bootstrap

## Installation:
1. Clone the repository:
   git clone https://github.com/yourusername/portfolio-website.git

2. Navigate to the project directory:
   cd portfolio

3. Instal dependencies:
   npm install

## Usage:
1. Run the development server:
   npm start

   This will start the development server and open the website in your default web browser.

2. Explore the portfolio website and view candidate information dynamically fetched from the API.

## Explanation of design and technical decisions:
   In the App.js file, I've utilized routes to navigate between four different pages seamlessly, without reloading the entire page. I've also fetched data from the API directly in App.js, which directly affects the context state. From there, I've stored the portfolio's JSON data in a variable called userData. This data is easily accessible in every component within the components folder through destructuring using the useContext hook.

   

