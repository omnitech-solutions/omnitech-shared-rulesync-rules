import React, { useState } from 'react';
import { Tax, taxesApi } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TaxFormProps {
  tax?: Tax;
  onSubmit: (tax: Tax) => void;
  onCancel: () => void;
}

const taxTypes = [
  { value: 'income', label: 'Income Tax' },
  { value: 'sales', label: 'Sales Tax' },
  { value: 'property', label: 'Property Tax' },
  { value: 'corporate', label: 'Corporate Tax' },
  { value: 'vat', label: 'VAT' },
  { value: 'other', label: 'Other' },
];

export function TaxForm({ tax, onSubmit, onCancel }: TaxFormProps) {
  const [formData, setFormData] = useState({
    name: tax?.name || '',
    description: tax?.description || '',
    tax_type: tax?.tax_type || '',
    rate: tax?.rate || '',
    amount: tax?.amount || '',
    is_active: tax?.is_active ?? true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let savedTax: Tax;
      if (tax) {
        const response = await taxesApi.update(tax.id, formData);
        savedTax = response.data;
      } else {
        const response = await taxesApi.create(formData);
        savedTax = response.data;
      }
      onSubmit(savedTax);
    } catch (error) {
      console.error('Error saving tax:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Tax name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tax_type">Tax Type</Label>
          <Select value={formData.tax_type} onValueChange={(value) => handleChange('tax_type', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select tax type" />
            </SelectTrigger>
            <SelectContent>
              {taxTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Tax description"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="rate">Rate (%)</Label>
          <Input
            id="rate"
            type="number"
            step="0.01"
            min="0"
            max="100"
            value={formData.rate}
            onChange={(e) => handleChange('rate', e.target.value)}
            placeholder="0.00"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="amount">Base Amount</Label>
          <Input
            id="amount"
            type="number"
            step="0.01"
            min="0"
            value={formData.amount}
            onChange={(e) => handleChange('amount', e.target.value)}
            placeholder="0.00"
            required
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="is_active"
          checked={formData.is_active}
          onChange={(e) => handleChange('is_active', e.target.checked)}
          className="rounded border-gray-300"
        />
        <Label htmlFor="is_active">Active</Label>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : tax ? 'Update' : 'Create'}
        </Button>
      </div>
    </form>
  );
}
