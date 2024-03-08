$(document).ready(function(){
    $(".loader").fadeOut(4000);
});

//side bar 

function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function closesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// Function to set up the initial state of the slider
function setupSlider() {
  var $num = $('.my-card').length;
  var $even = $num / 2;
  var $odd = ($num + 1) / 2;

  if ($num % 2 == 0) {
    $('.my-card:nth-child(' + $even + ')').addClass('active');
    $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $even + ')').next().addClass('next');
  } else {
    $('.my-card:nth-child(' + $odd + ')').addClass('active');
    $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
  }
}

// Function to trigger click event on the next slide
function autoSlide() {
  $('.active').next().find('img').trigger('click');
}

// Set up the initial state of the slider
setupSlider();

// Set interval to run autoSlide function every 5 seconds (5000 milliseconds)
var autoSlideInterval = setInterval(autoSlide, 5000);

// Clear the interval when the user interacts with the slider
$('.card-carousel').on('mouseenter', function() {
  clearInterval(autoSlideInterval);
}).on('mouseleave', function() {
  autoSlideInterval = setInterval(autoSlide, 5000);
});

// Event binding for clicking on images within the carousel
$('.my-card img').click(function() {
  var $slide = $('.active').width();
  
  if ($(this).closest('.my-card').hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide}, function() {
      $('.card-carousel .my-card:first-child').appendTo('.card-carousel');
      $('.card-carousel').css('left', 0);
    });
  } else if ($(this).closest('.my-card').hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide}, function() {
      $('.card-carousel .my-card:last-child').prependTo('.card-carousel');
      $('.card-carousel').css('left', 0);
    });
  }
  
  $(this).closest('.my-card').removeClass('prev next');
  $(this).closest('.my-card').siblings().removeClass('prev active next');
  
  $(this).closest('.my-card').addClass('active');
  $(this).closest('.my-card').prev().addClass('prev');
  $(this).closest('.my-card').next().addClass('next');
});

// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().find('img').trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().find('img').trigger('click');
  }
});
