$(document).ready(function() {
    $(".Modern-Slider").slick({
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
            dots: true
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

    $('.product-workshop-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      // autoplay: true,
      autoplaySpeed: 2000,
    });

    
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

"use strict";
var initTabs = (function () {
  var contentItems = document.querySelectorAll('.product-workshop-slider');

  var tabGroup0    = document.getElementById("tab-group-0");
  var tabsItems0   = document.querySelectorAll("#tab-group-0 > li");

  _setTabGroupClick(tabGroup0, tabsItems0, 0);

  function _setTabGroupClick (tabGroup, tabsItems, tabIndex) {
    var tabSlected = tabsItems[tabIndex];

    tabGroup.addEventListener('click', function (e) {
      if (e.target.dataset.tab && (tabSlected.dataset.tab !== e.target.dataset.tab)) {
        var currentTabIndex = parseInt(e.target.dataset.tab);

        var oldTabIndex = parseInt(tabSlected.dataset.tab);

        tabSlected.classList.remove('selected');
        tabSlected = tabsItems[currentTabIndex];
        tabSlected.classList.add('selected');

        contentItems[oldTabIndex].classList.remove('content--show');
        contentItems[currentTabIndex].classList.add('content--show');
      }
    });
  }
})();
