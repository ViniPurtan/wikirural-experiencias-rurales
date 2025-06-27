import React from 'react';
import { Filters, Province, Category } from '../types';
import { CATEGORIES, PROVINCES, MAX_PRICE } from '../constants';

interface FiltersPanelProps {
    filters: Filters;
    resultsCount: number;
    onResetFilters: () => void;
    onSearchChange: (value: string) => void;
    onProvinceChange: (value: Province | 'all') => void;
    onCategoryChange: (value: Category | 'all') => void;
    onPriceChange: (value: number) => void;
}

export const FiltersPanel: React.FC<FiltersPanelProps> = ({ 
    filters, 
    resultsCount, 
    onResetFilters,
    onSearchChange,
    onProvinceChange,
    onCategoryChange,
    onPriceChange
}) => {

    return (
        <div className="bg-gray-50 p-4 sticky top-[65px] z-30 shadow-sm border-b border-gray-200">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                    <div className="lg:col-span-2">
                        <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-700 mb-1">Buscar por nombre</label>
                        <input
                            type="text"
                            name="searchTerm"
                            id="searchTerm"
                            value={filters.searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder="Ej: Kayak, Paella, Senderismo..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">Provincia</label>
                        <select 
                            name="province" 
                            id="province" 
                            value={filters.province} 
                            onChange={(e) => onProvinceChange(e.target.value as Province | 'all')} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-white"
                        >
                            <option value="all">Todas</option>
                            {PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                        <select 
                            name="category" 
                            id="category" 
                            value={filters.category} 
                            onChange={(e) => onCategoryChange(e.target.value as Category | 'all')} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-white"
                        >
                            <option value="all">Todas</option>
                            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 items-center">
                    <div>
                        <label htmlFor="max" className="block text-sm font-medium text-gray-700 mb-1">Precio máximo: <span className="font-bold text-teal-600">{filters.priceRange.max}€</span></label>
                        <input 
                            type="range" 
                            name="max" 
                            id="max" 
                            min="0" 
                            max={MAX_PRICE} 
                            step="10" 
                            value={filters.priceRange.max} 
                            onChange={(e) => onPriceChange(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                        />
                    </div>
                    <div className="flex justify-between items-center mt-2 md:mt-0">
                       <p className="text-sm text-gray-600">
                         <span className="font-semibold">{resultsCount}</span> experiencias encontradas
                       </p>
                        <button onClick={onResetFilters} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                            Limpiar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};