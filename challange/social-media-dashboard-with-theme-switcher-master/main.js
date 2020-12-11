
$(document).ready(function(){

    $(".slider").click(function(){
        if ($(".dark_mode").hasClass("light_mode")){
            $(".dark_mode").removeClass("light_mode");
            $("body").css("background-color", "hsl(230, 17%, 14%)");
        }else{
            $(".dark_mode").addClass("light_mode");
            $("body").css("background-color", "hsl(0, 0%, 100%)");
        }
    });
  
});