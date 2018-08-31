alert("This is a sample template to show basic functionality. Current colors and borders are for my benefit (the developer) to distinguish what blocks take up what space. Also note that the layouts are not set in stone.");


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
  
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // for(i = 0; i < dots.legth; i++) {
    
  // }
  
  slides[slideIndex-1].style.display = "block";
}

$("document").ready(function() {showSlides(1);});
