const arrow = document.querySelector('.menu-fixed__arrow');
const nav = document.querySelector('.main__navigation-fixed');
const mainSection = document.querySelector('.main__about');




arrow.addEventListener("click",function(){
    arrow.classList.toggle("menu-fixed__arrow--active");
    nav.classList.toggle("main__navigation-fixed--active");
    mainSection.classList.toggle("main__about--active");
});
const sectionOneOptions = {
    
    rootMargin: "-300px 0px 0px 0px"
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
