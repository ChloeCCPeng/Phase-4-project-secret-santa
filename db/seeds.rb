User.destroy_all
Gift.destroy_all
Event.destroy_all
Wishlist.destroy_all

puts " Seeding data...."

puts " 👥 Creating users "
User.create(id: 1, first_name:"Maggie", last_name: "Lee", email: "maggie@abc.com", password: "maggie", phone_number: "111-111-1111")
User.create(id: 2, first_name:"Jackie", last_name: "Jordan", email: "jackie@abc.com", password: "maggie", phone_number: "111-111-1111")
User.create(id: 3, first_name:"Bryan", last_name: "Thao", email: "bryan@abc.com", password: "maggie", phone_number: "111-111-1111")
User.create(id: 4, first_name:"Chloe", last_name: "Whie", email: "chloe@abc.com", password: "maggie", phone_number: "111-111-1111")
User.create(id: 5, first_name:"Dennis", last_name: "Mercer", email: "dennis@abc.com", password: "maggie", phone_number: "111-111-1111")

puts " 🎁 Creating gifts "
Gift.create(id: 1, item: "mouse321")
Gift.create(id: 2, item: "travel mug")
Gift.create(id: 3, item: "hiking backpack")
Gift.create(id: 4, item: "keyboard")
Gift.create(id: 5, item: "wholefood gift card")

puts " 🎟️ Creating events "
Event.create(id: 1, date: "12.23.2022", deadline: "12.18.2022", participate: "in-person", budget: 50, virtual_link: "zoom.com", rules: "Try to stay within the spending limit, and make sure you make a Wishlist to give your person some good ideas. This is going to be lots of fun!")

puts " 🎁 Creating wishlist "
Wishlist.create(id: 1, wish1: "backpack", wish2: "travel mug", wish3: "sofa potato blanket", wish4: "air fryer", wish5: "candles")
Wishlist.create(id: 2, wish1: "3D puzzles", wish2: "travel mug", wish3: "Apple air tags", wish4: "Silk Eyemask", wish5: "giftcards")
Wishlist.create(id: 3, wish1: "backpack", wish2: "travel mug", wish3: "sofa potato blanket", wish4: "air fryer", wish5: "candles")
Wishlist.create(id: 4, wish1: "3D puzzles", wish2: "travel mug", wish3: "Apple air tags", wish4: "Silk Eyemask", wish5: "giftcards")
Wishlist.create(id: 5, wish1: "3D puzzles", wish2: "travel mug", wish3: "Apple air tags", wish4: "Silk Eyemask", wish5: "giftcards")

puts " Done seeding "
