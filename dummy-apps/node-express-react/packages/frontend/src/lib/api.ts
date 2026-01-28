import axios from 'axios';
import { Tax, CreateTaxRequest, UpdateTaxRequest } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const taxesApi = {
  getAll: async (filters?: { type?: string; isActive?: boolean }): Promise<Tax[]> => {
    const params = new URLSearchParams();
    if (filters?.type) params.append('type', filters.type);
    if (filters?.isActive !== undefined) params.append('isActive', filters.isActive.toString());
    
    const response = await api.get(`/taxes?${params.toString()}`);
    return response.data;
  },

  getById: async (id: string): Promise<Tax> => {
    const response = await api.get(`/taxes/${id}`);
    return response.data;
  },

  create: async (data: CreateTaxRequest): Promise<Tax> => {
    const response = await api.post('/taxes', data);
    return response.data;
  },

  update: async (id: string, data: UpdateTaxRequest): Promise<Tax> => {
    const response = await api.put(`/taxes/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/taxes/${id}`);
  },
};

export const healthApi = {
  check: async (): Promise<{ status: string; timestamp: string }> => {
    const response = await api.get('/health');
    return response.data;
  },
};
