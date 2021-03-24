$(document).ready(function () {
    $('.bars').click(function () { 
        $('.menu').slideToggle();
     })


     $(".menu ul li a").click(function (event) {
        event.preventDefault();
        var idScroll  = $(this).attr('href'),
        topScroll = $(idScroll).offset().top - $('.menu').outerHeight(true) - $('nav').outerHeight(true);
        $('body,html').animate({scrollTop: topScroll}, 800);
       
      });
});