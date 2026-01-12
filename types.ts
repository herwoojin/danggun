
export type DeliveryMode = 'fast' | 'next';

export interface OrderStatus {
  id: string;
  sellerPrepared: boolean;
  onDelivery: boolean;
  completed: boolean;
  estimatedArrival: string;
  driverName: string;
  driverRating: number;
  driverType: string;
  distanceRemaining: string;
}

export interface LocationInfo {
  pickup: string;
  delivery: string;
}
