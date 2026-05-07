# Pixel-i

A modern photography website built with React and Node.js featuring a sleek black theme and multiple gallery pages.

## Features

- **Black Theme Design**: Elegant dark theme with professional styling
- **5 Gallery Pages**: 
  - Wedding Photography
  - Event Photography  
  - Birthday Photography
  - Portrait Photography
  - Nature Photography
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Navigation**: Smooth navigation between different gallery sections
- **Interactive Gallery**: Hover effects and image overlays for enhanced user experience

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the project directory:
   ```bash
   cd /Users/sri/Desktop/photography
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
photography/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── Gallery.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Wedding.js
│   │   ├── Event.js
│   │   ├── Birthday.js
│   │   ├── Portrait.js
│   │   └── Nature.js
│   ├── data/
│   │   └── images.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Customization

### Adding Real Images

Replace the placeholder images in `src/data/images.js` with your actual photography images. Update the image URLs and descriptions to match your content.

### Styling

The main styles are in `src/index.css`. You can customize:
- Colors and theme
- Typography
- Layout and spacing
- Responsive breakpoints

### Adding New Gallery Pages

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.js`
3. Add navigation link in `src/components/Navbar.js`
4. Create image data in `src/data/images.js`

## Technologies Used

- React 18
- React Router DOM
- CSS3
- Node.js
- npm

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
