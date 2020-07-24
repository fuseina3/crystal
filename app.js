// define an anonymous function, then you get the burger and the slider
const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    // for the individual lists exclude. add it last
    const navLinks = document.querySelectorAll('.nav-links li');
    
    
    // when we click on the humburger menu we want it to get the class of nav active.
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    
    
    
        //burger animation
        burger.classList.toggle('toggle')
    });
    
    //animate the nav links. add it lasts
    navLinks.forEach((link, index) =>{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 3}s`;
    });
    }
    // after declaring a function, you call the function
    navSlide();
    
    
    
    // for the links to animate all the time. Add this to the event listener
    // navLinks.forEach((link, index) =>{
    //     if (link.style.animation){
    //         link.style.animation = ''
    //     }
    //     else{
    //     link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 3}s`;
    //     }
    // });