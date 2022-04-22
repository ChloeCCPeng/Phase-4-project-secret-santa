class Wishlist < ApplicationRecord
    belongs_to :user

    #have to  make 1 to 10 wishlists(has to make 1 lists)
    # validates :wishlist, presence: true, length: { in: 1..10 }
end
