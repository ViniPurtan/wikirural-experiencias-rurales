import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { FiltersPanel } from './components/FiltersPanel';
import { ExperienceList } from './components/ExperienceList';
import { MapView } from './components/MapView';
import { Experience, Filters, Province, Category } from './types';
import { fetchExperiences } from './services/experienceService';
import { MAX_PRICE, ICONS } from './constants';

type ViewMode = 'list' | 'map';

const initialFilters: Filters = {
    searchTerm: '',
    province: 'all',
    category: 'all',
    priceRange: { min: 0, max: MAX_PRICE },
};

const ViewModeToggle = ({ viewMode, setViewMode }: { viewMode: ViewMode; setViewMode: (mode: ViewMode) => void; }) => (
    <div className="fixed bottom-6 right-6 z-40">
        <div className="flex items-center bg-white rounded-full shadow-lg border">
             <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-l-full transition-colors duration-200 ${viewMode === 'list' ? 'bg-teal-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                aria-label="List View"
            >
                {ICONS.list}
            </button>
            <div className="w-px h-6 bg-gray-300"></div>
             <button
                onClick={() => setViewMode('map')}
                className={`p-3 rounded-r-full transition-colors duration-200 ${viewMode === 'map' ? 'bg-teal-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                aria-label="Map View"
            >
                {ICONS.map}
            </button>
        </div>
    </div>
);


const App: React.FC = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [filters, setFilters] = useState<Filters>(initialFilters);
    const [loading, setLoading] = useState<boolean>(true);
    const [viewMode, setViewMode] = useState<ViewMode>('list');

    useEffect(() => {
        const loadExperiences = async () => {
            setLoading(true);
            try {
                const data = await fetchExperiences();
                setExperiences(data);
            } catch (error) {
                console.error("Failed to fetch experiences:", error);
            } finally {
                setLoading(false);
            }
        };
        loadExperiences();
    }, []);
    
    const handleSearchChange = useCallback((value: string) => {
        setFilters(prev => ({ ...prev, searchTerm: value }));
    }, []);

    const handleProvinceChange = useCallback((value: Province | 'all') => {
        setFilters(prev => ({ ...prev, province: value }));
    }, []);

    const handleCategoryChange = useCallback((value: Category | 'all') => {
        setFilters(prev => ({ ...prev, category: value }));
    }, []);
    
    const handlePriceChange = useCallback((value: number) => {
        setFilters(prev => ({ ...prev, priceRange: { ...prev.priceRange, max: value } }));
    }, []);

    const handleResetFilters = useCallback(() => {
        setFilters(initialFilters);
    }, []);

    const filteredExperiences = useMemo(() => {
        return experiences.filter(exp => {
            const { searchTerm, province, category, priceRange } = filters;
            
            const matchesSearch = searchTerm.toLowerCase() === '' ||
                exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                exp.category.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesProvince = province === 'all' || exp.province === province;
            const matchesCategory = category === 'all' || exp.category === category;
            const matchesPrice = exp.price >= priceRange.min && exp.price <= priceRange.max;

            return matchesSearch && matchesProvince && matchesCategory && matchesPrice;
        });
    }, [experiences, filters]);

    const renderContent = () => {
        if (loading) {
            return (
                <div className="flex justify-center items-center h-[calc(100vh-200px)]">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-500"></div>
                </div>
            );
        }

        if (viewMode === 'list') {
            return <ExperienceList experiences={filteredExperiences} />;
        }
        
        if (viewMode === 'map') {
            // This height calculation is an approximation for a full-viewport map view.
            // 100vh - header_height(65px) - filters_panel_height(~135px)
            return (
                <div className="flex-grow h-[calc(100vh-200px)] bg-gray-300">
                    <MapView experiences={filteredExperiences} />
                </div>
            );
        }
    };
    
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <FiltersPanel 
                filters={filters}
                onSearchChange={handleSearchChange}
                onProvinceChange={handleProvinceChange}
                onCategoryChange={handleCategoryChange}
                onPriceChange={handlePriceChange}
                onResetFilters={handleResetFilters}
                resultsCount={filteredExperiences.length} 
            />
            <main className="flex-grow">
                {renderContent()}
            </main>
            <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
        </div>
    );
};

export default App;