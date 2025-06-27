
import React, { useState } from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
    experience: Experience;
    index?: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index = 0 }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(() => {
        const favorites = JSON.parse(localStorage.getItem('wikiruralFavorites') || '[]');
        return favorites.includes(experience.id);
    });

    const toggleFavorite = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        
        const favorites = JSON.parse(localStorage.getItem('wikiruralFavorites') || '[]');
        let newFavorites;
        
        if (isFavorite) {
            newFavorites = favorites.filter((id: string) => id !== experience.id);
        } else {
            newFavorites = [...favorites, experience.id];
        }
        
        localStorage.setItem('wikiruralFavorites', JSON.stringify(newFavorites));
        setIsFavorite(!isFavorite);
    };

    return (
        <div 
            className="stagger-item hover-lift bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="relative overflow-hidden">
                {!imageLoaded && (
                    <div className="skeleton w-full h-48"></div>
                )}
                <img 
                    src={experience.image} 
                    alt={experience.title} 
                    className={`w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                />
                
                {/* Favorite Heart Button */}
                <button
                    onClick={toggleFavorite}
                    className="absolute top-3 left-3 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-white transition-all duration-300 transform hover:scale-110"
                >
                    <svg 
                        className={`w-4 h-4 transition-colors duration-300 ${
                            isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'
                        }`} 
                        fill={isFavorite ? 'currentColor' : 'none'} 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                </button>

                {/* Price Badge */}
                <div className="absolute top-3 right-3 glass text-teal-700 font-bold px-3 py-1.5 rounded-full text-sm shadow-md">
                    {experience.price === 0 ? (
                        <span className="text-green-600 font-extrabold">¡GRATIS!</span>
                    ) : (
                        <span>{experience.price}€</span>
                    )}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-5">
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 mb-3">
                    {getCategoryIcon(experience.category)}
                    <span className="ml-1">{experience.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-teal-700 transition-colors duration-300">
                    {experience.title}
                </h3>
                
                {/* Location */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="font-medium">{experience.province}</span>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {experience.description}
                </p>

                {/* Action Button */}
                <button className="btn-magical w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                    Ver Experiencia
                </button>
            </div>
        </div>
    );
};

const getCategoryIcon = (category: string) => {
    const icons = {
        'Aventura': '🏔️',
        'Gastronomía': '🍷',
        'Cultura': '🏛️',
        'Naturaleza': '🌿'
    };
    return icons[category as keyof typeof icons] || '📍';
};
