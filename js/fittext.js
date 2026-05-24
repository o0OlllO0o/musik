function fitText() {
    document.querySelectorAll('.card-title').forEach(function(el) {
        var parent = el.parentElement;
        var maxWidth = parent.clientWidth - 32;
        var fontSize = 100;
        el.style.fontSize = fontSize + 'px';
        while (el.scrollWidth > maxWidth && fontSize > 8) {
            fontSize--;
            el.style.fontSize = fontSize + 'px';
        }
        el.style.opacity = 1;
    });
}
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(fitText, 500);
});
window.addEventListener('resize', fitText);
