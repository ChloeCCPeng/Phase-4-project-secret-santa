class User < ApplicationRecord
    has_many :gift
    has_many :event
    has_many :wishlist
end
