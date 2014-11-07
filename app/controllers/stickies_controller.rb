# -*- encoding : utf-8 -*-
class StickiesController < ApplicationController
  def index
  end

  def new
  end

  def create
    @sticky = Sticky.new params[:sticky]
  end
end
