$(document).ready(function(){
	$(".acc .acc_header").on("click", function(){
		$(".acc .acc_header").not(this).next().slideUp(500);
		$(this).next().slideToggle(500);
		$(".acc .acc_header").css("background", "#0089ad");
		$(this).css("background", "#03a5d0");
	});
});
