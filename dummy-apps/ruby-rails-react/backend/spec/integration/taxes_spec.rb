# frozen_string_literal: true

require "swagger_helper"

RSpec.describe "Taxes API", type: :request do
  path "/api/v1/taxes" do
    get "List taxes" do
      tags "Taxes"
      operationId "listTaxes"
      produces "application/json"
      parameter name: :status, in: :query, schema: { type: :string }, required: false
      parameter name: :tax_year, in: :query, schema: { type: :integer }, required: false
      parameter name: :jurisdiction, in: :query, schema: { type: :string }, required: false
      parameter name: :limit, in: :query, schema: { type: :integer }, required: false
      parameter name: :offset, in: :query, schema: { type: :integer }, required: false

      response "200", "taxes listed" do
        let!(:tax) do
          Tax.create!(
            tax_year: 2024,
            jurisdiction: "US-CA",
            filing_status: "single",
            income: 120_000,
            deductions: 10_000,
            taxable_income: 110_000,
            tax_amount: 25_000,
            currency: "USD",
            status: "filed",
            due_date: Date.new(2025, 4, 15),
            metadata: { source: "seed" }
          )
        end

        run_test!
      end
    end

    post "Create a tax" do
      tags "Taxes"
      operationId "createTax"
      consumes "application/json"
      produces "application/json"
      parameter name: :tax, in: :body, schema: { "$ref" => "#/components/schemas/TaxInput" }

      response "201", "tax created" do
        let(:tax) do
          {
            tax_year: 2024,
            jurisdiction: "US-NY",
            filing_status: "married_jointly",
            income: 200_000,
            deductions: 20_000,
            taxable_income: 180_000,
            tax_amount: 40_000,
            currency: "USD",
            status: "draft",
            due_date: "2025-04-15",
            metadata: { source: "api" }
          }
        end

        run_test!
      end

      response "422", "validation error" do
        let(:tax) { { tax_year: nil } }
        run_test!
      end
    end
  end

  path "/api/v1/taxes/{id}" do
    parameter name: :id, in: :path, schema: { type: :integer }

    get "Fetch a tax" do
      tags "Taxes"
      operationId "getTax"
      produces "application/json"

      response "200", "tax found" do
        let(:tax) do
          Tax.create!(
            tax_year: 2023,
            jurisdiction: "US-TX",
            filing_status: "single",
            income: 95_000,
            deductions: 8_000,
            taxable_income: 87_000,
            tax_amount: 18_000,
            currency: "USD",
            status: "filed",
            metadata: {}
          )
        end
        let(:id) { tax.id }

        run_test!
      end

      response "404", "tax not found" do
        let(:id) { -1 }
        run_test!
      end
    end

    put "Update a tax" do
      tags "Taxes"
      operationId "updateTax"
      consumes "application/json"
      produces "application/json"
      parameter name: :tax, in: :body, schema: { "$ref" => "#/components/schemas/TaxInput" }

      response "200", "tax updated" do
        let(:existing_tax) do
          Tax.create!(
            tax_year: 2023,
            jurisdiction: "US-FL",
            filing_status: "head_of_household",
            income: 80_000,
            deductions: 5_000,
            taxable_income: 75_000,
            tax_amount: 15_000,
            currency: "USD",
            status: "draft",
            metadata: {}
          )
        end
        let(:id) { existing_tax.id }
        let(:tax) do
          {
            tax_year: 2023,
            jurisdiction: "US-FL",
            filing_status: "head_of_household",
            income: 90_000,
            deductions: 6_000,
            taxable_income: 84_000,
            tax_amount: 17_000,
            currency: "USD",
            status: "filed",
            metadata: { note: "updated" }
          }
        end

        run_test!
      end
    end

    delete "Delete a tax" do
      tags "Taxes"
      operationId "deleteTax"
      produces "application/json"

      response "204", "tax deleted" do
        let(:tax) do
          Tax.create!(
            tax_year: 2022,
            jurisdiction: "US-WA",
            filing_status: "single",
            income: 70_000,
            deductions: 4_000,
            taxable_income: 66_000,
            tax_amount: 13_000,
            currency: "USD",
            status: "draft",
            metadata: {}
          )
        end
        let(:id) { tax.id }

        run_test!
      end
    end
  end
end
