require 'pry'

def post_main(comments_data)
	test_post = comments_data["post"]["post_main"]
	test_return = "<div class=\"post__main\"><div class=\"media\"><img src=\"images/user.png\" class=\"profilePhoto\"> <div class=\"media__info\"><a href=\"javascript:;\" class=\"username\" data-friends=\"" + test_post["data-friends"] + "\">" + test_post["name"] + "</a><div>" + test_post["time"] + "</div></div></div> <div class=\"post__body\"><p>" + test_post["body"] + "</p></div> "
	return test_return
end