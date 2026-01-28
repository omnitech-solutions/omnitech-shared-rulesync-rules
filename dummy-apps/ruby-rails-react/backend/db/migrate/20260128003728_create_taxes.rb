class CreateTaxes < ActiveRecord::Migration[8.1]
  def change
    create_table :taxes do |t|
      t.integer :tax_year, null: false
      t.string :jurisdiction, null: false
      t.string :filing_status, null: false
      t.decimal :income, precision: 15, scale: 2, default: 0, null: false
      t.decimal :deductions, precision: 15, scale: 2, default: 0, null: false
      t.decimal :taxable_income, precision: 15, scale: 2, default: 0, null: false
      t.decimal :tax_amount, precision: 15, scale: 2, default: 0, null: false
      t.string :currency, null: false, default: "USD"
      t.string :status, null: false, default: "draft"
      t.date :due_date
      t.datetime :paid_at
      t.text :notes
      t.jsonb :metadata, default: {}, null: false

      t.timestamps
    end

    add_index :taxes, :tax_year
    add_index :taxes, :jurisdiction
    add_index :taxes, :status
  end
end
