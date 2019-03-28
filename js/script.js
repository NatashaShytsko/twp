$(document).ready(function(){
  var pull = $('#pull');
  menu = $('.menu');
  var open = $('.open');

$(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
    $(this).find('a').toggleClass("cross");
  });

});
$(window).resize(function(){

  var w = $(window).width();
  if(w > 320 && menu.is(':hidden')) {
    menu.removeAttr('style');
  };

});

