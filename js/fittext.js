function fitTitle(el) {
    var card = el.closest('.video-card');
    if (!card) return;
    var maxWidth = card.clientWidth - 24;
    if (maxWidth <= 0) return;
    var fontSize = 100;
    el.style.fontSize = fontSize + 'px';
    while (el.scrollWidth > maxWidth && fontSize > 8) {
        fontSize--;
        el.style.fontSize = fontSize + 'px';
    }
}

function fitAllTitles() {
    document.querySelectorAll('.card-title').forEach(function(el) {
        fitTitle(el);
    });
}

// Ejecutar varias veces para asegurar que el layout está listo
window.addEventListener('load', function() {
    setTimeout(fitAllTitles, 100);
    setTimeout(fitAllTitles, 500);
    setTimeout(fitAllTitles, 1000);
});

window.addEventListener('resize', function() {
    clearTimeout(window.fitResize);
    window.fitResize = setTimeout(fitAllTitles, 200);
});
