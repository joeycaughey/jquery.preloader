$("body").prepend(
	$('<div id="preloader">').append(
		$('<div id="status">').html("&nbsp;")
	) 
);

$('#preloader').hide();


var Loading = {
	show: function() { 
		$("#preloader").show();
		$('#status').show();
		//$('body').css({'overflow':'hidden'});
	}, 
	hide: function() {
		$('#status').fadeOut();
		$('#preloader').delay(5).fadeOut('slow'); 
		$('body').delay(5).css({'overflow':'visible'});
	}
}
