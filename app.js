// Sample Destinations Data
const destinations = [
    {
        id: 1,
        name: "Mount Pongkay",
        category: "Mountain",
        location: "Cabadbaran City Core",
        description: "A majestic mountain peak offering stunning panoramic views of the surrounding landscapes. Home to rare endemic species and lush rainforests. Perfect for mountaineering enthusiasts.",
        hours: "6:00 AM - 5:00 PM",
        fee: "Free (Optional guide: ₱500)",
        image: "Mount Pongkay.jpg",
        emoji: "⛰️",
        rating: 4.8,
        reviews: 45,
        reviewList: [
            { author: "Adventure Seeker", rating: 5, text: "Incredible views! Worth every step of the climb." },
            { author: "Nature Lover", rating: 5, text: "The biodiversity here is amazing. Saw several endemic birds!" }
        ]
    },
    {
        id: 2,
        name: "Cabadbaran River",
        category: "Nature",
        location: "Barangay Cabadbaran",
        description: "Crystal clear river perfect for swimming, kayaking, and enjoying natural pools. The river passes through pristine rainforest with scenic waterfalls along the way.",
        hours: "7:00 AM - 6:00 PM",
        fee: "Free",
        image: "Cabadbaran River.jpg",
        emoji: "💧",
        rating: 4.6,
        reviews: 38,
        reviewList: [
            { author: "Water Sports Fan", rating: 5, text: "Perfect for kayaking! The water is so clean and refreshing." },
            { author: "Family Traveler", rating: 4, text: "Great for a refreshing swim. Kids loved it!" }
        ]
    },
    {
        id: 3,
        name: "Cabadbaran City Hall",
        category: "Cultural",
        location: "Downtown Cabadbaran",
        description: "The historic government center and architectural landmark. Experience local governance and cultural significance of the city. Beautiful structure showcasing local heritage.",
        hours: "9:00 AM - 5:00 PM",
        fee: "Free",
        image: "Cabadbaran City Hall.jpg",
        emoji: "🏛️",
        rating: 4.3,
        reviews: 28,
        reviewList: [
            { author: "History Buff", rating: 4, text: "Impressive architecture and great historical value." },
            { author: "Tourist", rating: 4, text: "Good photo spot! Very informative." }
        ]
    },
    {
        id: 4,
        name: "Cabadbaran City Plaza",
        category: "Cultural",
        location: "City Center",
        description: "The vibrant heart of the city featuring gathering spaces, local markets, and cultural events. Perfect for experiencing authentic city life and local commerce.",
        hours: "24 Hours",
        fee: "Free to explore",
        image: "Cabadbaran City Plaza.jpg",
        emoji: "🏢",
        rating: 4.5,
        reviews: 42,
        reviewList: [
            { author: "Cultural Explorer", rating: 5, text: "Authentic local experience. The plaza is vibrant and full of local products." },
            { author: "Food Lover", rating: 4, text: "Amazing local cuisine and street food! Best meal of my trip!" }
        ]
    },
    {
        id: 5,
        name: "Hilong-Hilong",
        category: "Nature",
        location: "Upper Cabadbaran Forest",
        description: "A natural wonder and popular eco-tourism destination featuring pristine natural landscapes. Ideal for nature walks and wildlife viewing with educational guide programs available.",
        hours: "8:00 AM - 4:00 PM",
        fee: "₱300/person",
        image: "hilong-hilong.jpg",
        emoji: "🌿",
        rating: 4.7,
        reviews: 41,
        reviewList: [
            { author: "Nature Enthusiast", rating: 5, text: "Breathtaking experience! The guides are very knowledgeable." },
            { author: "Photographer", rating: 5, text: "Perfect for nature photography. Amazing biodiversity!" }
        ]
    },
    {
        id: 6,
        name: "Lusong Cold Spring",
        category: "Nature",
        location: "Barangay Esperanza",
        description: "Natural cold spring perfect for relaxation and swimming. Surrounded by lush vegetation and located in a picturesque natural setting ideal for nature lovers.",
        hours: "6:00 AM - 8:00 PM",
        fee: "₱250/person",
        image: "Lusong Cold Spring.jpg",
        emoji: "💧",
        rating: 4.5,
        reviews: 34,
        reviewList: [
            { author: "Nature Lover", rating: 5, text: "So refreshing! The cold spring is therapeutic and natural." },
            { author: "Adventure Seeker", rating: 4, text: "Great destination for swimming. Beautiful surroundings!" }
        ]
    },
    {
        id: 7,
        name: "Atega Park",
        category: "Cultural",
        location: "Barangay Cabadbaran",
        description: "An authentic park showcasing local culture and community heritage. Perfect for experiencing traditional activities, crafts, and local livelihood programs.",
        hours: "9:00 AM - 3:00 PM",
        fee: "₱400/person",
        image: "Atega Park.jpg",
        emoji: "🏞️",
        rating: 4.9,
        reviews: 28,
        reviewList: [
            { author: "Cultural Advocate", rating: 5, text: "Amazing cultural experience! Very respectful and educational." },
            { author: "Traveler", rating: 5, text: "The locals are very welcoming. Learned so much!" }
        ]
    },
    {
        id: 8,
        name: "River Tugnaw",
        category: "Mountain",
        location: "Upper Cabadbaran",
        description: "Scenic river destination with beautiful waterfalls and hiking trails. Suitable for all fitness levels with rest stops and viewpoints along the way.",
        hours: "6:00 AM - 5:00 PM",
        fee: "₱200/person (guide included)",
        image: "River Tugnaw.jpg",
        emoji: "💦",
        rating: 4.7,
        reviews: 36,
        reviewList: [
            { author: "Hiker", rating: 5, text: "Beautiful waterfalls! The trail is well-maintained." },
            { author: "Adventure Group", rating: 4, text: "Great for families! Guides are friendly and helpful." }
        ]
    },
    {
        id: 9,
        name: "Sabang Dike",
        category: "Nature",
        location: "City Outskirts",
        description: "A scenic dike offering beautiful views and recreational opportunities. Perfect for cycling, walking, and enjoying outdoor activities with panoramic water views.",
        hours: "7:00 AM - 5:00 PM",
        fee: "₱100/person",
        image: "Sabang Dike.jpg",
        emoji: "🚴",
        rating: 4.6,
        reviews: 30,
        reviewList: [
            { author: "Cyclist", rating: 5, text: "Wonderful place for biking! Peaceful atmosphere and nice views!" },
            { author: "Photographer", rating: 4, text: "Beautiful dike for photos. Well-maintained cycling path." }
        ]
    },
    {
        id: 10,
        name: "Tumipi Cold Spring",
        category: "Nature",
        location: "Barangay Tumipi",
        description: "A natural cold spring destination offering a refreshing swimming experience in a pristine natural environment. Perfect for those seeking authentic nature-based activities.",
        hours: "6:00 AM - 6:00 PM",
        fee: "₱150/person",
        image: "Tumipi Cold Spring.webp",
        emoji: "🌊",
        rating: 4.6,
        reviews: 32,
        reviewList: [
            { author: "Nature Seeker", rating: 5, text: "Crystal clear water! One of the best natural springs I've visited." },
            { author: "Family Trip", rating: 5, text: "Safe and clean. Kids had a blast swimming here!" }
        ]
    }
];

// Sample Accommodations
const accommodations = [
    { id: 1, name: "Mountain View Hotel", fee: "₱1,500/night" },
    { id: 2, name: "Nature Lodge Resort", fee: "₱1,200/night" },
    { id: 3, name: "City Center Inn", fee: "₱800/night" },
    { id: 4, name: "Riverside Cottage", fee: "₱950/night" }
];

// Sample Transportation
const transportation = [
    { id: 1, name: "Van Rental (8-seater)", fee: "₱2,000/day" },
    { id: 2, name: "Tricycle Service", fee: "₱50-100/trip" },
    { id: 3, name: "Motorcycle Rental", fee: "₱400/day" }
];

// Page Navigation
function navigateTo(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const selectedPage = document.getElementById(pageName + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update nav buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-page="${pageName}"]`).classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);

    // Initialize page-specific content
    if (pageName === 'explore') {
        initExplore();
    } else if (pageName === 'home') {
        initHome();
    } else if (pageName === 'feedback') {
        initFeedback();
    }
}

// Initialize Home Page
function initHome() {
    const featuredGrid = document.getElementById('featured-grid');
    if (featuredGrid) {
        featuredGrid.innerHTML = destinations.slice(0, 3).map(dest => `
            <div class="destination-card" onclick="showDestinationDetail(${dest.id})">
                <img src="${dest.image}" alt="${dest.name}" class="destination-card-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22180%22%3E%3Crect fill=%22%232a7f5e%22 width=%22300%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2248%22 fill=%22white%22%3E${dest.emoji}%3C/text%3E%3C/svg%3E'">
                <div class="card-content">
                    <span class="category-badge">${dest.category}</span>
                    <h4>${dest.name}</h4>
                    <p><i class="fas fa-map-pin"></i> ${dest.location}</p>
                    <p style="color: #ffc107;"><i class="fas fa-star"></i> ${dest.rating} (${dest.reviews} reviews)</p>
                </div>
            </div>
        `).join('');
    }
}

// Initialize Explore Page
function initExplore() {
    displayDestinations(destinations);
    setupEventListeners();
}

// Display Destinations
function displayDestinations(destList) {
    const grid = document.getElementById('destinations-grid');
    const count = document.getElementById('results-count');

    if (destList.length === 0) {
        grid.innerHTML = '<div class="loading">No destinations found</div>';
        count.textContent = 'No results';
    } else {
        grid.innerHTML = destList.map(dest => `
            <div class="destination-card" onclick="showDestinationDetail(${dest.id})">
                <img src="${dest.image}" alt="${dest.name}" class="destination-card-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22180%22%3E%3Crect fill=%22%232a7f5e%22 width=%22300%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2248%22 fill=%22white%22%3E${dest.emoji}%3C/text%3E%3C/svg%3E'">
                <div class="card-content">
                    <span class="category-badge">${dest.category}</span>
                    <h4>${dest.name}</h4>
                    <p><i class="fas fa-map-pin"></i> ${dest.location}</p>
                    <p><strong>${dest.fee}</strong></p>
                    <p style="color: #ffc107;"><i class="fas fa-star"></i> ${dest.rating} (${dest.reviews} reviews)</p>
                </div>
            </div>
        `).join('');
        count.textContent = `Showing ${destList.length} destination${destList.length !== 1 ? 's' : ''}`;
    }
}

// Show Destination Detail Modal
function showDestinationDetail(id) {
    const dest = destinations.find(d => d.id === id);
    if (!dest) return;

    document.getElementById('detail-name').textContent = dest.name;
    document.getElementById('detail-category').textContent = dest.category;
    document.getElementById('detail-location').textContent = dest.location;
    document.getElementById('detail-description').textContent = dest.description;
    document.getElementById('detail-hours').textContent = dest.hours;
    document.getElementById('detail-fee').textContent = dest.fee;
    document.getElementById('detail-rating').textContent = dest.rating;
    document.getElementById('detail-reviews').textContent = `(${dest.reviews} reviews)`;
    
    // Set image
    const detailImage = document.getElementById('detail-image');
    detailImage.src = dest.image;
    detailImage.alt = dest.name;
    detailImage.onerror = function() {
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.style.fontSize = '4rem';
        this.style.background = 'linear-gradient(135deg, #2a7f5e 0%, #1b5e3f 100%)';
        this.textContent = dest.emoji;
    };

    // Display reviews
    const reviewsList = document.getElementById('detail-reviews-list');
    reviewsList.innerHTML = dest.reviewList.map(review => `
        <div class="review-item">
            <div class="review-author">${review.author}</div>
            <div class="review-rating">
                ${Array(review.rating).fill('<i class="fas fa-star"></i>').join('')}
            </div>
            <div class="review-text">${review.text}</div>
        </div>
    `).join('');

    // Show modal
    document.getElementById('detail-modal').classList.add('active');
}

// Close Detail Modal
function closeDetailModal() {
    document.getElementById('detail-modal').classList.remove('active');
}

// Setup Event Listeners
function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = destinations.filter(d =>
                d.name.toLowerCase().includes(query) ||
                d.location.toLowerCase().includes(query) ||
                d.description.toLowerCase().includes(query)
            );
            displayDestinations(filtered);
        });
    }

    // Sort
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            let sorted = [...destinations];
            switch(e.target.value) {
                case 'name-asc':
                    sorted.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-desc':
                    sorted.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'price-asc':
                    sorted.sort((a, b) => {
                        const priceA = parseInt(a.fee) || 0;
                        const priceB = parseInt(b.fee) || 0;
                        return priceA - priceB;
                    });
                    break;
                case 'price-desc':
                    sorted.sort((a, b) => {
                        const priceA = parseInt(a.fee) || 0;
                        const priceB = parseInt(b.fee) || 0;
                        return priceB - priceA;
                    });
                    break;
            }
            displayDestinations(sorted);
        });
    }

    // Filter Toggle
    const filterToggle = document.getElementById('filter-toggle');
    const filtersPanel = document.getElementById('filters-panel');
    if (filterToggle) {
        filterToggle.addEventListener('click', () => {
            filtersPanel.classList.toggle('hidden');
        });
    }

    // Category Filter
    const categoryBtns = document.querySelectorAll('[data-category]');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const category = e.target.dataset.category;
            const filtered = category === 'all' 
                ? destinations 
                : destinations.filter(d => d.category === category);
            displayDestinations(filtered);
        });
    });

    // View Toggle
    const viewToggle = document.getElementById('view-toggle');
    if (viewToggle) {
        viewToggle.addEventListener('click', () => {
            const grid = document.getElementById('destinations-grid');
            grid.classList.toggle('list-view');
            
            if (grid.classList.contains('list-view')) {
                viewToggle.innerHTML = '<i class="fas fa-bars"></i> List';
            } else {
                viewToggle.innerHTML = '<i class="fas fa-th"></i> Grid';
            }
        });
    }
}

// Initialize Feedback Page
function initFeedback() {
    setupRatingStars();
}

// Setup Rating Stars
function setupRatingStars() {
    const ratingStars = document.getElementById('rating-stars');
    if (!ratingStars) return;

    const stars = ratingStars.querySelectorAll('i');
    stars.forEach(star => {
        star.addEventListener('click', (e) => {
            const rating = e.target.dataset.rating;
            document.getElementById('feedback-rating').value = rating;

            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        });

        star.addEventListener('mouseover', (e) => {
            const rating = e.target.dataset.rating;
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.style.color = '#ffc107';
                    s.style.transform = 'scale(1.2)';
                } else {
                    s.style.color = '#ddd';
                    s.style.transform = 'scale(1)';
                }
            });
        });
    });

    ratingStars.addEventListener('mouseleave', () => {
        const rating = document.getElementById('feedback-rating').value;
        stars.forEach((s, index) => {
            if (index < rating) {
                s.style.color = '#ffc107';
            } else {
                s.style.color = '#ddd';
            }
            s.style.transform = 'scale(1)';
        });
    });
}

// Update Service Select Dropdown
function updateServiceSelect() {
    const serviceType = document.getElementById('service-type').value;
    const serviceSelect = document.getElementById('service-select');
    
    if (!serviceSelect) return;
    
    serviceSelect.innerHTML = '';
    
    let services = [];
    
    if (serviceType === 'tour') {
        services = destinations.map(d => ({ name: d.name, fee: d.fee }));
    } else if (serviceType === 'accommodation') {
        services = accommodations;
    } else if (serviceType === 'transportation') {
        services = transportation;
    }
    
    if (services.length === 0) {
        serviceSelect.innerHTML = '<option>No services available</option>';
        return;
    }
    
    services.forEach((service, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${service.name} - ${service.fee}`;
        serviceSelect.appendChild(option);
    });
}

// Handle Demo Form Submissions
function handleDemoSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('booking-name').value;
    const email = document.getElementById('booking-email').value;
    const serviceType = document.getElementById('service-type').value;
    const date = document.getElementById('booking-date').value;
    const guests = document.getElementById('booking-guests').value;

    if (!name || !email || !serviceType || !date || !guests) {
        alert('Please fill in all required fields');
        return;
    }

    const services = {
        'tour': 'Tour / Attraction',
        'accommodation': 'Hotel / Accommodation',
        'transportation': 'Transportation'
    };

    alert(`Demo Booking Preview:\n\nName: ${name}\nEmail: ${email}\nService: ${services[serviceType]}\nDate: ${date}\nGuests: ${guests}\n\nIn the full application, this booking would be saved and processed.`);
    
    // Reset form
    event.target.reset();
}

function handleDemoFeedback(event) {
    event.preventDefault();
    const name = document.getElementById('feedback-name').value;
    const email = document.getElementById('feedback-email').value;
    const rating = document.getElementById('feedback-rating').value;
    const comment = document.getElementById('feedback-comment').value;

    if (!name || !rating || !comment) {
        alert('Please fill in all required fields');
        return;
    }

    alert(`Demo Feedback Preview:\n\nName: ${name}\nEmail: ${email}\nRating: ${rating} stars\nComment: ${comment}\n\nIn the full application, this feedback would be saved to the database and displayed on the system.`);
    
    // Reset form
    event.target.reset();
    document.getElementById('feedback-rating').value = '';
    const stars = document.querySelectorAll('#rating-stars i');
    stars.forEach(s => {
        s.classList.remove('fas');
        s.classList.add('far');
        s.style.color = '#ddd';
    });
}

// Nav button click handlers
document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const pageName = e.currentTarget.dataset.page;
            navigateTo(pageName);
        });
    });

    // Initialize home page
    initHome();
});

// Handle modal close on background click
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('detail-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeDetailModal();
            }
        });
    }
});

// Authentication Modal Functions
function openLoginModal() {
    document.getElementById('login-modal').style.display = 'flex';
}

function closeLoginModal() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('login-form').reset();
}

function openRegisterModal() {
    document.getElementById('register-modal').style.display = 'flex';
}

function closeRegisterModal() {
    document.getElementById('register-modal').style.display = 'none';
    document.getElementById('register-form').reset();
}

function switchToLogin(event) {
    event.preventDefault();
    closeRegisterModal();
    openLoginModal();
}

function switchToRegister(event) {
    event.preventDefault();
    closeLoginModal();
    openRegisterModal();
}

function handleLoginSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }

    alert(`Demo Login Preview:\n\nUsername: ${username}\nPassword: ••••••••\n\nIn the full application, your login would be verified against the database.\n\nYou would then have access to your bookings and profile.`);
    
    closeLoginModal();
}

function handleRegisterSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const firstname = document.getElementById('register-firstname').value;
    const lastname = document.getElementById('register-lastname').value;
    const password = document.getElementById('register-password').value;

    if (!username || !email || !firstname || !lastname || !password) {
        alert('Please fill in all fields');
        return;
    }

    alert(`Demo Registration Preview:\n\nUsername: ${username}\nEmail: ${email}\nName: ${firstname} ${lastname}\n\nYour account has been created successfully!\n\nIn the full application, this data would be saved to the database and you could immediately login.`);
    
    closeRegisterModal();
}

// Close modals when clicking outside
document.addEventListener('DOMContentLoaded', () => {
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');

    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                closeLoginModal();
            }
        });
    }

    if (registerModal) {
        registerModal.addEventListener('click', (e) => {
            if (e.target === registerModal) {
                closeRegisterModal();
            }
        });
    }
});
