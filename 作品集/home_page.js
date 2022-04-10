//drop menu
$(function () {
	$(".button").click(function (e) {
		e.preventDefault();
		$(".dropdownList").slideToggle(500);
		$(".fa-bars").toggleClass("active");
	});
});
