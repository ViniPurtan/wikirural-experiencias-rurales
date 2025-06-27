import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-purple-600 dark:to-blue-600 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
            aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
        >
            {/* Sol */}
            <svg 
                className={`absolute w-6 h-6 text-white transition-all duration-500 transform ${
                    theme === 'light' 
                        ? 'rotate-0 scale-100 opacity-100' 
                        : 'rotate-180 scale-0 opacity-0'
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="12" r="5"></circle>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
            </svg>

            {/* Luna */}
            <svg 
                className={`absolute w-6 h-6 text-white transition-all duration-500 transform ${
                    theme === 'dark' 
                        ? 'rotate-0 scale-100 opacity-100' 
                        : '-rotate-180 scale-0 opacity-0'
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>

            {/* Efecto de brillo */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            {/* Partículas decorativas */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-pulse"></div>
        </button>
    );
};