require 'pry'

#Accesses the main comment and accompanying stats
def post_main(comments_data)
	post = comments_data["post"]["post_main"]
	post_stats = comments_data["post"]["post_main"]["stats"]
	return_post_main = "<div class=\"post__main\"><div class=\"media\"><img src=\"images/user.png\" class=\"profilePhoto\"> <div class=\"media__info\"><a href=\"javascript:;\" class=\"username\" data-friends=\"" + post["data-friends"] + "\">" + post["name"] + "</a><div>" + post["time"] + "</div></div></div> <div class=\"post__body\"><p>" + post["body"] + "</p></div> "
	return_post_stats = "<span class=\"no_of_likes\">" + post_stats["likes"] + " likes</span> <span>" + post_stats["comments"] + " comments</span>"
	return_post_comments = postComments(comments_data)
	return_reply_comments = postReplies(comments_data)
	binding.pry
	return return_post_main, return_post_stats, return_post_comments
end

#Accesses the post comments
def postComments(comments_data)
	post_comments = comments_data["post"]["post_comments"]
	post_comments_length = post_comments.length
	comment = 0
	comments_return = []
	while post_comments_length > 0 do
		html = "<div class=\"comment media\"><img src=\"images/user.png\" class=\"profilePhoto\"> <div class=\"media__info\"> <a href=\"javascript:;\" class=\"username\" data-friends=\"" + post_comments[comment]["data-friends"] + "\">" + post_comments[comment]["name"] + "</a> " + post_comments[comment]["body"] + " <div class=\"comment__info\"> <a href=\"javascript:; class=\"like\">Like</a> <a href=\"javascript:;\" class=\"reply_click\">" + post_comments[comment]["replies"] + " replies</a> <span>" + post_comments[comment]["likes"] + " likes</span> " + post_comments[comment]["time"] + "</span></div></div>"
		comments_return << html
		comment += 1
		post_comments_length -= 1
	end
	return comments_return
end

#Accesses the replies to post comments
def postReplies(comments_data)
	post_comments = comments_data["post"]["post_comments"]
	post_comments_length = post_comments.length
	comment = 0
	replies_return = []
	while post_comments_length > 0 do
		if post_comments[comment]["replys_comments"] != nil
			html = " <div class=\"replies\" style=\"display: none\">"
			comment_replys_length = post_comments[comment]["replys_comments"].length
			reply = 0
			nested_replies_return = []
			while comment_replys_length > 0 do
				html = html + "<div class=\"comment media\"><img src=\"images/user.png\" class=\"profilePhoto\"> <div class=\"media__info\"> <a href=\"javascript:;\" class=\"username\" data-friends=\"" + post_comments[comment]["replys_comments"][reply]["data-friends"] + "\">" + post_comments[comment]["replys_comments"][reply]["name"] + "</a> " + post_comments[comment]["replys_comments"][reply]["body"] + " <div class=\"comment__info\"> <a href=\"javascript:; class=\"like\">Like</a> <a href=\"javascript:;\" class=\"reply_click\">" + post_comments[comment]["replys_comments"][reply]["replies"] + " replies</a> <span>" + post_comments[comment]["replys_comments"][reply]["likes"] + " likes</span> " + post_comments[comment]["replys_comments"][reply]["time"] + "</span></div></div>"
				reply += 1
				comment_replys_length -= 1
				nested_replies_return << html
			end
			replies_return << nested_replies_return
		elsif post_comments[comment]["replys_comments"] == nil
			html = " <div class=\"replies\" style=\"display: none\"><div class=\"commentForm media\"><img src=\"images/user.png\" class=\"profilePhoto\"> <div class=\"media__info\"><form action=\"javascript\" method=\"post\"><textarea name=\"comment\" class=\"commentBox\"></textarea><input type=\"submit\"></form></div></div>"
			replies_return << html
		end
		comment += 1
		binding.pry
	end
	return replies_return
end