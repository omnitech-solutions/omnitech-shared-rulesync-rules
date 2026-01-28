import type { Tax } from '../types/tax';

type TaxCardProps = {
  tax: Tax;
  selected: boolean;
  onSelect: (id: number) => void;
};

export default function TaxCard({ tax, selected, onSelect }: TaxCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(tax.id)}
      className={`w-full rounded-lg border px-4 py-3 text-left transition ${
        selected
          ? 'border-slate-900 bg-slate-900 text-white'
          : 'border-slate-200 bg-white text-slate-900 hover:border-slate-400'
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">{tax.jurisdiction}</p>
          <p className="text-xs opacity-80">Tax year {tax.tax_year}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold">
            {tax.currency} {Number(tax.tax_amount).toLocaleString()}
          </p>
          <p className="text-xs uppercase tracking-wide opacity-80">{tax.status}</p>
        </div>
      </div>
    </button>
  );
}
