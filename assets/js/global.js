// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menuBtn');
  const navMenu = document.getElementById('navMenu');
  
  if (menuBtn) {
    menuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });
  }
  
  // Close menu when clicking on a link
  if (navMenu) {
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
      });
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (navMenu && !navMenu.contains(e.target) && (!menuBtn || !menuBtn.contains(e.target))) {
      navMenu.classList.remove('active');
    }
  });
});

// ===== PRODUCTS DATA =====
const productsData = {
  "categories": [
    {
      "id": "herbicides",
      "name": "Herbicides / Weedicides",
      "icon": "🌾",
      "color": "#059669",
      "description": "Advanced weed control solutions for healthy crop growth"
    },
    {
      "id": "insecticides",
      "name": "Insecticides / Acaricides",
      "icon": "🐛",
      "color": "#DC2626",
      "description": "Powerful pest management for maximum yield protection"
    },
    {
      "id": "fertilizers",
      "name": "Fertilizers",
      "icon": "🌱",
      "color": "#7C3AED",
      "description": "Nutrient-rich fertilizers for enhanced plant growth"
    },
    {
      "id": "biostimulants",
      "name": "Bio-Stimulants & Soil Conditioners",
      "icon": "🌍",
      "color": "#8B5CF6",
      "description": "Natural growth promoters and soil enhancement products"
    },
    {
      "id": "adjuvants",
      "name": "Adjuvants & Spreaders",
      "icon": "💧",
      "color": "#06B6D4",
      "description": "Spray efficiency enhancers and wetting agents"
    }
  ],
  "products": [
    {
      "id": "takila",
      "name": "TAKILA",
      "category": "herbicides",
      "formula": "Bispyribac Sodium 10% W/V SC",
      "brand": "Gharda Chemicals Limited",
      "description": "Selective herbicide for broadleaf weed control",
      "benefits": ["Controls broadleaf weeds", "Selective action targets weeds not crops", "Long lasting control", "Clean fields, healthier crops"],
      "tagline": "Target Weeds, Protect Your Harvest"
    },
    {
      "id": "dhanvarsha",
      "name": "DHANVARSHA 6-IN-1",
      "category": "fertilizers",
      "formula": "Multi-Nutrient Fertilizer (N, P, K + Micro Nutrients)",
      "brand": "Dhanuka",
      "description": "Premium 6-in-1 multi-nutrient fertilizer for complete plant nutrition",
      "benefits": ["Stronger root system", "Greener leaves", "Higher yield", "Long term fertility", "Eco-friendly formula"],
      "tagline": "Healthy Soil, Prosperous Tomorrow"
    },
    {
      "id": "jhatka",
      "name": "JHATKA",
      "category": "herbicides",
      "formula": "Clodinafop Propargyl 15% WP",
      "brand": "UPL",
      "description": "Fast-acting herbicide for effective weed control",
      "benefits": ["Rapid action", "Broad spectrum control", "Easy application"]
    },
    {
      "id": "foost",
      "name": "FOOST",
      "category": "herbicides",
      "formula": "Herbicide (Verify at bayer.com)",
      "brand": "Bayer",
      "description": "Bayer herbicide for crop protection",
      "benefits": ["Effective weed control"],
      "note": "Please verify active ingredient at Bayer India website"
    },
    {
      "id": "attract",
      "name": "ATTRACT",
      "category": "herbicides",
      "formula": "Atrazine 50% WP",
      "brand": "Chambal Fertilisers and Chemicals Limited",
      "description": "Proven herbicide for crop weed management",
      "benefits": ["Broad spectrum action", "Reliable performance"]
    },
    {
      "id": "saathi",
      "name": "SAATHI",
      "category": "herbicides",
      "formula": "Pyrazosulfuron Ethyl 10% WP",
      "brand": "UPL",
      "description": "Rice field herbicide for superior weed control",
      "benefits": ["Rice-specific formula", "Excellent control"]
    },
    {
      "id": "metgrip",
      "name": "METGRIP",
      "category": "herbicides",
      "formula": "Metsulfuron Methyl 20% WP",
      "brand": "Ananya Agrosciences",
      "description": "Broad-spectrum post-emergent herbicide",
      "benefits": ["Multi-crop use", "Cost-effective"]
    },
    {
      "id": "convo",
      "name": "CONVO",
      "category": "herbicides",
      "formula": "Metsulfuron Methyl 20% WP",
      "brand": "Atul Ltd.",
      "description": "Selective herbicide for multiple crops",
      "benefits": ["Easy to use", "Effective control"]
    },
    {
      "id": "tynzer",
      "name": "TYNZER",
      "category": "herbicides",
      "formula": "Topramezone 336 g/L (w/v) SC",
      "brand": "BASF",
      "description": "Premium selective herbicide (Combo Pack)",
      "benefits": ["Selective action", "Combo pack advantage"],
      "note": "Includes: Tynzer 30ml + Outright 300ml"
    },
    {
      "id": "speedox",
      "name": "SPEEDOX",
      "category": "herbicides",
      "formula": "2,4-D Amine Salt 58% SL",
      "brand": "Induswell Crop Care",
      "description": "Selective herbicide for broadleaf weed control",
      "benefits": ["Fast action", "Broadleaf specific"]
    },
    {
      "id": "sackweed-58",
      "name": "SACKWEED 58",
      "category": "herbicides",
      "formula": "2,4-D Amine Salt 58% SL",
      "brand": "Shivalik (ISO 9001 & 14001 Certified)",
      "description": "Certified herbicide for crop protection",
      "benefits": ["Quality certified", "Proven formula"]
    },
    {
      "id": "weedmar-super",
      "name": "WEEDMAR SUPER",
      "category": "herbicides",
      "formula": "2,4-D Dimethyl Amine Salt 58% SL",
      "brand": "Dhanuka",
      "description": "Advanced 2,4-D formulation for weed control",
      "benefits": ["Improved formula", "Better coverage"]
    },
    {
      "id": "paraxone",
      "name": "PARAXONE",
      "category": "herbicides",
      "formula": "Paraquat Dichloride 24% SL",
      "brand": "Dev Agro (India) Chemicals & Fertilizers Ltd.",
      "description": "Contact herbicide for rapid weed elimination",
      "benefits": ["Fast action", "Contact formula"]
    },
    {
      "id": "glycin",
      "name": "GLYCIN",
      "category": "herbicides",
      "formula": "Glyphosate 41% SL",
      "brand": "Future Agrisciences",
      "description": "Non-selective herbicide for total weed control",
      "benefits": ["Broad spectrum", "Systemic action"]
    },
    {
      "id": "fenoxa",
      "name": "FENOXA",
      "category": "herbicides",
      "formula": "Fenoxaprop-p-ethyl 9.3% w/w EC",
      "brand": "Shivalik (ISO 9001, 14001 & 45001)",
      "description": "Selective grass herbicide for cereal crops",
      "benefits": ["Grass-specific", "Quality certified"]
    },
    {
      "id": "whip-super",
      "name": "WHIP SUPER",
      "category": "herbicides",
      "formula": "Fenoxaprop-p-ethyl 9.3% EC",
      "brand": "Bayer",
      "description": "Premium grass herbicide for cereals",
      "benefits": ["Premium quality", "Bayer reliability"]
    },
    {
      "id": "nodachi",
      "name": "NODACHI",
      "category": "herbicides",
      "formula": "Topramezone 336 g/L (w/v) SC",
      "brand": "Chambal Fertilisers and Chemicals Limited",
      "description": "Advanced weedicide for multiple crops",
      "benefits": ["Multi-crop use", "Excellent control"]
    },
    {
      "id": "emmgrip-top",
      "name": "EMMGRIP TOP",
      "category": "herbicides",
      "formula": "Metsulfuron Methyl 10% w/w + Chlorimuron Ethyl 10% WP",
      "brand": "Maas Crop Science Pvt. Ltd.",
      "description": "Combination herbicide for broad weed spectrum",
      "benefits": ["Dual action", "Broader coverage"]
    },
    {
      "id": "bispa",
      "name": "BISPA",
      "category": "herbicides",
      "formula": "Bispyribac Sodium 10% w/v SC",
      "brand": "Shivalik (ISO 9001, 14001 & 45001)",
      "description": "Broad-spectrum systemic herbicide",
      "benefits": ["Systemic action", "Quality assured"]
    },
    {
      "id": "em-1",
      "name": "EM-1",
      "category": "insecticides",
      "formula": "Emamectin Benzoate 5% SG",
      "brand": "Dhanuka",
      "description": "Systemic and contact insecticide for pest control",
      "benefits": ["Dual action", "Effective against pests"]
    },
    {
      "id": "safety",
      "name": "SAFETY",
      "category": "insecticides",
      "formula": "Emamectin Benzoate 5% SG",
      "brand": "Vizien Organics (ISO 9001:2008)",
      "description": "Quality insecticide for crop protection",
      "benefits": ["ISO certified", "Reliable performance"]
    },
    {
      "id": "reclaim",
      "name": "RECLAIM",
      "category": "insecticides",
      "formula": "Emamectin Benzoate 5% SG",
      "brand": "Shivalik (ISO 9001, 14001 & 45001)",
      "description": "Insecticide and acaricide for multiple pests",
      "benefits": ["Dual pest control", "Quality certified"]
    },
    {
      "id": "black-cobra",
      "name": "BLACK COBRA",
      "category": "insecticides",
      "formula": "Emamectin Benzoate 1.9% EC",
      "brand": "Deva Pesticides Ltd. (ISO 9001:2015)",
      "description": "Powerful insecticide and acaricide",
      "benefits": ["Broad spectrum", "ISO certified"]
    },
    {
      "id": "protector-404",
      "name": "PROTECTOR 404",
      "category": "insecticides",
      "formula": "Profenofos 40% + Cypermethrin 4% EC",
      "brand": "Global SRL Agro (ISO 9001:2015)",
      "description": "Broad-spectrum insecticide combination",
      "benefits": ["Dual component", "Multiple pests"]
    },
    {
      "id": "thio-star",
      "name": "THIO STAR",
      "category": "insecticides",
      "formula": "Thiomethoxam 25% WG",
      "brand": "Premium Insecticide",
      "description": "Systemic insecticide for crop protection",
      "benefits": ["Systemic action", "Long-lasting"]
    },
    {
      "id": "shriram-npk",
      "name": "SHRIRAM NPK",
      "category": "fertilizers",
      "formula": "N:P:K 19:19:19",
      "brand": "Hindustan",
      "description": "Water-soluble balanced fertilizer",
      "benefits": ["Balanced nutrition", "Easy application"]
    },
    {
      "id": "multiplex-sulphur",
      "name": "MULTIPLEX SULPHUR",
      "category": "fertilizers",
      "formula": "Sulphur (Liquid)",
      "brand": "Multiplex (ISO 9001:2000 & 14001:1996)",
      "description": "Liquid sulphur fertilizer for plant nutrition",
      "benefits": ["Liquid formulation", "Quality certified"]
    },
    {
      "id": "only-k",
      "name": "ONLY-K",
      "category": "fertilizers",
      "formula": "Sulphate of Potash — N:P:K 00:00:50",
      "brand": "Multiplex",
      "description": "Pure potassium fertilizer for crop nutrition",
      "benefits": ["High K content", "Multiple application modes"]
    },
    {
      "id": "pramukh",
      "name": "PRAMUKH",
      "category": "fertilizers",
      "formula": "N:P:K 19:19:19",
      "brand": "Multiplex",
      "description": "100% water-soluble fertilizer for foliar spray",
      "benefits": ["Water-soluble", "Foliar application"]
    },
    {
      "id": "samras",
      "name": "SAMRAS",
      "category": "biostimulants",
      "formula": "Protein Hydrolysates and Amino Acids",
      "brand": "Multiplex",
      "description": "Amino acid biostimulant for plant growth",
      "benefits": ["Natural amino acids", "Growth promotion"]
    },
    {
      "id": "ambition",
      "name": "AMBITION",
      "category": "biostimulants",
      "formula": "Crop Supplement (Verify at bayer.com)",
      "brand": "Bayer",
      "description": "Specialized crop supplement from Bayer",
      "benefits": ["Bayer quality", "Crop-specific"]
    },
    {
      "id": "black-gold",
      "name": "BLACK GOLD",
      "category": "biostimulants",
      "formula": "Humic Acid 98%",
      "brand": "Premium Brands",
      "description": "Soil conditioner and plant growth promoter",
      "benefits": ["Soil enrichment", "Growth promotion"]
    },
    {
      "id": "black-magic-gold",
      "name": "BLACK MAGIC GOLD",
      "category": "biostimulants",
      "formula": "Humic Acid 98% Water Soluble",
      "brand": "Raftar Bio Crop Sciences",
      "description": "Premium humic acid soil conditioner",
      "benefits": ["Water-soluble", "Professional brand"]
    },
    {
      "id": "sona-black-gold",
      "name": "SONA BLACK GOLD",
      "category": "biostimulants",
      "formula": "Super Potassium Humate 98% WS + Nano Mycorrhiza",
      "brand": "Premium Bio-Fertilizer",
      "description": "Advanced bio-fertilizer with nano technology",
      "benefits": ["Nano technology", "Mycorrhiza inclusion"]
    },
    {
      "id": "excellent",
      "name": "EXCELLENT+",
      "category": "biostimulants",
      "formula": "Humic Acid 98%",
      "brand": "Premium Quality",
      "description": "Plant growth promoter with humic acid",
      "benefits": ["Proven formula", "Growth enhancement"]
    },
    {
      "id": "sagarika",
      "name": "SAGARIKA",
      "category": "biostimulants",
      "formula": "100% Natural Seaweed Extract",
      "brand": "IFFCO",
      "description": "Natural seaweed extract biostimulant",
      "benefits": ["100% natural", "IFFCO quality"]
    },
    {
      "id": "all-rounder",
      "name": "ALL ROUNDER (Aal Raundar)",
      "category": "biostimulants",
      "formula": "5% Plant Extract + 10% Amino Acid",
      "brand": "Indo Shine",
      "description": "Multi-purpose crop nutrient supplement",
      "benefits": ["Plant extract based", "Amino acid enriched"]
    },
    {
      "id": "wilicon",
      "name": "WILICON",
      "category": "adjuvants",
      "formula": "Silicone Spreader",
      "brand": "Willowood",
      "description": "Premium spreader and adjuvant",
      "benefits": ["Improved spreading", "Better coverage"]
    },
    {
      "id": "aone",
      "name": "AONE",
      "category": "adjuvants",
      "formula": "Silicon Super Surfactant",
      "brand": "Premium Adjuvant",
      "description": "Advanced surfactant for spray efficiency",
      "benefits": ["Super formulation", "Silicon base"]
    },
    {
      "id": "dhanuvit",
      "name": "DHANUVIT",
      "category": "adjuvants",
      "formula": "Agricultural Wetting Agent",
      "brand": "Dhanuka",
      "description": "Professional wetting agent for agrochemicals",
      "benefits": ["Dhanuka quality", "Proven performance"]
    },
    {
      "id": "talent",
      "name": "TALENT",
      "category": "adjuvants",
      "formula": "Sticker / Spreader / Activator (for all crops)",
      "brand": "ISO 9001:2008 Certified Company",
      "description": "Multi-functional spray adjuvant",
      "benefits": ["Triple action", "ISO certified"]
    }
  ]
};

// ===== UTILITY FUNCTIONS =====
function getCategoryById(id) {
  return productsData.categories.find(cat => cat.id === id);
}

function getProductsByCategory(categoryId) {
  if (categoryId === 'all') {
    return productsData.products;
  }
  return productsData.products.filter(product => product.category === categoryId);
}

function searchProducts(query) {
  const lowerQuery = query.toLowerCase();
  return productsData.products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.brand.toLowerCase().includes(lowerQuery) ||
    product.formula.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
}

// ===== ANIMATION ON SCROLL =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.category-card, .product-card, .feature-card').forEach(el => {
    observer.observe(el);
  });
});

console.log('Global JavaScript loaded successfully');
