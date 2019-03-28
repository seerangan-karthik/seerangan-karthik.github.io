$(function(){

	$('#tabMenu li a').on('click', function() {
		$(this).closest('ul').find('li').removeClass('current');
		$(this).parent().addClass('current');

		var str_href = $(this).attr("href");
		if (str_href != '' && str_href != undefined) {
			$("#tabBoxes div.content").hide();
			$($(this).attr("href")).fadeToggle();
		} else if (str_href == '') {
			$("#tabBoxes div.content").show();
		}

		return false;
	});
});