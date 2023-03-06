type Order = {
  date: Date;
  userId: string;
  productOrder: [];
  quantity: number;
  shippingAddress: {
    street: string;
    city: string;
    country: string;
    postalCode: number;
  };
  totalPrice: number;
  email: string;
  phoneNumber: number;
  isDelivered: boolean;
};

export default Order;
