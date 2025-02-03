// Your products data - Add your products here
const products = {
    'corner-sofa': {
        title: 'Corner Sofas',
        items: [
            {
                title: 'Modern Corner Sofa',
                description: 'Luxurious and comfortable corner sofa perfect for your living space. Features premium fabric, modern design, and exceptional comfort.',
                price: 'Starting from £400',
                category: 'Corner Sofas',
                tags: ['corner', 'sofa', 'modern', 'luxury', 'comfortable']
            }
        ]
    },
    'u-shape-sofa': {
        title: 'U Shape Sofas',
        items: [
            {
                title: 'Premium U Shape Sofa',
                description: 'Spacious and elegant U-shaped sofa perfect for large family rooms. Features high-quality materials and contemporary design.',
                price: 'Starting from £520',
                category: 'U Shape Sofas',
                tags: ['u-shape', 'sofa', 'premium', 'spacious', 'elegant']
            }
        ]
    },
    'wooden-effect': {
        title: 'Wooden Effect Panels',
        items: [
            {
                title: 'Modern Wooden Effect Panels',
                description: 'Transform your walls with our premium wooden effect panels. Perfect for adding warmth and style to any room.',
                price: 'Starting from £150',
                category: 'Wall Panels',
                tags: ['wooden', 'effect', 'panels', 'modern', 'wall']
            }
        ]
    },
    'wooden-acoustic': {
        title: 'Wooden Acoustic Panels',
        items: [
            {
                title: 'Designer Acoustic Panels',
                description: 'Premium wooden acoustic panels that combine style with sound control. Perfect for creating a peaceful environment.',
                price: 'Starting from £210',
                category: 'Wall Panels',
                tags: ['wooden', 'acoustic', 'panels', 'designer', 'sound']
            }
        ]
    },
    'king-bed': {
        title: 'King Size Beds',
        items: [
            {
                title: 'Luxury King Size Bed',
                description: 'Experience ultimate comfort with our premium king size bed. Features elegant design, sturdy construction, and luxurious upholstery perfect for your master bedroom.',
                price: 'Starting from £200',
                category: 'Beds',
                tags: ['king', 'bed', 'luxury', 'comfortable']
            }
        ]
    },
    'double-bed': {
        title: 'Double Beds',
        items: [
            {
                title: 'Modern Double Bed',
                description: 'Stylish and comfortable double bed perfect for any bedroom. Features contemporary design, quality materials, and durable construction for long-lasting comfort.',
                price: 'Starting from £200',
                category: 'Beds',
                tags: ['double', 'bed', 'modern', 'stylish']
            }
        ]
    },
    'mattress': {
        title: 'Orthopedic Mattresses',
        items: [
            {
                title: 'Premium Orthopedic Mattress',
                description: 'Experience superior comfort and support with our orthopedic mattress. Designed to provide optimal spine alignment and pressure relief for a better night\'s sleep.',
                price: 'Starting from £200',
                category: 'Mattresses',
                tags: ['orthopedic', 'mattress', 'premium', 'comfort']
            }
        ]
    },
    'marble-dining': {
        title: 'Marble Dining',
        items: [
            {
                title: 'Luxury Marble Dining Set',
                description: 'Elegant marble dining set featuring a stunning marble tabletop and luxurious chairs. Perfect for creating a sophisticated dining experience in your home.',
                price: 'Starting from £850',
                category: 'Dining Sets',
                tags: ['marble', 'dining', 'luxury', 'elegant']
            }
        ]
    },
    'oxford-dining': {
        title: 'Oxford Dining',
        items: [
            {
                title: 'Classic Oxford Dining Set',
                description: 'Traditional Oxford-style dining set combining timeless design with modern comfort. Features high-quality materials and expert craftsmanship.',
                price: 'Starting from £350',
                category: 'Dining Sets',
                tags: ['oxford', 'dining', 'classic', 'traditional']
            }
        ]
    }
};

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-4';
    
    // Create a unique gallery name for this product
    const galleryName = `gallery-${product.title.toLowerCase().replace(/\s+/g, '-')}`;
    
    // Create carousel HTML
    const carouselId = `carousel-${product.title.toLowerCase().replace(/\s+/g, '-')}`;
    const carouselHTML = `
        <div class="card h-100">
            <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    ${product.images.map((img, index) => `
                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                            <a href="${img}" 
                               data-fancybox="${galleryName}"
                               data-caption="${product.title} - Image ${index + 1}">
                                <img src="${img}" 
                                     class="d-block w-100" 
                                     alt="${product.title} - Image ${index + 1}" 
                                     onerror="this.style.display='none'"
                                     style="cursor: pointer;">
                            </a>
                        </div>
                    `).join('')}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                <div class="carousel-indicators">
                    ${product.images.map((_, index) => `
                        <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''} aria-label="Slide ${index + 1}"></button>
                    `).join('')}
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text description">${product.description}</p>
                <p class="card-text price">£${product.price}</p>
                <div class="card-actions">
                    <a href="https://wa.me/447341008955" class="btn btn-primary" target="_blank">
                        <i class="fab fa-whatsapp"></i> Contact on WhatsApp
                    </a>
                    <a href="tel:+447366435504" class="btn btn-outline-primary">
                        <i class="fas fa-phone"></i> Call Us
                    </a>
                </div>
            </div>
        </div>
    `;
    
    card.innerHTML = carouselHTML;
    return card;
}

function addImagesToCarousel(carouselId, imagePath, count) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) {
        console.error(`Carousel ${carouselId} not found`);
        return;
    }

    const carouselInner = carousel.querySelector('.carousel-inner');
    const indicators = carousel.querySelector('.carousel-indicators');
    const galleryName = carouselInner.getAttribute('data-fancybox');

    // Clear existing items except the first one
    const existingItems = carouselInner.querySelectorAll('.carousel-item:not(:first-child)');
    existingItems.forEach(item => item.remove());

    // Clear existing indicators except the first one
    const existingIndicators = indicators.querySelectorAll('button:not(:first-child)');
    existingIndicators.forEach(indicator => indicator.remove());

    // Add remaining images (2 to 20)
    for (let i = 2; i <= count; i++) {
        const imageSrc = `${imagePath}/image-${i}.jpg`;
        
        // Create carousel item
        const item = document.createElement('div');
        item.className = 'carousel-item';
        
        // Create Fancybox link
        const link = document.createElement('a');
        link.href = imageSrc;
        link.setAttribute('data-fancybox', galleryName);
        
        // Create image
        const img = document.createElement('img');
        img.src = imageSrc;
        img.className = 'product-image';
        img.alt = `Product View ${i}`;
        
        // Add loading="lazy" for better performance
        img.loading = 'lazy';
        
        // Add image to link
        link.appendChild(img);
        
        // Add link to carousel item
        item.appendChild(link);
        
        // Add carousel item to carousel
        carouselInner.appendChild(item);
        
        // Add indicator
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute('data-bs-target', `#${carouselId}`);
        button.setAttribute('data-bs-slide-to', i - 1);
        indicators.appendChild(button);

        // Log successful image load
        img.onload = () => console.log(`Loaded image ${i} for ${carouselId}`);
        img.onerror = () => console.error(`Failed to load image ${i} for ${carouselId}`);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with balanced settings
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        disable: window.innerWidth < 768, // Only disable on mobile
        mirror: false,
        throttleDelay: 99
    });

    // Handle navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollPosition = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        lastScrollPosition = window.scrollY;
        
        if (!ticking) {
            requestAnimationFrame(() => {
                if (lastScrollPosition > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    loadProducts();
    
    // Initialize Fancybox
    Fancybox.bind("[data-fancybox]", {
        loop: true,
        Toolbar: {
            display: [
                "zoom",
                "slideshow",
                "fullscreen",
                "thumbs",
                "close"
            ],
        },
        Thumbs: {
            autoStart: true,
        },
        Carousel: {
            transition: "slide",
        },
        Images: {
            zoom: true,
        },
        touch: {
            vertical: true,  // Allow vertical swipe
            momentum: true   // Continue movement after releasing mouse/touch
        }
    });

    // Initialize Fancybox for all product images
    const productImages = document.querySelectorAll('.product-image');
    
    const galleries = {
        'corner-sofa': [],
        'u-shape-sofa': [],
        'effect-panels': [],
        'acoustic-panels': [],
        'marble-dining': [],
        'oxford-dining': []
    };

    productImages.forEach((img) => {
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        const galleryName = src.split('/')[2]; // Get the product folder name
        
        if (!img.parentElement.matches('a')) {
            const link = document.createElement('a');
            link.href = src;
            link.setAttribute('data-fancybox', `${galleryName}-gallery`);
            img.parentNode.insertBefore(link, img);
            link.appendChild(img);
        }
        
        if (galleries[galleryName]) {
            galleries[galleryName].push({
                src: src,
                opts: { caption: alt }
            });
        }
    });

    Fancybox.bind('[data-fancybox]', {
        loop: true,
        buttons: [
            'slideShow',
            'fullScreen',
            'thumbs',
            'close'
        ],
        animationEffect: 'fade',
        transitionEffect: 'slide',
        touch: {
            vertical: true,
            momentum: true
        },
        wheel: 'slide',
        slideShow: {
            autoStart: false,
            speed: 4000
        },
        thumbs: {
            autoStart: true,
            hideOnClose: true
        }
    });

    initializeSearch();

    // Mobile menu handling
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNavbar = event.target.closest('.navbar');
        if (!isClickInsideNavbar && navbarCollapse.classList.contains('show')) {
            closeMenu();
        }
    });

    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    function closeMenu() {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            navbarToggler.classList.add('collapsed');
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    }

    // Product categories configuration with specific image counts
    const productCategories = [
        { 
            id: 'corner-sofa', 
            folder: 'verona-sofa',
            imageCount: 20  // Set to 20 images
        },
        { 
            id: 'u-shape-sofa', 
            folder: 'u-shape-sofa',
            imageCount: 20
        },
        { 
            id: 'wooden-effect', 
            folder: 'effect-panels',
            imageCount: 20
        },
        { 
            id: 'wooden-acoustic', 
            folder: 'acoustic-panels',
            imageCount: 20
        },
        { 
            id: 'king-bed', 
            folder: 'king-bed',
            imageCount: 20
        },
        { 
            id: 'double-bed', 
            folder: 'double-bed',
            imageCount: 20
        },
        { 
            id: 'mattress', 
            folder: 'orthopedic-mattress',
            imageCount: 20
        },
        { 
            id: 'marble-dining', 
            folder: 'marble-dining',
            imageCount: 20
        },
        { 
            id: 'oxford-dining', 
            folder: 'oxford-dining',
            imageCount: 20
        }
    ];

    // Initialize Swiper for each product
    productCategories.forEach(category => {
        const swiperWrapper = document.querySelector(`#${category.id}-section .swiper-wrapper`);
        if (!swiperWrapper) return;

        // Clear existing slides
        swiperWrapper.innerHTML = '';

        // Create slides for all 20 images
        for (let i = 1; i <= 20; i++) {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            
            // Create anchor for Fancybox
            const link = document.createElement('a');
            link.href = `./images/products/${category.folder}/image-${i}.jpg`;
            link.setAttribute('data-fancybox', `gallery-${category.id}`);
            link.setAttribute('data-caption', `${category.id.replace(/-/g, ' ')} - Image ${i}`);
            
            const img = document.createElement('img');
            img.src = `./images/products/${category.folder}/image-${i}.jpg`;
            img.alt = `${category.id.replace(/-/g, ' ')} ${i}`;
            img.setAttribute('loading', 'lazy');
            
            // Error handling for missing images
            img.onerror = function() {
                slide.remove(); // Remove slide if image doesn't exist
            };
            
            link.appendChild(img);
            slide.appendChild(link);
            swiperWrapper.appendChild(slide);
        }

        // Initialize Swiper
        new Swiper(`#${category.id}-section .product-swiper`, {
            loop: true,
            speed: 800,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            spaceBetween: 20,
            grabCursor: true,
            keyboard: {
                enabled: true,
            },
            lazy: {
                loadPrevNext: true,
            }
        });

        // Initialize Fancybox for this category
        Fancybox.bind(`[data-fancybox="gallery-${category.id}"]`, {
            groupAll: true, // Group all images in the gallery
            Toolbar: {
                display: {
                    left: ["infobar"],
                    middle: [
                        "zoomIn",
                        "zoomOut",
                        "toggle1to1",
                        "rotateCCW",
                        "rotateCW",
                        "flipX",
                        "flipY",
                    ],
                    right: ["slideshow", "thumbs", "close"],
                },
            },
            Thumbs: {
                autoStart: true, // Show thumbnails by default
            },
            Carousel: {
                transition: "slide",
                friction: 0.96,
            },
            Images: {
                zoom: true,
            },
            Slideshow: {
                timeout: 3000,
                autoStart: false,
            },
            touch: {
                vertical: true,
                momentum: true
            },
            keyboard: {
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                PageUp: "next",
                PageDown: "prev",
                ArrowUp: "prev",
                ArrowDown: "next",
                ArrowRight: "next",
                ArrowLeft: "prev",
            },
            on: {
                initCarousel: (fancybox) => {
                    // Enable touch gestures
                    const carousel = fancybox.Carousel;
                    if (carousel) {
                        carousel.options.Panzoom = {
                            touch: true,
                            panOnlyZoomed: false,
                            lockAxis: false,
                        };
                    }
                },
            },
        });
    });
});

function loadProducts() {
    Object.keys(products).forEach(section => {
        const container = document.querySelector(`#${section} .row`);
        if (container) {
            products[section].items.forEach(product => {
                product.images = Array.from({length: 20}, (_, i) => `images/products/${section}/image-${i + 1}.jpg`);
                container.appendChild(createProductCard(product));
            });
        }
    });
}

function initializeSearch() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    
    if (!searchForm || !searchInput) {
        console.error('Search form elements not found');
        return;
    }

    // Create search results container if it doesn't exist
    let searchResults = document.createElement('div');
    searchResults.className = 'search-results-container';
    searchForm.appendChild(searchResults);

    // Get all products for search
    function getAllProducts() {
        const allProducts = [];
        for (const [sectionId, section] of Object.entries(products)) {
            section.items.forEach(product => {
                allProducts.push({
                    ...product,
                    sectionId
                });
            });
        }
        return allProducts;
    }

    // Search products based on query
    function searchProducts(query) {
        const allProducts = getAllProducts();
        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
        
        if (searchTerms.length === 0) return [];
        
        return allProducts.filter(product => {
            const searchableText = [
                product.title.toLowerCase(),
                product.description.toLowerCase(),
                product.category.toLowerCase(),
                ...(product.tags || []).map(tag => tag.toLowerCase())
            ].join(' ');

            return searchTerms.every(term => searchableText.includes(term));
        });
    }

    // Create result card
    function createResultCard(product) {
        const card = document.createElement('div');
        card.className = 'search-result-card';
        
        card.innerHTML = `
            <div class="result-content">
                <h3>${product.title}</h3>
                <p>${product.description.substring(0, 100)}${product.description.length > 100 ? '...' : ''}</p>
                <div class="result-meta">
                    <span class="result-category">${product.category}</span>
                    <span class="result-price">${product.price}</span>
                </div>
            </div>
        `;
        
        // Add click event to scroll to the product section
        card.addEventListener('click', () => {
            const section = document.getElementById(`${product.sectionId}-section`);
            if (section) {
                searchResults.style.display = 'none';
                searchInput.value = '';
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
        
        return card;
    }

    // Show search results
    function displaySearchResults(results) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <p>No matching products found</p>
                </div>
            `;
            searchResults.style.display = 'block';
            return;
        }

        const resultsGrid = document.createElement('div');
        resultsGrid.className = 'search-results-grid';
        
        results.forEach(product => {
            const card = createResultCard(product);
            resultsGrid.appendChild(card);
        });

        searchResults.appendChild(resultsGrid);
        searchResults.style.display = 'block';
    }

    // Handle search input with debouncing
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        
        // Clear previous timeout
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        // Hide results if query is empty
        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        // Debounce search
        searchTimeout = setTimeout(() => {
            const results = searchProducts(query);
            displaySearchResults(results);
        }, 300);
    });

    // Handle search form submission
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query.length > 0) {
            const results = searchProducts(query);
            displaySearchResults(results);
        }
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchForm.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}
