const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');


// Create dist directory if it doesn't exist
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}

// SVG optimization configuration
const svgoConfig = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false
        }
      }
    },
    'removeDimensions'
  ]
};

// Read the SVG directory
const svgDir = './svg';
const files = fs.readdirSync(svgDir);

// Process each SVG file
files.forEach(file => {
    if (path.extname(file) === '.svg') {
        const name = path.basename(file, '.svg');
        const filePath = path.join(svgDir, file);
        const svg = fs.readFileSync(filePath, 'utf8');

        // Optimize SVG
        const result = optimize(svg, svgoConfig);
        const optimizedSvg = result.data;

        // Convert to React component
        const componentName = name.charAt(0).toUpperCase() + name.slice(1) + 'Icon';
        const jsCode = `
import React from 'react';

const ${componentName} = ({ width = 24, height = 24, color = 'currentColor', ...props }) => {
    return (
        ${optimizedSvg.replace('<svg', '<svg width={width} height={height} fill={color} {...props}')}
    );
};

export default ${componentName};
`;

        // Write to dist directory
        fs.writeFileSync(`./dist/${name}.js`, jsCode);
        console.log(`Processed: ${name}.svg`);
    }
});

console.log('Build completed successfully!');
