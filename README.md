# 🌾 WikiRural - Experiencias Rurales

Una plataforma web interactiva para descubrir y explorar experiencias rurales auténticas en España. Diseñada para conectar a los viajeros con la rica cultura, naturaleza y tradiciones de las zonas rurales españolas.

## ✨ Características

- 🗺️ **Mapa Interactivo**: Visualiza experiencias rurales en un mapa dinámico con Leaflet
- 🔍 **Filtros Avanzados**: Busca por provincia, categoría, rango de precios y términos específicos
- 📱 **Diseño Responsive**: Optimizado para dispositivos móviles y escritorio
- 🎯 **Categorías Diversas**: Aventura, Gastronomía, Cultura y Naturaleza
- 🏞️ **Experiencias Auténticas**: Enfoque especial en la provincia de Castellón
- ⚡ **Rendimiento Optimizado**: Carga rápida y navegación fluida

## 🚀 Demo

La aplicación incluye más de 120 experiencias rurales simuladas distribuidas por toda España, con especial énfasis en la provincia de Castellón que cuenta con experiencias únicas como:

- Senderismo al Penyagolosa
- Degustación de Alcachofa de Benicarló
- Visita al Castillo de Peñíscola
- Baños termales en Montanejos

## 🛠️ Tecnologías

- **Frontend**: React 19 + TypeScript
- **Mapas**: Leaflet
- **Estilos**: Tailwind CSS
- **Build Tool**: Vite
- **Fuentes**: Google Fonts (Inter)

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/vinipurtan/wikirural-experiencias-rurales.git

# Navegar al directorio
cd wikirural-experiencias-rurales

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

## 🖥️ Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la build de producción
```

## 🏗️ Estructura del Proyecto

```
├── components/
│   ├── ExperienceCard.tsx    # Tarjeta de experiencia individual
│   ├── ExperienceList.tsx    # Lista de experiencias
│   ├── FiltersPanel.tsx      # Panel de filtros
│   ├── Header.tsx            # Cabecera de la aplicación
│   └── MapView.tsx           # Vista del mapa interactivo
├── services/
│   └── experienceService.ts  # Servicio de datos de experiencias
├── types.ts                  # Definiciones de tipos TypeScript
├── constants.tsx             # Constantes y configuración
├── App.tsx                   # Componente principal
└── index.tsx                 # Punto de entrada
```

## 🎨 Características de UI/UX

- **Diseño Limpio**: Interfaz moderna con Tailwind CSS
- **Navegación Intuitiva**: Alternancia fácil entre vista lista y mapa
- **Filtros Dinámicos**: Búsqueda en tiempo real y filtros múltiples
- **Mapas Interactivos**: Marcadores personalizados y popups informativos
- **Responsive**: Adaptado para todos los tamaños de pantalla

## 🌍 Datos de Ejemplo

La aplicación incluye:
- **40 experiencias** en Castellón con títulos y descripciones específicas
- **80 experiencias** distribuidas por el resto de España
- **4 categorías** principales: Aventura, Gastronomía, Cultura, Naturaleza
- **52 provincias** españolas con coordenadas geográficas precisas

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📱 Capturas de Pantalla

### Vista Lista
- Lista de experiencias con filtros laterales
- Tarjetas informativas con precios y categorías
- Búsqueda en tiempo real

### Vista Mapa
- Mapa interactivo de España
- Marcadores por ubicación
- Popups con información detallada

## 🎯 Roadmap

- [ ] Integración con APIs reales de turismo rural
- [ ] Sistema de reservas
- [ ] Reseñas y valoraciones de usuarios
- [ ] Integración con redes sociales
- [ ] App móvil nativa
- [ ] Modo offline

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Vini Purtan** - [@vinipurtan](https://github.com/vinipurtan)

---

<div align="center">
  <p>¡Descubre la España rural como nunca antes! 🇪🇸</p>
  <p>Hecho con ❤️ para conectar viajeros con experiencias auténticas</p>
</div>