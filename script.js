/**
 * Biruk Tadesse - Professional Portfolio Script
 * Features: Responsive Mobile Menu, Scroll Spy, Typing Effect, Scroll Reveal,
 * Image Morphing Slideshow, Background Mode Switcher, Particle Network, & Projects CMS.
 */

// --- 1. MOBILE MENU TOGGLE ---
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuBtn = document.querySelector('.menu-btn');
    if (!navLinks) return;

    const isOpen = navLinks.classList.toggle('show');
    if (menuBtn) {
        menuBtn.setAttribute('aria-expanded', String(isOpen));
    }
}

function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuBtn = document.querySelector('.menu-btn');
    if (navLinks && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    }
}

function navigateTo(sectionId) {
    const element = document.getElementById(sectionId);
    closeMenu();
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Close mobile menu when clicking outside navbar or pressing Escape
document.addEventListener('click', (e) => {
    const nav = document.getElementById('navbar');
    if (nav && !nav.contains(e.target)) {
        closeMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMenu();
        closeProjectModal();
    }
});


// --- 2. POWERFUL TYPING EFFECT ---
const wordsData = [
    "Fullstack Developer.",
    "Frontend Developer.",
    "Backend Developer.",
    "Software Engineer.",
    "Website Developer.",
    "Android App Developer.",
    "Desktop App Developer."
];
let charIndex = 0;
let wordIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = wordsData[wordIndex];
    const typingElement = document.querySelector(".typing-text");
    if (!typingElement) return;

    const displayChar = isDeleting
        ? currentWord.substring(0, charIndex--)
        : currentWord.substring(0, charIndex++);

    typingElement.textContent = displayChar;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % wordsData.length;
        setTimeout(typeEffect, 450);
    } else {
        setTimeout(typeEffect, isDeleting ? 45 : 95);
    }
}


// --- 3. SCROLL REVEAL & ACTIVE NAV SCROLL SPY ---
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            element.classList.add('active');
        }
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');
    const scrollPos = window.scrollY + 140;

    let currentId = 'home';
    sections.forEach(sec => {
        if (scrollPos >= sec.offsetTop) {
            currentId = sec.getAttribute('id');
        }
    });

    navAnchors.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${currentId}`);
    });
}

window.addEventListener('scroll', () => {
    reveal();
    updateActiveNavLink();
}, { passive: true });


// --- 4. ADVANCED IMAGE SLIDESHOW (COIN FLIP & SHAPE MORPHING) ---
const profileImages = [
    "profile.png",
    "profile1.png",
    "profile2.png",
    "profile3.png",
    "profile4.png",
    "profile5.png",
    "profile6.png",
    "profile7.png",
    "profilee.png"
];

const shapes = [
    "50%",
    "60% 40% 30% 70% / 60% 30% 70% 40%",
    "50% 50% 50% 50% / 60% 60% 40% 40%",
    "30% 70% 70% 30% / 30% 30% 70% 70%",
    "40% 60% 70% 30% / 40% 50% 60% 50%",
    "70% 30% 40% 60% / 50% 70% 30% 50%",
    "50%",
    "30% 70% 50% 50% / 50% 30% 70% 50%",
    "55% 45% 70% 30% / 45% 65% 35% 55%"
];

const borderColors = [
    "#FFD700",
    "#00FF7F",
    "#00FFFF",
    "#FF1493",
    "#FF4500",
    "#9400D3",
    "#FFD700",
    "#FF0000",
    "#00FF9D"
];

let imgIndex = 0;

function preloadProfileImages() {
    profileImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

function changeProfileImage() {
    const imgBox = document.querySelector(".profile-img-box");
    const imgElement = document.querySelector(".profile-img-box img");
    if (!imgBox || !imgElement) return;

    imgBox.classList.remove("levitate");
    imgBox.classList.add("flip-active");

    imgIndex = (imgIndex + 1) % profileImages.length;

    setTimeout(() => {
        imgElement.src = profileImages[imgIndex];
        imgBox.style.borderRadius = shapes[imgIndex];
        imgBox.style.setProperty('--dynamic-color', borderColors[imgIndex]);
    }, 400);

    setTimeout(() => {
        imgBox.classList.remove("flip-active");
        imgBox.classList.add("levitate");
    }, 800);
}


// --- 5. BACKGROUND MODE SWITCHER (VIDEO -> SNOW -> OFF) ---
let currentMode = 1; // Starts in Mode 1 (Video) matching <body class="mode-3d">
let snowTimer = null;

function toggle3DMode() {
    const body = document.body;
    const video = document.getElementById('bgVideo');
    const snowContainer = document.getElementById('snow');
    const toggleBtn = document.querySelector('.mode-toggle');
    const toggleIcon = document.querySelector('.mode-toggle i');

    currentMode = (currentMode + 1) % 3;

    body.classList.remove('mode-3d', 'mode-snow');
    if (video) video.pause();
    clearInterval(snowTimer);
    if (snowContainer) snowContainer.innerHTML = "";

    if (currentMode === 1) {
        body.classList.add('mode-3d');
        if (video) video.play().catch(() => {});
        if (toggleIcon) {
            toggleIcon.className = "fas fa-play-circle";
            toggleIcon.style.color = "#FFD700";
        }
        if (toggleBtn) toggleBtn.title = "Video Mode (Click for Snow)";
    } else if (currentMode === 2) {
        body.classList.add('mode-snow');
        if (toggleIcon) {
            toggleIcon.className = "fas fa-snowflake";
            toggleIcon.style.color = "#00FFFF";
        }
        if (toggleBtn) toggleBtn.title = "Snow Mode (Click to Turn Off)";
        snowTimer = setInterval(createSnowflake, 220);
    } else {
        if (toggleIcon) {
            toggleIcon.className = "fas fa-cube";
            toggleIcon.style.color = "#FFD700";
        }
        if (toggleBtn) toggleBtn.title = "Effects Off (Click for Video)";
    }
}

function createSnowflake() {
    const snowContainer = document.getElementById('snow');
    if (!snowContainer) return;

    const flake = document.createElement('div');
    flake.classList.add('snowflake');
    flake.textContent = "❄";
    flake.style.left = Math.random() * 100 + "vw";

    const duration = Math.random() * 4 + 3;
    flake.style.animationDuration = duration + "s";
    flake.style.fontSize = Math.random() * 14 + 10 + "px";
    flake.style.opacity = (Math.random() * 0.7 + 0.3).toFixed(2);

    snowContainer.appendChild(flake);
    setTimeout(() => flake.remove(), duration * 1000);
}


// --- 6. ELECTRICAL NETWORK PARTICLE EFFECT (OPTIMIZED FOR PC & MOBILE) ---
function initNetworkCanvas() {
    const canvas = document.getElementById('networkCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particlesArray = [];
    const mouse = { x: null, y: null, radius: 130 };

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    setCanvasSize();

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = 2;
            this.speedX = (Math.random() - 0.5) * 1.2;
            this.speedY = (Math.random() - 0.5) * 1.2;
            this.color = '#00ffaa';
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function populateParticles() {
        particlesArray = [];
        const isMobile = window.innerWidth < 768;
        const maxParticles = isMobile ? 30 : 75;
        const calculated = Math.floor((canvas.width * canvas.height) / 14000);
        const count = Math.min(maxParticles, Math.max(18, calculated));

        for (let i = 0; i < count; i++) {
            particlesArray.push(
                new Particle(Math.random() * canvas.width, Math.random() * canvas.height)
            );
        }
    }

    function connect() {
        const maxDist = window.innerWidth < 768 ? 85 : 105;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a + 1; b < particlesArray.length; b++) {
                const dx = particlesArray[a].x - particlesArray[b].x;
                const dy = particlesArray[a].y - particlesArray[b].y;
                const distance = Math.hypot(dx, dy);

                if (distance < maxDist) {
                    ctx.strokeStyle = `rgba(0, 255, 170, ${(1 - distance / maxDist) * 0.65})`;
                    ctx.lineWidth = 0.6;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }

            if (mouse.x !== null && mouse.y !== null) {
                const mouseDx = particlesArray[a].x - mouse.x;
                const mouseDy = particlesArray[a].y - mouse.y;
                const mouseDist = Math.hypot(mouseDx, mouseDy);

                if (mouseDist < mouse.radius) {
                    ctx.strokeStyle = `rgba(0, 255, 170, ${1 - mouseDist / mouse.radius})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        connect();
        requestAnimationFrame(animate);
    }

    populateParticles();
    animate();

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            setCanvasSize();
            populateParticles();
        }, 200);
    });
}


// --- 7. DYNAMIC PROJECTS GENERATOR & MINI CMS ---
const defaultProjects = [
    {
        title: "🚀 RLMS (Enterprise)",
        tags: ["PHP 8.x", "Vanilla JS", "MySQLi", "AJAX"],
        description: "A highly secure, 5-tier architecture Registration & Learning Management System. Features Military-grade 2FA, Smart Anti-Cheat Exams, Auto-grading, and a Telegram-style encrypted Chat Hub.",
        link: "https://eplms.page.gd/eplms/",
        btnText: "View Website",
        icon: "fas fa-external-link-alt",
        themeClass: "color-card-rlms",
        createdAt: "2026-06-12"
    },
    {
        title: "🏢 Infoplus Job Portal",
        tags: ["PHP 8.x", "Tailwind CSS", "AlpineJS", "MySQL"],
        description: "A dynamic, high-performance Job Matchmaking platform. Features dual role-based access (Employer & Candidate), auto-generated OTP security, and responsive UI built with Tailwind CSS & AlpineJS.",
        link: "https://infoplus.ifree.page/",
        btnText: "View Website",
        icon: "fas fa-external-link-alt",
        themeClass: null,
        color: "#FFD700",
        createdAt: "2026-10-23"
    },
    {
        title: "🤖 AI Football Predictor Bot",
        tags: ["Python", "Telegram API", "SQLite3", "REST API", "Data Analytics"],
        description: "An intelligent Telegram bot engineered with Python to deliver data-driven football match predictions, live market odds integration, synthetic risk modeling, and multi-language support.",
        link: "https://t.me/BirukBetting1_bot",
        btnText: "Launch Bot",
        icon: "fab fa-telegram",
        themeClass: "color-card-4",
        createdAt: "2026-11-04"
    },
    {
        title: "🎓 BHU Exam System",
        tags: ["Java Swing", "MySQL", "JDBC"],
        description: "Enterprise Java system with dynamic timers, automated scoring, and secure admin controls. Built from scratch for Bule Hora University.",
        link: "https://github.com/birru2217/BHU-Exam-Management-System",
        btnText: "View Code",
        icon: "fab fa-github",
        themeClass: "color-card-1",
        createdAt: "2026-01-01"
    },
    {
        title: "🍲 Cafeteria Website",
        tags: ["HTML/CSS", "JS", "PHP"],
        description: "A modern, responsive web application for university dining. Features digital menus and a real-time ordering management interface.",
        link: "https://github.com/birru2217/bhu-cafeteria-website",
        btnText: "View Code",
        icon: "fab fa-github",
        themeClass: "color-card-2",
        createdAt: "2026-02-01"
    },
    {
        title: "📱 Cafeteria App",
        tags: ["Java (Native)", "XML", "Firebase"],
        description: "Native mobile app designed for student convenience. Built with Java and seamlessly integrated with a central university database.",
        link: "https://github.com/birru2217/bhu-cafeteria-android-app",
        btnText: "View Code",
        icon: "fab fa-github",
        themeClass: "color-card-3",
        createdAt: "2026-03-01"
    },
    {
        title: "🍔 FoodOrder System",
        tags: ["PHP", "MySQL", "Bootstrap 5", "JS"],
        description: "A responsive online food ordering platform. Features an interactive shopping cart, real-time order tracking, multiple payment gateways, and a secure admin dashboard for menu management.",
        link: "https://github.com/birru2217/online-food-ordering-system",
        btnText: "View Project",
        icon: "fab fa-github",
        themeClass: null,
        color: "#e67e22",
        createdAt: "2026-04-01"
    },
    {
        title: "🛒 E-Commerce Online Shopping",
        tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        description: "A fully functional e-commerce web platform for online shopping. Features secure user authentication, interactive shopping cart, product catalog with categories, and a robust admin panel.",
        link: "https://github.com/birru2217/online-shopping-system",
        btnText: "View Project",
        icon: "fab fa-github",
        themeClass: null,
        color: "#e74c3c",
        createdAt: "2026-05-15"
    },
    {
        title: "🌾 Agri-Business Enterprise",
        tags: ["PHP PDO", "MySQL", "Bootstrap", "JS", "RBAC"],
        description: "An enterprise agricultural platform connecting farmers, investors, and consumers. Features secure role-based access control, a crowdfunding ledger, and interactive inventory trackers.",
        link: "https://github.com/birru2217/agri-business-social-enterprise",
        btnText: "View Project",
        icon: "fab fa-github",
        themeClass: null,
        color: "#2ecc71",
        createdAt: "2026-05-20"
    },
    {
        title: "📚 PageNest Bookstore",
        tags: ["PHP", "MySQL", "Bootstrap", "JS", "E-Commerce"],
        description: "A comprehensive online bookstore platform. Features an interactive e-book catalog, paywall for digital PDF downloads, shopping cart, secure checkout, and detailed admin analytics.",
        link: "https://github.com/birru2217/online-bookstore-system",
        btnText: "View Project",
        icon: "fab fa-github",
        themeClass: null,
        color: "#9b59b6",
        createdAt: "2026-05-25"
    },
    {
        title: "📝 BHU Student Clearance",
        tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        description: "An automated student clearance system designed for Bule Hora University. Digitizes clearance workflows across 5 campus offices and academic departments, generating verifiable digital certificates.",
        link: "https://github.com/birru2217/bhu-student-clearance-system",
        btnText: "View Project",
        icon: "fab fa-github",
        themeClass: null,
        color: "#3498db",
        createdAt: "2026-06-05"
    },
    {
        title: "📊 Student Marks Management",
        tags: ["Java Swing", "JDBC", "MySQL", "Desktop"],
        description: "A robust desktop application for managing student academic records. Simplifies grading workflows, mark entry, and grade report generation with atomic transaction database safety.",
        link: "https://github.com/birru2217/student-marks-management",
        btnText: "View Code",
        icon: "fab fa-github",
        themeClass: null,
        color: "#ffffff",
        createdAt: "2026-06-15"
    }
];

function isProjectRecent(project) {
    if (project.isNew === true) return true;
    if (!project.createdAt) return false;
    const diffDays = (Date.now() - new Date(project.createdAt).getTime()) / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= 30;
}

function getContrastTextColor(hexColor) {
    if (!hexColor || !hexColor.startsWith('#')) return '#000';
    let hex = hexColor.replace('#', '');
    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }
    if (hex.length !== 6) return '#000';
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.55 ? '#000000' : '#ffffff';
}

function loadProjects() {
    const container = document.getElementById("dynamic-projects-container");
    if (!container) return;

    const customProjects = JSON.parse(localStorage.getItem('biruk_custom_projects')) || [];
    const allProjects = [...customProjects, ...defaultProjects];

    let htmlContent = "";

    allProjects.forEach((project) => {
        const tagsHtml = project.tags.map(tag => `<span>${tag.trim()}</span>`).join('');
        const newBadge = isProjectRecent(project) ? `<div class="new-ribbon">NEW</div>` : "";
        const cardClass = project.themeClass ? project.themeClass : "custom-added-card";
        const cardStyle = (!project.themeClass && project.color) ? `--card-color: ${project.color};` : "";
        const btnTextStyle = (!project.themeClass && project.color)
            ? `color: ${getContrastTextColor(project.color)};`
            : "";

        htmlContent += `
            <div class="project-card ${cardClass} reveal" style="${cardStyle}">
                ${newBadge}
                <h3>${project.title}</h3>
                <div class="tech-tags">${tagsHtml}</div>
                <p>${project.description}</p>
                <a href="${project.link}" class="btn-view" target="_blank" rel="noopener noreferrer" style="${btnTextStyle}">
                    <i class="${project.icon}"></i> ${project.btnText}
                </a>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
    reveal();
}

function authenticateAndAdd() {
    const password = prompt("🔒 Restricted Access: Enter Developer Password to add a project:");
    if (password === "@Biruk2217") {
        const modal = document.getElementById('addProjectModal');
        if (modal) modal.style.display = 'flex';
    } else if (password !== null) {
        alert("❌ Access Denied! Incorrect Password.");
    }
}

function closeProjectModal() {
    const modal = document.getElementById('addProjectModal');
    if (modal) modal.style.display = 'none';
}

function saveNewProject() {
    const title = document.getElementById('p_title').value.trim();
    const tagsInput = document.getElementById('p_tags').value.trim();
    const desc = document.getElementById('p_desc').value.trim();
    const link = document.getElementById('p_link').value.trim();
    const color = document.getElementById('p_color').value.trim();

    if (!title || !tagsInput || !desc || !link || !color) {
        alert("⚠️ Please fill all fields!");
        return;
    }

    const newProj = {
        title,
        tags: tagsInput.split(',').map(t => t.trim()).filter(Boolean),
        description: desc,
        link,
        btnText: "View Project",
        icon: "fas fa-external-link-alt",
        color,
        themeClass: null,
        isNew: true,
        createdAt: new Date().toISOString().split('T')[0]
    };

    const customProjects = JSON.parse(localStorage.getItem('biruk_custom_projects')) || [];
    customProjects.unshift(newProj);
    localStorage.setItem('biruk_custom_projects', JSON.stringify(customProjects));

    document.getElementById('p_title').value = '';
    document.getElementById('p_tags').value = '';
    document.getElementById('p_desc').value = '';
    document.getElementById('p_link').value = '';
    document.getElementById('p_color').value = '';

    closeProjectModal();
    loadProjects();
    alert("✅ Project Added Successfully!");
}


// --- 8. INITIALIZE EVERYTHING ON DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    typeEffect();
    reveal();
    updateActiveNavLink();
    initNetworkCanvas();
    preloadProfileImages();

    const imgBox = document.querySelector(".profile-img-box");
    if (imgBox) imgBox.classList.add("levitate");

    setInterval(changeProfileImage, 4000);
});
