// ===== PRODUCTS PAGE FUNCTIONALITY =====

let currentCategory = 'all';
let currentSort = 'name-asc';
let filteredProducts = [];

document.addEventListener('DOMContentLoaded', function() {
  initializeFilters();
  loadProducts();
  setupEventListeners();
});

// ===== INITIALIZE FILTERS =====
function initializeFilters() {
  const categoryFiltersDiv = document.getElementById('categoryFilters');
  
  if (!categoryFiltersDiv) return;
  
  // Add all categories to filter
  productsData.categories.forEach(category => {
    const label = document.createElement('label');
    label.innerHTML = `
      <input type="radio" name="category" value="${category.id}">
      <span>${category.name} (${productsData.products.filter(p => p.category === category.id).length})</span>
    `;
    categoryFiltersDiv.appendChild(label);
  });
  
  // Get category from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  
  if (categoryParam) {
    const input = document.querySelector(`input[value="${categoryParam}"]`);
    if (input) {
      input.checked = true;
      currentCategory = categoryParam;
    }
  }
}

// ===== LOAD AND DISPLAY PRODUCTS =====
function loadProducts() {
  // Filter by category
  if (currentCategory === 'all') {
    filteredProducts = [...productsData.products];
  } else {
    filteredProducts = productsData.products.filter(p => p.category === currentCategory);
  }
  
  // Filter by search
  const searchInput = document.getElementById('searchInput');
  if (searchInput && searchInput.value.trim()) {
    const searchQuery = searchInput.value.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery) ||
      product.brand.toLowerCase().includes(searchQuery) ||
      product.formula.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery)
    );
  }
  
  // Sort products
  sortProducts();
  
  // Display products
  displayProducts();
  
  // Update results text
  updateResultsText();
}

// ===== SORT PRODUCTS =====
function sortProducts() {
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    currentSort = sortSelect.value;
  }
  
  switch(currentSort) {
    case 'name-asc':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'category':
      filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
      break;
    default:
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }
}

// ===== DISPLAY PRODUCTS =====
function displayProducts() {
  const productsGrid = document.getElementById('productsGrid');
  
  if (!productsGrid) return;
  
  productsGrid.innerHTML = '';
  
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="emoji">🔍</div>
        <h3>No Products Found</h3>
        <p>Try adjusting your filters or search query</p>
        <button class="btn btn-primary" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }
  
  filteredProducts.forEach(product => {
    const categoryData = getCategoryById(product.category);
    const imageHtml = product.image 
      ? `<img src="${product.image}" alt="${product.name}">` 
      : `<div style="font-size: 2.5rem;">🌾</div>`;
    
    const noteHtml = product.note 
      ? `<span class="product-note">${product.note}</span>` 
      : '';
    
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <div class="product-card-image">
        ${imageHtml}
        <span class="category-badge">${categoryData.name.split(' ')[0]}</span>
      </div>
      <div class="product-card-content">
        <h3>${product.name}</h3>
        <div class="brand">${product.brand}</div>
        <div class="formula">${product.formula}</div>
        ${noteHtml}
        <div class="product-card-actions">
          <a href="#" onclick="showProductDetails('${product.id}'); return false;">Details</a>
          <a href="contact.html">Inquire</a>
        </div>
      </div>
    `;
    
    productsGrid.appendChild(productCard);
  });
}

// ===== UPDATE RESULTS TEXT =====
function updateResultsText() {
  const resultsText = document.getElementById('resultsText');
  if (resultsText) {
    const categoryName = currentCategory === 'all' 
      ? 'All Products' 
      : getCategoryById(currentCategory).name;
    
    resultsText.textContent = `${filteredProducts.length} product(s) in ${categoryName}`;
  }
}

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
  // Category filter
  const categoryRadios = document.querySelectorAll('input[name="category"]');
  categoryRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      currentCategory = this.value;
      loadProducts();
    });
  });
  
  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      loadProducts();
    });
  }
  
  // Sort
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      currentSort = this.value;
      loadProducts();
    });
  }
}

// ===== RESET FILTERS =====
function resetFilters() {
  currentCategory = 'all';
  currentSort = 'name-asc';
  
  const allRadio = document.querySelector('input[value="all"]');
  if (allRadio) allRadio.checked = true;
  
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'name-asc';
  
  loadProducts();
}

// ===== SHOW PRODUCT DETAILS =====
function showProductDetails(productId) {
  const product = productsData.products.find(p => p.id === productId);
  if (!product) return;
  
  const categoryData = getCategoryById(product.category);
  
  let detailsHtml = `
    <div style="max-width: 600px; padding: 20px; background: white; border-radius: 8px;">
      <h2>${product.name}</h2>
      <p style="color: #666; margin-bottom: 15px;">
        <strong>Category:</strong> ${categoryData.name}<br>
        <strong>Brand:</strong> ${product.brand}<br>
        <strong>Formula:</strong> ${product.formula}
      </p>
      
      <h3 style="margin-top: 20px; margin-bottom: 10px;">Description</h3>
      <p>${product.description}</p>
  `;
  
  if (product.benefits && product.benefits.length > 0) {
    detailsHtml += `
      <h3 style="margin-top: 20px; margin-bottom: 10px;">Benefits</h3>
      <ul style="margin-left: 20px;">
    `;
    product.benefits.forEach(benefit => {
      detailsHtml += `<li>${benefit}</li>`;
    });
    detailsHtml += `</ul>`;
  }
  
  if (product.tagline) {
    detailsHtml += `
      <p style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 8px; font-style: italic;">
        <strong>"${product.tagline}"</strong>
      </p>
    `;
  }
  
  if (product.note) {
    detailsHtml += `
      <p style="margin-top: 20px; padding: 15px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px; color: #92400e;">
        <strong>Note:</strong> ${product.note}
      </p>
    `;
  }
  
  detailsHtml += `
      <p style="margin-top: 25px;">
        <a href="contact.html" class="btn btn-primary" style="display: inline-block;">Contact for Inquiry</a>
      </p>
    </div>
  `;
  
  // Show modal or alert
  alert(`${product.name}\n\n${product.brand}\n${product.formula}\n\n${product.description}\n\nClick "Contact for Inquiry" to get in touch.`);
  
  // Redirect to contact page for detailed inquiry
  setTimeout(() => {
    window.location.href = `contact.html?product=${product.name}`;
  }, 100);
}

console.log('Products page JavaScript loaded successfully');
