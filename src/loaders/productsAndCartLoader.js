import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  // All products
  const res = await fetch("products.json");
  const products = await res.json();
  // console.log(products);

  // Cart data

  const storedCart = getStoredCart();
  const savedCart = [];

  for (const id in storedCart) {
    const matchedProduct = products.find((product) => product.id === id);

    if (matchedProduct) {
      matchedProduct.quantity = storedCart[id];
      savedCart.push(matchedProduct);
    }
  }
  return { products, savedCart };
};
