var navChange = $("#navEnd").offset().top
$(window).scroll(function(){

 var windowScroll = $(window).scrollTop()
 
 if(windowScroll > navChange)
     {
         
$(".custom-nav").css("backgroundColor","#fff")
$(".custom-nav").css("boxShadow","5px 5px 15px 0 rgba(31, 31, 31, 0.07)")
$(".custom-nav").css("height","60px")        
$(".nav-item a").css("color","#000")
         
     }
else
    {
$(".custom-nav").css("backgroundColor","transparent") 
$(".custom-nav").css("boxShadow","none")
$(".custom-nav").css("height","60px")
$(".nav-item a").css("color","#fff")
        
    }
});
$(document).ready(function(){
  $("a.nv").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});
var Off = $("#about").offset().top
$(window).scroll(function(){

 var windowScroll = $(window).scrollTop()
 
 if(windowScroll > Off)
     {         
    $("#btnUp").fadeIn(500)     
     }
else
    {        
        $("#btnUp").fadeOut(500)     
    
    }
});
   
$("#btnUp").click(function(){
    
    $("html,body").animate({scrollTop:'0'},1000)

});