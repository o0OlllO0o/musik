// =============================================
// TRACKS REALES DE GOODMAKINGNOISE (10 tracks)
// =============================================
const tracksGMN = [
    { id: '350657683', title: 'GMNoise Suite 01' },
    { id: '336277977', title: 'Orchestratest15exp' },
    { id: '336277966', title: 'Orchestratest14exp' },
    { id: '336277955', title: 'Orchestratest10subexp' },
    { id: '336277944', title: 'Orchestratest4' },
    { id: '336277888', title: 'Orchestratest3' },
    { id: '277564382', title: 'La Música De Las Renovables' },
    { id: '277564380', title: 'Hg38GRCh38' },
    { id: '277564371', title: 'Human Polyomavirus 9' },
    { id: '277564360', title: 'Human Protein' }
];

// =============================================
// TRACKS REALES DE DEEPMAKINGRHYTHM (10 tracks)
// =============================================
const tracksDMR = [
    { id: '320086031', title: 'Acousticmetall' },
    { id: '320086030', title: 'Amosavore' },
    { id: '320086029', title: 'Auxiliarredux' },
    { id: '320086028', title: 'Experimentosdesdelascloacas' },
    { id: '320086027', title: 'Feijo' },
    { id: '320086026', title: 'Hard T43echoampli' },
    { id: '320086025', title: 'Nohaypodonde' },
    { id: '320086024', title: 'Psss' },
    { id: '320086023', title: 'Riopsss2' },
    { id: '320086022', title: 'Sireasonsi' }
];

// =============================================
// FUNCIÓN PARA CREAR WIDGETS INDIVIDUALES
// =============================================
function crearWidgetIndividual(track, index) {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + track.id + '&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true';
    iframe.width = '100%';
    iframe.height = '120';
    iframe.frameBorder = 'no';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.loading = 'lazy';
    iframe.title = track.title;
    iframe.style.animationDelay = (index * 0.1) + 's';
    
    const wrapper = document.createElement('div');
    wrapper.className = 'track-item';
    
    const title = document.createElement('p');
    title.className = 'track-title';
    title.textContent = track.title;
    
    wrapper.appendChild(iframe);
    wrapper.appendChild(title);
    
    return wrapper;
}

function cargarTracksIndividuales(containerId, tracks) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    if (tracks.length === 0) {
        container.innerHTML = '<p class="no-tracks">No hay tracks disponibles.</p>';
        return;
    }
    
    tracks.forEach(function(track, i) {
        container.appendChild(crearWidgetIndividual(track, i));
    });
}

// =============================================
// INICIALIZAR CUANDO EL DOM ESTÉ LISTO
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    cargarTracksIndividuales('tracks-gmn', tracksGMN);
    cargarTracksIndividuales('tracks-dmr', tracksDMR);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
