$(function(){

	// タブメニューを押下時
	$('#tabMenu li a').on('click', function() {
		$(this).closest('ul').find('li').removeClass('current');
		$(this).parent().addClass('current');

		// toggleで移動
		var str_href = $(this).attr("href");
		if (str_href != '' && str_href != undefined) {
			$("#tabBoxes div.content").hide();
			$($(this).attr("href")).fadeToggle();
		} else if (str_href == '') {
			$("#tabBoxes div.content").show();
			$("#jaHome").hide();
		}

		return false;
	});
});