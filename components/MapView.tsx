
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Experience } from '../types';

// Fix for default icon issue with bundlers like Vite/Webpack
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface MapViewProps {
    experiences: Experience[];
}

const createPopupContent = (exp: Experience) => `
    <div class="flex flex-col">
        <img src="${exp.image}" alt="${exp.title}" class="w-full h-24 object-cover rounded-t-md" />
        <div class="p-2">
            <h3 class="font-bold text-sm mb-1 line-clamp-1">${exp.title}</h3>
            <p class="text-xs text-gray-500">${exp.province} - ${exp.category}</p>
            <p class="font-bold text-teal-600 text-sm mt-1">${exp.price === 0 ? 'Gratis' : `${exp.price}€`}</p>
        </div>
    </div>
`;

export const MapView: React.FC<MapViewProps> = ({ experiences }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);
    const markersLayerRef = useRef<L.LayerGroup | null>(null);

    useEffect(() => {
        if (mapContainerRef.current && !mapInstanceRef.current) {
            mapInstanceRef.current = L.map(mapContainerRef.current).setView([40.416775, -3.703790], 6); // Centered on Spain
            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            }).addTo(mapInstanceRef.current);
            markersLayerRef.current = L.layerGroup().addTo(mapInstanceRef.current);
        }
        
        // Handle component unmount
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const markersLayer = markersLayerRef.current;
        if (!markersLayer) return;

        markersLayer.clearLayers();

        if (experiences.length === 0) return;

        const markers = experiences.map(exp => {
            const marker = L.marker([exp.location.lat, exp.location.lng]);
            marker.bindPopup(createPopupContent(exp));
            return marker;
        });

        markers.forEach(marker => markersLayer.addLayer(marker));
        
        const map = mapInstanceRef.current;
        if (map) {
            const group = new L.FeatureGroup(markers);
            map.fitBounds(group.getBounds().pad(0.2), { animate: true });
        }

    }, [experiences]);

    return <div ref={mapContainerRef} className="h-full w-full" />;
};
