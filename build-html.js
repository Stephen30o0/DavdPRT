const fs = require('fs');

// Read the original HTML file
let html = fs.readFileSync('index.html', 'utf8');

// Replace CSS references with minified version
html = html.replace(
  /<link rel="stylesheet" href="styles\/main\.css">/,
  '<link rel="stylesheet" href="styles/main.min.css">'
);

// Remove other CSS files since they're combined in main.min.css
html = html.replace(
  /<link rel="stylesheet" href="styles\/animations\.css">\s*/,
  ''
);

html = html.replace(
  /<link rel="stylesheet" href="styles\/responsive\.css">\s*/,
  ''
);

// Remove all individual JavaScript script tags
html = html.replace(
  /<script src="js\/[^"]*\.js"><\/script>\s*/g,
  ''
);

// Find the closing </body> tag and add the minified JS before it
html = html.replace(
  /<\/body>/,
  '    <script src="js/main.min.js"></script>\n</body>'
);

// Write the modified HTML to the dist directory
fs.writeFileSync('dist/index.html', html);

console.log('HTML file processed and copied to dist/index.html');
