import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Tax, CreateTaxRequest, UpdateTaxRequest } from '../types';

const router = express.Router();

let taxes: Tax[] = [
  {
    id: '1',
    name: 'Federal Income Tax',
    rate: 22,
    type: 'income',
    description: 'Standard federal income tax rate',
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'State Sales Tax',
    rate: 8.5,
    type: 'sales',
    description: 'State-level sales tax',
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

router.get('/', (req, res) => {
  const { type, isActive } = req.query;
  let filteredTaxes = taxes;

  if (type) {
    filteredTaxes = filteredTaxes.filter(tax => tax.type === type);
  }

  if (isActive !== undefined) {
    filteredTaxes = filteredTaxes.filter(tax => tax.isActive === (isActive === 'true'));
  }

  res.json(filteredTaxes);
});

router.get('/:id', (req, res) => {
  const tax = taxes.find(t => t.id === req.params.id);
  
  if (!tax) {
    return res.status(404).json({ error: 'Tax not found' });
  }

  res.json(tax);
});

router.post('/', (req, res) => {
  const { name, rate, type, description }: CreateTaxRequest = req.body;

  if (!name || rate === undefined || !type) {
    return res.status(400).json({ error: 'Name, rate, and type are required' });
  }

  if (!['income', 'sales', 'property', 'corporate'].includes(type)) {
    return res.status(400).json({ error: 'Invalid tax type' });
  }

  if (rate < 0 || rate > 100) {
    return res.status(400).json({ error: 'Rate must be between 0 and 100' });
  }

  const newTax: Tax = {
    id: uuidv4(),
    name,
    rate,
    type,
    description,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  taxes.push(newTax);
  res.status(201).json(newTax);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updates: UpdateTaxRequest = req.body;

  const taxIndex = taxes.findIndex(t => t.id === id);
  
  if (taxIndex === -1) {
    return res.status(404).json({ error: 'Tax not found' });
  }

  if (updates.rate !== undefined && (updates.rate < 0 || updates.rate > 100)) {
    return res.status(400).json({ error: 'Rate must be between 0 and 100' });
  }

  if (updates.type && !['income', 'sales', 'property', 'corporate'].includes(updates.type)) {
    return res.status(400).json({ error: 'Invalid tax type' });
  }

  taxes[taxIndex] = {
    ...taxes[taxIndex],
    ...updates,
    updatedAt: new Date().toISOString()
  };

  res.json(taxes[taxIndex]);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const taxIndex = taxes.findIndex(t => t.id === id);
  
  if (taxIndex === -1) {
    return res.status(404).json({ error: 'Tax not found' });
  }

  taxes.splice(taxIndex, 1);
  res.status(204).send();
});

export default router;
