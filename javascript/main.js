$(document).ready(function() {
  
    $(".Modern-Slider").slick({
      autoplay: true,
      autoplaySpeed:3000,
      speed:700,
      mobileFirst: true,
      slidesToShow:1,
      slidesToScroll:1,
      pauseOnHover:false,
      respondTo:'min',
      cssEase:'linear',
      prevArrow:'<button class="PrevArrow"></button>',
      nextArrow:'<button class="NextArrow"></button>', 
    })

    $('.design-content-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
    });
      
    
  })