module Api
  module V1
    class TaxesController < ApplicationController
      before_action :set_tax, only: %i[show update destroy]

      def index
        taxes = Tax.all
        taxes = taxes.where(status: params[:status]) if params[:status].present?
        taxes = taxes.where(tax_year: params[:tax_year]) if params[:tax_year].present?
        taxes = taxes.where(jurisdiction: params[:jurisdiction]) if params[:jurisdiction].present?

        limit = normalized_limit(params[:limit])
        offset = normalized_offset(params[:offset])

        total = taxes.count
        taxes = taxes.order(created_at: :desc).limit(limit).offset(offset)

        render json: {
          data: taxes.as_json,
          meta: { total:, limit:, offset: }
        }
      end

      def show
        render json: { data: @tax }
      end

      def create
        tax = Tax.create!(tax_params)
        render json: { data: tax }, status: :created
      end

      def update
        @tax.update!(tax_params)
        render json: { data: @tax }
      end

      def destroy
        @tax.destroy!
        head :no_content
      end

      private

      def set_tax
        @tax = Tax.find(params[:id])
      end

      def tax_params
        params.require(:tax).permit(
          :tax_year,
          :jurisdiction,
          :filing_status,
          :income,
          :deductions,
          :taxable_income,
          :tax_amount,
          :currency,
          :status,
          :due_date,
          :paid_at,
          :notes,
          metadata: {}
        )
      end

      def normalized_limit(value)
        limit = value.to_i
        return 25 if limit <= 0
        [limit, 100].min
      end

      def normalized_offset(value)
        offset = value.to_i
        offset.negative? ? 0 : offset
      end
    end
  end
end
