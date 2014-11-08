$(document).ready(function(){
  $('section#one article').mouseenter(function(){
    $(this).fadeTo('slow', 0);
  });
  $('section#one article').mouseleave(function(){
    $(this).fadeTo('slow', 1);
  });
  $('section#two article').click(function(){
    $(this).toggle();
  });
  $('button#article3').click(function(){
    $('#three').toggle();
  });
  $('button#article4').click(function(){
    $('#four').toggle();
  });
});