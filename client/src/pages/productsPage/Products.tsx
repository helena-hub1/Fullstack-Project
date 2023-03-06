import ProductList from "../../components/products/productList/ProductList";

// type
type Prop = {
  userInput: string;
};
export default function Products({ userInput }: Prop) {
  return <ProductList userInput={userInput} />;
}
