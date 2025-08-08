#!/bin/bash

# Palmwine Papi Portfolio - Development Setup Script

echo "🎨 Setting up Palmwine Papi Portfolio Development Environment..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ and run this script again."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d 'v' -f 2)
REQUIRED_VERSION="16.0.0"

if ! node -pe "process.exit(require('semver').gte('$NODE_VERSION', '$REQUIRED_VERSION') ? 0 : 1)" 2>/dev/null; then
    echo "❌ Node.js version $NODE_VERSION is installed, but version $REQUIRED_VERSION or higher is required."
    exit 1
fi

echo "✅ Node.js $NODE_VERSION detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🚀 Development environment setup complete!"
echo ""
echo "Available commands:"
echo "  npm run dev        - Start development server with live reload"
echo "  npm run start      - Start basic development server"
echo "  npm run build      - Build for production"
echo "  npm run lint       - Lint JavaScript code"
echo "  npm run format     - Format code with Prettier"
echo ""
echo "📱 To start developing:"
echo "  1. Run: npm run dev"
echo "  2. Open: http://localhost:3000"
echo "  3. Edit files and see changes live!"
echo ""
echo "🎨 Customize your portfolio:"
echo "  - Replace placeholder images in assets/images/"
echo "  - Edit content in index.html"
echo "  - Modify colors in styles/main.css"
echo "  - See README.md for detailed customization guide"
echo ""
echo "🇳🇬 Embrace the Nigerian Alte aesthetic! Make it your own!"
