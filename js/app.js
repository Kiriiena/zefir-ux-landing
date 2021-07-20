$('.slider_slick').on('init', function(event, slick){
  var totalSlides = slick.slideCount;
  $('#total_slides').html(totalSlides);
 
});
$('.slider_slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
  $('#current_slide').html(currentSlide+1);
});

$(document).ready(function(){
  $('.slider_slick').slick({
  	arrows: false,
  });
});

$('#slider_next').on('click', function(){

$('.slider_slick').slick('slickNext');
});


$('#slider_prev').on('click', function(){

$('.slider_slick').slick('slickPrev');
});




$('.slick_slider_reviews').on('init', function(event, slick){
  var totalSlides = slick.slideCount;
  $('#total_slides_reviews').html(totalSlides);
 
});
$('.slick_slider_reviews').on('afterChange', function(event, slick, currentSlide, nextSlide){
  $('#current_slide_reviews').html(currentSlide+1);
});


  $('.slick_slider_reviews').slick({
  	arrows: false,
  	slidesToShow: 3,
  slidesToScroll: 1,
  });

  $('#slider_reviews_next').on('click', function(){

$('.slick_slider_reviews').slick('slickNext');
});


$('#slider_reviews_prev').on('click', function(){

$('.slick_slider_reviews').slick('slickPrev');
});
