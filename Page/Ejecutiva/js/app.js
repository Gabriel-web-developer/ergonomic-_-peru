

$('.icon-bars').on('click', function () {
    $('.menu').toggleClass('abrir');
   }); 

// $('.submenu').click(function(){
//     $(this).children(".sub__menu").slideToggle(); 
// });

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

// Botones

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

btnLeft.addEventListener('click', function(){
   Prev(); 
});


btnRight.addEventListener('click', function(){
   Next(); 
});



