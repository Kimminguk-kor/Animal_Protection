$(function(){

     $('.banner').slick({
          dots: true,
     });

     
     $(".hamBox").click(function(){
          if ($("#nav").css("display") == "none") { 
               $("#nav").show(); //display :none 일떄
           } else {
               $("#nav").hide();  //display :block 일떄
           }
     })
     $(window).resize(function(){
          if(window.innerWidth > 1280){
               $("#nav").css("display", "block")
          } else if (window.innerWidth < 1280){
               $("#nav").css("display", "none")
          }
     })
     
     let adoptShowBanner = 0;

     function adoptMoveBanner(){
          $(".firstUnderBanner>.cardBox01").eq(adoptShowBanner).addClass("active")
          .siblings().removeClass("active")
     }
     $(".arrowLeft").click(function(){
          if(adoptShowBanner > 0){
               adoptShowBanner--;
          } else {
               adoptShowBanner = 1;
          }
          adoptMoveBanner()
     })
     $(".arrowRight").click(function(){
          if(adoptShowBanner < 1){
               adoptShowBanner++;
          } else {
               adoptShowBanner = 0;
          }
          adoptMoveBanner();
     })
     function findmeMoveBanner(){
          $(".secondUnderBanner>.cardBox02").eq(adoptShowBanner).addClass("active")
          .siblings().removeClass("active")
     }
     $(".arrowLeft02").click(function(){
          if(adoptShowBanner > 0){
               adoptShowBanner--;
          } else {
               adoptShowBanner = 1;
          }
          findmeMoveBanner()
     })
     $(".arrowRight02").click(function(){
          if(adoptShowBanner < 1){
               adoptShowBanner++;
          } else {
               adoptShowBanner = 0;
          }
          findmeMoveBanner();
     })
     
})