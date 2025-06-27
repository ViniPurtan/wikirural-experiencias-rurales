
import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
    experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col">
            <div className="relative">
                <img src={experience.image} alt={experience.title} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-teal-700 font-bold px-3 py-1 rounded-full text-sm">
                    {experience.price === 0 ? 'Gratis' : `${experience.price}€`}
                </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 mb-1">{experience.category}</span>
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{experience.title}</h3>
                
                <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {experience.province}
                </div>
                
                <p className="text-gray-600 text-sm flex-grow line-clamp-3">{experience.description}</p>
            </div>
        </div>
    );
};
