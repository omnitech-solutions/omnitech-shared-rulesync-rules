export type Tax = {
  id: number;
  tax_year: number;
  jurisdiction: string;
  filing_status: string;
  income: number;
  deductions: number;
  taxable_income: number;
  tax_amount: number;
  currency: string;
  status: string;
  due_date?: string;
  paid_at?: string | null;
  notes?: string | null;
  metadata: Record<string, unknown>;
  created_at?: string;
  updated_at?: string;
};

export type TaxListResponse = {
  data: Tax[];
  meta?: {
    total?: number;
    limit?: number;
    offset?: number;
  };
};
