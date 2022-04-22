class CreateWishlists < ActiveRecord::Migration[6.1]
  def change
    create_table :wishlists do |t|
      t.string :wish1
      t.string :wish2
      t.string :wish3
      t.string :wish4
      t.string :wish5

      t.timestamps
    end
  end
end
