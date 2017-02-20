window.onload = function() {
	post_main();
	post_main_stats();
}

function post_main() {
	xhr = new XMLHttpRequest();
	xhr.open('GET', '/post_main');
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onload = function() {
		response = xhr.responseText;
		div_location = document.getElementsByClassName("post")[0];
		div_location.insertAdjacentHTML("afterbegin", response);
	}
	xhr.send();
}

function post_main_stats() {
	xhr = new XMLHttpRequest();
	xhr.open('GET', '/post_main_stats');
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onload = function() {
		response = xhr.responseText;
		div_location = document.getElementsByClassName("post_info")[0];
		div_location.insertAdjacentHTML("afterbegin", response);
	}
	xhr.send();
}