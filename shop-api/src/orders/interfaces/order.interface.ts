export interface OrderI {
  productName: string;
  amount: number;
  price: number;
  totalPrice: number;
  productId: string;
}

export interface OrderItemI {
  productId: string;
  amount: number;
}
