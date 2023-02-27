type Order = {
  date: Date;
  userId: string;
  quantity: number;
  totalPrice: number;
  shippingAddress: {
    street: string;
    city: string;
    country: string;
    postalCode: number;
  };
  email: string;
  phoneNumber: number;
  isDelivered: boolean;
  productOrder: [];
};

export default Order;
