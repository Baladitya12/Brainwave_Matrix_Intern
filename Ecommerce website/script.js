// Product database with ratings, categories, and updated images
const products = {
    1: {
        id: 1,
        name: "Classic Denim Jacket",
        category: "men",
        price: 59.99,
        oldPrice: 79.99,
        description: "Our classic denim jacket is made from premium quality denim for durability and comfort. Features include a regular fit, button-front closure, and multiple pockets for functionality.",
        images: [
            "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { code: "#1a4b8c", name: "Dark Blue" },
            { code: "#000000", name: "Black" },
            { code: "#6b4423", name: "Brown" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        rating: 4.8,
        reviews: [
            { author: "Michael Johnson", rating: 5, text: "Excellent fit and premium quality denim. Definitely worth it!", date: "2026-05-15" },
            { author: "James L.", rating: 4, text: "Slightly heavy but very warm and stylish.", date: "2026-06-02" }
        ]
    },
    2: {
        id: 2,
        name: "Premium White T-Shirt",
        category: "men",
        price: 24.99,
        description: "Crafted from 100% organic cotton, this premium t-shirt offers exceptional softness and breathability. The relaxed fit makes it perfect for everyday wear.",
        images: [
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { code: "#ffffff", name: "White" },
            { code: "#000000", name: "Black" },
            { code: "#1a4b8c", name: "Navy" }
        ],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        reviews: [
            { author: "Alex Reed", rating: 5, text: "Super soft cotton, fits true to size. Bought 3 of them!", date: "2026-05-20" },
            { author: "Sarah M.", rating: 4, text: "Very comfortable, but shrinks slightly in hot wash.", date: "2026-05-28" }
        ]
    },
    3: {
        id: 3,
        name: "Casual Checkered Shirt",
        category: "men",
        price: 39.99,
        description: "This stylish checkered shirt features a comfortable regular fit with button-front closure and long sleeves. Perfect for layering or wearing on its own.",
        images: [
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { code: "#6b4423", name: "Brown" },
            { code: "#1a4b8c", name: "Blue" },
            { code: "#000000", name: "Black" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        rating: 4.4,
        reviews: [
            { author: "David K.", rating: 4, text: "Nice casual shirt. The colors are very vibrant.", date: "2026-04-18" }
        ]
    },
    4: {
        id: 4,
        name: "Genuine Leather Jacket",
        category: "men",
        price: 129.99,
        description: "Made from 100% genuine leather, this jacket offers both style and durability. Features include a zip-front closure, multiple pockets, and a comfortable fit.",
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { code: "#000000", name: "Black" },
            { code: "#6b4423", name: "Brown" }
        ],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.9,
        reviews: [
            { author: "David Chen", rating: 5, text: "Excellent leather! Smells authentic and looks incredible.", date: "2026-05-11" },
            { author: "Marcus G.", rating: 5, text: "Fits perfectly. Keeps wind completely out.", date: "2026-06-10" }
        ]
    },
    5: {
        id: 5,
        name: "Comfy Oversized Sweatshirt",
        category: "women",
        price: 44.99,
        description: "This oversized sweatshirt is made from a soft cotton blend for ultimate comfort. The relaxed fit and dropped shoulders create a stylish, casual look.",
        images: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { code: "#1a4b8c", name: "Navy" },
            { code: "#000000", name: "Black" },
            { code: "#6b4423", name: "Brown" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        rating: 4.6,
        reviews: [
            { author: "Jessica V.", rating: 5, text: "Super cozy, love the oversized look. Perfect for lounging.", date: "2026-06-03" }
        ]
    },
    6: {
        id: 6,
        name: "Slim Fit Chino Pants",
        category: "men",
        price: 49.99,
        description: "These slim fit chino pants are made from a stretch cotton blend for comfort and mobility. The modern fit works well for both casual and business-casual occasions.",
        images: [
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { code: "#6b4423", name: "Khaki" },
            { code: "#1a4b8c", name: "Navy" },
            { code: "#000000", name: "Black" }
        ],
        sizes: ["28", "30", "32", "34", "36"],
        rating: 4.3,
        reviews: [
            { author: "Emily Rodriguez", rating: 4, text: "Good slim fit, stretch fabric makes them very comfortable to sit in.", date: "2026-05-18" }
        ]
    },
    7: {
        id: 7,
        name: "Floral Summer Dress",
        category: "women",
        price: 39.99,
        oldPrice: 49.99,
        description: "This lightweight floral dress is perfect for warm weather. Made from breathable fabric with a flattering A-line silhouette and adjustable waist tie.",
        images: [
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { code: "#ff6b6b", name: "Coral" },
            { code: "#4ecdc4", name: "Teal" },
            { code: "#ffe66d", name: "Yellow" }
        ],
        sizes: ["XS", "S", "M", "L"],
        rating: 4.7,
        reviews: [
            { author: "Sarah Williams", rating: 5, text: "Incredibly light and elegant. Perfect summer vacation outfit!", date: "2026-06-08" },
            { author: "Claire D.", rating: 4, text: "Very pretty pattern. Flowy and fits nicely.", date: "2026-06-12" }
        ]
    },
    8: {
        id: 8,
        name: "Warm Winter Coat",
        category: "women",
        price: 89.99,
        description: "Stay warm in style with this insulated winter coat. Features include a detachable hood, multiple pockets, and a water-resistant outer shell.",
        images: [
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { code: "#000000", name: "Black" },
            { code: "#6b4423", name: "Camel" },
            { code: "#1a4b8c", name: "Navy" }
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        rating: 4.8,
        reviews: [
            { author: "Sophia T.", rating: 5, text: "Excellent warmth. Wore it in freezing temps and felt perfectly cozy.", date: "2026-06-01" }
        ]
    },
    9: {
        id: 9,
        name: "Minimalist Gold Watch",
        category: "accessories",
        price: 149.99,
        oldPrice: 199.99,
        description: "Elevate your daily wristwear with this premium gold watch. Features a minimalist interface, stainless steel construction, and scratch-resistant sapphire glass.",
        images: [
            "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { code: "#d4af37", name: "Gold" },
            { code: "#c0c0c0", name: "Silver" },
            { code: "#000000", name: "Matte Black" }
        ],
        sizes: ["One Size"],
        rating: 4.9,
        reviews: [
            { author: "Jordan P.", rating: 5, text: "Incredibly sleek and elegant. I wear it daily, matches everything.", date: "2026-05-24" }
        ]
    },
    10: {
        id: 10,
        name: "Canvas Leather Backpack",
        category: "accessories",
        price: 79.99,
        description: "A rugged, commuter-friendly backpack crafted from water-resistant canvas and full-grain leather straps. Includes a padded 15-inch laptop sleeve.",
        images: [
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=800&q=80"
        ],
        colors: [
            { code: "#8c6b44", name: "Khaki Brown" },
            { code: "#353d30", name: "Olive Drab" },
            { code: "#2c302e", name: "Charcoal" }
        ],
        sizes: ["One Size"],
        rating: 4.6,
        reviews: [
            { author: "Robert T.", rating: 4, text: "Spacious backpack, straps are very comfortable on long walks.", date: "2026-05-30" }
        ]
    }
};

// State Variables (with LocalStorage)
let cart = JSON.parse(localStorage.getItem('ut_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('ut_wishlist')) || [];
let currentTheme = localStorage.getItem('ut_theme') || 'light';
let filters = { search: '', category: 'all', sort: 'default' };

// Selected configurations in Quick View modal
let qvSelectedColor = '';
let qvSelectedColorName = '';
let qvSelectedSize = '';
let qvActiveProduct = null;

// Checkout Promo Discount System
let promoDiscount = 0;
let appliedPromoCode = "";

// Element Selectors
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const mobileSearchInput = document.getElementById('mobile-search-input');
const categoryTabs = document.querySelectorAll('.category-tab');
const sortSelect = document.getElementById('sort-select');
const themeToggle = document.getElementById('theme-toggle');

// Drawers & Modals
const cartDrawer = document.getElementById('cart-drawer');
const cartTrigger = document.getElementById('cart-trigger');
const closeCartDrawer = document.getElementById('close-cart-drawer');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const cartDrawerItems = document.getElementById('cart-drawer-items');
const drawerSubtotal = document.getElementById('drawer-subtotal');
const drawerTotal = document.getElementById('drawer-total');

const wishlistDrawer = document.getElementById('wishlist-drawer');
const wishlistTrigger = document.getElementById('wishlist-trigger');
const closeWishlistDrawer = document.getElementById('close-wishlist-drawer');
const wishlistDrawerOverlay = document.getElementById('wishlist-drawer-overlay');
const wishlistDrawerItems = document.getElementById('wishlist-drawer-items');

const quickViewModal = document.getElementById('quick-view-modal');
const quickViewClose = document.getElementById('quick-view-close');
const quickViewOverlay = document.getElementById('quick-view-overlay');

const checkoutModal = document.getElementById('checkout-modal');
const closeCheckoutModal = document.getElementById('close-checkout-modal');
const checkoutModalOverlay = document.getElementById('checkout-modal-overlay');
const openCheckoutBtn = document.getElementById('open-checkout-btn');

// Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const navMenu = document.getElementById('nav-menu');

// Toast & Checkout items
const toast = document.getElementById('toast');
const categoryCards = document.querySelectorAll('.category-card');

/* Theme Loader */
function initTheme() {
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-theme');
        themeToggle.textContent = '🌙';
    }
}

themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        currentTheme = 'light';
        themeToggle.textContent = '🌙';
    } else {
        document.body.classList.add('dark-theme');
        currentTheme = 'dark';
        themeToggle.textContent = '☀️';
    }
    localStorage.setItem('ut_theme', currentTheme);
});

/* Wishlist Badges & Counts */
function updateWishlistHeader() {
    const counts = document.querySelectorAll('.wishlist-count');
    counts.forEach(c => c.textContent = wishlist.length);
}

function toggleWishlist(productId) {
    productId = parseInt(productId);
    const index = wishlist.indexOf(productId);
    if (index === -1) {
        wishlist.push(productId);
        showToast("Added to wishlist! ❤️", "success");
    } else {
        wishlist.splice(index, 1);
        showToast("Removed from wishlist. 💔");
    }
    localStorage.setItem('ut_wishlist', JSON.stringify(wishlist));
    updateWishlistHeader();
    renderProducts();
    renderWishlistItems();
}

/* Cart Badges & Counts */
function updateCartHeader() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const counts = document.querySelectorAll('.cart-count');
    counts.forEach(c => c.textContent = totalItems);
}

function addToCart(id, name, price, image, color, colorName, size) {
    const existing = cart.find(item => 
        item.id === id && 
        item.color === color && 
        item.size === size
    );
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id, name, price, image, color, colorName, size, quantity: 1
        });
    }
    showToast("Added to shopping bag! 🛒", "success");
    localStorage.setItem('ut_cart', JSON.stringify(cart));
    updateCartHeader();
    renderCartItems();
}

/* Dynamic Catalog Rendering */
function renderProducts() {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';
    
    // Convert products dictionary to array
    let list = Object.values(products);
    
    // Filter: Search
    if (filters.search.trim()) {
        const query = filters.search.toLowerCase();
        list = list.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.description.toLowerCase().includes(query)
        );
    }
    
    // Filter: Category
    if (filters.category !== 'all') {
        list = list.filter(p => p.category === filters.category);
    }
    
    // Sorting
    if (filters.sort === 'price-low') {
        list.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'price-high') {
        list.sort((a, b) => b.price - a.price);
    } else if (filters.sort === 'rating') {
        list.sort((a, b) => b.rating - a.rating);
    }
    
    if (list.length === 0) {
        productsGrid.innerHTML = '<div class="empty-state-text">No trending styles match your search.</div>';
        return;
    }
    
    list.forEach(p => {
        const isWishlisted = wishlist.includes(p.id);
        const hasOldPrice = p.oldPrice ? true : false;
        
        let starsHTML = '';
        const fullStars = Math.floor(p.rating);
        for(let i=0; i<5; i++) {
            starsHTML += i < fullStars ? '★' : '☆';
        }
        
        const card = document.createElement('div');
        card.className = 'product-card fade-in';
        card.innerHTML = `
            ${hasOldPrice ? `<div class="product-badge">Sale</div>` : (p.id === 9 ? `<div class="product-badge" style="background-color: var(--accent);">New</div>` : '')}
            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${p.id}" aria-label="Add to wishlist">❤️</button>
            <div class="product-img-container">
                <img src="${p.images[0]}" alt="${p.name}" class="product-img" loading="lazy">
                <button class="quick-view" data-id="${p.id}">Quick View</button>
            </div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <div class="product-meta-row">
                    <div class="product-grid-rating">
                        <span>${starsHTML}</span>
                        <span class="product-grid-rating-val">${p.rating}</span>
                    </div>
                    <div class="product-colors">
                        ${p.colors.map(c => `<span class="color-option" style="background-color: ${c.code}" title="${c.name}"></span>`).join('')}
                    </div>
                </div>
                <div class="price">
                    $${p.price.toFixed(2)}
                    ${hasOldPrice ? `<span class="old-price">$${p.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="add-to-cart-grid add-to-cart" data-id="${p.id}">Add to Bag</button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
    
    // Attach event listeners
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleWishlist(btn.getAttribute('data-id'));
        });
    });
    
    document.querySelectorAll('.quick-view').forEach(btn => {
        btn.addEventListener('click', () => {
            openQuickView(btn.getAttribute('data-id'));
        });
    });
    
    document.querySelectorAll('.add-to-cart-grid').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const p = products[id];
            // default to first color and size
            addToCart(p.id, p.name, p.price, p.images[0], p.colors[0].code, p.colors[0].name, p.sizes[0]);
        });
    });
}

/* Render Cart Items */
function renderCartItems() {
    if (cart.length === 0) {
        cartDrawerItems.innerHTML = '<div class="empty-state-text">Your bag is empty.</div>';
        drawerSubtotal.textContent = '$0.00';
        drawerTotal.textContent = '$0.00';
        return;
    }
    
    let subtotal = 0;
    cartDrawerItems.innerHTML = '';
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <div class="cart-item-img" style="background-image: url('${item.image}')"></div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="cart-item-variants">
                    <span class="cart-item-color" style="background-color: ${item.color}" title="${item.colorName}"></span>
                    <span class="cart-item-size">${item.size}</span>
                </div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <div class="qty-control">
                        <button class="qty-btn minus-qty" data-index="${index}">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn plus-qty" data-index="${index}">+</button>
                    </div>
                    <button class="remove-cart-item" data-index="${index}" aria-label="Remove item">🗑️</button>
                </div>
            </div>
        `;
        cartDrawerItems.appendChild(row);
    });
    
    drawerSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    // shipping free if subtotal > 75
    const shipping = subtotal > 75 ? 0 : 5.00;
    document.getElementById('drawer-shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    drawerTotal.textContent = `$${(subtotal + shipping).toFixed(2)}`;
    
    // Attach listeners
    document.querySelectorAll('.minus-qty').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-index'));
            if (cart[idx].quantity > 1) {
                cart[idx].quantity--;
            } else {
                cart.splice(idx, 1);
            }
            saveCart();
        });
    });
    
    document.querySelectorAll('.plus-qty').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-index'));
            cart[idx].quantity++;
            saveCart();
        });
    });
    
    document.querySelectorAll('.remove-cart-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-index'));
            cart.splice(idx, 1);
            saveCart();
        });
    });
}

function saveCart() {
    localStorage.setItem('ut_cart', JSON.stringify(cart));
    updateCartHeader();
    renderCartItems();
}

/* Render Wishlist Items */
function renderWishlistItems() {
    if (wishlist.length === 0) {
        wishlistDrawerItems.innerHTML = '<div class="empty-state-text">No saved favorites.</div>';
        return;
    }
    
    wishlistDrawerItems.innerHTML = '';
    wishlist.forEach((id) => {
        const p = products[id];
        if (!p) return;
        
        const row = document.createElement('div');
        row.className = 'wishlist-item';
        row.innerHTML = `
            <div class="wishlist-item-img" style="background-image: url('${p.images[0]}')"></div>
            <div class="wishlist-item-info">
                <h4>${p.name}</h4>
                <div class="wishlist-item-price">$${p.price.toFixed(2)}</div>
            </div>
            <div class="wishlist-actions">
                <button class="wishlist-to-cart" data-id="${p.id}">Move to Bag</button>
                <button class="remove-wishlist-item" data-id="${p.id}">Remove</button>
            </div>
        `;
        wishlistDrawerItems.appendChild(row);
    });
    
    // listeners
    document.querySelectorAll('.wishlist-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const p = products[id];
            addToCart(p.id, p.name, p.price, p.images[0], p.colors[0].code, p.colors[0].name, p.sizes[0]);
            // Remove from wishlist
            const idx = wishlist.indexOf(id);
            wishlist.splice(idx, 1);
            localStorage.setItem('ut_wishlist', JSON.stringify(wishlist));
            updateWishlistHeader();
            renderWishlistItems();
            renderProducts();
        });
    });
    
    document.querySelectorAll('.remove-wishlist-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            toggleWishlist(id);
        });
    });
}

/* Quick View Render */
function openQuickView(productId) {
    productId = parseInt(productId);
    qvActiveProduct = products[productId];
    if (!qvActiveProduct) return;
    
    const p = qvActiveProduct;
    qvSelectedColor = p.colors[0].code;
    qvSelectedColorName = p.colors[0].name;
    qvSelectedSize = p.sizes[0];
    
    // Set title and images
    document.getElementById('quick-view-title').textContent = p.name;
    document.getElementById('quick-view-main-image').src = p.images[0];
    
    // Prices
    let priceHTML = `$${p.price.toFixed(2)}`;
    if (p.oldPrice) {
        priceHTML += ` <span class="quick-view-old-price">$${p.oldPrice.toFixed(2)}</span>`;
    }
    document.getElementById('quick-view-price').innerHTML = priceHTML;
    
    // Ratings
    let starsHTML = '';
    const fullStars = Math.floor(p.rating);
    for(let i=0; i<5; i++) {
        starsHTML += i < fullStars ? '★' : '☆';
    }
    document.getElementById('quick-view-rating-stars').textContent = starsHTML;
    document.getElementById('quick-view-rating-value').textContent = `(${p.rating.toFixed(1)} / 5 from ${p.reviews.length} reviews)`;
    
    document.getElementById('quick-view-description').textContent = p.description;
    
    // Thumbnails
    const thumbContainer = document.getElementById('thumbnail-container');
    thumbContainer.innerHTML = '';
    p.images.forEach((img, idx) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.alt = `thumbnail-${idx}`;
        thumb.className = `thumbnail ${idx === 0 ? 'active' : ''}`;
        thumb.addEventListener('click', () => {
            document.getElementById('quick-view-main-image').src = img;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        thumbContainer.appendChild(thumb);
    });
    
    // Colors
    const colorContainer = document.getElementById('quick-view-color-buttons');
    colorContainer.innerHTML = '';
    p.colors.forEach((c, idx) => {
        const cBtn = document.createElement('button');
        cBtn.className = `color-btn ${idx === 0 ? 'active' : ''}`;
        cBtn.style.backgroundColor = c.code;
        cBtn.title = c.name;
        cBtn.addEventListener('click', () => {
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            cBtn.classList.add('active');
            qvSelectedColor = c.code;
            qvSelectedColorName = c.name;
        });
        colorContainer.appendChild(cBtn);
    });
    
    // Sizes
    const sizeContainer = document.getElementById('quick-view-size-buttons');
    sizeContainer.innerHTML = '';
    p.sizes.forEach((s, idx) => {
        const sBtn = document.createElement('button');
        sBtn.className = `size-btn ${idx === 0 ? 'active' : ''}`;
        sBtn.textContent = s;
        sBtn.addEventListener('click', () => {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            sBtn.classList.add('active');
            qvSelectedSize = s;
        });
        sizeContainer.appendChild(sBtn);
    });
    
    // Wishlist indicator state
    const quickWishBtn = document.getElementById('quick-view-wishlist-btn');
    if (wishlist.includes(p.id)) {
        quickWishBtn.classList.add('active');
    } else {
        quickWishBtn.classList.remove('active');
    }
    
    // Render Quick View Reviews List
    renderQuickViewReviews();
    
    // Display Modal
    quickViewModal.style.display = 'flex';
}

function renderQuickViewReviews() {
    const listElem = document.getElementById('quick-view-reviews-list');
    listElem.innerHTML = '';
    if (qvActiveProduct.reviews.length === 0) {
        listElem.innerHTML = '<p class="text-muted text-sm">No reviews yet. Be the first to review!</p>';
        return;
    }
    
    qvActiveProduct.reviews.forEach(r => {
        let stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
        const item = document.createElement('div');
        item.className = 'review-item';
        item.innerHTML = `
            <div class="review-header">
                <span class="review-author">${r.author}</span>
                <span class="review-rating">${stars}</span>
            </div>
            <p class="review-text">${r.text}</p>
        `;
        listElem.appendChild(item);
    });
}

// Add Review listener
const writeReviewForm = document.getElementById('write-review-form');
let reviewRatingInput = 5;

// Star selection click handler
const reviewStars = document.querySelectorAll('#star-rating-select span');
reviewStars.forEach(star => {
    star.addEventListener('click', () => {
        const val = parseInt(star.getAttribute('data-value'));
        reviewRatingInput = val;
        reviewStars.forEach(s => {
            if (parseInt(s.getAttribute('data-value')) <= val) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});

writeReviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!qvActiveProduct) return;
    
    const authorVal = document.getElementById('review-author').value.trim();
    const textVal = document.getElementById('review-text').value.trim();
    
    if (!authorVal || !textVal) return;
    
    const newRev = {
        author: authorVal,
        rating: reviewRatingInput,
        text: textVal,
        date: new Date().toISOString().split('T')[0]
    };
    
    qvActiveProduct.reviews.unshift(newRev);
    
    // Recalculate average rating
    const totalRating = qvActiveProduct.reviews.reduce((sum, r) => sum + r.rating, 0);
    qvActiveProduct.rating = totalRating / qvActiveProduct.reviews.length;
    
    // Reset Form
    writeReviewForm.reset();
    reviewRatingInput = 5;
    reviewStars.forEach(s => s.classList.add('active'));
    
    // Re-render
    renderQuickViewReviews();
    renderProducts();
    showToast("Review submitted successfully! ⭐", "success");
    
    // Update count in quick view
    document.getElementById('quick-view-rating-value').textContent = `(${qvActiveProduct.rating.toFixed(1)} / 5 from ${qvActiveProduct.reviews.length} reviews)`;
    
    // Re-draw quick view stars
    let starsHTML = '';
    const fullStars = Math.floor(qvActiveProduct.rating);
    for(let i=0; i<5; i++) {
        starsHTML += i < fullStars ? '★' : '☆';
    }
    document.getElementById('quick-view-rating-stars').textContent = starsHTML;
});

// Quick view Wishlist trigger
document.getElementById('quick-view-wishlist-btn').addEventListener('click', () => {
    if (qvActiveProduct) {
        toggleWishlist(qvActiveProduct.id);
        const quickWishBtn = document.getElementById('quick-view-wishlist-btn');
        quickWishBtn.classList.toggle('active');
    }
});

// Quick View add-to-bag trigger
document.getElementById('quick-view-add-to-cart').addEventListener('click', () => {
    if (qvActiveProduct) {
        addToCart(qvActiveProduct.id, qvActiveProduct.name, qvActiveProduct.price, qvActiveProduct.images[0], qvSelectedColor, qvSelectedColorName, qvSelectedSize);
        quickViewModal.style.display = 'none';
    }
});

/* Live Search Logic */
function handleSearch(e) {
    filters.search = e.target.value;
    renderProducts();
}
if(searchInput) searchInput.addEventListener('keyup', handleSearch);
if(mobileSearchInput) mobileSearchInput.addEventListener('keyup', handleSearch);

/* Category Tabs Logic */
categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        filters.category = tab.getAttribute('data-category');
        renderProducts();
    });
});

// Handle click on categories section cards
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const cat = card.getAttribute('data-category');
        // Activate category tab
        categoryTabs.forEach(t => {
            if(t.getAttribute('data-category') === cat) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });
        filters.category = cat;
        renderProducts();
    });
});

/* Sort Options Logic */
if(sortSelect) {
    sortSelect.addEventListener('change', (e) => {
        filters.sort = e.target.value;
        renderProducts();
    });
}

/* Modals & Drawers Toggles */
// Cart Drawer
cartTrigger.addEventListener('click', () => {
    cartDrawer.classList.add('open');
    renderCartItems();
});
closeCartDrawer.addEventListener('click', () => cartDrawer.classList.remove('open'));
cartDrawerOverlay.addEventListener('click', () => cartDrawer.classList.remove('open'));

// Wishlist Drawer
wishlistTrigger.addEventListener('click', () => {
    wishlistDrawer.classList.add('open');
    renderWishlistItems();
});
closeWishlistDrawer.addEventListener('click', () => wishlistDrawer.classList.remove('open'));
wishlistDrawerOverlay.addEventListener('click', () => wishlistDrawer.classList.remove('open'));

// Quick View Close
quickViewClose.addEventListener('click', () => quickViewModal.style.display = 'none');
quickViewOverlay.addEventListener('click', () => quickViewModal.style.display = 'none');

// Mobile Nav Menu Toggle
menuToggle.addEventListener('click', () => navMenu.classList.add('open'));
closeMenu.addEventListener('click', () => navMenu.classList.remove('open'));
// Close menu when clicking items
document.querySelectorAll('.nav-menu ul li a').forEach(a => {
    a.addEventListener('click', () => navMenu.classList.remove('open'));
});

/* checkout simulation logic */
let checkoutSubtotal = 0;
let checkoutTotal = 0;

openCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast("Your bag is empty! 🛍️");
        return;
    }
    // Close Drawer
    cartDrawer.classList.remove('open');
    // Open Modal
    checkoutModal.style.display = 'flex';
    setupCheckoutStep(1);
});

closeCheckoutModal.addEventListener('click', () => checkoutModal.style.display = 'none');
checkoutModalOverlay.addEventListener('click', () => checkoutModal.style.display = 'none');

function setupCheckoutStep(stepNum) {
    // Stepper header
    document.querySelectorAll('.stepper .step').forEach(step => {
        const val = parseInt(step.getAttribute('data-step'));
        if (val < stepNum) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (val === stepNum) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
    
    // Stepper body panels
    document.querySelectorAll('.checkout-step-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(`checkout-step-${stepNum}`).classList.add('active');
    
    if (stepNum === 1) {
        renderCheckoutSummary();
    }
}

function renderCheckoutSummary() {
    const container = document.getElementById('checkout-summary-items');
    container.innerHTML = '';
    
    checkoutSubtotal = 0;
    cart.forEach(item => {
        const cost = item.price * item.quantity;
        checkoutSubtotal += cost;
        
        const row = document.createElement('div');
        row.className = 'checkout-summary-item';
        row.innerHTML = `
            <div>
                <span class="checkout-summary-name">${item.name} (x${item.quantity})</span>
                <div class="checkout-summary-variant">${item.colorName} / ${item.size}</div>
            </div>
            <strong>$${cost.toFixed(2)}</strong>
        `;
        container.appendChild(row);
    });
    
    updateCheckoutPrices();
}

function updateCheckoutPrices() {
    const discount = checkoutSubtotal * promoDiscount;
    const shipping = checkoutSubtotal > 75 ? 0 : 5.00;
    checkoutTotal = checkoutSubtotal - discount + shipping;
    
    document.getElementById('checkout-subtotal').textContent = `$${checkoutSubtotal.toFixed(2)}`;
    
    const discRow = document.getElementById('discount-row');
    if (discount > 0) {
        discRow.style.display = 'flex';
        document.getElementById('checkout-discount').textContent = `-$${discount.toFixed(2)}`;
    } else {
        discRow.style.display = 'none';
    }
    
    document.getElementById('checkout-shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('checkout-total').textContent = `$${checkoutTotal.toFixed(2)}`;
}

// Promo Code Apply
document.getElementById('apply-promo-btn').addEventListener('click', () => {
    const input = document.getElementById('promo-input').value.trim().toUpperCase();
    const feedback = document.getElementById('promo-feedback');
    
    if (input === 'WELCOME10') {
        promoDiscount = 0.10;
        appliedPromoCode = 'WELCOME10';
        feedback.style.color = 'var(--success)';
        feedback.textContent = 'Promo code WELCOME10 (10% OFF) applied!';
    } else if (input === 'TRENDY20') {
        promoDiscount = 0.20;
        appliedPromoCode = 'TRENDY20';
        feedback.style.color = 'var(--success)';
        feedback.textContent = 'Promo code TRENDY20 (20% OFF) applied!';
    } else {
        promoDiscount = 0;
        appliedPromoCode = '';
        feedback.style.color = 'var(--secondary)';
        feedback.textContent = 'Invalid promo code.';
    }
    updateCheckoutPrices();
});

// Stepper Button Links
document.querySelectorAll('.checkout-step-panel .next-step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const nextStep = parseInt(btn.getAttribute('data-next'));
        setupCheckoutStep(nextStep);
    });
});

document.querySelectorAll('.checkout-step-panel .prev-step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const prevStep = parseInt(btn.getAttribute('data-prev'));
        setupCheckoutStep(prevStep);
    });
});

// Step 2 Address Form submit
document.getElementById('checkout-step-2').addEventListener('submit', (e) => {
    e.preventDefault();
    setupCheckoutStep(3);
});

// Step 3 Payment Form submit & Card Preview sync
const cardName = document.getElementById('card-name');
const cardNumber = document.getElementById('card-number');
const cardExpiry = document.getElementById('card-expiry');

cardName.addEventListener('input', (e) => {
    const val = e.target.value.trim().toUpperCase() || 'NAME ON CARD';
    document.getElementById('card-holder-preview').textContent = val;
});

cardNumber.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '');
    // format as 4 group blocks
    let formatted = [];
    for (let i = 0; i < val.length; i += 4) {
        formatted.push(val.substring(i, i + 4));
    }
    e.target.value = formatted.join(' ');
    
    const preview = e.target.value || '•••• •••• •••• ••••';
    document.getElementById('card-number-preview').textContent = preview;
});

cardExpiry.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 2) {
        val = val.substring(0, 2) + '/' + val.substring(2, 4);
    }
    e.target.value = val;
    document.getElementById('card-expiry-preview').textContent = val || 'MM/YY';
});

document.getElementById('checkout-step-3').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate payment authorization
    const mockOrderNum = 'UT-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('order-number-display').textContent = mockOrderNum;
    
    // Clear cart completely
    cart = [];
    saveCart();
    
    // Go to step 4
    setupCheckoutStep(4);
});

document.getElementById('close-success-btn').addEventListener('click', () => {
    checkoutModal.style.display = 'none';
});

/* Toast Notification Utility */
function showToast(message, type = 'info') {
    toast.textContent = message;
    if (type === 'success') {
        toast.classList.add('toast-success');
    } else {
        toast.classList.remove('toast-success');
    }
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2800);
}

/* Newsletter submit */
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast("Thanks for subscribing! Check your email for deals. 📬", "success");
        newsletterForm.reset();
    });
}

// Initialise Application
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateCartHeader();
    updateWishlistHeader();
    renderProducts();
    renderCartItems();
    renderWishlistItems();
});