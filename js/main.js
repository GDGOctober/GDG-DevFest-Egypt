var navChange = $("#navEnd").offset().top
$(window).scroll(function(){

 var windowScroll = $(window).scrollTop()
 
 if(windowScroll > navChange)
     {
         
$(".custom-nav").css("backgroundColor","#fff")
$(".custom-nav").css("boxShadow","5px 5px 15px 0 rgba(31, 31, 31, 0.07)")
$(".nav-item a").css("color","#000")
$(".navbar-toggler").addClass("toggler-dark")
$("span.navbar-toggler-icon").addClass("navbar-toggler-icon-dark")
     }
else
    {
$(".custom-nav").css("backgroundColor","transparent") 
$(".custom-nav").css("boxShadow","none")
$(".nav-item a").css("color","#fff")
$(".navbar-toggler").removeClass("toggler-dark")
$("span.navbar-toggler-icon").removeClass("navbar-toggler-icon-dark")
        
    }
});
$("a.nv").click(function(){
    
   var href = $(this).attr("href");
   var g =  $(href).offset().top-70;
$("html,body").animate({scrollTop:g},1000)
   
   
})
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