
// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission Handler
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send this data to your server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your submission!');
    event.target.reset();
}

// Add form submit handlers to all forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
});

// Products Filter (if needed)
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const productCategory = product.dataset.category;
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Scroll to Top Button
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '↑';
scrollButton.className = 'scroll-to-top';
document.body.appendChild(scrollButton);

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide scroll button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Add this CSS to your styles.css
const style = document.createElement('style');
style.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #E53E3E;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: none;
        font-size: 20px;
        z-index: 1000;
    }
    
    .scroll-to-top:hover {
        background: #C53030;
    }
`;
document.head.appendChild(style);
