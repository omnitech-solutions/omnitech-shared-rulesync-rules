import type { TaxListResponse } from '../types/tax';

type ListTaxesParams = {
  limit?: number;
  offset?: number;
  status?: string;
  tax_year?: number;
  jurisdiction?: string;
};

export function useListTaxes(_params?: ListTaxesParams): {
  data?: TaxListResponse;
  isLoading: boolean;
  isError: boolean;
} {
  throw new Error('API hooks not generated. Run `pnpm api:gen` to generate them.');
}
