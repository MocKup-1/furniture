// Mobile menu toggle
document.querySelector('.mobile-menu-btn')?.addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Newsletter form submission
document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}! We'll keep you updated.`);
    this.reset();
});

// Product data for different categories
const productData = {
    carbins: [
        { id: 1, name: "Modern Cabin", price: 450, image: "carbins/1.jpg", description: "Stylish modern cabin with premium materials" },
        { id: 2, name: "Wooden Cabin", price: 380, image: "carbins/2.jpg", description: "Classic wooden cabin design" },
        { id: 3, name: "Ergonomic Cabin", price: 520, image: "carbins/3.jpg", description: "Comfortable ergonomic cabin" },
        { id: 4, name: "Modern Bookshelf Cabin", price: 290, image: "carbins/4.jpg", description: "Cabin with integrated bookshelf" },
        { id: 5, name: "L-Shaped Cabin", price: 499, image: "carbins/5.jpg", description: "Spacious L-shaped cabin" },
        { id: 6, name: "Glass Cabin", price: 420, image: "carbins/6.jpg", description: "Elegant glass cabin design" },
        { id: 7, name: "Modern Wardrobe Cabin", price: 550, image: "carbins/7.jpg", description: "Cabin with wardrobe space" },
        { id: 8, name: "Dining Cabin Set (4)", price: 1200, image: "carbins/8.jpg", description: "Complete dining cabin set" },
        { id: 9, name: "Entertainment Cabin", price: 650, image: "carbins/9.jpg", description: "Cabin with entertainment center" },
        { id: 10, name: "Velvet Cabin", price: 480, image: "carbins/10.jpg", description: "Luxury velvet cabin" }
    ],
    doors: [
        { id: 1, name: "Modern Door Shutter", price: 250, image: "door shutters/1.jpg", description: "Contemporary door shutter design" },
        { id: 2, name: "Wooden Door Shutter", price: 320, image: "door shutters/2.jpg", description: "Classic wooden door shutter" },
        { id: 3, name: "Office Door Shutter", price: 280, image: "door shutters/3.jpg", description: "Professional office door shutter" },
        { id: 4, name: "Bookshelf Door", price: 350, image: "door shutters/4.jpg", description: "Door with integrated bookshelf" },
        { id: 5, name: "L-Shaped Door", price: 420, image: "door shutters/5.jpg", description: "Unique L-shaped door design" },
        { id: 6, name: "Glass Door Shutter", price: 380, image: "door shutters/6.jpg", description: "Elegant glass door shutter" },
        { id: 7, name: "Wardrobe Door", price: 290, image: "door shutters/7.jpg", description: "Modern wardrobe door" },
        { id: 8, name: "Dining Room Door Set", price: 950, image: "door shutters/8.jpg", description: "Complete dining room door set" },
        { id: 9, name: "Entertainment Door", price: 520, image: "door shutters/9.jpg", description: "Door with entertainment features" },
        { id: 10, name: "Velvet Door Shutter", price: 450, image: "door shutters/10.jpg", description: "Luxury velvet door shutter" }
    ],
    frames: [
        { id: 1, name: "Modern Frame", price: 180, image: "frames/1.jpg", description: "Contemporary frame design" },
        { id: 2, name: "Wooden Frame", price: 150, image: "frames/2.jpg", description: "Classic wooden frame" },
        { id: 3, name: "Office Frame", price: 220, image: "frames/3.jpg", description: "Professional office frame" },
        { id: 4, name: "Bookshelf Frame", price: 190, image: "frames/4.jpg", description: "Frame with bookshelf features" },
        { id: 5, name: "L-Shaped Frame", price: 280, image: "frames/5.jpg", description: "Unique L-shaped frame" },
        { id: 6, name: "Glass Frame", price: 240, image: "frames/6.jpg", description: "Elegant glass frame" },
        { id: 7, name: "Wardrobe Frame", price: 320, image: "frames/7.jpg", description: "Modern wardrobe frame" },
        { id: 8, name: "Dining Frame Set", price: 750, image: "frames/8.jpg", description: "Complete dining frame set" },
        { id: 9, name: "Entertainment Frame", price: 420, image: "frames/9.jpg", description: "Frame with entertainment features" },
        { id: 10, name: "Velvet Frame", price: 380, image: "frames/10.jpg", description: "Luxury velvet frame" }
    ],
    wardrobes: [
        { id: 1, name: "Modern Wardrobe", price: 800, image: "wardrops/1.jpg", description: "Contemporary wardrobe design" },
        { id: 2, name: "Wooden Wardrobe", price: 750, image: "wardrops/2.jpg", description: "Classic wooden wardrobe" },
        { id: 3, name: "Office Wardrobe", price: 680, image: "wardrops/3.jpg", description: "Professional office wardrobe" },
        { id: 4, name: "Bookshelf Wardrobe", price: 850, image: "wardrops/4.jpg", description: "Wardrobe with bookshelf" },
        { id: 5, name: "L-Shaped Wardrobe", price: 950, image: "wardrops/5.jpg", description: "Spacious L-shaped wardrobe" },
        { id: 6, name: "Glass Wardrobe", price: 880, image: "wardrops/6.jpg", description: "Elegant glass wardrobe" },
        { id: 7, name: "Walk-in Wardrobe", price: 1200, image: "wardrops/7.jpg", description: "Modern walk-in wardrobe" },
        { id: 8, name: "Dressing Wardrobe Set", price: 1500, image: "wardrops/8.jpg", description: "Complete dressing wardrobe set" },
        { id: 9, name: "Entertainment Wardrobe", price: 1100, image: "wardrops/9.jpg", description: "Wardrobe with entertainment features" },
        { id: 10, name: "Velvet Wardrobe", price: 980, image: "wardrops/10.jpg", description: "Luxury velvet wardrobe" }
    ]
};

// Function to load products based on category
function loadProducts(category) {
    const gallery = document.querySelector('.gallery');
    if (!gallery) return;

    gallery.innerHTML = ''; // Clear existing products
    
    const products = productData[category] || [];
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price}</p>
                <p class="product-description">${product.description}</p>
                <a href="https://wa.me/256702130441?text=I'm%20interested%20in%20your%20${encodeURIComponent(product.name)}%20for%20$${product.price}%20-%20${encodeURIComponent(window.location.href)}" 
                   class="buy-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> INQUIRE
                </a>
            </div>
        `;
        gallery.appendChild(productElement);
    });
}

// Determine which page we're on and load appropriate products
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    let category = '';
    
    if (path.includes('carbins.html')) {
        category = 'carbins';
        document.querySelector('.main-title').textContent = 'Our Premium Cabin Collection';
    } else if (path.includes('door')) {
        category = 'doors';
        document.querySelector('.main-title').textContent = 'Our Premium Door Shutter Collection';
    } else if (path.includes('v.html') || path.includes('frames')) {
        category = 'frames';
        document.querySelector('.main-title').textContent = 'Our Premium Frame Collection';
    } else if (path.includes('wardrops')) {
        category = 'wardrobes';
        document.querySelector('.main-title').textContent = 'Our Premium Wardrobe Collection';
    }
    
    if (category) {
        loadProducts(category);
    }
});