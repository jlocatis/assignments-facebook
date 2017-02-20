require 'pry'
require 'sinatra'
require 'json'
require './functions.rb'

get "/" do
	erb :index
end

get "/post_main" do
	comments_data = erb :comments_data
	comments_data = JSON.parse(comments_data)
	text = post_main(comments_data)
	return text
end

get "/post_main_stats" do
	comments_data = erb :comments_data
	comments_data = JSON.parse(comments_data)
	text = post_main_stats(comments_data)
	return text
end