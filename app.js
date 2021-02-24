const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');


    burger.addEventListener('click', () => {
        
        //open menu
        nav.classList.toggle('nav-active');

        //close menu
        burger.classList.toggle('toggle');

    });
}
navSlide();

// sticky nav, working on getting it up and running
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})