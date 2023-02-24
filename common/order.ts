type Order = {
  date: Date;
  userId: string;
  quantity: number;
  totalPrice: number;
  street: string;
  city: string;
  country: string;
  postalCode: number;
  email: string;
  phoneNumber: string;
  isDelivered: boolean;
  productOrder: [];
};

export default Order;
