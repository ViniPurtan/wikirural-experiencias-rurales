
import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <svg className="h-9 w-9 text-teal-600 animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                            Wiki<span className="text-teal-600 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Rural</span>
                        </h1>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Experiencias Auténticas</p>
                    </div>
                </div>
                
                <div className="flex items-center space-x-4">
                    <p className="hidden md:block text-gray-500 dark:text-gray-400 text-sm font-medium">
                        Descubre el corazón de España 🇪🇸
                    </p>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
};
