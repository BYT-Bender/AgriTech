export interface User {
  id: string;
  type: 'buyer' | 'seller';
  name: string;
  identifier: string; // phone or license
  region: string;
}

export interface Order {
  id: string;
  buyerId: string;
  quantity: number;
  qualityType: string;
  region: string;
  loadingDate: Date;
  deliveryLocation: string;
  status: 'pending' | 'active' | 'completed';
  createdAt: Date;
}

export interface Bid {
  id: string;
  orderId: string;
  sellerId: string;
  price: number;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}