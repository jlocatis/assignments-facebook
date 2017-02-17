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
	test = post_main(comments_data)
	return test
end