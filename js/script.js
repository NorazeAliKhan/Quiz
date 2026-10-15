/**
 * ============================================================================
 * KEYFORGE — Shared JavaScript (script.js)
 * Modular Vanilla JavaScript for Multi-Page KeyForge Website
 * ============================================================================
 * 
 * This script runs across all 3 HTML pages (index.html, info.html, order.html).
 * Each page initializes only its relevant modules safely to avoid null reference
 * errors and keep performance fast and decoupled.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Shared Components (Navbar, Mobile Menu)
  initNavigation();

  // 2. Initialize Page-Specific Logic
  initHomePage();   // Runs on index.html
  initInfoPage();   // Runs on info.html
  initOrderPage();  // Runs on order.html
});

/* ============================================================================
   SHARED MODULE: RESPONSIVE NAVIGATION & MOBILE MENU
   ============================================================================ */
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');

  // Guard clause: Ensure mobile navigation elements exist
  if (!mobileMenuBtn || !mobileNavDrawer) return;

  // Toggle mobile drawer when clicking the hamburger button
  mobileMenuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = mobileNavDrawer.classList.toggle('open');
    mobileMenuBtn.setAttribute('aria-expanded', isOpen);

    // Update icon between menu and close
    const icon = mobileMenuBtn.querySelector('.icon');
    if (icon) {
      icon.textContent = isOpen ? 'close' : 'menu';
    }
  });

  // Close mobile drawer when clicking on any mobile navigation link
  const mobileLinks = mobileNavDrawer.querySelectorAll('.mobile-nav-link, .btn');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close mobile drawer when clicking anywhere outside of it
  document.addEventListener('click', (event) => {
    if (mobileNavDrawer.classList.contains('open') && 
        !mobileNavDrawer.contains(event.target) && 
        !mobileMenuBtn.contains(event.target)) {
      closeMobileMenu();
    }
  });

  // Helper function to safely close the mobile menu
  function closeMobileMenu() {
    mobileNavDrawer.classList.remove('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    const icon = mobileMenuBtn.querySelector('.icon');
    if (icon) {
      icon.textContent = 'menu';
    }
  }

  // Dynamic header shadow on scroll
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        siteHeader.style.borderBottomColor = 'var(--border-hover)';
        siteHeader.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.45)';
      } else {
        siteHeader.style.borderBottomColor = 'var(--border-default)';
        siteHeader.style.boxShadow = 'none';
      }
    });
  }
}

/* ============================================================================
   HOME PAGE MODULE: SMOOTH SCROLL
   ============================================================================ */
function initHomePage() {
  // Check if we are on the Home page
  const learnMoreBtn = document.getElementById('learn-more-btn');
  const targetSection = document.getElementById('why-keyforge');

  // If the button or target doesn't exist, we're on a different page — exit early
  if (!learnMoreBtn || !targetSection) return;

  // Smooth scroll listener with fixed header offset compensation
  learnMoreBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const headerHeight = 80; // Height of the fixed top navigation bar
    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
}

/* ============================================================================
   INFO PAGE MODULE: INTERACTIVE FAQ ACCORDION
   ============================================================================ */
function initInfoPage() {
  // Check if we are on the Product Info page
  const faqContainer = document.getElementById('faq-accordion');
  if (!faqContainer) return;

  const faqItems = faqContainer.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const triggerBtn = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (!triggerBtn || !content) return;

    triggerBtn.addEventListener('click', () => {
      const isCurrentlyExpanded = triggerBtn.getAttribute('aria-expanded') === 'true';

      // Optional Accordion behavior: close other items for a clean single-open feel
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.classList.remove('open');
        }
      });

      // Toggle current item state
      const newState = !isCurrentlyExpanded;
      triggerBtn.setAttribute('aria-expanded', newState);
      item.classList.toggle('active', newState);
      content.classList.toggle('open', newState);
    });
  });
}

/* ============================================================================
   ORDER PAGE MODULE: LIVE CONFIGURATOR & FORM VALIDATION
   ============================================================================ */
function initOrderPage() {
  // Check if we are on the Order page
  const orderForm = document.getElementById('keyboard-order-form');
  const placeOrderBtn = document.getElementById('place-order-btn');
  if (!orderForm || !placeOrderBtn) return;

  // Configuration Form Inputs
  const modelSelect = document.getElementById('keyboard-model');
  const layoutSelect = document.getElementById('layout-size');
  const switchRadios = document.querySelectorAll('input[name="switch-type"]');
  const switchCards = document.querySelectorAll('.switch-radio-card');
  const keycapButtons = document.querySelectorAll('.keycap-btn');
  const keycapLegend = document.getElementById('active-keycap-legend');
  const backlightSelect = document.getElementById('backlight-mode');

  // Quantity Elements
  const qtyInput = document.getElementById('qty-input');
  const btnDec = document.getElementById('qty-decrement');
  const btnInc = document.getElementById('qty-increment');

  // Customer Form Fields
  const custName = document.getElementById('cust-name');
  const custEmail = document.getElementById('cust-email');
  const custPhone = document.getElementById('cust-phone');
  const custAddress = document.getElementById('cust-address');
  const custCity = document.getElementById('cust-city');
  const custZip = document.getElementById('cust-zip');
  const custNotes = document.getElementById('cust-notes');

  // Summary Readout Elements
  const sumModel = document.getElementById('sum-model-name');
  const sumLayout = document.getElementById('sum-layout-name');
  const sumSwitch = document.getElementById('sum-switch-name');
  const sumKeycap = document.getElementById('sum-keycap-name');
  const sumBacklight = document.getElementById('sum-backlight-name');
  const sumQty = document.getElementById('sum-qty-count');
  const sumTax = document.getElementById('sum-tax');
  const sumTotal = document.getElementById('sum-total-price');
  const previewImg = document.getElementById('summary-preview-img');
  const previewChipTitle = document.getElementById('preview-chip-title');

  // Feedback Messages
  const errorAlert = document.getElementById('form-error-msg');
  const errorAlertText = document.getElementById('form-error-text');
  const successCard = document.getElementById('order-success-msg');

  // State Variables
  let currentModelPrice = 189.00;
  let currentQty = 1;
  const TAX_RATE = 0.08; // 8% Estimated Tax

  // 1. Math & Pricing Calculator
  function updatePricing() {
    const subtotal = currentModelPrice * currentQty;
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    if (sumTax) sumTax.textContent = '$' + tax.toFixed(2);
    if (sumTotal) sumTotal.textContent = '$' + total.toFixed(2);
    if (sumQty) sumQty.textContent = currentQty;
  }

  // 2. Model Selection Handler
  if (modelSelect) {
    modelSelect.addEventListener('change', (e) => {
      const selectedOption = e.target.options[e.target.selectedIndex];
      currentModelPrice = parseFloat(selectedOption.value) || 189.00;
      const modelName = selectedOption.getAttribute('data-name') || selectedOption.text.split('(')[0].trim();
      const layoutVal = selectedOption.getAttribute('data-layout');
      const imgSrc = selectedOption.getAttribute('data-img');

      if (sumModel) sumModel.textContent = `${modelName} ($${currentModelPrice.toFixed(2)})`;
      if (previewChipTitle) previewChipTitle.textContent = modelName;
      if (previewImg && imgSrc) previewImg.src = imgSrc;

      // Sync layout dropdown if applicable
      if (layoutSelect && layoutVal) {
        layoutSelect.value = layoutVal;
        if (sumLayout) sumLayout.textContent = layoutSelect.options[layoutSelect.selectedIndex].text;
      }

      updatePricing();
    });
  }

  // 3. Layout Selection Handler
  if (layoutSelect) {
    layoutSelect.addEventListener('change', (e) => {
      const selectedText = e.target.options[e.target.selectedIndex].text;
      if (sumLayout) sumLayout.textContent = selectedText;
    });
  }

  // 4. Actuation Switch Radios Handler
  switchRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      switchCards.forEach(card => card.classList.remove('active-card'));
      const parentLabel = radio.closest('.switch-radio-card');
      if (parentLabel) parentLabel.classList.add('active-card');

      const desc = radio.getAttribute('data-desc') || radio.value;
      if (sumSwitch) sumSwitch.textContent = desc;
    });
  });

  // 5. Keycap Theme Swatches Handler
  keycapButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      keycapButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const keycapFull = btn.getAttribute('data-keycap') || btn.getAttribute('data-name');
      const keycapShort = btn.getAttribute('data-name');

      if (sumKeycap) sumKeycap.textContent = keycapFull;
      if (keycapLegend) keycapLegend.textContent = keycapShort;
    });
  });

  // 6. Backlight Mode Handler
  if (backlightSelect) {
    backlightSelect.addEventListener('change', (e) => {
      if (sumBacklight) sumBacklight.textContent = e.target.value;
    });
  }

  // 7. Quantity Increment & Decrement Handlers
  if (btnDec && qtyInput) {
    btnDec.addEventListener('click', () => {
      let val = parseInt(qtyInput.value, 10) || 1;
      if (val > 1) {
        val -= 1;
        qtyInput.value = val;
        currentQty = val;
        updatePricing();
      }
    });
  }

  if (btnInc && qtyInput) {
    btnInc.addEventListener('click', () => {
      let val = parseInt(qtyInput.value, 10) || 1;
      if (val < 10) {
        val += 1;
        qtyInput.value = val;
        currentQty = val;
        updatePricing();
      }
    });
  }

  if (qtyInput) {
    qtyInput.addEventListener('input', () => {
      let val = parseInt(qtyInput.value, 10);
      if (isNaN(val) || val < 1) {
        val = 1;
      } else if (val > 10) {
        val = 10;
      }
      qtyInput.value = val;
      currentQty = val;
      updatePricing();
    });
  }

  // 8. Form Validation & Submission Handler
  placeOrderBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Reset error styling
    clearErrors();

    let hasErrors = false;
    const errorMessages = [];

    // Helper to validate and highlight fields
    function validateField(inputEl, condition, message) {
      const errorSpan = document.getElementById(`error-${inputEl.id}`);
      if (!condition) {
        inputEl.classList.add('input-error');
        if (errorSpan) errorSpan.textContent = message;
        errorMessages.push(message);
        hasErrors = true;
      } else {
        inputEl.classList.remove('input-error');
        if (errorSpan) errorSpan.textContent = '';
      }
    }

    // Name Validation
    if (custName) {
      validateField(
        custName,
        custName.value.trim().length >= 2,
        'Please provide your full legal name.'
      );
    }

    // Email Validation (Standard RFC regex)
    if (custEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      validateField(
        custEmail,
        emailRegex.test(custEmail.value.trim()),
        'Please enter a valid email address (e.g. name@domain.com).'
      );
    }

    // Phone Validation (Min 7 digits, allows international formatting)
    if (custPhone) {
      const phoneDigits = custPhone.value.replace(/[^0-9]/g, '');
      validateField(
        custPhone,
        phoneDigits.length >= 7,
        'Please enter a valid telephone contact number.'
      );
    }

    // Street Address Validation
    if (custAddress) {
      validateField(
        custAddress,
        custAddress.value.trim().length >= 5,
        'Please provide a complete street delivery address.'
      );
    }

    // City Validation
    if (custCity) {
      validateField(
        custCity,
        custCity.value.trim().length >= 2,
        'Please enter your city.'
      );
    }

    // Postal / Zip Code Validation
    if (custZip) {
      validateField(
        custZip,
        custZip.value.trim().length >= 3,
        'Please enter a valid postal or ZIP code.'
      );
    }

    // Quantity Validation
    if (currentQty < 1) {
      hasErrors = true;
      errorMessages.push('Quantity must be at least 1 unit.');
    }

    // If validation fails, display error alert
    if (hasErrors) {
      if (errorAlert) {
        errorAlert.classList.add('show');
        if (errorAlertText) {
          errorAlertText.textContent = errorMessages[0] || 'Please complete all required fields.';
        }
        errorAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // If validation passes, construct confirmation receipt
    if (errorAlert) errorAlert.classList.remove('show');

    // Generate pseudo-random order ID
    const randomOrderId = 'KF-' + Math.floor(100000 + Math.random() * 900000);
    const orderIdBadge = document.getElementById('order-id-badge');
    if (orderIdBadge) orderIdBadge.textContent = `ORDER #${randomOrderId}`;

    // Fill Receipt Summary
    const buyerName = custName.value.trim();
    const buyerEmail = custEmail.value.trim();
    const buyerShipping = `${custAddress.value.trim()}, ${custCity.value.trim()} ${custZip.value.trim()}`;

    const receiptGreeting = document.getElementById('success-buyer-greeting');
    if (receiptGreeting) {
      receiptGreeting.textContent = `Thank you, ${buyerName}! Your bespoke foundry build has been locked into the production queue.`;
    }

    const receiptModel = document.getElementById('receipt-model');
    if (receiptModel && sumModel) receiptModel.textContent = sumModel.textContent;

    const receiptSwitch = document.getElementById('receipt-switch');
    if (receiptSwitch && sumSwitch) receiptSwitch.textContent = sumSwitch.textContent;

    const receiptLayout = document.getElementById('receipt-layout');
    if (receiptLayout && sumLayout && sumKeycap) {
      receiptLayout.textContent = `${sumLayout.textContent} / ${sumKeycap.textContent}`;
    }

    const receiptPrice = document.getElementById('receipt-price');
    if (receiptPrice && sumTotal) receiptPrice.textContent = sumTotal.textContent;

    const receiptShip = document.getElementById('receipt-shipping');
    if (receiptShip) receiptShip.textContent = buyerShipping;

    const receiptEmailEl = document.getElementById('receipt-email');
    if (receiptEmailEl) receiptEmailEl.textContent = buyerEmail;

    // Reveal Success Card
    if (successCard) {
      successCard.classList.add('show');
      successCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Disable button to prevent duplicate submissions
    placeOrderBtn.disabled = true;
    placeOrderBtn.style.opacity = '0.6';
    placeOrderBtn.innerHTML = '<span class="icon">check</span><span>Order Confirmed</span>';
  });

  function clearErrors() {
    const errorInputs = orderForm.querySelectorAll('.input-error');
    errorInputs.forEach(el => el.classList.remove('input-error'));

    const fieldErrors = orderForm.querySelectorAll('.field-error');
    fieldErrors.forEach(span => span.textContent = '');

    if (errorAlert) errorAlert.classList.remove('show');
  }

  // Initial Calculation on Page Load
  updatePricing();
}
