import React from 'react';
import { Tax } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, Power, PowerOff } from 'lucide-react';

interface TaxTableProps {
  taxes: Tax[];
  onEdit: (tax: Tax) => void;
  onDelete: (tax: Tax) => void;
  onToggleActive: (tax: Tax) => void;
}

export function TaxTable({ taxes, onEdit, onDelete, onToggleActive }: TaxTableProps) {
  const formatCurrency = (amount: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(parseFloat(amount));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2 font-medium">Name</th>
            <th className="text-left p-2 font-medium">Type</th>
            <th className="text-left p-2 font-medium">Rate</th>
            <th className="text-left p-2 font-medium">Base Amount</th>
            <th className="text-left p-2 font-medium">Calculated Amount</th>
            <th className="text-left p-2 font-medium">Status</th>
            <th className="text-left p-2 font-medium">Created</th>
            <th className="text-left p-2 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {taxes.map((tax) => (
            <tr key={tax.id} className="border-b hover:bg-gray-50">
              <td className="p-2">
                <div>
                  <div className="font-medium">{tax.name}</div>
                  {tax.description && (
                    <div className="text-sm text-gray-500 truncate max-w-xs">
                      {tax.description}
                    </div>
                  )}
                </div>
              </td>
              <td className="p-2">
                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                  {tax.tax_type_display}
                </span>
              </td>
              <td className="p-2">{tax.rate}%</td>
              <td className="p-2">{formatCurrency(tax.amount)}</td>
              <td className="p-2 font-medium">{formatCurrency(tax.calculated_amount)}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    tax.is_active
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {tax.is_active ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td className="p-2 text-sm">{formatDate(tax.created_at)}</td>
              <td className="p-2">
                <div className="flex space-x-1">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onEdit(tax)}
                    className="h-8 w-8"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onToggleActive(tax)}
                    className="h-8 w-8"
                    title={tax.is_active ? 'Deactivate' : 'Activate'}
                  >
                    {tax.is_active ? (
                      <PowerOff className="h-4 w-4" />
                    ) : (
                      <Power className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onDelete(tax)}
                    className="h-8 w-8 text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {taxes.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No taxes found. Create your first tax to get started.
        </div>
      )}
    </div>
  );
}
