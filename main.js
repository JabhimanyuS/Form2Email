'use strict';

(function () {
	$(document).ready(function () {
		var id = $('.pagination li.active').text();
		var emailHtml = $('.email-html');
		var headingText;
		$('.pagination').on('click', 'li', function () {
			var tabSelected = $(this).text().toString();
			$('.pagination li').removeClass('active');
			$(this).addClass('active');
			id = $('.pagination li.active').text();
			showEmail(tabSelected);
		});
		function showEmail(a) {
			$('.email-html').find('iframe').addClass('hidden');
			$('.email-html').find('iframe#' + a).removeClass('hidden');
		}
		$('#headerImageInput').on('keyup', function () {
			var imageSource = $(this).val();
			$('iframe#' + id).contents().find('#headerImage').attr('src', imageSource);
		});
		$('#editContent').on('keyup', function () {
			headingText = $(this).val();
			var id = $('.pagination li.active').text();
			$('iframe#' + id).contents().find('#mailerHeader').text(headingText);
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
		$('#deleteHeading').on('click', function () {
			$('iframe#' + id).contents().find('#mailerHeader').parent().remove();
		});
		$('#deleteButton').on('click', function () {
			$('iframe#' + id).contents().find('#callAction').parent().remove();
		});
		$('#calltoAction').on('keyup', function () {
			$('iframe#' + id).contents().find('#callAction').text($('#calltoAction').val());
		});
		$('input[type="radio"]').on('click', function () {
			var idVal = $(this).attr('id');
			if (idVal === 'Footer2') {
				var nfFooter_2 = Handlebars.templates.footer2();
				$('iframe#' + id).contents().find('.footer1').eq(0).empty();
				$('iframe#' + id).contents().find('.footer1').eq(0).append(nfFooter_2);
				var nfFooter_2_2 = Handlebars.templates.footer2_2();
				$('iframe#' + id).contents().find('.footer1').eq(1).empty();
				$('iframe#' + id).contents().find('.footer1').eq(1).append(nfFooter_2_2);
			}
			if (idVal === 'Footer1') {
				var nfFooter_1 = Handlebars.templates.footer1();
				$('iframe#' + id).contents().find('.footer1').eq(0).empty();
				$('iframe#' + id).contents().find('.footer1').eq(0).append(nfFooter_1);
				var nfFooter_1_2 = Handlebars.templates.footer1_2();
				$('iframe#' + id).contents().find('.footer1').eq(1).empty();
				$('iframe#' + id).contents().find('.footer1').eq(1).append(nfFooter_1_2);
			}
		});
		$('#calltoLink').on('keyup', function () {
			var updatedLink = $(this).val();
			$('iframe#' + id).contents().find('#callAction').attr('href', updatedLink);
		});
	});
})();