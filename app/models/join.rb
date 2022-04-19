class Join < ApplicationRecord
    belongs_to :attender, foreign_key: "attender_id", class_name: "User"
    belongs_to :attendee, foreign_key: "attendee_id", class_name: "User"
end
