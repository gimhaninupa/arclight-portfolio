//=====================================================================
// 1. YOUR DATABASES (MUST BE AT THE TOP, OUTSIDE ANY FUNCTION)
//=====================================================================

const photoAlbumData = {

    "virajith-samadhi-graduation": {
        title: "Virajith & Samadhi's Graduation",
        description: "A memorable graduation album capturing the proud moments, emotions, and celebrations of Virajith and Samadhi on their special day.",
        basePath: "Photography/Albums/Graduations/Virajith & Samadhi's Graduation/",
        imageCount: 25
    },
    "kaushalya-graduation": {
        title: "Kaushalya's Graduation",
        description: "A curated collection of beautifully captured portraits and landscape shots celebrating Kaushalya’s remarkable academic milestone.",
        basePath: "Photography/Albums/Graduations/Kaushalya's Graduation/",
        imageCount: 25
    },
    "tharuka-graduation": {
        title: "Tharuka's Graduation",
        description: "A curated collection of beautifully captured portraits and landscape shots celebrating Tharuka’s remarkable academic milestone.",
        basePath: "Photography/Albums/Graduations/Tharuka's Graduation/",
        imageCount: 31
    },
    "rasari-graduation": {
        title: "Rasari's Graduation",
        description: "A curated collection of beautifully captured portraits and landscape shots celebrating Rasari’s remarkable academic milestone.",
        basePath: "Photography/Albums/Graduations/Rasari's Graduation/",
        imageCount: 32
    },
    "annes-batch": {
        title: "Anne's Batch Photo Day",
        description: "A collection of portraits capturing Anne on her special photo day.",
        basePath: "Photography/Albums/Graduations/Anne's Batch Photo Day/",
        imageCount: 17
    },
    "ai-driven": {
        title: "AI Driven",
        description: "An inspiring showcase of how artificial intelligence is transforming modern business strategies, innovation, and collaboration in the corporate world.",
        basePath: "Photography/Albums/Events/AI Driven/",
        imageCount: 20
    },
    "meghahara": {
        title: "Meghahara",
        description: "A vibrant cultural event capturing artistic expression, music, and unforgettable moments shared by the audience.",
        basePath: "Photography/Albums/Events/Meghahara/",
        imageCount: 18
    },

    "echoes-of-holi": {
        title: "Echoes of Holi",
        description: "A colorful celebration filled with joy, tradition, and unity, capturing the spirit of Holi through lively moments.",
        basePath: "Photography/Albums/Events/Echoes of Holi/",
        imageCount: 20
    },

    "convocation": {
        title: "Convocation",
        description: "A formal academic ceremony celebrating achievement, pride, and the beginning of new professional journeys.",
        basePath: "Photography/Albums/Events/Convocation/",
        imageCount: 22
    },

    "after-glow": {
        title: "After Glow",
        description: "An energetic post-event celebration capturing vibrant lights, music, and unforgettable nighttime moments.",
        basePath: "Photography/Albums/Events/After Glow/",
        imageCount: 28
    }

};

const videoAlbumData = {
    // This "reels" album is used to populate the homepage video grid
    "reels": {
        title: "Video Reels",
        description: "A collection of our latest short-form videos and event highlights.",
        videos: [
            {
                title: "Batch Photo Day",
                cover: "Videography/Batch Photo day/Batch Photo day.png",
                type: "local",
                path: "Videography/Batch Photo day/Batch Photo day.mp4",
                category: "reels" // <-- Category for filter
            },

            {
                title: "Codemania v5.0 2025",
                cover: "Videography/Codemania v5.0 2025/Codemania v5.0 2025.png",
                type: "local",
                path: "Videography/Codemania v5.0 2025/Codemania v5.0 2025.mp4",
                category: "reels" // <-- Category for filter
            },

            {
                title: "Lethal Bots 2025",
                cover: "Videography/Lethal Bots 2025/Lethal Bots 2025.png",
                type: "local",
                path: "Videography/Lethal Bots 2025/Lethal Bots 2025.mp4",
                category: "reels" // <-- Category for filter
            },

            {
                title: "Meghahara 2025",
                cover: "Videography/Meghahara 2025/Meghahara 2025.png",
                type: "local",
                path: "Videography/Meghahara 2025/Meghahara 2025.mp4",
                category: "reels" // <-- Category for filter
            },

            {
                title: "SLTC Convocatiom",
                cover: "Videography/SLTC  convocatiom/SLTC  convocatiom.png",
                type: "local",
                path: "Videography/SLTC  convocatiom/SLTC  convocatiom.mp4",
                category: "reels" // <-- Category for filter
            },

            {
                title: "SLTC Research & Innovation Awards 2025",
                cover: "Videography/SLTC Research & Innovation Awards 2025/SLTC Research & Innovation Awards 2025.png",
                type: "local",
                path: "Videography/SLTC Research & Innovation Awards 2025/SLTC Research & Innovation Awards 2025.mp4",
                category: "reels" // <-- Category for filter
            },

            {
                title: "SLTC Wasath Hiru Udanaya 2025",
                cover: "Videography/SLTC Wasath Hiru Udanaya 2025/SLTC Wasath Hiru Udanaya 2025.png",
                type: "local",
                path: "Videography/SLTC Wasath Hiru Udanaya 2025/SLTC Wasath Hiru Udanaya 2025.mp4",
                category: "reels" // <-- Category for filter
            }

            // {
            // title: "Anya & Ben's Wedding",
            // cover: "Videography/Albums/Weddings/Bryan/Bryan-Cover.png", // <-- Example cover
            // type: "youtube",
            // videoId: "tyBJioe8gOs", // <-- REPLACE THIS
            // category: "weddings" // <-- Category for filter
            // } 
        ]
    }
};


//=====================================================================
// 2. MAIN SCRIPT (CONTROLS ALL PAGES)
//=====================================================================

document.addEventListener('DOMContentLoaded', () => {

    // ---
    // SCRIPT FOR: index.html (Homepage)
    // ---

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (menuToggle && navLinks) {
        const allNavLinks = document.querySelectorAll('.nav-links li a');
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when a link is clicked
        allNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }

    // Smooth Scrolling (for homepage hash links)
    const scrollLinks = document.querySelectorAll('.nav-links a, .hero-buttons a');
    if (scrollLinks.length > 0) {
        scrollLinks.forEach(link => {
            if (link.getAttribute('href').startsWith('#')) {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    const targetId = e.currentTarget.getAttribute('href');
                    if (targetId && targetId.length > 1) {
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            const headerOffset = 70; // Height of the fixed navbar
                            const elementPosition = targetElement.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                        }
                    }
                });
            }
        });
    }

    // Portfolio Filter Bar Function
    function initializeFilterBar(barId, gridSelector) {
        const filterBar = document.getElementById(barId);
        if (!filterBar) return; // Exit if filter bar not found
        const filterButtons = filterBar.querySelectorAll('button');
        const portfolioGrid = document.querySelector(gridSelector);
        if (!portfolioGrid) return; // Exit if grid not found

        // This is a safety check in case the grid hasn't loaded items yet
        // We select items *inside* the grid
        const portfolioItems = portfolioGrid.getElementsByClassName('portfolio-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                filterBar.querySelector('button.active').classList.remove('active');
                button.classList.add('active');

                // Loop through the HTMLCollection of items
                for (let item of portfolioItems) {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || filter === category) {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                }
            });
        });
    }

    // Initialize both filter bars on the homepage
    initializeFilterBar('photo-filter-bar', '#photography .portfolio-grid');
    initializeFilterBar('video-filter-bar', '#videography .portfolio-grid');

    // ---
    // SCRIPT FOR: Homepage Video Grid & Lightbox
    // ---
    const mainVideoGrid = document.getElementById('main-video-grid');
    if (mainVideoGrid) { // This guard runs the script only on the homepage

        // --- Setup Video Lightbox (for homepage) ---
        const videoLightbox = document.getElementById('video-lightbox');
        const videoContainer = document.getElementById('video-container');
        const videoCloseBtn = videoLightbox.querySelector('.lightbox-close');

        // UPDATED: This function now accepts the whole video object
        function openVideoLightbox(video) {
            if (video.type === 'youtube') {
                videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>`;

            } else if (video.type === 'local') {
                // NEW: This builds a <video> player for local files
                videoContainer.innerHTML = `<video controls autoplay>
                    <source src="${video.path}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`;
            }
            videoLightbox.style.display = 'flex';
        }

        function closeVideoLightbox() {
            videoContainer.innerHTML = ""; // This STOPS both video types
            videoLightbox.style.display = 'none';
        }

        videoCloseBtn.addEventListener('click', closeVideoLightbox);
        videoLightbox.addEventListener('click', e => {
            if (e.target === videoLightbox) closeVideoLightbox();
        });
        document.addEventListener('keydown', e => {
            if (videoLightbox.style.display === 'flex' && e.key === 'Escape') {
                closeVideoLightbox();
            }
        });

        // --- Build the Homepage Video Grid ---
        const album = videoAlbumData["reels"]; // We use the "reels" album for the homepage

        if (album) {
            album.videos.forEach(video => {
                const videoItem = document.createElement('div');
                videoItem.className = 'portfolio-item';
                videoItem.setAttribute('data-category', video.category);
                videoItem.style.cursor = 'pointer';

                // UPDATED: This click listener now passes the whole object
                videoItem.addEventListener('click', () => {
                    openVideoLightbox(video);
                });

                videoItem.innerHTML = `
                    <img src="${video.cover}" alt="${video.title}">
                    <div class="item-overlay video">
                        <div class="play-icon">►</div>
                        <h3>${video.title}</h3>
                    </div>
                `;

                mainVideoGrid.appendChild(videoItem);
            });
        }
    }



    // ---
    // SCRIPT FOR: album.html (Photo Album Page)
    // ---
    const albumGrid = document.getElementById('album-grid');
    if (albumGrid) { // This "if" guard checks if we are on album.html

        // === A. DECLARE LIGHTBOX VARIABLES ===
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const closeBtn = lightbox.querySelector('.lightbox-close');
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');

        let currentImageIndex = 0;
        let currentImageArray = [];

        // === B. DECLARE LIGHTBOX FUNCTIONS ===
        function setupLightbox(paths) {
            currentImageArray = paths;
            closeBtn.addEventListener('click', closeLightbox);
            nextBtn.addEventListener('click', showNextImage);
            prevBtn.addEventListener('click', showPrevImage);
            lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
            document.addEventListener('keydown', e => {
                if (lightbox.style.display === 'flex') {
                    if (e.key === 'Escape') closeLightbox();
                    if (e.key === 'ArrowRight') showNextImage();
                    if (e.key === 'ArrowLeft') showPrevImage();
                }
            });
        }

        function openLightbox(index) {
            currentImageIndex = index;
            updateLightboxImage();
            lightbox.style.display = 'flex';
        }

        function closeLightbox() { lightbox.style.display = 'none'; }

        function updateLightboxImage() {
            lightboxImg.src = currentImageArray[currentImageIndex];
            lightboxCaption.textContent = `(${currentImageIndex + 1} / ${currentImageArray.length})`;
        }

        function showPrevImage() {
            currentImageIndex = (currentImageIndex - 1 + currentImageArray.length) % currentImageArray.length;
            updateLightboxImage();
        }

        function showNextImage() {
            currentImageIndex = (currentImageIndex + 1) % currentImageArray.length;
            updateLightboxImage();
        }

        // === C. RUN PAGE LOGIC ===
        const params = new URLSearchParams(window.location.search);
        const albumId = params.get('id');
        const album = photoAlbumData[albumId];

        if (album) {
            document.title = `${album.title} - ARCLIGHT`;
            document.getElementById('album-title').textContent = album.title;
            document.getElementById('album-description').textContent = album.description;

            const grid = document.getElementById('album-grid');
            const imagePaths = [];

            for (let i = 1; i <= album.imageCount; i++) {
                const imgPath = `${album.basePath}${i}.jpg`;
                imagePaths.push(imgPath);

                const photoDiv = document.createElement('div');
                photoDiv.className = 'album-photo';
                photoDiv.innerHTML = `<img src="${imgPath}" alt="${album.title} photo ${i}">`;

                photoDiv.addEventListener('click', () => openLightbox(i - 1));

                grid.appendChild(photoDiv);
            }

            setupLightbox(imagePaths);

        } else {
            document.getElementById('album-title').textContent = "Album Not Found";
            document.getElementById('album-description').textContent = "Sorry, we couldn't find the album you were looking for.";
        }
    }
});