window.addEventListener('scroll', function(){
    var scrolled = window.scrollY
    var background = this.document.getElementById('background');
    background.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
})