User.destroy_all
Gift.destroy_all

puts " Seeding data...."

puts " 👥 Creating users "
User.create(first_name:"Maggie", last_name: "Lee", email: "maggie@abc.com", password: "maggie")
User.create(first_name:"Jackie", last_name: "Jordan", email: "jackie@abc.com", password: "maggie")
User.create(first_name:"Bryan", last_name: "Thao", email: "bryan@abc.com", password: "maggie")
User.create(first_name:"Chloe", last_name: "White", email: "chloe@abc.com", password: "maggie")
User.create(first_name:"Dennis", last_name: "Mercer", email: "dennis@abc.com", password: "maggie")

puts " 🎁 Creating gifts "
Gift.create(gift: "mouse")
Gift.create(gift: "travel mug")
Gift.create(gift: "hiking backpack")
Gift.create(gift: "keyboard")
Gift.create(gift: "wholefood gift card")

puts " 🎟️ Creating events "
Event.create(date: "12.23.2022", deadline: "12.18.2022", patispate: "in-person", budget: 50, virtual_link: "zoom.com" rules: "Try to stay within the spending limit, and make sure you make a Wishlist to give your person some good ideas. This is going to be lots of fun!")

uts " 🎁 Creating wishlist "
Wishlist.create(wish1: "backpack", wish2: "travel mug", wish3: "sofa potato blanket", wish4: "air fryer", wish5: "candles")
Wishlist.create(wish1: "3D puzzles", wish2: "travel mug", wish3: "Apple air tags", wish4: "Silk Eyemask", wish5: "giftcards")
Wishlist.create(wish1: "backpack", wish2: "travel mug", wish3: "sofa potato blanket", wish4: "air fryer", wish5: "candles")
Wishlist.create(wish1: "3D puzzles", wish2: "travel mug", wish3: "Apple air tags", wish4: "Silk Eyemask", wish5: "giftcards")Wishlist.create(wish1: "3D puzzles", wish2: "travel mug", wish3: "Apple air tags", wish4: "Silk Eyemask", wish5: "giftcards")