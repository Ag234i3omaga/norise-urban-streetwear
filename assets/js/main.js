document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle functionality
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.site-nav');
  
  // Create mobile menu button
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'mobile-menu-btn';
  mobileMenuBtn.innerHTML = '☰';
  mobileMenuBtn.style.display = 'none';
  mobileMenuBtn.style.background = 'none';
  mobileMenuBtn.style.border = 'none';
  mobileMenuBtn.style.fontSize = '1.5rem';
  mobileMenuBtn.style.cursor = 'pointer';
  
  // Insert mobile menu button
  const headerActions = document.querySelector('.header-actions');
  if (headerActions) {
    headerActions.appendChild(mobileMenuBtn);
  }
  
  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', function() {
    nav.classList.toggle('mobile-open');
  });
  
  // Product image slider functionality
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(slider => {
    if (slider) {
      const images = slider.querySelectorAll('img');
      let currentIndex = 0;
      
      function showImage(index) {
        images.forEach((img, i) => {
          img.style.display = i === index ? 'block' : 'none';
        });
      }
      
      // Initialize slider
      if (images.length > 0) {
        showImage(currentIndex);
        
        // Auto-advance slider every 4 seconds
        try {
          setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
          }, 4000);
        } catch (error) {
          console.error("Slider error:", error);
        }
      }
    }
  });
  
  // Product actions functionality
  const addBtns = document.querySelectorAll('.add-btn');
  const removeBtns = document.querySelectorAll('.remove-btn');
  
  addBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const productItem = this.closest('.product-item');
      const productName = productItem.querySelector('h3').textContent;
      
      // Add visual feedback
      this.style.background = '#22c55e';
      this.style.color = '#fff';
      this.textContent = '✓';
      
      setTimeout(() => {
        this.style.background = '';
        this.style.color = '';
        this.textContent = '+';
      }, 1000);
      
      console.log(`Added ${productName} to cart`);
    });
  });
  
  removeBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const productItem = this.closest('.product-item');
      const productName = productItem.querySelector('h3').textContent;
      
      // Add visual feedback
      this.style.background = '#ef4444';
      this.style.color = '#fff';
      this.textContent = '✓';
      
      setTimeout(() => {
        this.style.background = '';
        this.style.color = '';
        this.textContent = '-';
      }, 1000);
      
      console.log(`Removed ${productName} from cart`);
    });
  });
  
  // Size selection functionality
  const sizeOptions = document.querySelectorAll('.size-options span');
  sizeOptions.forEach(size => {
    size.addEventListener('click', function() {
      // Remove active class from siblings
      const siblings = this.parentElement.querySelectorAll('span');
      siblings.forEach(sibling => {
        sibling.classList.remove('active');
        sibling.style.background = '';
        sibling.style.color = '';
      });
      
      // Add active class to clicked size
      this.classList.add('active');
      this.style.background = '#000';
      this.style.color = '#fff';
      this.style.fontWeight = '700';
    });
  });
  
  // Category navigation functionality
  const categoryLinks = document.querySelectorAll('.category-nav a');
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      categoryLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Filter products based on category (simplified)
      const category = this.textContent.toLowerCase();
      console.log(`Filtering products by: ${category}`);
    });
  });
  
  // Search functionality
  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      const searchTerm = prompt('Search for products:');
      if (searchTerm) {
        console.log(`Searching for: ${searchTerm}`);
        // Here you would implement actual search functionality
      }
    });
  }
  
  // Cart functionality
  const cartBtn = document.querySelector('.cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', function() {
      alert('Cart functionality would be implemented here');
    });
  }
  
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Collection card hover effects
  const collectionCards = document.querySelectorAll('.collection-card');
  collectionCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Category item hover effects
  const categoryItems = document.querySelectorAll('.category-item');
  categoryItems.forEach(item => {
    item.addEventListener('click', function() {
      const categoryName = this.querySelector('h3').textContent;
      console.log(`Navigating to ${categoryName} collection`);
      // Here you would navigate to the specific collection page
    });
  });
  
  // Announcement bar pause on hover
  const announcementBar = document.querySelector('.announcement-content');
  if (announcementBar) {
    announcementBar.addEventListener('mouseenter', function() {
      this.style.animationPlayState = 'paused';
    });
    
    announcementBar.addEventListener('mouseleave', function() {
      this.style.animationPlayState = 'running';
    });
  }
  
  // Error handling for images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      if (!this.src.includes('placeholder.jpg')) {
        console.log(`Failed to load image: ${this.src}`);
        this.src = 'assets/images/placeholder.jpg';
        this.alt = 'NoRise - Image not available';
      }
    });
  });
  
  // Responsive navigation handling
  function handleResize() {
    const width = window.innerWidth;
    
    if (width <= 768) {
      mobileMenuBtn.style.display = 'block';
      nav.style.display = nav.classList.contains('mobile-open') ? 'block' : 'none';
    } else {
      mobileMenuBtn.style.display = 'none';
      nav.style.display = 'block';
      nav.classList.remove('mobile-open');
    }
  }
  
  // Initial resize check
  handleResize();
  
  // Listen for window resize
  window.addEventListener('resize', handleResize);
  
  // Performance optimization: Lazy loading for images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });
    
    // Observe all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
  
  // Console welcome message
  console.log(`
    ███╗   ██╗ ██████╗ ██████╗ ██╗███████╗███████╗
    ████╗  ██║██╔═══██╗██╔══██╗██║██╔════╝██╔════╝
    ██╔██╗ ██║██║   ██║██████╔╝██║███████╗█████╗  
    ██║╚██╗██║██║   ██║██╔══██╗██║╚════██║██╔══╝  
    ██║ ╚████║╚██████╔╝██║  ██║██║███████║███████╗
    ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝
    
    Welcome to NoRise - Street Culture Redefined
    Stay Rad! 🛹
  `);
});

// Global error handler
window.addEventListener('error', function(e) {
  console.error('Global error:', e.error);
});

// Global unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(e) {
  console.error('Unhandled promise rejection:', e.reason);
});
