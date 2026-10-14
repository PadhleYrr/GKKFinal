// ===== CONTACT PAGE FUNCTIONALITY =====

document.addEventListener('DOMContentLoaded', function() {
  setupContactForm();
  loadProductParameter();
});

// ===== SETUP CONTACT FORM =====
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    submitForm(this);
  });
}

// ===== LOAD PRODUCT PARAMETER =====
function loadProductParameter() {
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get('product');
  
  if (productName) {
    const subjectSelect = document.getElementById('subject');
    const messageField = document.getElementById('message');
    
    if (subjectSelect) subjectSelect.value = 'product-inquiry';
    if (messageField) {
      messageField.value = `I'm interested in ${productName}.\n\n`;
      messageField.focus();
    }
  }
}

// ===== SUBMIT FORM =====
function submitForm(form) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();
  const farmSize = document.getElementById('farm-size').value.trim();
  const formMessage = document.getElementById('formMessage');
  
  // Validation
  if (!name) {
    showMessage('Please enter your name', 'error', formMessage);
    return;
  }
  
  if (!email || !isValidEmail(email)) {
    showMessage('Please enter a valid email address', 'error', formMessage);
    return;
  }
  
  if (!subject) {
    showMessage('Please select a subject', 'error', formMessage);
    return;
  }
  
  if (!message) {
    showMessage('Please enter your message', 'error', formMessage);
    return;
  }
  
  // Prepare form data
  const formData = {
    name: name,
    email: email,
    phone: phone || 'Not provided',
    subject: subject,
    message: message,
    farmSize: farmSize || 'Not provided',
    timestamp: new Date().toISOString()
  };
  
  // Save to localStorage (for demo purposes)
  saveFormData(formData);
  
  // Show success message
  showMessage('Thank you! Your inquiry has been received. We will contact you soon.', 'success', formMessage);
  
  // Reset form
  form.reset();
  
  // Redirect after 2 seconds
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 2000);
}

// ===== SHOW MESSAGE =====
function showMessage(text, type, element) {
  if (!element) return;
  
  element.textContent = text;
  element.className = `form-message ${type}`;
  element.style.display = 'block';
  
  if (type === 'error') {
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// ===== EMAIL VALIDATION =====
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ===== SAVE FORM DATA =====
function saveFormData(data) {
  try {
    let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push(data);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    console.log('Form data saved:', data);
  } catch (e) {
    console.error('Error saving form data:', e);
  }
}

// ===== GET FORM SUBMISSIONS (for admin purposes) =====
function getFormSubmissions() {
  try {
    return JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  } catch (e) {
    console.error('Error retrieving form data:', e);
    return [];
  }
}

// ===== CLEAR FORM SUBMISSIONS =====
function clearFormSubmissions() {
  localStorage.removeItem('contactSubmissions');
  console.log('Form submissions cleared');
}

// ===== EMAIL SUBMISSION (Optional - requires backend) =====
function submitFormViaEmail(formData) {
  // This is a placeholder for actual email functionality
  // In production, this would send to a backend service
  
  return fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .catch(error => {
    console.error('Error sending email:', error);
    return { ok: false };
  });
}

console.log('Contact page JavaScript loaded successfully');
