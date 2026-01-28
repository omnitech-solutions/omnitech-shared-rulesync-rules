import type { Tax } from '../types/tax';
import TaxCard from './TaxCard';

type TaxListProps = {
  taxes: Tax[];
  total?: number;
  selectedTaxId: number | null;
  onSelect: (id: number) => void;
  isLoading: boolean;
  isError: boolean;
};

export default function TaxList({
  taxes,
  total,
  selectedTaxId,
  onSelect,
  isLoading,
  isError,
}: TaxListProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Tax Records</h2>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {total ?? 0} total
        </span>
      </div>

      {isLoading && <p className="text-sm text-slate-500">Loading taxes...</p>}
      {isError && (
        <p className="text-sm text-red-600">
          Failed to load taxes. Ensure the Rails API is running and run `pnpm api:gen`.
        </p>
      )}

      <div className="space-y-3">
        {taxes.map(tax => (
          <TaxCard key={tax.id} tax={tax} selected={selectedTaxId === tax.id} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}
