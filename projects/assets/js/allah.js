  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );


  
$(document).ready(function() {
  
	$('.btn-open').click(function() {
		$('.modal-wrapper').addClass('open')
	});
  
	$('.btn-close').click(function() {
		$('.modal-wrapper').removeClass('open')
	});
  
});