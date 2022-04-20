class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :date
      t.string :deadline
      t.string :participate
      t.integer :budget
      t.string :virtual_link
      t.string :rules

      t.timestamps
    end
  end
end
