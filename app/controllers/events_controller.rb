class EventsController < ApplicationController
  def index
    render json: Event.all
  end

  def create
    event = Event.create(event_params)
    render json: event, status: :created
  end

  def show
    event = find_event
    render json: event
  end

  private
  
  def event_params
    params.permit(:date, :deadline, :participate, :budget, :virtual_link, :rules, :user_id)
  end

  def find_event
    Event.find(params[:id])
  end

end
