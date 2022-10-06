$(document).ready(function() {
    $(".Modern-Slider").slick({
      autoplay: true,
      autoplaySpeed:4000,
      speed:700,
      mobileFirst: true,
      slidesToShow:1,
      slidesToScroll:1,
      pauseOnHover:false,
      respondTo:'min',
      cssEase:'linear',
 
    })

    $(".info-introduce-wrap__right").slick({
      // autoplay: true,
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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.believe-content-feedback').slick({
      infinite: false,
      autoplay:true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.tab-data').slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      // autoplay: true,
      autoplaySpeed: 2000,
    });
    
  var mybutton = $("#myBtn");
  var offSetTop = 100;
  $(window).scroll(function() {
      if ($(this).scrollTop() > offSetTop)  {
        mybutton.css("display","block");
    } else {
        mybutton.css("display","none");
    }
  });
  mybutton.click(function() {
    $(window).scrollTop({
      top: 0,
      behavior: "smooth",
    })
  })
})

const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 500;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});

var tab = $('.product-workshop-tab__list li');
var tabData = $('.product-workshop-tab__body .tab-data');

 tab.on('click', function(){
   tab.removeClass('active');
   $(this).addClass('active');

   let thisId = $(this).attr('id'); 
   let thisTabData = $('.product-workshop-tab__body').find(`#data-${thisId}`);

   tabData.removeClass('active');
   thisTabData.addClass('active');      
 })
