window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.upicon');
    scroll.classList.toggle("active", window.scrollY > 400)
})
function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}