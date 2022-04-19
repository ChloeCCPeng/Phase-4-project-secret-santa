class User < ApplicationRecord
    has_many :gift
    has_many :event
    has_many :wishlist

    # self join
    has_many :attender_joins, foreign_key: :attendee_id, class_name: "Join"
    has_many :attenders, through: :attender_joins, source: :attender
    has_many :attendee_joins, foreign_key: :attender_id, class_name: "Join"
    has_many :attendees, through: :attendee_joins, source: :attendee
end
