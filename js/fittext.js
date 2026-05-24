function fitText() {
    document.querySelectorAll('.card-title').forEach(function(el) {
        var parent = el.parentElement;
        var maxWidth = parent.clientWidth - 32;
        el.style.fontSize = '16px';
        if (el.scrollWidth > maxWidth) {
            var ratio = maxWidth / el.scrollWidth;
            var newSize = Math.max(12, Math.floor(16 * ratio));
            el.style.fontSize = newSize + 'px';
        }
        el.style.opacity = 1;
    });
}
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(fitText, 300);
});
window.addEventListener('resize', fitText);
