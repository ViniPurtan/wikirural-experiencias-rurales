
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <svg className="h-9 w-9 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h1 className="text-2xl font-bold text-gray-800">Wiki<span className="text-teal-600">Rural</span></h1>
                </div>
                 <p className="hidden md:block text-gray-500 text-sm">Descubre el corazón de España</p>
            </div>
        </header>
    );
};
