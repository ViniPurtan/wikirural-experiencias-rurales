import React, { useState } from 'react';
import { Filters, Province, Category } from '../types';
import { CATEGORIES, PROVINCES, MAX_PRICE } from '../constants';

interface AdvancedFiltersPanelProps {
    filters: Filters;
    resultsCount: number;
    onResetFilters: () => void;
    onSearchChange: (value: string) => void;
    onProvinceChange: (value: Province | 'all') => void;
    onCategoryChange: (value: Category | 'all') => void;
    onPriceChange: (value: number) => void;
}

export const AdvancedFiltersPanel: React.FC<AdvancedFiltersPanelProps> = ({ 
    filters, 
    resultsCount, 
    onResetFilters,
    onSearchChange,
    onProvinceChange,
    onCategoryChange,
    onPriceChange
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

    const hasActiveFilters = 
        filters.searchTerm !== '' || 
        filters.province !== 'all' || 
        filters.category !== 'all' || 
        filters.priceRange.max !== MAX_PRICE;

    const quickFilters = [
        { label: 'Gratis', action: () => onPriceChange(0) },
        { label: 'Castellón', action: () => onProvinceChange('Castellón') },
        { label: 'Aventura', action: () => onCategoryChange('Aventura') },
        { label: 'Gastronomía', action: () => onCategoryChange('Gastronomía') }
    ];

    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-[73px] z-30 transition-all duration-300">
            <div className="container mx-auto p-4">
                {/* Barra de búsqueda principal y contador de resultados */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                    <div className="flex-1">
                        <div className="relative">
                            <input
                                type="text"
                                value={filters.searchTerm}
                                onChange={(e) => onSearchChange(e.target.value)}
                                placeholder="🔍 Buscar experiencias rurales..."
                                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white transition-all duration-300 text-lg"
                            />
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-900 dark:to-emerald-900 px-4 py-2 rounded-xl">
                            <span className="text-teal-700 dark:text-teal-300 font-bold text-lg">
                                {resultsCount} experiencias
                            </span>
                        </div>
                        
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="btn-magical px-4 py-2 rounded-xl flex items-center gap-2 font-medium"
                        >
                            <span>Filtros</span>
                            <svg 
                                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Filtros rápidos */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {quickFilters.map((filter, index) => (
                        <button
                            key={index}
                            onClick={filter.action}
                            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-teal-100 dark:hover:bg-teal-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                        >
                            ⚡ {filter.label}
                        </button>
                    ))}
                    
                    {hasActiveFilters && (
                        <button
                            onClick={onResetFilters}
                            className="px-3 py-1.5 bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800 text-red-700 dark:text-red-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                        >
                            🗑️ Limpiar filtros
                        </button>
                    )}
                </div>

                {/* Panel de filtros expandido */}
                <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                        {/* Provincia */}
                        <div className="scale-in">
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                📍 Provincia
                            </label>
                            <select 
                                value={filters.province} 
                                onChange={(e) => onProvinceChange(e.target.value as Province | 'all')} 
                                className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
                            >
                                <option value="all">Todas las provincias</option>
                                {PROVINCES.map(province => (
                                    <option key={province} value={province}>{province}</option>
                                ))}
                            </select>
                        </div>

                        {/* Categoría */}
                        <div className="scale-in" style={{ animationDelay: '0.1s' }}>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                🎯 Categoría
                            </label>
                            <select 
                                value={filters.category} 
                                onChange={(e) => onCategoryChange(e.target.value as Category | 'all')} 
                                className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
                            >
                                <option value="all">Todas las categorías</option>
                                {CATEGORIES.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        {/* Precio */}
                        <div className="scale-in" style={{ animationDelay: '0.2s' }}>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                💰 Precio máximo: {filters.priceRange.max}€
                            </label>
                            <input
                                type="range"
                                min="0"
                                max={MAX_PRICE}
                                value={filters.priceRange.max}
                                onChange={(e) => onPriceChange(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                            />
                            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                <span>0€</span>
                                <span>{MAX_PRICE}€</span>
                            </div>
                        </div>

                        {/* Favoritos */}
                        <div className="scale-in" style={{ animationDelay: '0.3s' }}>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                ❤️ Opciones
                            </label>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={showOnlyFavorites}
                                        onChange={(e) => setShowOnlyFavorites(e.target.checked)}
                                        className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Solo favoritos</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};