type Order = {
  date: Date;
  userId: string;
  quantity: number;
  totalPrice: number;
  street: string;
  city: string;
  country: string;
  postalCode: number;
  isDelivered: boolean;
  productOrder: [];
};

export default Order;
