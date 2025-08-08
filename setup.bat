@echo off
title Palmwine Papi Portfolio - Development Setup

echo 🎨 Setting up Palmwine Papi Portfolio Development Environment...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 16+ and run this script again.
    echo    Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detected
node --version

REM Install dependencies
echo.
echo 📦 Installing dependencies...
npm install

if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully
echo.
echo 🚀 Development environment setup complete!
echo.
echo Available commands:
echo   npm run dev        - Start development server with live reload
echo   npm run start      - Start basic development server
echo   npm run build      - Build for production
echo   npm run lint       - Lint JavaScript code
echo   npm run format     - Format code with Prettier
echo.
echo 📱 To start developing:
echo   1. Run: npm run dev
echo   2. Open: http://localhost:3000
echo   3. Edit files and see changes live!
echo.
echo 🎨 Customize your portfolio:
echo   - Replace placeholder images in assets/images/
echo   - Edit content in index.html
echo   - Modify colors in styles/main.css
echo   - See README.md for detailed customization guide
echo.
echo 🇳🇬 Embrace the Nigerian Alte aesthetic! Make it your own!
echo.
pause
