const slider = $('.slider').bxSlider({
  controls: false,
  pager: false,
});

const nextSlide = document.querySelector('.slider__arrow_right');
const prevSlide = document.querySelector('.slider__arrow_left');

nextSlide.addEventListener('click',(e)=>{
  e.preventDefault();
  slider.goToNextSlide();
});

prevSlide.addEventListener('click',(e)=>{
  e.preventDefault();
  slider.goToPrevSlide();
});