require 'pry'

def post_main(comments_data)
	post = comments_data["post"]["post_main"]
	return_text = "<div class=\"post__main\"><div class=\"media\"><img src=\"images/user.png\" class=\"profilePhoto\"> <div class=\"media__info\"><a href=\"javascript:;\" class=\"username\" data-friends=\"" + post["data-friends"] + "\">" + post["name"] + "</a><div>" + post["time"] + "</div></div></div> <div class=\"post__body\"><p>" + post["body"] + "</p></div> "
	return return_text
end

def post_main_stats(comments_data)
	post = comments_data["post"]["post_main"]["stats"]
	return_text = "<span class=\"no_of_likes\">" + post["likes"] + " likes</span> <span>" + post["comments"] + " comments</span>"
end