import { Cart } from '@/models/cart.model';
import { httpClient } from './http';

interface AddCartProps {
  bookId: number;
  quantity: number;
}

export const addCart = async (params: AddCartProps) => {
  const response = await httpClient.post('/carts', params);
  return response.data;
};

export const fetchCart = async () => {
  const response = await httpClient.get<Cart[]>('/carts');
  return response.data;
};

export const deleteCart = async (id: number) => {
  const response = await httpClient.delete(`/carts/${id}`);
  return response.data;
};
