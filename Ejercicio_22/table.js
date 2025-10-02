document.addEventListener('DOMContentLoaded', () => {

  const createTable = (products) => {
    const tbody = document.getElementById('product-table-body');
    tbody.innerHTML = ''; // Limpiar tabla

    products.forEach(product => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${product.code}</td>
        <td>${product.name}</td>
        <td>${product.stock}</td>
        <td>${product.expiryDate || '--'}</td>
      `;

      tbody.appendChild(row);
    });
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch('products.json');
      const products = await response.json();

      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  // Carga inicial
  const init = async () => {
    const products = await fetchProducts();
    createTable(products);
  };
  init();


  // Funcionalidad de búsqueda
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');

  searchBtn.addEventListener('click', async () => {
    const searchInputValue = searchInput.value.toLowerCase();

    const products = await fetchProducts();
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchInputValue)
    );

    createTable(filteredProducts);

  });
});