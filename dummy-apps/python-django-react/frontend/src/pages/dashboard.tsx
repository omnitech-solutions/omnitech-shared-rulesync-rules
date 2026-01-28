import React, { useState, useEffect } from 'react';
import { Tax, TaxSummary, taxesApi } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { TaxTable } from '@/components/tax-table';
import { TaxForm } from '@/components/tax-form';
import { DashboardStats } from '@/components/dashboard-stats';
import { Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Dashboard() {
  const [taxes, setTaxes] = useState<Tax[]>([]);
  const [summary, setSummary] = useState<TaxSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTax, setEditingTax] = useState<Tax | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('');
  const [filterActive, setFilterActive] = useState<string>('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const [taxesResponse, summaryResponse] = await Promise.all([
        taxesApi.getAll(),
        taxesApi.getSummary(),
      ]);
      setTaxes(taxesResponse.data);
      setSummary(summaryResponse.data);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredTaxes = taxes.filter(tax => {
    const matchesSearch =
      tax.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tax.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !filterType || filterType === 'all' || tax.tax_type === filterType;
    const matchesActive =
      !filterActive ||
      filterActive === 'all' ||
      (filterActive === 'active' && tax.is_active) ||
      (filterActive === 'inactive' && !tax.is_active);

    return matchesSearch && matchesType && matchesActive;
  });

  const handleCreate = () => {
    setEditingTax(null);
    setShowForm(true);
  };

  const handleEdit = (tax: Tax) => {
    setEditingTax(tax);
    setShowForm(true);
  };

  const handleDelete = async (tax: Tax) => {
    if (window.confirm(`Are you sure you want to delete "${tax.name}"?`)) {
      try {
        await taxesApi.delete(tax.id);
        loadData();
      } catch (error) {
        console.error('Error deleting tax:', error);
      }
    }
  };

  const handleToggleActive = async (tax: Tax) => {
    try {
      await taxesApi.toggleActive(tax.id);
      loadData();
    } catch (error) {
      console.error('Error toggling tax status:', error);
    }
  };

  const handleFormSubmit = () => {
    setShowForm(false);
    setEditingTax(null);
    loadData();
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingTax(null);
  };

  if (showForm) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {editingTax ? 'Edit Tax' : 'Create New Tax'}
          </h1>
          <p className="text-gray-600 mt-2">
            {editingTax
              ? 'Update the tax information below.'
              : 'Fill in the details to create a new tax record.'}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <TaxForm
            tax={editingTax || undefined}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tax Management Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your tax records and calculations</p>
        </div>
        <Button onClick={handleCreate} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>New Tax</span>
        </Button>
      </div>

      <DashboardStats summary={summary} isLoading={isLoading} />

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search taxes..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="income">Income Tax</SelectItem>
              <SelectItem value="sales">Sales Tax</SelectItem>
              <SelectItem value="property">Property Tax</SelectItem>
              <SelectItem value="corporate">Corporate Tax</SelectItem>
              <SelectItem value="vat">VAT</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterActive} onValueChange={setFilterActive}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" />
            <p className="mt-2 text-gray-600">Loading taxes...</p>
          </div>
        ) : (
          <TaxTable
            taxes={filteredTaxes}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleActive={handleToggleActive}
          />
        )}
      </div>
    </div>
  );
}
