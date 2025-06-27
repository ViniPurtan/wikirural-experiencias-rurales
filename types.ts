
export type Category = "Aventura" | "Gastronomía" | "Cultura" | "Naturaleza";
export type Province = 
  "A Coruña" | "Álava" | "Albacete" | "Alicante" | "Almería" | "Asturias" | 
  "Ávila" | "Badajoz" | "Barcelona" | "Bizkaia" | "Burgos" | "Cáceres" | 
  "Cádiz" | "Cantabria" | "Castellón" | "Ceuta" | "Ciudad Real" | "Córdoba" | 
  "Cuenca" | "Gipuzkoa" | "Girona" | "Granada" | "Guadalajara" | "Huelva" | 
  "Huesca" | "Illes Balears" | "Jaén" | "La Rioja" | "Las Palmas" | "León" | 
  "Lleida" | "Lugo" | "Madrid" | "Málaga" | "Melilla" | "Murcia" | "Navarra" | 
  "Ourense" | "Palencia" | "Pontevedra" | "Salamanca" | "Santa Cruz de Tenerife" | 
  "Segovia" | "Sevilla" | "Soria" | "Tarragona" | "Teruel" | "Toledo" | 
  "Valencia" | "Valladolid" | "Zamora" | "Zaragoza";

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number; // 0 for free
  category: Category;
  province: Province;
  location: {
    lat: number;
    lng: number;
  };
}

export interface Filters {
  searchTerm: string;
  province: Province | "all";
  category: Category | "all";
  priceRange: { min: number; max: number };
}