window.onload = post_main()

function post_main() {
	xhr = new XMLHttpRequest();
	xhr.open('GET', '/post_main');
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onload = function() {
		response = xhr.responseText;
		whatever = document.getElementsByClassName("post")[0];
		whatever.insertAdjacentHTML("afterbegin", response);
	}
	xhr.send();
}