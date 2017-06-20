$(document).ready(function() {
	// Подгоняем высоту фона под размер экрана
	function wResize() {
		$(".header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize();
	});
	//Поле телефона
	jQuery(function($){
	   $("#phone").mask("+7(999) 999-99-99");
    });
	// Tab
	$('.contacts .tab').click(function() {
		$('.contacts .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.contacts .tab_item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');

	$('.header_discounts .tab').click(function() {
		$('.header_discounts .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.header_discounts .tab_item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});