class Api::SeriesController < ApplicationController
  def index
    @genres = Genre.all.includes(:series)
  end

  def show
    id = params[:id]
    @videos = Serie.find(id).videos
  end
end
