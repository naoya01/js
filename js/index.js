$(function(){
  // $('.btn').on('click',function(){
  //   $('.box-1').slideToggle()
  // });

  $('.btn').on('click',function(){
    $('.box-1').children().slideToggle()
  });
  
  $('.box-1').hover(function(){
    $(this).css('background-color','blue')
  },function(){
    $(this).css('background', '');
  }
  )
});