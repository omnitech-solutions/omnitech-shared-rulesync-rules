'use client';

import { useState, useEffect } from 'react';
import { Tax } from '@/lib/types';
import { taxesApi } from '@/lib/api';
import { TaxForm } from '@/components/TaxForm';
import { TaxTable } from '@/components/TaxTable';
import { Plus, Filter, RefreshCw, Database } from 'lucide-react';

export default function Home() {
  const [taxes, setTaxes] = useState<Tax[]>([]);
  const [filteredTaxes, setFilteredTaxes] = useState<Tax[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingTax, setEditingTax] = useState<Tax | undefined>();
  const [filters, setFilters] = useState({
    type: '',
    isActive: '' as '' | 'true' | 'false',
  });

  const fetchTaxes = async () => {
    try {
      setLoading(true);
      const data = await taxesApi.getAll({
        type: filters.type || undefined,
        isActive: filters.isActive === '' ? undefined : filters.isActive === 'true',
      });
      setTaxes(data);
      setFilteredTaxes(data);
      setError('');
    } catch (err: unknown) {
      setError((err as Error).message || 'Failed to fetch taxes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTaxes();
  }, []);

  useEffect(() => {
    let filtered = taxes;
    
    if (filters.type) {
      filtered = filtered.filter(tax => tax.type === filters.type);
    }
    
    if (filters.isActive !== '') {
      filtered = filtered.filter(tax => tax.isActive === (filters.isActive === 'true'));
    }
    
    setFilteredTaxes(filtered);
  }, [taxes, filters]);

  const handleCreateTax = () => {
    setEditingTax(undefined);
    setShowForm(true);
  };

  const handleEditTax = (tax: Tax) => {
    setEditingTax(tax);
    setShowForm(true);
  };

  const handleDeleteTax = async (tax: Tax) => {
    if (window.confirm(`Are you sure you want to delete "${tax.name}"?`)) {
      try {
        await taxesApi.delete(tax.id);
        fetchTaxes();
      } catch (err: unknown) {
        setError((err as Error).message || 'Failed to delete tax');
      }
    }
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditingTax(undefined);
    fetchTaxes();
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingTax(undefined);
  };

  const stats = {
    total: taxes.length,
    active: taxes.filter(t => t.isActive).length,
    inactive: taxes.filter(t => !t.isActive).length,
    avgRate: taxes.length > 0 ? taxes.reduce((sum, t) => sum + t.rate, 0) / taxes.length : 0,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tax Management Dashboard</h1>
          <p className="text-gray-600">Manage and track different types of taxes</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Database className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Total Taxes</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-2xl font-bold text-green-600">{stats.active}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Inactive</p>
                <p className="text-2xl font-bold text-gray-600">{stats.inactive}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 font-bold text-sm">%</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Rate</p>
                <p className="text-2xl font-bold text-purple-600">{stats.avgRate.toFixed(1)}%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-medium text-gray-900">Taxes</h2>
                <button
                  onClick={fetchTaxes}
                  disabled={loading}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Types</option>
                    <option value="income">Income</option>
                    <option value="sales">Sales</option>
                    <option value="property">Property</option>
                    <option value="corporate">Corporate</option>
                  </select>
                  
                  <select
                    value={filters.isActive}
                    onChange={(e) => setFilters({ ...filters, isActive: e.target.value as any })}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Status</option>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>
                
                <button
                  onClick={handleCreateTax}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4" />
                  Add Tax
                </button>
              </div>
            </div>
          </div>
          
          <TaxTable
            taxes={filteredTaxes}
            onEdit={handleEditTax}
            onDelete={handleDeleteTax}
            onRefresh={fetchTaxes}
          />
        </div>
      </div>

      {showForm && (
        <TaxForm
          tax={editingTax}
          onSuccess={handleFormSuccess}
          onCancel={handleFormCancel}
        />
      )}
    </div>
  );
}
