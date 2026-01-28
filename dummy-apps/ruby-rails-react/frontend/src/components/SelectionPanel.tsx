type SelectionPanelProps = {
  selectedTaxId: number | null;
};

export default function SelectionPanel({ selectedTaxId }: SelectionPanelProps) {
  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Selection</h2>
      <p className="mt-2 text-sm text-slate-600">
        Selected Tax ID:{' '}
        <span className="font-semibold text-slate-900">{selectedTaxId ?? 'None'}</span>
      </p>
      <div className="mt-6 rounded-lg bg-slate-100 p-4 text-xs text-slate-500">
        Hooks are generated from Swagger via Orval. Run the Rails server, then:
        <div className="mt-2 rounded bg-white px-2 py-1 font-mono text-[11px] text-slate-700">
          pnpm api:gen
        </div>
      </div>
    </aside>
  );
}
