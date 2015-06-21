jQuery(document).ready(function($) {
    preloader = new $.materialPreloader({
        position: '',
        height: '5px',
        col_1: '#159756',
        col_2: '#da4733',
        col_3: '#3b78e7',
        col_4: '#fdba2c',
        fadeIn: 500,
        fadeOut: 500
    });
    preloader.on();
    /*$('.on').on('click', function(event) {
        event.preventDefault();
        preloader.on();
    });
    $('.off').on('click', function(event) {
        event.preventDefault();
        preloader.off();
    });*/
	$(window).load(function (event) {
        event.preventDefault();
        preloader.off();
    });
});