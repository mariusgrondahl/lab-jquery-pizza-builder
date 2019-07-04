// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    $("#white-sauce-list, #glutenfree-list").hide();


    $(".btn").click(function(){
        let total = 0;
        
        total = $("#start-price").val() + $("#pepperoni-list").val() +  $("#mushroom-list").val() + $("#green-pepper-list").val() + $("#white-sauce-list").val() + $("#glutenfree-list").val(); 
        console.log(total);

        $("#price").html(total)
    })


    $(".btn-pepperonni").click(function(){
        $("#pepperoni").toggle();
        $(".btn-pepperonni").toggleClass("active");

        $("#pepperoni-list").toggle("pepperoni-list").toggleClass("show");
        $("#pepperoni-list").hasClass("show")
      });

    $(".btn-mushrooms").click(function(){
      $("#mushrooms").toggle();
      $(".btn-mushrooms").toggleClass("active");
      
      $(".btn-mushrooms").html("Add Mushrooms")

      $("#mushroom-list").toggle("mushroom-list");
    });

    $(".btn-green-peppers").click(function(){
        $("#green-pepper").toggle();
        $(".btn-green-peppers").toggleClass("active");
        $("#green-pepper-list").toggle("green-pepper-list");

    });

    $(".btn-sauce").click(function(){
        $(".sauce").toggleClass("sauce-white");
        $(".btn-sauce").toggleClass("active");
        $("#white-sauce-list").toggle("white-sauce-list");
    });

    $(".btn-crust").click(function(){
        $(".crust").toggleClass("crust-gluten-free");
        $(".btn-crust").toggleClass("active");
        $("#glutenfree-list").toggle("glutenfree-list");
        $("#glutenfree-list").val();
    });

});



