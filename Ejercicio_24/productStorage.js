function fetchProducts() {
  const products = localStorage.getItem('products')
    ? JSON.parse(localStorage.getItem('products'))
    : [];
  
  return products;
}

function saveProducts(products) {
  localStorage.setItem('products', JSON.stringify(products));
};