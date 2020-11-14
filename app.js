const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');
//Toogle Nav
    burger.addEventListener('click', ()=>{
    nav.classList.toogle('nav-active');
    });
    //Animate Links
        navLinks.forEach((link, index) => {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;  
            });
}

navSlide();