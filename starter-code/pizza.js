// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    //Hiding elements
    $("#white-sauce-list, #glutenfree-list").hide();

    // Setting the Value of default
    $(".btn-pepperonni").val(1); $(".btn-mushrooms").val(1); $(".btn-green-peppers").val(1); $(".btn-sauce").val(0); $(".btn-crust").val(0);

    let sum = 10;
    function calcSum () {
    $(".btn").each(function(index) {
        sum += parseInt($(this).val());
        $("#price").html(sum);
    });
}


// Her we start the Button interaction

// PepperoniButton
    $(".btn-pepperonni").click(function(){
        $("#pepperoni").toggle();
        $(".btn-pepperonni").toggleClass("active");
        $(".btn-pepperonni").val(1);

        if ( $(".btn-pepperonni").hasClass("active") ) {
            $(".btn-pepperonni").val(1);
        } else {
            $(".btn-pepperonni").val(0);
        }

        sum = 10;
        calcSum();
      });

// MushroomButton
    $(".btn-mushrooms").click(function(){
      $("#mushrooms").toggle();
      $(".btn-mushrooms").toggleClass("active");
      $(".btn-mushrooms").val(1);  
      if ( $(".btn-mushrooms").hasClass("active") ) {
        $(".btn-mushrooms").val(1);
    } else {
        $(".btn-mushrooms").val(0);
    }  

    sum = 10;
    calcSum();
    });

// Green Peppers Button
    $(".btn-green-peppers").click(function(){
        $("#green-pepper").toggle();
        $(".btn-green-peppers").toggleClass("active");
        $(".btn-mushrooms").val(1);

        if ( $(".btn-green-peppers").hasClass("active") ) {
            $(".btn-green-peppers").val(1);
        } else {
            $(".btn-green-peppers").val(0);
        }  

        sum = 10;
        calcSum();
    });

// SauceButton
    $(".btn-sauce").click(function(){
        $(".sauce").toggleClass("sauce-white");
        $(".btn-sauce").toggleClass("active");

        if ( $(".btn-sauce").hasClass("active") ) {
            $(".btn-sauce").val(3);
        } else {
            $(".btn-sauce").val(0);
        }  

        sum = 10;
        calcSum();
    });

// CrustButton
    $(".btn-crust").click(function(){
        $(".crust").toggleClass("crust-gluten-free");
        $(".btn-crust").toggleClass("active");

        if ( $(".btn-crust").hasClass("active") ) {
            $(".btn-crust").val(5);
        } else {
            $(".btn-crust").val(0);
        }     
        
        sum = 10;
        calcSum();
    });

});



