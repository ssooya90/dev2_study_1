$(document).ready(function () {
	function datePicker() {

		if ( $('.date-picker').length) {

			$('.date-picker').datepicker(
				{
					autoClose: true
				}
			);
			$('.date-picker').each(function(){

				if( $(this).val() !== '' ){
					$(this).data('datepicker').selectDate(new Date($(this).val()));
				}
			})
		}
	}
	datePicker();
})



function gnbToggle(){
	var gnbMenu = $('.gnbMenu')
	gnbMenu.stop().slideToggle();
}

function layerOpen(layerName) {
	$('.layer.layer-' + layerName).show();
	$('.container').addClass('overlay')

}

// 팝업 열기
function layerClose(layerName) {
	$('.layer.layer-' + layerName).hide();
	$('.container').removeClass('overlay')

}


function popupOpen(name) {
	$('.popup.popup-' + name).show();
	$('.container').addClass('overlay');


}

// 팝업 열기
function popupClose(name) {
	$('.popup.popup-' + name).hide();
	$('.container').removeClass('overlay');

}


function scrollDisable(){
	$('body, html').addClass('scrollHidden').on('scroll touchmove mousewheel', function(e){
		e.preventDefault();
	});


}
function scrollAble(){
	$('html, body').removeClass('scrollHidden');
}


function headerMenuToggle(){

	var _headerMenu = $('.header__menu');
	$('.gnb-toggle-btn').toggleClass('active')



	if(_headerMenu.is(":visible")){
		_headerMenu.stop().slideUp();
	}else{
		_headerMenu.stop().slideDown();
	}


}

