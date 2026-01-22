# Project Tuna Training Hub

A modern React-based training hub application for Project Tuna guidelines and training materials.

## Features

- Clean, modern UI with light theme and blue accent colors
- Responsive design that works on desktop and mobile devices
- Easy navigation between different training sections
- Organized content structure for easy learning

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── sections/       # Content sections (Overview, Guidelines, etc.)
│   ├── Header.jsx     # Top header component
│   ├── Sidebar.jsx    # Navigation sidebar
│   └── ContentArea.jsx # Main content area
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Adding Content from PDF

### Option 1: Using the Extraction Script

1. Install a PDF extraction library:
```bash
pip install pdfplumber
# OR
pip install PyPDF2
```

2. Run the extraction script:
```bash
python3 extract-pdf-content.py
```

3. This will create `extracted-content.txt` with all the text from the PDF

4. Review the extracted content and organize it into the appropriate section components:
   - `src/components/sections/Overview.jsx`
   - `src/components/sections/GettingStarted.jsx`
   - `src/components/sections/Guidelines.jsx`
   - `src/components/sections/BestPractices.jsx`
   - `src/components/sections/Resources.jsx`

### Option 2: Manual Extraction

1. Open the PDF in a PDF viewer
2. Copy the text content section by section
3. Paste and format the content in the appropriate React components
4. Use the existing card and list structures for consistent formatting

### Adding New Sections

To add a new section:

1. Create a new component in `src/components/sections/` (e.g., `NewSection.jsx`)
2. Add the section to the `sections` array in `src/components/Sidebar.jsx`
3. Add a case in the `renderContent()` function in `src/components/ContentArea.jsx`
4. Import and use your new component

## Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Automatic Deployment

The site will automatically deploy when you push to the `main` branch. The deployment workflow:

1. Builds the React app
2. Deploys to GitHub Pages
3. Makes the site available at: `https://snorkel-ai.github.io/Tuna-EC-Training/`

### Setting Up GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically run on every push to `main`

### Manual Deployment

You can also trigger a manual deployment by:
1. Going to the **Actions** tab in your repository
2. Selecting the **Deploy to GitHub Pages** workflow
3. Clicking **Run workflow**

### Local Preview of Production Build

To preview the production build locally:

```bash
npm run build
npm run preview
```

## Customization

- Colors: Modify CSS variables or color values in component CSS files
- Sections: Add or remove sections in `Sidebar.jsx` and `ContentArea.jsx`
- Styling: Update component CSS files to match your preferences

## License

This project is for internal training purposes.
