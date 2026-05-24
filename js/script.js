// Tracks reales de GoodMakingNoise
const tracksGMN = [
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1902939122&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1902939122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1902939122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true'
];

// Tracks reales de DeepMakingRhythm
const tracksDMR = [
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1987468122&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1987468122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1987468122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true'
];

/**
 * Carga los iframes de SoundCloud en el contenedor especificado
 * @param {string} containerId - ID del elemento contenedor
 * @param {Array} urls - Array de URLs de iframes de SoundCloud
 */
function cargarTracks(containerId, urls) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error(`Contenedor #${containerId} no encontrado`);
        return;
    }
    
    // Limpiar mensaje de carga
    container.innerHTML = '';
    
    if (urls.length === 0) {
        container.innerHTML = '<p class="no-tracks">No hay tracks disponibles en este momento.</p>';
        return;
    }
    
    // Cargar iframes con lazy loading
    urls.forEach((url, index) => {
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.loading = 'lazy';
        iframe.allow = 'autoplay';
        iframe.title = `Track ${index + 1}`;
        iframe.style.animationDelay = `${index * 0.1}s`;
        
        // Manejo de error de carga
        iframe.onerror = function() {
            this.style.display = 'none';
            console.warn(`Error cargando track ${index + 1}`);
        };
        
        container.appendChild(iframe);
    });
    
    console.log(`${urls.length} tracks cargados en #${containerId}`);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎵 Portafolio musical inicializado');
    cargarTracks('tracks-gmn', tracksGMN);
    cargarTracks('tracks-dmr', tracksDMR);
});

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
