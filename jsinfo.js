$(document).ready(function(){

/********************MENU*************************/	

/*******DROP-DOWN*********/

	$('.dropdown').hover(
        function(){
            $('.sub-menu').slideDown(400);
        },
        function(){
            $('.sub-menu').slideUp(400);
        }
    );

/*****HIDE-ON-SCROLL*******/

    $(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('.dropdown').fadeOut(500);
            } else {
                $('.dropdown').fadeIn(500);
            }
        });

/*****************LOAD BACKGROUND IMAGE******************/

	$('#background>img#1').fadeTo(300, 1);
	startSlider();

/********************RETURN BTN *************************/

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
        $('#return-to-top').fadeIn(200);   
    } else {
        $('#return-to-top').fadeOut(200);   
    }
});
$('#return-to-top').click(function() {     
    $('body, html').animate({
        scrollTop : 0                       
    }, 700);
});

});



/********************SLIDER*****************************/

function startSlider(){
	var sliderInt=1;
	var sliderNext=2;
	var count=$('#background>img').size();

	var loop=setInterval(function(){

		if(sliderNext>count){
			sliderNext=1;
			sliderInt=1;
		}

		$('#background > img').fadeTo(3000, 0)
		$('#background > img#'+sliderNext).fadeTo(3000, 1);
		sliderInt=sliderNext;
		sliderNext=sliderNext+1;
		
	});

};


