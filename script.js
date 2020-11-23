

const arrow = document.querySelector('.menu-fixed__arrow');
const nav = document.querySelector('.main__navigation-fixed');
const mainSection = document.querySelector('.main__about');
const slides = document.querySelectorAll('.main__about__image');
const rectangles = document.querySelectorAll('.rectangle__item');



const searchIcon = document.querySelector('.item__image');
const mainInput = document.querySelector('.main__input');

searchIcon.addEventListener("click",function () {
    mainInput.classList.toggle('main__input--active');
    searchIcon.classList.toggle('item__image--active');
})


let currentSlide = 0;
const time = 5000;
setInterval(function(){
    next();
},time);

function next() {
    if(currentSlide == slides.length -1){
        currentSlide = 0;
    }else{
        currentSlide++;
    }
    document.querySelector('.main__about__image.main__about__image-show').classList.remove('main__about__image-show');
    slides[currentSlide].classList.add('main__about__image-show');

    document.querySelector('.rectangle__item.rectangle__item--active').classList.remove('rectangle__item--active');
    rectangles[currentSlide].classList.add('rectangle__item--active');
};

  for (let i = 0; i < rectangles.length; i++) {
    (function(index) {
       rectangles[i].onclick = function() {
         if (index !== currentSlide) {
           document.querySelector('.rectangle__item.rectangle__item--active').classList.remove('rectangle__item--active');
           this.classList.add('rectangle__item--active');
           document.querySelector('.main__about__image.main__about__image-show').classList.remove('main__about__image-show');
           slides[index].classList.add('main__about__image-show');
           currentSlide = index;
         }
      }
    })(i);
   }


//SIDE_MENU
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

 