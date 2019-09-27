$(function() {
    $('.toggle').click(function(){
        $('nav').toggleClass('active');
        $('.toggle').toggleClass('active');
        $('.ic').toggleClass('fa-bars');
        $('.ic').toggleClass('fa-times');
    });
    
    $('.n1').click(function(){
        $('nav').toggleClass('active');
        $('.toggle').toggleClass('active');
        $('.ic').toggleClass('fa-bars');
        $('.ic').toggleClass('fa-times');
    });
    $('.n2').click(function(){
        $('nav').toggleClass('active');
        $('.toggle').toggleClass('active');
        $('.ic').toggleClass('fa-bars');
        $('.ic').toggleClass('fa-times');
    });
    $('.n3').click(function(){
        $('nav').toggleClass('active');
        $('.toggle').toggleClass('active');
        $('.ic').toggleClass('fa-bars');
        $('.ic').toggleClass('fa-times');
    });
    $('.n4').click(function(){
        $('nav').toggleClass('active');
        $('.toggle').toggleClass('active');
        $('.ic').toggleClass('fa-bars');
        $('.ic').toggleClass('fa-times');
    });



    var hm = document.querySelector('#home').clientHeight;
    var aboutus = document.querySelector('#about-us').clientHeight;
    var product = document.querySelector('#products').scrollHeight;

    function Scroll(){
        
        if(window.pageYOffset < (hm*0.5) && window.pageYOffset >= 0){
            $('.n1').addClass('current');
            $('.n2').removeClass('current');
            $('.n3').removeClass('current');
            $('.n4').removeClass('current');
        }


        if(window.pageYOffset >= (hm-150) && window.pageYOffset < (hm + aboutus)*0.75){
            $('.n1').removeClass('current');
            $('.n2').addClass('current');
            $('.n3').removeClass('current');
            $('.n4').removeClass('current');
        }

        if(window.pageYOffset >= (hm + aboutus) && window.pageYOffset < (hm + aboutus + product)*0.93){
            $('.n1').removeClass('current');
            $('.n2').removeClass('current');
            $('.n3').addClass('current');
            $('.n4').removeClass('current');
        }

        if(window.pageYOffset >= (hm + aboutus + product) - 150){

            $('.n1').removeClass('current');
            $('.n2').removeClass('current');
            $('.n3').removeClass('current');
            $('.n4').addClass('current');
        }

    }
    window.addEventListener("scroll", Scroll);


});