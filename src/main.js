'use strict';

(function () {
	$(document).ready(function () {
		var id = '1';
		// $('.pagination').on('click', 'li', function () {
		// 	var tabSelected = $(this).text().toString();
		// 	$('.pagination li').removeClass('active');
		// 	$(this).addClass('active');
		// 	id = $('.pagination li.active').text();
		// 	showEmail(tabSelected);
		// });
		// function showEmail(a) {
		// 	$('.email-html').find('iframe').addClass('hidden');
		// 	$('.email-html').find('iframe#' + a).removeClass('hidden');
		// }
		$('#headerImageInput').on('keyup', function () {
			var imageSource = $(this).val();
			$('iframe#' + id).contents().find('#headerImage').attr('src', imageSource);
		});

		function htmlGenerate() {
			var emailCode = '<html xlmns="http://www.w3.org/1999/xhtml">' + $('iframe#' + id).contents().find('html').html().toString();+'</html>';
			var $emailCode = $('<div />', { html: emailCode });
			$($emailCode).find('td').each(function () {
				if ($(this).text() === '') {
					$(this).remove();
				}
			});
			return $emailCode;
		}

		$('#previewChanges').on('click', function () {
			htmlGenerate();
			var a = htmlGenerate();
			var newWindow = window.open();
			newWindow.document.write($(a).html());
		});

		$('#downloadEmail').on('click', function () {
			htmlGenerate();
			var a = htmlGenerate();
			var blob = new Blob([$(a).html().toString()], {
				'type': 'text/html'
			});
			var a = document.createElement('a');
			a.download = 'index.html';
			a.href = URL.createObjectURL(blob);
			document.body.appendChild(a);
			a.click();
		});

		$('input').on('keyup', function (e) {
			var elem = e.target;
			var elemId = '#' + $(elem).attr('id');
			var elemAttr = $(elem).attr('data-attr');
			var updatedValue = $(elem).val();
			console.log(elemId, elemAttr, updatedValue);
			$('iframe#' + id).contents().find(elemId).attr(elemAttr, updatedValue);
		});
	});
})();
