window.onload = function() {
	post_data();
}

function post_data() {
	xhr = new XMLHttpRequest();
	xhr.open('GET', '/post_info');
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onload = function() {
		response = xhr.responseText;
		response = JSON.parse(response);
		div1 = document.getElementsByClassName("post")[0];
		div1.insertAdjacentHTML("afterbegin", response[0]);
		div2 = document.getElementsByClassName("post_info")[0];
		div2.insertAdjacentHTML("afterbegin", response[1]);
		div3 = document.getElementsByClassName("post__comments")[0]
		post_comments = response[2];
		for (x = 0; x < post_comments.length; x++) {
			div3.insertAdjacentHTML("beforeend", post_comments[x]);
			if (Array.isArray(response[3][x]) == true) {
				for (i = 0; i < response[3][x].length; i++) {
					div3.insertAdjacentHTML("beforeend", response[3][x][i]);
				}
			} else {
				div3.insertAdjacentHTML("beforeend", response[3][x]);
			}
		}
		end_comments = "</div>"
		div3.insertAdjacentHTML("beforeend", end_comments);
		debugger;
	}
	xhr.send();
}