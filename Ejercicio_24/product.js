document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('product-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const sku = document.getElementById('sku').value;
    const cui = document.getElementById('cui').value;
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = parseFloat(document.getElementById('price').value || 0);
    const stock = parseInt(document.getElementById('stock').value || 0);

    const product = {
      sku,
      cui,
      name,
      description,
      price,
      stock
    };

    const products = fetchProducts();

    if (products.some(item => item.sku === product.sku)) {
      alert('SKU duplicado');
      return;
    }

    products.push(product);

    saveProducts(products);

    form.reset();
  });
});