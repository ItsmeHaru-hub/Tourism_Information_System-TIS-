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
    } else if (pageName === 'booking') {
        initBooking();
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

// Initialize Booking Page
function initBooking() {
    const currentUser = storage.getCurrentUser();
    if (!currentUser) {
        document.getElementById('booking-page').innerHTML = `
            <h2 class="section-title"><i class="fas fa-lock"></i> Booking Requires Login</h2>
            <div class="card" style="text-align: center;">
                <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">You must be logged in to make bookings.</p>
                <button class="btn-primary" onclick="openLoginModal()" style="margin-right: 1rem;"><i class="fas fa-sign-in-alt"></i> Login</button>
                <button class="btn-primary" style="background: #4CAF50;" onclick="openRegisterModal()"><i class="fas fa-user-plus"></i> Create Account</button>
            </div>
        `;
        return;
    }
    
    // Show booking form
    const bookingPage = document.getElementById('booking-page');
    updateServiceSelect(); // Initialize service select
    showBookingHistory(); // Show booking history
}

// Initialize Feedback Page
function initFeedback() {
    setupRatingStars();
    displayAllFeedback();
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

// Handle Demo Form Submissions - NOW WITH OFFLINE STORAGE
function handleDemoSubmit(event) {
    event.preventDefault();
    
    const currentUser = storage.getCurrentUser();
    if (!currentUser) {
        alert('Please login first to make a booking');
        openLoginModal();
        return;
    }

    const name = document.getElementById('booking-name').value.trim();
    const email = document.getElementById('booking-email').value.trim();
    const serviceType = document.getElementById('service-type').value;
    const date = document.getElementById('booking-date').value;
    const guests = document.getElementById('booking-guests').value;

    if (!name || !email || !serviceType || !date || !guests) {
        alert('Please fill in all required fields');
        return;
    }

    // Get service name
    let serviceName = '';
    const services = {
        'tour': destinations.find(d => d.id == document.getElementById('service-select').value),
        'accommodation': accommodations[document.getElementById('service-select').value],
        'transportation': transportation[document.getElementById('service-select').value]
    };

    const selectedService = services[serviceType];
    serviceName = selectedService ? selectedService.name : '';

    const bookingData = {
        name,
        email,
        serviceType,
        serviceName,
        date,
        guests: parseInt(guests),
        notes: document.getElementById('booking-notes')?.value || ''
    };

    const result = storage.createBooking(bookingData);

    if (result.success) {
        alert(`✓ Booking Confirmed!\n\nBooking ID: #${result.booking.id}\nService: ${serviceName}\nDate: ${date}\nGuests: ${guests}\n\nStatus: Pending\n\nYour booking has been saved offline and will sync when online.`);
        event.target.reset();
        // Switch to booking history
        showBookingHistory();
    } else {
        alert('✗ ' + result.message);
    }
}

function handleDemoFeedback(event) {
    event.preventDefault();
    
    const name = document.getElementById('feedback-name').value.trim();
    const email = document.getElementById('feedback-email').value.trim();
    const rating = document.getElementById('feedback-rating').value;
    const comment = document.getElementById('feedback-comment').value.trim();

    if (!name || !rating || !comment) {
        alert('Please fill in all required fields');
        return;
    }

    const feedbackData = {
        name,
        email,
        rating: parseInt(rating),
        comment,
        destination: document.getElementById('feedback-destination')?.value || 'General'
    };

    const result = storage.createFeedback(feedbackData);

    if (result.success) {
        alert(`✓ Thank you for your feedback!\n\nFeedback ID: #${result.feedback.id}\nRating: ${rating} stars\n\nYour feedback has been saved offline and will sync when online.`);
        
        // Reset form
        event.target.reset();
        document.getElementById('feedback-rating').value = '';
        const stars = document.querySelectorAll('#rating-stars i');
        stars.forEach(s => {
            s.classList.remove('fas');
            s.classList.add('far');
            s.style.color = '#ddd';
        });
        
        // Show feedback list
        displayAllFeedback();
    } else {
        alert('✗ ' + result.message);
    }
}

// Booking History Display
function showBookingHistory() {
    const bookings = storage.getUserBookings();
    const historyDiv = document.createElement('div');
    historyDiv.id = 'booking-history';
    historyDiv.innerHTML = '<h3><i class="fas fa-history"></i> Your Bookings</h3>';
    
    if (bookings.length === 0) {
        historyDiv.innerHTML += '<p style="color: #999;">No bookings yet.</p>';
    } else {
        historyDiv.innerHTML += '<div class="bookings-list">';
        bookings.forEach(booking => {
            historyDiv.innerHTML += `
                <div class="booking-card-item" style="border: 1px solid #ddd; padding: 1rem; margin: 0.5rem 0; border-radius: 8px; background: #f9f9f9;">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div>
                            <strong>#${booking.id}</strong> - ${booking.serviceName}<br>
                            <small>Date: ${booking.date} | Guests: ${booking.guests} | Status: <span style="color: #f59e0b; font-weight: bold;">${booking.status}</span></small>
                        </div>
                        <button class="btn-danger" onclick="deleteBooking(${booking.id})" style="padding: 0.4rem 0.8rem; font-size: 0.9rem; background: #ef4444; color: white; border: none; border-radius: 4px; cursor: pointer;">Delete</button>
                    </div>
                </div>
            `;
        });
        historyDiv.innerHTML += '</div>';
    }
    
    // Insert or replace in booking page
    const bookingPage = document.getElementById('booking-page');
    const existingHistory = bookingPage.querySelector('#booking-history');
    if (existingHistory) {
        existingHistory.replaceWith(historyDiv);
    } else {
        bookingPage.appendChild(historyDiv);
    }
}

function deleteBooking(bookingId) {
    if (confirm('Are you sure you want to delete this booking?')) {
        const result = storage.deleteBooking(bookingId);
        if (result.success) {
            alert('✓ Booking deleted successfully');
            showBookingHistory();
        } else {
            alert('✗ ' + result.message);
        }
    }
}

// Display All Feedback
function displayAllFeedback() {
    const allFeedback = storage.getAllFeedback();
    const feedbackPage = document.getElementById('feedback-page');
    let feedbackDisplay = feedbackPage.querySelector('#feedback-display');
    
    if (!feedbackDisplay) {
        feedbackDisplay = document.createElement('div');
        feedbackDisplay.id = 'feedback-display';
        feedbackDisplay.style.marginTop = '2rem';
        feedbackPage.appendChild(feedbackDisplay);
    }

    if (allFeedback.length === 0) {
        feedbackDisplay.innerHTML = '<p style="color: #999; text-align: center;">No feedback yet. Be the first to share!</p>';
    } else {
        feedbackDisplay.innerHTML = '<h3><i class="fas fa-comments"></i> Recent Feedback</h3>';
        feedbackDisplay.innerHTML += '<div class="feedback-list">';
        allFeedback.slice(0, 10).forEach(feedback => {
            const rating = '⭐'.repeat(feedback.rating);
            feedbackDisplay.innerHTML += `
                <div class="feedback-item" style="border: 1px solid #e0e7e3; padding: 1rem; margin: 0.8rem 0; border-radius: 8px; background: white;">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div style="flex: 1;">
                            <strong>${feedback.name}</strong> <small style="color: #999;">${feedback.username}</small><br>
                            <div style="color: #f59e0b; margin: 0.3rem 0;">${rating}</div>
                            <p style="margin: 0.5rem 0; color: #333;">${feedback.comment}</p>
                            <small style="color: #999;">${new Date(feedback.createdAt).toLocaleString()}</small>
                        </div>
                    </div>
                </div>
            `;
        });
        feedbackDisplay.innerHTML += '</div>';
    }
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
    
    // Update auth UI
    updateAuthUI();
    
    // Initialize booking history on home load (if user is logged in)
    if (storage.isLoggedIn()) {
        showBookingHistory();
    }
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

// =================== OFFLINE STORAGE SYSTEM ===================

class OfflineStorage {
    constructor() {
        this.USERS_KEY = 'tis_users';
        this.CURRENT_USER_KEY = 'tis_current_user';
        this.BOOKINGS_KEY = 'tis_bookings';
        this.FEEDBACK_KEY = 'tis_feedback';
        this.initDefaultData();
    }

    initDefaultData() {
        if (!localStorage.getItem(this.USERS_KEY)) {
            // Create a demo user for testing
            const demoUsers = [
                {
                    id: 1,
                    username: 'demo',
                    password: 'demo',
                    email: 'demo@example.com',
                    firstname: 'Demo',
                    lastname: 'User',
                    createdAt: new Date().toISOString()
                }
            ];
            localStorage.setItem(this.USERS_KEY, JSON.stringify(demoUsers));
        }
        if (!localStorage.getItem(this.BOOKINGS_KEY)) {
            localStorage.setItem(this.BOOKINGS_KEY, JSON.stringify([]));
        }
        if (!localStorage.getItem(this.FEEDBACK_KEY)) {
            localStorage.setItem(this.FEEDBACK_KEY, JSON.stringify([]));
        }
    }

    // User Management
    registerUser(username, email, firstname, lastname, password) {
        const users = JSON.parse(localStorage.getItem(this.USERS_KEY)) || [];
        
        // Check if username or email exists
        if (users.find(u => u.username === username)) {
            return { success: false, message: 'Username already exists' };
        }
        if (users.find(u => u.email === email)) {
            return { success: false, message: 'Email already registered' };
        }

        const newUser = {
            id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
            username,
            email,
            firstname,
            lastname,
            password, // In production, use hashing!
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
        return { success: true, message: 'Registration successful', user: newUser };
    }

    loginUser(username, password) {
        const users = JSON.parse(localStorage.getItem(this.USERS_KEY)) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if (!user) {
            return { success: false, message: 'Invalid username or password' };
        }

        // Store current user
        localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify({
            id: user.id,
            username: user.username,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname
        }));

        return { success: true, message: 'Login successful', user: user };
    }

    logoutUser() {
        localStorage.removeItem(this.CURRENT_USER_KEY);
        return { success: true, message: 'Logged out successfully' };
    }

    getCurrentUser() {
        const userStr = localStorage.getItem(this.CURRENT_USER_KEY);
        return userStr ? JSON.parse(userStr) : null;
    }

    isLoggedIn() {
        return this.getCurrentUser() !== null;
    }

    // Booking Management
    createBooking(bookingData) {
        const bookings = JSON.parse(localStorage.getItem(this.BOOKINGS_KEY)) || [];
        const currentUser = this.getCurrentUser();

        if (!currentUser) {
            return { success: false, message: 'Please login to make a booking' };
        }

        const newBooking = {
            id: bookings.length > 0 ? Math.max(...bookings.map(b => b.id)) + 1 : 1,
            userId: currentUser.id,
            ...bookingData,
            createdAt: new Date().toISOString(),
            status: 'pending'
        };

        bookings.push(newBooking);
        localStorage.setItem(this.BOOKINGS_KEY, JSON.stringify(bookings));
        return { success: true, message: 'Booking created successfully', booking: newBooking };
    }

    getUserBookings() {
        const currentUser = this.getCurrentUser();
        if (!currentUser) return [];

        const bookings = JSON.parse(localStorage.getItem(this.BOOKINGS_KEY)) || [];
        return bookings.filter(b => b.userId === currentUser.id);
    }

    deleteBooking(bookingId) {
        const bookings = JSON.parse(localStorage.getItem(this.BOOKINGS_KEY)) || [];
        const currentUser = this.getCurrentUser();

        const index = bookings.findIndex(b => b.id === bookingId && b.userId === currentUser.id);
        if (index === -1) {
            return { success: false, message: 'Booking not found' };
        }

        bookings.splice(index, 1);
        localStorage.setItem(this.BOOKINGS_KEY, JSON.stringify(bookings));
        return { success: true, message: 'Booking deleted' };
    }

    // Feedback Management
    createFeedback(feedbackData) {
        const feedback = JSON.parse(localStorage.getItem(this.FEEDBACK_KEY)) || [];
        const currentUser = this.getCurrentUser();

        const newFeedback = {
            id: feedback.length > 0 ? Math.max(...feedback.map(f => f.id)) + 1 : 1,
            userId: currentUser ? currentUser.id : null,
            username: currentUser ? currentUser.username : 'Anonymous',
            ...feedbackData,
            createdAt: new Date().toISOString()
        };

        feedback.push(newFeedback);
        localStorage.setItem(this.FEEDBACK_KEY, JSON.stringify(feedback));
        return { success: true, message: 'Feedback submitted successfully', feedback: newFeedback };
    }

    getAllFeedback() {
        const feedback = JSON.parse(localStorage.getItem(this.FEEDBACK_KEY)) || [];
        return feedback.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
}

// Initialize storage system
const storage = new OfflineStorage();

// =================== AUTHENTICATION MODAL FUNCTIONS ===================

function updateAuthUI() {
    const currentUser = storage.getCurrentUser();
    const authButtons = document.querySelector('.auth-buttons');
    
    if (currentUser && authButtons) {
        authButtons.innerHTML = `
            <div style="color: #f0f2f5; font-weight: 600; margin-right: 1rem;">
                <i class="fas fa-user-circle"></i> ${currentUser.firstname}
            </div>
            <button class="auth-btn" onclick="handleLogout()"><i class="fas fa-sign-out-alt"></i> Logout</button>
        `;
    }
}

function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        storage.logoutUser();
        updateAuthUI();
        navigateTo('home');
        alert('You have been logged out successfully');
    }
}

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
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    const result = storage.loginUser(username, password);
    
    if (result.success) {
        alert('✓ Login successful! Welcome back.');
        updateAuthUI();
        closeLoginModal();
        
        // Re-initialize the current page if it's the booking page
        const activePage = document.querySelector('.page.active');
        if (activePage && activePage.id === 'booking-page') {
            initBooking();
        }
    } else {
        alert('✗ ' + result.message);
    }
}

function handleRegisterSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const firstname = document.getElementById('register-firstname').value.trim();
    const lastname = document.getElementById('register-lastname').value.trim();
    const password = document.getElementById('register-password').value;

    if (!username || !email || !firstname || !lastname || !password) {
        alert('Please fill in all fields');
        return;
    }

    const result = storage.registerUser(username, email, firstname, lastname, password);
    
    if (result.success) {
        alert('✓ Account created successfully! You can now login.');
        // Auto-login
        storage.loginUser(username, password);
        updateAuthUI();
        closeRegisterModal();
    } else {
        alert('✗ ' + result.message);
    }
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
