// Imports react-dom package, which lets us use react
import ReactDOM from 'react-dom/client';

import './index.css';
// Imports App.js. You should omit .js for JavaScript files when importing.
import App from './App';

// Creates main entry point of the overall UI we are going to build with REACT. Essentially, links to our SPA HTML file.
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render method tells REACT what should be rendered in that div (root). <App /> is App.js, which is a component.
root.render(<App />);
