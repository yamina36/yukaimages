


// onepage pages 


// ** About (page) 1 ****************************************************************************

$('.about').click(function(){

  // TO EDIT +  
  $('.offpage__content').load('about.html .page-box');
  $('title').html('About writer — Have you heard about the story?');
  window.history.pushState('', '', '/about');

  $('.offpage').fadeIn('500');

  $(document).ajaxError(function(){
    $(this).click();
	});	

});


// ** Contact (page) 2 ****************************************************************************

$('.contact').click(function(){

  // TO EDIT +  
  $('.offpage__content').load('contact.html .page-box');
  $('title').html('Contact writer — Have you heard about the story?');
  window.history.pushState('', '', '/contact');

  $('.offpage').fadeIn('500');

  $(document).ajaxError(function(){
    $(this).click();
	});

});


// ** View homepage (homepage) 3 ****************************************************************************

$(function() {
  $('.close, .logo, .menu__item-button a').click(function(){

  	// TO EDIT +
    $('title').html('writer — Have you heard about the story?');
    window.history.pushState('', '', '/');

    // Other    
    if ($(window).width() < 1200) {
    	$('.offpage').hide(); }

    setTimeout(function() {
      if ($(window).width() >= 1200) {
    		$('.offpage').fadeOut(0); }
    }, 500);    

    $('.close').fadeOut(300);

    setTimeout(function() {
      $('.page-box').css('display', 'none');
    }, 500);    

    $('body').animate({scrollTop: '0'}, 0);
    if($('body').hasClass('offpage-active')){
      $('body').removeClass('offpage-active');
    }

    setTimeout(function() {
      $('.page-box').html('');
    }, 500);

  });
});