

const arrow = document.querySelector('.menu-fixed__arrow');
const nav = document.querySelector('.main__navigation-fixed');
const mainSection = document.querySelector('.main__about');




arrow.addEventListener("click",function(){
    arrow.classList.toggle("menu-fixed__arrow--active");
    nav.classList.toggle("main__navigation-fixed--active");
    mainSection.classList.toggle("main__about--active");
});
const sectionOneOptions = {
    
    rootMargin: "0px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    
){
    entries.forEach(entry =>{
        if(!entry.isIntersecting) {
            nav.classList.add("main__navigation-fixed--scrolled");
        } else{
            nav.classList.remove("main__navigation-fixed--scrolled");
        }
    });
},sectionOneOptions);
sectionOneObserver.observe(mainSection);

window.addEventListener('scroll', event => {
    let navigationLinks = document.querySelectorAll('[data-key]');
    let fromTop = window.scrollY;

    navigationLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if(
            section.offsetTop <= fromTop && 
            section.offsetTop + section.offsetHeight > fromTop
            ) {
            
                link.classList.add('menu-fixed__link--active');
        
            } else {
                link.classList.remove('menu-fixed__link--active');
            }
        
        
});
});

 