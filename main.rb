require 'pry'
require 'sinatra'
require 'json'
require './functions.rb'

get "/" do
	erb :index
end

get "/post_info" do
	post_data = erb :comments_data
	post_data = JSON.parse(post_data)
	return_text = post_main(post_data)
	return_text = return_text.to_json
	return return_text
end

# get "/post_main_stats" do
# 	comments_data = erb :comments_data
# 	comments_data = JSON.parse(comments_data)
# 	text = post_main_stats(comments_data)
# 	return text
# end