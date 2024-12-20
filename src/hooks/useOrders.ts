import * as React from 'react';
import { Order } from '../store/types';

interface OrdersState {
  orders: Order[];
  isLoading: boolean;
  error: string | null;
}

interface OrdersContextType extends OrdersState {
  createOrder: (order: Omit<Order, 'id' | 'createdAt'>) => Promise<void>;
  updateOrder: (id: string, updates: Partial<Order>) => Promise<void>;
  fetchOrders: () => Promise<void>;
}

const OrdersContext = React.createContext<OrdersContextType | undefined>(undefined);

export function OrdersProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<OrdersState>({
    orders: [],
    isLoading: false,
    error: null,
  });

  const fetchOrders = async () => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      // TODO: Implement API call
      const orders: Order[] = [];
      setState(prev => ({ ...prev, orders, isLoading: false }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Failed to fetch orders',
        isLoading: false
      }));
    }
  };

  const createOrder = async (order: Omit<Order, 'id' | 'createdAt'>) => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      // TODO: Implement API call
      const newOrder: Order = {
        ...order,
        id: Date.now().toString(),
        createdAt: new Date(),
      };
      setState(prev => ({
        ...prev,
        orders: [...prev.orders, newOrder],
        isLoading: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Failed to create order',
        isLoading: false
      }));
    }
  };

  const updateOrder = async (id: string, updates: Partial<Order>) => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      // TODO: Implement API call
      setState(prev => ({
        ...prev,
        orders: prev.orders.map(order => 
          order.id === id ? { ...order, ...updates } : order
        ),
        isLoading: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Failed to update order',
        isLoading: false
      }));
    }
  };

  return (
    <OrdersContext.Provider value={{ ...state, createOrder, updateOrder, fetchOrders }}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  const context = React.useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
}