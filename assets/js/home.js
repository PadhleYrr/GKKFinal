// ===== HOME PAGE FUNCTIONALITY =====

document.addEventListener('DOMContentLoaded', function() {
  loadCategories();
  loadFeaturedProducts();
});

// ===== LOAD CATEGORIES =====
function loadCategories() {
  const categoriesGrid = document.getElementById('categoriesGrid');
  
  if (!categoriesGrid) return;
  
  categoriesGrid.innerHTML = '';
  
  productsData.categories.forEach(category => {
    const productCount = productsData.products.filter(p => p.category === category.id).length;
    
    const categoryCard = document.createElement('div');
    categoryCard.className = 'category-card fade-in-up';
    categoryCard.innerHTML = `
      <div class="icon" style="color: ${category.color};">${category.icon}</div>
      <h3>${category.name}</h3>
      <p>${category.description}</p>
      <p style="font-size: 0.85rem; color: #999; margin: 10px 0 0 0;">${productCount} products</p>
      <a href="products.html?category=${category.id}">Browse →</a>
    `;
    
    categoriesGrid.appendChild(categoryCard);
  });
}

// ===== LOAD FEATURED PRODUCTS =====
function loadFeaturedProducts() {
  const featuredGrid = document.getElementById('featuredGrid');
  
  if (!featuredGrid) return;
  
  featuredGrid.innerHTML = '';
  
  // Get featured products (takila and dhanvarsha with images, plus a few others)
  const featuredIds = ['takila', 'dhanvarsha', 'jhatka', 'em-1', 'samras', 'wilicon'];
  const featured = productsData.products.filter(p => featuredIds.includes(p.id));
  
  featured.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card fade-in-up';
    
    const categoryData = getCategoryById(product.category);
    const imageHtml = product.image 
      ? `<img src="${product.image}" alt="${product.name}">` 
      : `<div class="no-image" style="font-size: 2.5rem;">🌾</div>`;
    
    productCard.innerHTML = `
      <div class="product-card-image">
        ${imageHtml}
      </div>
      <div class="product-card-content">
        <h3>${product.name}</h3>
        <div class="brand">${product.brand}</div>
        <div class="formula">${product.formula}</div>
        <a href="products.html?category=${product.category}">View Details →</a>
      </div>
    `;
    
    featuredGrid.appendChild(productCard);
  });
}

console.log('Home page JavaScript loaded successfully');
