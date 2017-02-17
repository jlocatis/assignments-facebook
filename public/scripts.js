window.addEventListener("load", function(){

	// LIKE & UNLIKE
	//Main like & unlike (HARD CODED!)
	function main_like() {
		var like = this;
		var likes_count = this.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1];
		like.innerHTML = "Unlike";
		test = likes_count.textContent.split(' ');
		test1 = test.shift();
		test1 = parseInt(test1);
		test1 = test1 + 1;
		test1 = test1.toString();
		test = test1 + " " + test;
		likes_count.textContent = test;
		document.getElementsByClassName("post__actions")[0].childNodes[1].removeEventListener("click", main_like);
		document.getElementsByClassName("post__actions")[0].childNodes[1].addEventListener("click", main_unlike);
	}

	function main_unlike() {
		var unlike = this;
		var unlikes_count = this.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1];
		unlike.innerHTML = "Like";
		test = unlikes_count.textContent.split(' ');
		test1 = test.shift();
		test1 = parseInt(test1);
		test1 = test1 - 1;
		test1 = test1.toString();
		test = test1 + " " + test;
		unlikes_count.textContent = test;
		document.getElementsByClassName("post__actions")[0].childNodes[1].removeEventListener("click", main_unlike);
		document.getElementsByClassName("post__actions")[0].childNodes[1].addEventListener("click", main_like);
	}

	//Comment like & unlike
	function like() {
		var likes = this;
		var likes_count = likes.parentNode.childNodes[5];
		likes.innerHTML = "Unlike";
		test = likes_count.textContent.split(' ');
		test1 = test.shift();
		test1 = parseInt(test1);
		test1 = test1 + 1;
		test1 = test1.toString();
		test = test1 + " " + test;
		likes_count.textContent = test;
		likes.removeEventListener("click", like);
		likes.addEventListener("click", unlike);
	}

	function unlike() {
		var unlikes = this;
		var unlikes_count = unlikes.parentNode.childNodes[5];
		unlikes.innerHTML = "Like";
		test = unlikes_count.textContent.split(' ');
		test1 = test.shift();
		test1 = parseInt(test1);
		test1 = test1 - 1;
		test1 = test1.toString();
		test = test1 + " " + test;
		unlikes_count.textContent = test;
		unlikes.removeEventListener("click", unlike);
		unlikes.addEventListener("click", like);
	}

	//call main like & unlike functions (HARD CODED!)
	document.getElementsByClassName("post__actions")[0].childNodes[1].addEventListener("click", main_like);

	//give focus to comment box when clicking "comment" (HARD CODED!)
	function commentOnClick() {
		document.getElementsByClassName("mainCommentBox")[0].focus();
	}

	document.getElementsByClassName("post__actions")[0].childNodes[3].addEventListener("click", commentOnClick);

	//display & expand comment replies
	function showReplies() {
		var displayReplies = this.parentNode.nextElementSibling;
		if (displayReplies == null) {
			createNewReplyBox(this);
		} else {
			displayReplies.style.display = "block";
			this.removeEventListener("click", showReplies);
			this.addEventListener("click", collapseReplies);
		}
	}

	function collapseReplies() {
		var collapse_replies = this.parentNode.nextElementSibling;
		collapse_replies.style.display = "none";
		this.removeEventListener("click", collapseReplies);
		this.addEventListener("click", showReplies);
	}

	//comment box stuff (first comment only, hard coded)
	function submitMainComment() {
		current_comment = this;
		current_textbox = current_comment.parentNode.childNodes[1].value;
		if (!current_textbox.match(/\S/)) {
			alert("Type something in.");
			event.preventDefault();
		} else {
			var reply_count = current_comment.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3];
			var test = reply_count.textContent.split(' ');
			var test1 = test.shift();
			test1 = parseInt(test1);
			test1 = test1 + 1;
			test1 = test1.toString();
			test = test1 + " " + test;
			reply_count.textContent = test;
			createNewMainComment(current_textbox);
			current_comment.parentNode.childNodes[1].value = ""
			event.preventDefault();
		}
	}

	//call hard coded main comment
	document.getElementsByClassName("mainCommentBox")[0].parentNode.childNodes[3].addEventListener("click", submitMainComment)

	//comment box stuff (dynamic)
	function submitComment() {
		current_comment = this;
		current_textbox = current_comment.parentNode.childNodes[1].value;
		if (!current_textbox.match(/\S/)) {
			alert("Type something in.");
			event.preventDefault();
		} else {
			var reply_count = current_comment.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[3]
			var reply_text = reply_count.textContent.split(' ');
			if (reply_text.length == 2) {
				var reply_text1 = reply_text.shift();
				reply_text1 = parseInt(reply_text1);
				reply_text1 = reply_text1 + 1;
				reply_text1 = reply_text1.toString();
				reply_text = reply_text1 + " " + reply_text;
				reply_count.textContent = reply_text;
				createNewComment(current_textbox, current_comment);
				current_comment.parentNode.childNodes[1].value = ""
				event.preventDefault();
			} else {
				reply_count.textContent = "1 replies";
				createNewComment(current_textbox, current_comment);
				current_comment.parentNode.childNodes[1].value = ""
				event.preventDefault();
			}
		}
	}

	// Open and close modal windows for individual users
	function showModal() {
		current_username = this.textContent;
		no_of_friends = this.getAttribute("data-friends");
		current_modal = document.getElementsByClassName("modal")[0];
		document.getElementsByClassName("modal__title")[0].textContent = current_username;
		document.getElementsByClassName("modal__body")[0].textContent = "Number of friends: " + no_of_friends;
		current_modal.style.display = "block";
		current_modal.nextElementSibling.style.display = "block";
		document.getElementsByClassName("modal__close")[0].childNodes[0].addEventListener("click", hideModalButton);
		document.getElementsByClassName("modal")[0].addEventListener("click", hideModalScreen);
	}

    // Share modal window (username is still hard coded)
    function showShareModal() {
    	current_username = document.getElementsByClassName("username")[0].textContent
    	current_modal = document.getElementsByClassName("modal")[0];
		document.getElementsByClassName("modal__title")[0].textContent = "Share " + current_username +"'s post";
		share_text = document.getElementsByClassName("post__body")[0].textContent
		document.getElementsByClassName("modal__body")[0].textContent = share_text
		current_modal.style.display = "block";
		current_modal.nextElementSibling.style.display = "block";
		document.getElementsByClassName("modal__close")[0].childNodes[0].addEventListener("click", hideModalButton);
		document.getElementsByClassName("modal")[0].addEventListener("click", hideModalScreen);
    }

    //hide modal window using "x" button
    function hideModalButton() {
		current_x = this;
		current_x = current_x.parentNode.parentNode;
		current_x.style.display = "none";
		current_x.previousElementSibling.style.display = "none";
	}

	//hide modal window by clicking outside of the window
	function hideModalScreen() {
		current_x = this;
		current_x.style.display = "none";
		current_x.nextElementSibling.style.display = "none";
	}

    document.getElementsByClassName("action action--share")[0].addEventListener("click", showShareModal);

	// Build initial event listeners and re-build after comment addition.
	function buildEventListeners() {
		//Modal window event listeners.
		var modalArray = document.getElementsByClassName("username")

    	for (x = 0; x < modalArray.length; x++) {
    		modalArray[x].addEventListener("click", showModal)
    	}
		//Comments event listeners.
		var commentsArray = document.getElementsByClassName("commentBox")
	
		for (x = 0; x < commentsArray.length; x++) {
			commentsArray[x].parentNode.childNodes[3].addEventListener("click", submitComment)
		}
		//Display reply comments event listeners.
		var repliesArray = document.getElementsByClassName("reply_click");
	
		for (x = 0; x < repliesArray.length; x++) {
			repliesArray[x].addEventListener("click", showReplies);
		}
		//Like button event listeners.
		var likesArray = document.getElementsByClassName("like");

		for (x = 0; x < likesArray.length; x++) {
			likesArray[x].addEventListener("click", like);
		}
	}

    // Display new comments (HARD CODED TO TOP OF PAGE!)
    function createNewMainComment(comment) {
		page_top = document.getElementsByClassName("post__comments")[0];
		var div1 = document.createElement("div");
		div1.className = "comment media";
		page_top.appendChild(div1);
			var img = document.createElement("img");
			img.src = "images/user.png";
			img.className = "profilePhoto";
			div1.appendChild(img);

		var div2 = document.createElement("div");
		div2.className = "media__info";
		div1.appendChild(div2);
			var a = document.createElement("a");
			a.href = "javascript:;";
			a.className = "username";
			a.setAttribute("data-friends", "50");
			a.textContent = "New Name";
			div2.appendChild(a)

			blank1 = document.createTextNode(" ");
			text1 = document.createTextNode(comment);
			div2.appendChild(blank1);
			div2.appendChild(text1);

		var div3 = document.createElement("div");
		div3.className = "comment__info";
		div2.appendChild(div3);
			var blank = document.createTextNode(" ");
			var a1 = document.createElement("a");
			a1.href = "javascript:;";
			a1.className = "like";
			a1.textContent = "Like";
			var blank2 = document.createTextNode(" ");
			div3.appendChild(a1);
			div3.appendChild(blank);
			div3.appendChild(blank2);

			var a2 = document.createElement("a");
			a2.href = "javascript:;";
			a2.className = "reply_click";
			a2.textContent = "Reply";
			var blank3 = document.createTextNode(" ");
			div3.appendChild(a2);
			div3.appendChild(blank3);

			var span = document.createElement("span");
			span.className = "no_of_likes";
			span.textContent = "0 likes";
			div3.appendChild(span);
			var blank4 = document.createTextNode(" ");
			div3.appendChild(blank4);

			var time = getTime();
			var text2 = document.createTextNode("Today at " + time);
			div3.appendChild(text2);

			buildEventListeners();
	}

    // Display new comments (rest of page)
    function createNewComment(comment, location) {
		div_top = location.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].parentNode.childNodes[5];
		var div1 = document.createElement("div");
		div1.className = "comment media";
		debugger;
		div_top.insertBefore(div1, div_top.lastChild.previousSibling);
			var img = document.createElement("img");
			img.src = "images/user.png";
			img.className = "profilePhoto";
			div1.appendChild(img);

		var div2 = document.createElement("div");
		div2.className = "media__info";
		div1.appendChild(div2);
			var a = document.createElement("a");
			a.href = "javascript:;";
			a.className = "username";
			a.setAttribute("data-friends", "80");
			a.textContent = "Another New Name";
			div2.appendChild(a)

			blank1 = document.createTextNode(" ");
			text1 = document.createTextNode(comment);
			div2.appendChild(blank1);
			div2.appendChild(text1);

		var div3 = document.createElement("div");
		div3.className = "comment__info";
		div2.appendChild(div3);
			blank = document.createTextNode(" ");
			var a1 = document.createElement("a");
			a1.href = "javascript:;";
			a1.className = "like";
			a1.textContent = "Like";
			var blank2 = document.createTextNode(" ");
			div3.appendChild(a1);
			div3.appendChild(blank);
			div3.appendChild(blank2);

			var a2 = document.createElement("a");
			a2.href = "javascript:;";
			a2.className = "reply_click";
			a2.textContent = "Reply";
			var blank3 = document.createTextNode(" ");
			div3.appendChild(a2);
			div3.appendChild(blank3);

			var span = document.createElement("span");
			span.className = "no_of_likes";
			span.textContent = "0 likes";
			div3.appendChild(span);
			var blank4 = document.createTextNode(" ");
			div3.appendChild(blank4);

			var time = getTime();
			var text2 = document.createTextNode("Today at " + time);
			div3.appendChild(text2);

			buildEventListeners();
	}

	//create new reply box
	function createNewReplyBox(reply_location){
		div_top = reply_location.parentElement.parentElement.childNodes[3];
		debugger;
		div1 = document.createElement("div");
		div1.className = "replies";
		div1.style.display = "block";
		div_top.parentNode.insertBefore(div1, div_top.nextSibling);
			blank1 = document.createTextNode(" ");
			div1.appendChild(blank1);

			div2 = document.createElement("div");
			div2.className = "commentForm media";
			blank2 = document.createTextNode(" ");
			div1.appendChild(div2);
			div1.appendChild(blank2);
				blank3 = document.createTextNode(" ");
				img = document.createElement("img");
				img.src = "images/user.png";
				img.className = "profilePhoto";
				div2.appendChild(blank3);
				div2.appendChild(img);
				blank4 = document.createTextNode(" ");
				div2.appendChild(blank4);

				div3 = document.createElement("div");
				div3.className = "media__info";
				blank5 = document.createTextNode(" ");
				div2.appendChild(div3);
				div2.appendChild(blank5);
					blank6 = document.createTextNode(" ");
					form = document.createElement("form");
					form.action = "javascript:;";
					form.method = "post";
					div3.appendChild(blank6);
					div3.appendChild(form);
						formblank1 = document.createTextNode(" ");
						textbox = document.createElement("textarea");
						textbox.name = "comment";
						textbox.className = "commentBox";
						formblank2 = document.createTextNode(" ");
						form.appendChild(formblank1);
						form.appendChild(textbox);
						form.appendChild(formblank2);

						submit_button = document.createElement("input");
						submit_button.type = "submit";
						form.appendChild(submit_button);
						formblank3 = document.createTextNode(" ");
						form.appendChild(formblank3);

						blank7 = document.createTextNode(" ");
						div3.appendChild(blank7);	
		buildEventListeners();
	}

	//Initial build of event listeners on page load.
	buildEventListeners();
});

//gets current time (and formats correctly) to add to new posts
function getTime() {
	test = new Date();
	hour = test.getHours();
	minutes = test.getMinutes();
	var suffix = hour >= 12 ? "pm":"am";
	hour = ((hour + 11) % 12 + 1);
	time = hour + ":" + minutes + suffix;
	return time;
}