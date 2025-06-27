
import React from 'react';
import { Experience } from '../types';
import { ExperienceCard } from './ExperienceCard';

interface ExperienceListProps {
    experiences: Experience[];
}

export const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
    if (experiences.length === 0) {
        return (
            <div className="text-center py-20 px-6 container mx-auto">
                 <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No se encontraron experiencias</h3>
                <p className="mt-1 text-sm text-gray-500">Prueba a cambiar o limpiar los filtros para ver más resultados.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {experiences.map(exp => (
                    <ExperienceCard key={exp.id} experience={exp} />
                ))}
            </div>
        </div>
    );
};
