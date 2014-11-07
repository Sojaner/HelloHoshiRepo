# -*- encoding : utf-8 -*-
class StickiesController < ApplicationController
  def index
    @stickies = Sticky.all
  end

  def new
  end

  def create
    @sticky = Sticky.new params[:sticky].permit(:title, :text)
    @sticky.save
  end
end
