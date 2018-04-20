$(function() {
    $("#obj").mouseover(function(){ 
        $("#obj").addClass("box-shadow"); 
    }); 
    $("#obj").mouseout(function(){ 
        $("#obj").removeClass("box-shadow"); 
    });
})

$("#myCarousel").carousel({
    interval:4000,
});
  