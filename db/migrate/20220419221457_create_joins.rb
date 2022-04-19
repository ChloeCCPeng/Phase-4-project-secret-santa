class CreateJoins < ActiveRecord::Migration[6.1]
  def change
    create_table :joins do |t|

      t.timestamps
    end
  end
end
