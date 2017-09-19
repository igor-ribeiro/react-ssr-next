import products from './products';

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find(product => product.id === id);
}
