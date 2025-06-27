
import { Category, Province } from './types';

export const CATEGORIES: Category[] = ["Aventura", "Gastronomía", "Cultura", "Naturaleza"];
export const PROVINCES: Province[] = [
  "A Coruña", "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", 
  "Badajoz", "Barcelona", "Bizkaia", "Burgos", "Cáceres", "Cádiz", "Cantabria", 
  "Castellón", "Ceuta", "Ciudad Real", "Córdoba", "Cuenca", "Gipuzkoa", "Girona", 
  "Granada", "Guadalajara", "Huelva", "Huesca", "Illes Balears", "Jaén", 
  "La Rioja", "Las Palmas", "León", "Lleida", "Lugo", "Madrid", "Málaga", 
  "Melilla", "Murcia", "Navarra", "Ourense", "Palencia", "Pontevedra", 
  "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", 
  "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Zamora", "Zaragoza"
];
export const MAX_PRICE = 300;

export const ICONS = {
    map: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>,
    list: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>,
};