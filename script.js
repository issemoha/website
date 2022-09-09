$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});


$(document).ready(function(){
  $("#sun").on('click', function(){
    $("#sun").toggleClass("fa-sun");
    $("#sun").toggleClass("fa-moon");

  });

});

/*
$("#sun").click(function(){
  $("body").toggleClass("dark-mode");
}); 


$(document).ready(function(){
  $("#sun").click(function(){
    $("body").toggleClass("change-background");
})
}); */

