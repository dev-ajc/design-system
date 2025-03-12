# Custom SVG Icons Package

A lightweight package that provides customizable SVG icons as React components.

## Installation

```bash
# Clone or download the package
# Then install dependencies
npm install
```

## Building the Package

```bash
npm run build
```

This will process all SVG files in the `svg/` directory and generate React components in the `dist/` directory.

## Usage

```jsx
import { HomeIcon, SearchIcon, SettingsIcon } from 'custom-svg-icons';

function App() {
  return (
    <div>
      <HomeIcon width={32} height={32} color="blue" />
      <SearchIcon width={24} height={24} color="green" />
      <SettingsIcon width={28} height={28} color="#FF5733" />
    </div>
  );
}
```

## Props

Each icon component accepts the following props:

- `width` (default: 24): Width of the icon in pixels
- `height` (default: 24): Height of the icon in pixels
- `color` (default: 'currentColor'): Fill color of the icon
- Additional SVG attributes as needed

## Adding Custom Icons

1. Add your SVG files to the `svg/` directory
2. Run `npm run build` to generate the components
3. Update `index.js` to export your new icons
4. Import and use in your project

## Available Icons

- HomeIcon
- SearchIcon
- SettingsIcon
- UserIcon
- NotificationIcon

## License

MIT
