class Tax < ApplicationRecord
  STATUSES = %w[draft filed paid overdue].freeze
  FILING_STATUSES = %w[single married_jointly married_separately head_of_household].freeze

  validates :tax_year, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1900 }
  validates :jurisdiction, presence: true
  validates :filing_status, presence: true, inclusion: { in: FILING_STATUSES }
  validates :currency, presence: true, length: { is: 3 }
  validates :status, presence: true, inclusion: { in: STATUSES }

  validates :income, :deductions, :taxable_income, :tax_amount,
            numericality: { greater_than_or_equal_to: 0 }
end
