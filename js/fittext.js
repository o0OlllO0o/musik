function fitText() {
    document.querySelectorAll('.card-title').forEach(function(el) {
        var parent = el.parentElement;
        var maxWidth = parent.clientWidth - 32;
        el.style.opacity = 0;
        var fontSize = 200;
        el.style.fontSize = fontSize + 'px';
        while (el.scrollWidth > maxWidth && fontSize > 6) {
            fontSize--;
            el.style.fontSize = fontSize + 'px';
        }
        el.style.opacity = 1;
    });
}
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(fitText, 300);
});
window.addEventListener('resize', fitText);
