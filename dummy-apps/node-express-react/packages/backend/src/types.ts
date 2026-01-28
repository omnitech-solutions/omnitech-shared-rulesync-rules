export interface Tax {
  id: string;
  name: string;
  rate: number;
  type: 'income' | 'sales' | 'property' | 'corporate';
  description?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaxRequest {
  name: string;
  rate: number;
  type: Tax['type'];
  description?: string;
}

export interface UpdateTaxRequest {
  name?: string;
  rate?: number;
  type?: Tax['type'];
  description?: string;
  isActive?: boolean;
}
