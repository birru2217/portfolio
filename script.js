/**
 * Biruk Tadesse - Professional Portfolio Script
 * Includes: Mobile Navigation, Typing Effect, Scroll Reveal, 
 * and Advanced Image Morphing Slideshow.
 */

// --- 1. MOBILE MENU TOGGLE ---
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Menu-n ofumaan akka cufamu yeroo liinkiin tuqamu (Bilbilaaf)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('show');
    });
});


// --- 2. POWERFUL TYPING EFFECT ---
const wordsData = ["Fullstack Developer.", "Frontend Developer.", "Backend Developer.", "Software Engineer.", "Website Developer.", "Android App Developer.", "Desktop App Developer."];
let charIndex = 0;
let wordIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = wordsData[wordIndex];
    const typingElement = document.querySelector(".typing-text");

    if (!typingElement) return;

    const displayChar = isDeleting 
        ? currentWord.substring(0, charIndex--) 
        : currentWord.substring(0, charIndex++);

    typingElement.textContent = displayChar;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 2000); // Boqonnaa yeroo barreeffamni xumuramu
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % wordsData.length;
        setTimeout(typeEffect, 500); // Boqonnaa yeroo barreeffamni hundi dhumu
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
};


// --- 3. SCROLL REVEAL ANIMATION ---
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};


// --- 4. ADVANCED IMAGE SLIDESHOW (COIN FLIP & SHAPE MORPHING) ---
const profileImages = [
    "profile.png", "profile1.png", "profile2.png", "profile3.png", 
    "profile4.png", "profile5.png", "profile6.png", "profile7.png"
];

const shapes = [
    "50%",                                // profile.png (Geengoo)
    "60% 40% 30% 70% / 60% 30% 70% 40%",  // profile1.png
    "50% 50% 50% 50% / 60% 60% 40% 40%",  // profile2.png
    "30% 70% 70% 30% / 30% 30% 70% 70%",  // profile3.png
    "40% 60% 70% 30% / 40% 50% 60% 50%",  // profile4.png
    "70% 30% 40% 60% / 50% 70% 30% 50%",  // profile5.png
    "50%",                                // profile6.png (Geengoo)
    "30% 70% 50% 50% / 50% 30% 70% 50%"   // profile7.png
];

const borderColors = [
    "#FFD700", // Gold
    "#00FF7F", // Neon Green 
    "#00FFFF", // Cyan 
    "#FF1493", // Deep Pink 
    "#FF4500", // Orange Red 
    "#9400D3", // Deep Violet 
    "#FFD700", // Gold
    "#FF0000"  // Neon Red
];

let imgIndex = 0;
let shapeIndex = 0;

function changeProfileImage() {
    const imgBox = document.querySelector(".profile-img-box");
    const imgElement = document.querySelector(".profile-img-box img");

    if (!imgBox || !imgElement) return;

    // A. Animation Coin Flip jalqabi
    imgBox.classList.remove("levitate"); 
    imgBox.classList.add("flip-active");
    
    // B. Index-oota itti aanan filadhu
    shapeIndex = (shapeIndex + 1) % shapes.length;
    imgIndex = (imgIndex + 1) % profileImages.length;

    // C. Walakkaa animation irratti (yeroo 90deg ta'u) suuraa jijjiiri
    setTimeout(() => {
        imgElement.src = profileImages[imgIndex];
        
        // Boca (Morphing) jijjiiri
        imgBox.style.borderRadius = shapes[shapeIndex];
        
        // Halluu Dynamic (Balaqeessu) jijjiiri
        imgBox.style.setProperty('--dynamic-color', borderColors[shapeIndex]);
    }, 400); 

    // D. Animation erga dhumatee booda qulqulleessi
    setTimeout(() => {
        imgBox.classList.remove("flip-active");
        imgBox.classList.add("levitate"); // Danbali'uu itti fufsiisi
    }, 800); 
}


// --- 5. INITIALIZE EVERYTHING ---
window.addEventListener('scroll', reveal);

window.onload = () => { 
    // Typing effect jalqabsiisi
    typeEffect(); 
    
    // Scroll reveal jalqabaaf check godhi
    reveal(); 
    
    // Suuraa Levitate (danbali'uu) jalqabsiisi
    const imgBox = document.querySelector(".profile-img-box");
    if (imgBox) imgBox.classList.add("levitate");

    // Slideshow sekondii 4 hundaatti akka hojjetu godhi
    setInterval(changeProfileImage, 4000); 
};

let currentMode = 0; // 0: Off, 1: Video, 2: Snow
let snowTimer = null; // Cabbii to'achuuf

function toggle3DMode() {
    const body = document.body;
    const video = document.getElementById('bgVideo');
    const videoCont = document.querySelector('.video-container');
    const snowContainer = document.getElementById('snow');
    const toggleIcon = document.querySelector('.mode-toggle i');

    // Mode jijjiiri (0 -> 1 -> 2 -> 0)
    currentMode = (currentMode + 1) % 3;

    // A. Jalqaba hunda dhaabi
    body.classList.remove('mode-3d', 'mode-snow');
    if (video) {
        video.pause();
        if (videoCont) videoCont.style.opacity = "0";
    }
    clearInterval(snowTimer); // Cabbii uumuu dhaabi
    if (snowContainer) snowContainer.innerHTML = ""; // Cabbii jiru qulqulleessi

    // B. Mode haaraa jalqabsiisi
    if (currentMode === 1) {
        // --- MODE 1: VIDEO ---
        body.classList.add('mode-3d');
        if (video) {
            video.play();
            if (videoCont) videoCont.style.opacity = "1";
        }
        toggleIcon.className = "fas fa-play-circle";
        toggleIcon.style.color = "#FFD700"; // Gold
    } 
    else if (currentMode === 2) {
        // --- MODE 2: SNOW ---
        body.classList.add('mode-snow');
        toggleIcon.className = "fas fa-snowflake";
        toggleIcon.style.color = "#00FFFF"; // Cyan
        
        // Cabbii uumuu jalqabi (Sekondii 0.2 hundaatti tokko)
        snowTimer = setInterval(createSnowflake, 200);
    } 
    else {
        // --- MODE 0: OFF ---
        toggleIcon.className = "fas fa-cube";
        toggleIcon.style.color = "#FFD700";
    }
}

// Cabbii tokko uumee gadi harcaasu
function createSnowflake() {
    const snowContainer = document.getElementById('snow');
    if (!snowContainer) return;

    const flake = document.createElement('div');
    flake.classList.add('snowflake');
    flake.innerHTML = "❄"; // Mallattoo cabbii
    
    // Bakka itti harca'u (Bitaa gara Mirgaa)
    const startLeft = Math.random() * 100;
    flake.style.left = startLeft + "vw";
    
    // Saffisa harca'iinsaa (Sekondii 3 - 7)
    const duration = Math.random() * 4 + 3;
    flake.style.animationDuration = duration + "s";
    
    // Hamma cabbii (Size)
    flake.style.fontSize = Math.random() * 15 + 10 + "px";
    flake.style.opacity = Math.random();

    snowContainer.appendChild(flake);

    // Erga gadi kufee booda koodii keessaa balleessi (Memory qusachuuf)
    setTimeout(() => {
        flake.remove();
    }, duration * 1000);
}
// Function Link-oonni jalaan akka hin mullanneef (Navigation Fix)
function navigateTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        // Gara section barbaadameetti smooth scroll godha
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
// ========================================================
// 🚀 DYNAMIC PROJECTS GENERATOR & MINI CMS (MAGIC)
// ========================================================

// ========================================================
        // 🚀 DYNAMIC PROJECTS GENERATOR & MINI CMS (MAGIC - ALL 11 PROJECTS)
        // ========================================================
        const defaultProjects = [
            { 
                title: "🚀 RLMS (Enterprise)", 
                tags: ["PHP 8.x", "Vanilla JS", "MySQLi", "AJAX"], 
                description: "A highly secure, 5-tier architecture Registration & Learning Management System. Features Military-grade 2FA, Smart Anti-Cheat Exams, Auto-grading, and a Telegram-style encrypted Chat Hub.", 
                link: "https://github.com/birru2217/RLMS-Enterprise", 
                btnText: "View Code", 
                icon: "fab fa-github", 
                themeClass: "color-card-rlms", 
                createdAt: "2026-06-12" // Guyyaa uumamaa (NEW tag ni mul'ata)
            },
            { 
                title: "🎓 BHU Exam System", 
                tags: ["Java Swing", "MySQL", "JDBC"], 
                description: "Enterprise Java system with dynamic timers, automated scoring, and secure admin controls. Built from scratch for Bule Hora University.", 
                link: "https://github.com/birru2217/BHU-Exam-Management-System", 
                btnText: "View Code", 
                icon: "fab fa-github", 
                themeClass: "color-card-1", 
                createdAt: "2026-01-01" // Guyyaa 30 darbeera (NEW tag ofumaan haqameera)
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
                title: "🤖 Telegram Automation", 
                tags: ["Python", "Telethon", "API"], 
                description: "Specialized bot solutions for group administration, mass user management, and organizational workflow scaling via Userbots.", 
                link: "https://t.me/BHU_info_col_9", 
                btnText: "View Demo", 
                icon: "fab fa-telegram", 
                themeClass: "color-card-4", 
                createdAt: "2026-04-01" 
            },
            { 
                title: "🍔 FoodOrder System", 
                tags: ["PHP", "MySQL", "Bootstrap 5", "JS"], 
                description: "A responsive online food ordering platform. Features an interactive shopping cart, real-time order tracking, multiple payment gateways, and a secure admin dashboard for menu management.", 
                link: "https://github.com/birru2217/online-food-ordering-system", 
                btnText: "View Project", 
                icon: "fab fa-github", 
                themeClass: null, 
                color: "#e67e22", // Deep Orange (Attractive)
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
                color: "#e74c3c", // Vibrant Red
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
                color: "#2ecc71", // Emerald Green
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
                color: "#9b59b6", // Amethyst Purple
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
                color: "#3498db", // Sky Blue
                createdAt: "2026-06-05" // Added within 30 days (NEW tag visible)
            },
            { 
                title: "📊 Student Marks Management", 
                tags: ["Java Swing", "JDBC", "MySQL", "Desktop"], 
                description: "A robust desktop application for managing student academic records. Simplifies grading workflows, mark entry, and grade report generation with atomic transaction database safety.", 
                link: "https://github.com/birru2217/student-marks-management", 
                btnText: "View Code", 
                icon: "fab fa-github", 
                themeClass: null, 
                color: "#ffffff", // Pure Elegant White (As requested)
                createdAt: "2026-06-15" // Added 2 days ago (NEW tag visible)
            }
        ];

// Function Kaardii uumee HTML keessa galchu
function loadProjects() {
    const container = document.getElementById("dynamic-projects-container");
    if (!container) return;
    
    // Ragaa LocalStorage irraa fiduu, yoo hin jiraanne Default fayyadamuu
    let savedProjects = JSON.parse(localStorage.getItem('biruk_projects'));
    
    // Yoo LocalStorage keessa hin jirre, default isaanii kenniif
    if (!savedProjects || savedProjects.length === 0) {
        savedProjects = defaultProjects;
    }
    
    let htmlContent = "";

    savedProjects.forEach((project) => {
        let tagsHtml = "";
        project.tags.forEach(tag => { tagsHtml += `<span>${tag.trim()}</span>`; });

        // Badge "NEW" yoo isNew = true ta'e qofa
        let newBadge = project.isNew ? `<div style="position: absolute; top: 15px; right: -25px; background: #FFD700; color: #000; font-size: 10px; font-weight: 900; padding: 5px 30px; transform: rotate(45deg); letter-spacing: 2px; box-shadow: 0 2px 10px rgba(255,215,0,0.5); z-index: 10;">NEW</div>` : "";

        // Yoo themeClass qabaate class fayyadama, yoo hin qabaanne halluu (color) ofii kennineefitti fayyadama (Custom added projects)
        let cardStyle = "";
        let titleStyle = "";
        let btnStyle = "";
        let cardClass = project.themeClass ? project.themeClass : "custom-added-card";

        if (!project.themeClass) {
            cardStyle = `border-top-color: ${project.color};`;
            titleStyle = `color: ${project.color};`;
            btnStyle = `background: ${project.color}; color: #000;`;
        }

        htmlContent += `
            <div class="project-card ${cardClass} reveal" style="${cardStyle}">
                ${newBadge}
                <h3 style="${titleStyle}">${project.title}</h3>
                <div class="tech-tags">
                    ${tagsHtml}
                </div>
                <p>${project.description}</p>
                <a href="${project.link}" class="btn-view" target="_blank" style="${btnStyle}">
                    <i class="${project.icon}"></i> ${project.btnText}
                </a>
            </div>
        `;
    });

    // 🪄 ADD NEW PROJECT CARD (Kan si qofaaf hojjetu)
    htmlContent += `
        <div class="project-card add-new-card reveal" onclick="authenticateAndAdd()">
            <i class="fas fa-plus-circle"></i>
            <h3>Add New Project</h3>
        </div>
    `;

    container.innerHTML = htmlContent;
    
    // Animation 'reveal' akka hojjetuuf waamna
    if(typeof reveal === "function") reveal();
}

// 🪄 SECURITY AUTHENTICATION
function authenticateAndAdd() {
    let password = prompt("🔒 Restricted Access: Enter Developer Password to add a project:");
    
    if (password === "@Biruk2217") {
        document.getElementById('addProjectModal').style.display = 'flex';
    } else if (password !== null) {
        alert("❌ Access Denied! Incorrect Password.");
    }
}

function closeProjectModal() {
    document.getElementById('addProjectModal').style.display = 'none';
}

function saveNewProject() {
    let title = document.getElementById('p_title').value;
    let tagsInput = document.getElementById('p_tags').value;
    let desc = document.getElementById('p_desc').value;
    let link = document.getElementById('p_link').value;
    let color = document.getElementById('p_color').value;

    if (!title || !tagsInput || !desc || !link || !color) {
        alert("⚠️ Please fill all fields!");
        return;
    }

    let tagsArray = tagsInput.split(',');

    let newProj = {
        title: title,
        tags: tagsArray,
        description: desc,
        link: link,
        btnText: "View Project",
        icon: "fas fa-external-link-alt",
        color: color,       // Custom color
        themeClass: null,   // Tema ofii isaa akka fayyadamuuf null goona
        isNew: true
    };

    let currentProjects = JSON.parse(localStorage.getItem('biruk_projects')) || defaultProjects;
    
    currentProjects.push(newProj);
    localStorage.setItem('biruk_projects', JSON.stringify(currentProjects));

    // Clear form
    document.getElementById('p_title').value = '';
    document.getElementById('p_tags').value = '';
    document.getElementById('p_desc').value = '';
    document.getElementById('p_link').value = '';
    document.getElementById('p_color').value = '';
    
    closeProjectModal();
    loadProjects();
    alert("✅ Project Added Successfully!");
}

window.addEventListener('DOMContentLoaded', loadProjects);