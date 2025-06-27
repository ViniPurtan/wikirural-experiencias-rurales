import React from 'react';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    text?: string;
    fullScreen?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
    size = 'md', 
    text = 'Cargando experiencias...', 
    fullScreen = false 
}) => {
    const sizeClasses = {
        sm: 'w-6 h-6',
        md: 'w-10 h-10',
        lg: 'w-16 h-16'
    };

    const containerClasses = fullScreen 
        ? 'fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50'
        : 'flex items-center justify-center py-12';

    return (
        <div className={containerClasses}>
            <div className="text-center">
                {/* Animated Logo/Icon */}
                <div className="relative mb-4">
                    <div className={`${sizeClasses[size]} mx-auto`}>
                        <svg className="animate-spin text-teal-600" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                    
                    {/* Pulse animation around spinner */}
                    <div className={`absolute inset-0 ${sizeClasses[size]} mx-auto rounded-full border-2 border-teal-200 animate-ping`}></div>
                </div>

                {/* Loading text */}
                <p className="text-gray-600 font-medium animate-pulse">{text}</p>
                
                {/* Loading dots */}
                <div className="flex justify-center space-x-1 mt-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
};

export const SkeletonCard: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
            <div className="skeleton w-full h-48"></div>
            <div className="p-5">
                <div className="skeleton h-4 w-20 rounded-full mb-3"></div>
                <div className="skeleton h-6 w-full mb-2"></div>
                <div className="skeleton h-6 w-3/4 mb-4"></div>
                <div className="skeleton h-4 w-32 mb-4"></div>
                <div className="skeleton h-3 w-full mb-2"></div>
                <div className="skeleton h-3 w-full mb-2"></div>
                <div className="skeleton h-3 w-2/3 mb-4"></div>
                <div className="skeleton h-10 w-full rounded-lg"></div>
            </div>
        </div>
    );
};