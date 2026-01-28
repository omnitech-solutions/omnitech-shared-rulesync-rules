import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useListTaxes } from '../api/generated';
import TaxList from '../components/TaxList';
import SelectionPanel from '../components/SelectionPanel';
import { selectTax } from '../features/ui/uiSlice';
import type { RootState } from '../app/store';

export default function DashboardPage() {
  const dispatch = useDispatch();
  const selectedTaxId = useSelector((state: RootState) => state.ui.selectedTaxId);

  const { data, isLoading, isError } = useListTaxes({
    limit: 25,
    offset: 0,
  });

  const response = data?.data;
  const taxes = useMemo(() => (Array.isArray(response?.data) ? response.data : []), [response]);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Tax Platform
            </p>
            <h1 className="text-2xl font-semibold text-slate-900">Compliance Dashboard</h1>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500">API Status</p>
            <p className="text-sm font-semibold text-slate-900">/api/v1/taxes</p>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-6 py-6 lg:grid-cols-[2fr_1fr]">
        <TaxList
          taxes={taxes}
          total={response?.meta?.total}
          selectedTaxId={selectedTaxId}
          onSelect={id => dispatch(selectTax(id))}
          isLoading={isLoading}
          isError={isError}
        />
        <SelectionPanel selectedTaxId={selectedTaxId} />
      </main>
    </div>
  );
}
