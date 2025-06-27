
import { Experience, Category, Province } from '../types';
import { CATEGORIES, PROVINCES } from '../constants';

const provinceCoordinates: Record<Province, { lat: number; lng: number; }> = {
    "A Coruña": { lat: 43.37135, lng: -8.396 },
    "Álava": { lat: 42.8467, lng: -2.673 },
    "Albacete": { lat: 38.994, lng: -1.858 },
    "Alicante": { lat: 38.345, lng: -0.481 },
    "Almería": { lat: 36.838, lng: -2.463 },
    "Asturias": { lat: 43.360, lng: -5.845 },
    "Ávila": { lat: 40.656, lng: -4.697 },
    "Badajoz": { lat: 38.878, lng: -6.97 },
    "Barcelona": { lat: 41.387, lng: 2.168 },
    "Bizkaia": { lat: 43.262, lng: -2.935 },
    "Burgos": { lat: 42.343, lng: -3.702 },
    "Cáceres": { lat: 39.476, lng: -6.372 },
    "Cádiz": { lat: 36.529, lng: -6.292 },
    "Cantabria": { lat: 43.462, lng: -3.809 },
    "Castellón": { lat: 39.986, lng: -0.051 },
    "Ceuta": { lat: 35.888, lng: -5.318 },
    "Ciudad Real": { lat: 38.986, lng: -3.927 },
    "Córdoba": { lat: 37.888, lng: -4.779 },
    "Cuenca": { lat: 40.07, lng: -2.137 },
    "Gipuzkoa": { lat: 43.318, lng: -1.981 },
    "Girona": { lat: 41.983, lng: 2.824 },
    "Granada": { lat: 37.177, lng: -3.598 },
    "Guadalajara": { lat: 40.633, lng: -3.164 },
    "Huelva": { lat: 37.261, lng: -6.944 },
    "Huesca": { lat: 42.14, lng: -0.408 },
    "Illes Balears": { lat: 39.571, lng: 2.649 },
    "Jaén": { lat: 37.769, lng: -3.79 },
    "La Rioja": { lat: 42.465, lng: -2.445 },
    "Las Palmas": { lat: 28.124, lng: -15.43 },
    "León": { lat: 42.598, lng: -5.567 },
    "Lleida": { lat: 41.617, lng: 0.622 },
    "Lugo": { lat: 43.012, lng: -7.556 },
    "Madrid": { lat: 40.416, lng: -3.703 },
    "Málaga": { lat: 36.721, lng: -4.421 },
    "Melilla": { lat: 35.291, lng: -2.938 },
    "Murcia": { lat: 37.992, lng: -1.13 },
    "Navarra": { lat: 42.816, lng: -1.645 },
    "Ourense": { lat: 42.336, lng: -7.863 },
    "Palencia": { lat: 42.009, lng: -4.524 },
    "Pontevedra": { lat: 42.433, lng: -8.643 },
    "Salamanca": { lat: 40.968, lng: -5.663 },
    "Santa Cruz de Tenerife": { lat: 28.468, lng: -16.254 },
    "Segovia": { lat: 40.948, lng: -4.118 },
    "Sevilla": { lat: 37.389, lng: -5.984 },
    "Soria": { lat: 41.763, lng: -2.468 },
    "Tarragona": { lat: 41.118, lng: 1.244 },
    "Teruel": { lat: 40.345, lng: -1.106 },
    "Toledo": { lat: 39.862, lng: -4.027 },
    "Valencia": { lat: 39.469, lng: -0.376 },
    "Valladolid": { lat: 41.652, lng: -4.728 },
    "Zamora": { lat: 41.503, lng: -5.744 },
    "Zaragoza": { lat: 41.648, lng: -0.889 }
};

const sampleTitles: Record<Category, string[]> = {
    "Aventura": ["Ruta en Kayak por un Río Local", "Barranquismo en la Sierra Cercana", "Vía Ferrata en Picos Famosos", "Paseo a Caballo por un Parque Natural"],
    "Gastronomía": ["Ruta del Vino y Tapas de la comarca", "Taller de Cocina Regional", "Degustación de Quesos Artesanales", "Visita a una Almazara de Aceite"],
    "Cultura": ["Visita a los Pueblos con Encanto", "Ruta de los Castillos", "Descubriendo el Camino Histórico", "Noche de Tradiciones en un Entorno Único"],
    "Naturaleza": ["Senderismo en el Parque Nacional", "Observación de Aves en un Humedal", "Fotografía de Paisajes Locales", "Ruta de las Cascadas Escondidas"]
};

const sampleCastellonTitles: Record<Category, string[]> = {
    "Aventura": ["Senderismo al Penyagolosa", "Ruta BTT por la Sierra de Espadán", "Kayak en las Islas Columbretes", "Escalada en Montanejos"],
    "Gastronomía": ["Degustación de Alcachofa de Benicarló", "Ruta de la Naranja por la Plana", "Cata de vinos de Les Useres", "Taller de 'arrossejat'"],
    "Cultura": ["Visita al Castillo de Peñíscola", "Descubre la cerámica de L'Alcora", "Ruta Templaria por la provincia", "Fiestas de la Magdalena"],
    "Naturaleza": ["Observación de aves en el Prat de Cabanes-Torreblanca", "Baños termales en Montanejos", "Paseo por el Desierto de las Palmas", "Explora las Grutas de San José"]
};

const sampleDescriptions: string[] = [
    "Una experiencia inolvidable para conectar con la naturaleza y disfrutar de paisajes espectaculares.",
    "Descubre los sabores auténticos de la región con productos locales y recetas tradicionales.",
    "Sumérgete en la historia y la cultura local a través de sus monumentos y gentes.",
    "Atrévete a vivir una aventura emocionante en un entorno natural único y protegido."
];

const getRandom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const generateRandomExperience = (id: number, province: Province): Experience => {
    const category = getRandom(CATEGORIES);
    const baseCoords = provinceCoordinates[province];
    const titles = province === "Castellón" ? sampleCastellonTitles[category] : sampleTitles[category];

    return {
        id: `exp-${id}`,
        title: `${getRandom(titles)}`,
        description: `${getRandom(sampleDescriptions)} Además, podrás explorar la flora y fauna local en un tour guiado.`,
        image: `https://picsum.photos/seed/${id}/400/300`,
        price: getRandom([0, 20, 35, 50, 75, 100, 150, 250]),
        category,
        province,
        location: {
            lat: baseCoords.lat + (Math.random() - 0.5) * 0.5, // add some jitter
            lng: baseCoords.lng + (Math.random() - 0.5) * 0.5
        }
    };
};

export const fetchExperiences = async (): Promise<Experience[]> => {
    // Simulate network delay
    await new Promise(res => setTimeout(res, 800));
    const experiences: Experience[] = [];
    let id_counter = 1;

    // Drastically increase examples in Castellón
    const castellonExperiencesCount = 40;
    for (let i = 0; i < castellonExperiencesCount; i++) {
        experiences.push(generateRandomExperience(id_counter++, "Castellón"));
    }

    // Generate experiences for other provinces
    const otherProvinces = PROVINCES.filter(p => p !== "Castellón");
    const otherExperiencesCount = 80;
    for (let i = 0; i < otherExperiencesCount; i++) {
        const randomProvince = getRandom(otherProvinces);
        experiences.push(generateRandomExperience(id_counter++, randomProvince));
    }
    
    return experiences;
};