$(document).ready(function() {

// Dinosaurus slider
  var swiper = new Swiper('.swiper-container', {
      navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
      },
      slidesPerView: 3,
      spaceBetween: 30,
      loop:true,
      centeredSlides: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });


//console images switch
  $('#pills-island-tab').click(function(){
    // alert('clik');
  document.getElementById("console-img").style.backgroundImage = 'url("img/map.png")';

  });
  $('#pills-movie-tab').click(function(){
    // alert('clik');
  document.getElementById("console-img").style.backgroundImage = 'url("img/movie.jpg")';
  document.getElementById("console-img").style.backgroundPosition = 'right';

  });
  $('#pills-hotel-tab').click(function(){
    // alert('clik');
  document.getElementById("console-img").style.backgroundImage = 'url("img/hotel.jpg")';

  });
  $('#pills-dining-tab').click(function(){
    // alert('clik');
  document.getElementById("console-img").style.backgroundImage = 'url("img/dining.jpeg")';

  });
  $('#pills-activities-tab').click(function(){
    // alert('clik');
  document.getElementById("console-img").style.backgroundImage = 'url("img/activity.jpg")';

  });







});
