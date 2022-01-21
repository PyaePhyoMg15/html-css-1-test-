const navSlide = () => {
    const burger = document.querySelector('.burger-menu');
    const nav    = document.querySelector('.nav-ul');
    const navLinks = document.querySelectorAll('.nav-ul li');
    //toggle-nav
    burger.addEventListener('click' , () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => { 
            link.style.animation = 'navLinkFade 0.5s ease forwards $(index /7 +0.3)s';
        });

        //burger animation
        burger.classList.toggle('toggle');
    });

    ///animate links
   
}


navSlide();