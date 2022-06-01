//drop menu
$(function () {
	$(".button").click(function (e) {
		e.preventDefault();
		$(".dropdownList").slideToggle(500);
		$(".fa-bars").toggleClass("active");
	});
});

 var modalparent = document.getElementsByClassName("modal_multi");
 var modal_btn_multi = document.getElementsByClassName("myBtn_multi");
 var span_close_multi = document.getElementsByClassName("close_multi");
// 點擊開啟的函式
 function setDataIndex() {
	 for (i = 0; i < modal_btn_multi.length; i++)
	 {
		 modal_btn_multi[i].setAttribute('data-index', i);
		 modalparent[i].setAttribute('data-index', i);
		 span_close_multi[i].setAttribute('data-index', i);
	 }
 }
 for (i = 0; i < modal_btn_multi.length; i++)
 {
	 modal_btn_multi[i].onclick = function() {
		 var ElementIndex = this.getAttribute('data-index');
		 modalparent[ElementIndex].style.display = "block";
	 };

	// 關掉彈跳視窗
	 span_close_multi[i].onclick = function() {
		 var ElementIndex = this.getAttribute('data-index');
		 modalparent[ElementIndex].style.display = "none";
	 };

 }
 window.onload = function() {
	 setDataIndex();
 };
//  點擊背景關掉彈跳視窗
 window.onclick = function(event) {
	 if (event.target === modalparent[event.target.getAttribute('data-index')]) {
		 modalparent[event.target.getAttribute('data-index')].style.display = "none";
	 }
 };
 //swiper
 var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });