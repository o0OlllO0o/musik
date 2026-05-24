// Tracks reales de GoodMakingNoise
const tracksGMN = [
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1902939122&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1902939122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1902939122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1902939122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1902939122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1902939122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1902939122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1902939122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1902939122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1902939122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true'
];

// Tracks reales de DeepMakingRhythm
const tracksDMR = [
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1987468122&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1987468122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1987468122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1987468122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1987468122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1987468122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1987468122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1987468122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1987468122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1987468122&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true'
];

function cargarTracks(containerId, urls) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    urls.forEach((url, i) => {
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.loading = 'lazy';
        iframe.allow = 'autoplay';
        iframe.title = 'Track ' + (i + 1);
        container.appendChild(iframe);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    cargarTracks('tracks-gmn', tracksGMN);
    cargarTracks('tracks-dmr', tracksDMR);
});

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
