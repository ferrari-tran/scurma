$(function() {
	showModal();
	buttonCloseModal();
});

// Click button to show modal
function showModal() {
	var btnShowModal = $('.button-show-modal');
	if (btnShowModal.length > 0) {
		btnShowModal.bind('click', function(e) {
			e.preventDefault();
			var modalTarget = $(this).data('target-modal');
			var package = $(this).data('option');
			console.log(package);

			if (modalTarget.length > 0) {
				$(modalTarget).addClass('show');

				if ($(modalTarget).hasClass('show')) {
					changeValueOptionInForm(package);
				}
			}
		});
	}
}

// Click button to close modal
function buttonCloseModal() {
	var btnClose = $('.button-close');
	if (btnClose.length > 0) {
		btnClose.bind('click', function(e) {
			e.preventDefault();
			var modal = $(e.target.closest('.modal'));
			if (modal.length > 0) {
				$(modal).removeClass('show');
			}
		});
	}
}

// Auto change value of package in form
function changeValueOptionInForm(option) {
	var select = $('.form-register select');
	if (select.length > 0) {
		option ? $(select).val(option) : $(select).val('');
	}
}
