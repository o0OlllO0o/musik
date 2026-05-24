// Widgets de perfil completo de SoundCloud (funcionan sin IDs)
const widgetGMN = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/227848982&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true&buying=false&sharing=false&download=false';
const widgetDMR = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/304382603&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true&buying=false&sharing=false&download=false';

function cargarWidget(containerId, url) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.width = '100%';
    iframe.height = '450';
    iframe.frameBorder = 'no';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.loading = 'lazy';
    iframe.title = 'Reproductor SoundCloud';
    container.appendChild(iframe);
}

// Reproductor sticky inferior (se activa al hacer clic en un track)
function crearReproductorSticky() {
    const sticky = document.createElement('div');
    sticky.id = 'sticky-player';
    sticky.className = 'sticky-player';
    sticky.innerHTML = '<div class="sticky-player-content"><p>🎧 Reproduciendo...</p></div>';
    sticky.style.display = 'none';
    document.body.appendChild(sticky);
}

document.addEventListener('DOMContentLoaded', function() {
    cargarWidget('tracks-gmn', widgetGMN);
    cargarWidget('tracks-dmr', widgetDMR);
    crearReproductorSticky();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
