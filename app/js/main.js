$(function() {
	showModal();
	buttonCloseModal();

	var form = document.querySelector('.form-register');
	form.addEventListener('submit', function(e) {
		submitForm(e.target);
		e.preventDefault();
	}, false);
});

// Click button to show modal
function showModal() {
	var btnShowModal = $('.button-show-modal');
	if (btnShowModal.length > 0) {
		btnShowModal.bind('click', function(e) {
			e.preventDefault();
			var modalTarget = $(this).data('target-modal');
			var package = $(this).data('option');

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

function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
	var pair  = vars[i].split("=");
	var key   = decodeURIComponent(pair[0]);
	var value = decodeURIComponent(pair[1]);

    if (typeof query_string[key] === "undefined") {
      query_string[key] = decodeURIComponent(value);

    } else if (typeof query_string[key] === "string") {
      var arr = [query_string[key], decodeURIComponent(value)];
      query_string[key] = arr;
    } else {
      query_string[key].push(decodeURIComponent(value));
    }
  }
  return query_string;
}


function submitForm(form) {
	var url          = "https://script.google.com/macros/s/AKfycbwH7NzczNFqIQOvyim7LKio0WABGQmfs4BUT5S0saa5RYevbCM/exec";
	var url_location = window.location.href;
	var params       = window.location.search.replace('?', '');
	var paramsList   = parse_query_string(params);
	var formData     = new FormData(form);
	var xhr          = new XMLHttpRequest();

	formData.append('url', url_location);

	for (var key in paramsList) {
		formData.append(key, paramsList[key]);
	}

	// xhr.onprogress = function(pe) {
	// 	console.log('on progress');
	// }

	xhr.onload = function(e) {
		if (xhr.status == 200) {
			window.location.href="/thankyou";
		} else {
			alert('Error');
		}
	}

	xhr.open('POST', url, true);

	xhr.send(formData);
	return false;
}
