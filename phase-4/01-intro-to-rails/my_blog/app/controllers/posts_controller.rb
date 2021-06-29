class PostsController < ApplicationController
    def index
        posts = Post.all
        render json:posts
    end 

    def show
        post = Post.find(params[:id])
        render json:post
    end 

    def create
        
        # post = Post.create(user_id:params[:user_id], title:params[:title], content:params[:content])
        post = Post.create(post_params)
        render json:post
    end 

    private 

    def post_params
        params.require(:post).permit(:user_id, :title, :content)
    end 
end
