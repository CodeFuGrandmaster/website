var slideIndex = 1;

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function setSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  // let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1;}
  if(n < 1) {slideIndex=slides.length;}
  
  for(i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}

$("document").ready(function() {showSlides(1);});