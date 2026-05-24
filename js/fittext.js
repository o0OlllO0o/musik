function fitText() {
    document.querySelectorAll('.card-title').forEach(function(el) {
        var parent = el.closest('.video-card');
        if (!parent) return;
        var maxWidth = parent.clientWidth - 24;
        if (maxWidth <= 0) return;
        
        var fontSize = 100;
        el.style.fontSize = fontSize + 'px';
        el.style.opacity = 1;
        
        while (el.scrollWidth > maxWidth && fontSize > 8) {
            fontSize--;
            el.style.fontSize = fontSize + 'px';
        }
    });
}

// Ejecutar cuando las imágenes hayan cargado y el layout esté estable
window.addEventListener('load', function() {
    setTimeout(fitText, 200);
    setTimeout(fitText, 600);
});

window.addEventListener('resize', function() {
    clearTimeout(window.fitResize);
    window.fitResize = setTimeout(fitText, 150);
});
