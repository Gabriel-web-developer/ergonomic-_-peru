// funciona de abrir menu 

// animacion 

const menubtn = document.querySelector(".menu-btn");
var menu = document.querySelector('.menu');
let menuopen = false;

menubtn.addEventListener("click", ()=> {
    if(!menuopen) {
        menubtn.classList.add("open");
        menu.classList.add('abrir');
        menuopen = true;
    }else {
        menubtn.classList.remove("open");
        menu.classList.remove('abrir');
        menuopen = false;
    }
});
   
// Slider 

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__li");
let sliderSectionLast = sliderSection[sliderSection.length -1];

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__li")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
     slider.style.transition = "none";
   slider.insertAdjacentElement('beforeend', sliderSectionFirst);
   slider.style.marginLeft = "-100%"; 
  }, 500);
}


function Prev() {
  let sliderSection = document.querySelectorAll(".slider__li");
let sliderSectionLast = sliderSection[sliderSection.length -1];

    slider.style.marginLeft = "-0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
     slider.style.transition = "none";
   slider.insertAdjacentElement('afterbegin', sliderSectionLast);
   slider.style.marginLeft = "-100%"; 
  }, 500);
}

setInterval(function(){
  Next(); 
}, 5000);

// funcion touch 



// Botones

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

btnLeft.addEventListener('click', function(){
   Prev(); 
});


btnRight.addEventListener('click', function(){
   Next(); 
});


// promo slider

let promo = document.querySelector('.promo__ul');
let promo__li = document.querySelectorAll('.promo__li');
let promoSection = promo__li[promo__li.length -1];

promo.insertAdjacentElement('afterbegin', promoSection);

function promoSlide() {
  promoSectionOne = document.querySelectorAll('.promo__li')[0]; 
  promo.style.marginLeft = "-200%";
  setTimeout(function(){
    promo.insertAdjacentElement('beforeend', promoSectionOne);
    promo.style.marginLeft = "-100%"; 
  }, 1000);

}

setInterval(function(){
  promoSlide();
}, 6000);

