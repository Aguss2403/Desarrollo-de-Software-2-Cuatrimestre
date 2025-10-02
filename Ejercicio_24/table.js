document.addEventListener('DOMContentLoaded', () => {

  const createTable = (products) => {
    const tbody = document.getElementById('product-table-body');
    tbody.innerHTML = '';

    products.forEach(product => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${product.sku}</td>
        <td>${product.cui}</td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.stock}</td>
        <td>${product.price}</td>
      `;

      tbody.appendChild(row);
    });
  };

  // Funcionalidad de búsqueda
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');

  searchBtn.addEventListener('click', () => {
    const searchInputValue = searchInput.value.toLowerCase();

    const products = fetchProducts();
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchInputValue)
    );

    createTable(filteredProducts);
  });

  // Paginacion
  let currentPage = 1;
  let rowsPerPage = 5;
  let currentProducts = [];

  const rowsPerPageSelect = document.getElementById('items-per-page');
  [5, 10, 20, 25].forEach(val => {
    const option = document.createElement('option');
    option.value = val;
    option.textContent = val;
    rowsPerPageSelect.appendChild(option);
  });
  rowsPerPageSelect.value = rowsPerPage;

  const paginationContainer = document.getElementById('pagination-btns');

  function renderTablePage(products, page, rows) {
    const start = (page - 1) * rows;
    const end = start + rows;
    createTable(products.slice(start, end));
    renderPagination(products.length, page, rows);
  }

  function renderPagination(total, page, rows) {
    paginationContainer.innerHTML = '';
    const pageCount = Math.ceil(total / rows);

    for (let i = 1; i <= pageCount; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.disabled = i === page;
      btn.addEventListener('click', () => {
        currentPage = i;
        renderTablePage(currentProducts, currentPage, rowsPerPage);
      });
      paginationContainer.appendChild(btn);
    }
  }

  function updateProducts(products) {
    currentProducts = products;
    currentPage = 1;
    renderTablePage(currentProducts, currentPage, rowsPerPage);
  }

  searchBtn.addEventListener('click', () => {
    const searchInputValue = searchInput.value.toLowerCase();
    const products = fetchProducts();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchInputValue)
    );
    updateProducts(filteredProducts);
  });

  rowsPerPageSelect.addEventListener('change', () => {
    rowsPerPage = parseInt(rowsPerPageSelect.value, 10);
    currentPage = 1;
    renderTablePage(currentProducts, currentPage, rowsPerPage);
  });

  // Inicializar con todos los productos
  updateProducts(fetchProducts());
});