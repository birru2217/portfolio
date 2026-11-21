/**
 * ==========================================================================
 * Biruk Tadesse - Professional Portfolio Script (Clean & Complete)
 * Features: Mobile Nav, Dynamic Typing, Morphing Slideshow, 3D/Snow Modes,
 * Dynamic Projects System, LocalStorage Sync, Posters & Infinite Loop Videos.
 * ==========================================================================
 */

// --- 1. MOBILE MENU TOGGLE ---
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('show');
    }
}

// Menu-n ofumaan akka cufamu yeroo liinkiin tuqamu (Bilbilaaf)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) navLinks.classList.remove('show');
    });
});

// Smooth scroll to section
function navigateTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


// --- 2. POWERFUL TYPING EFFECT ---
const wordsData = [
    "Fullstack Developer.", 
    "Software Architect.", 
    "Frontend Developer.", 
    "Backend Developer.", 
    "Website Developer.", 
    "Android App Developer.", 
    "Desktop App Developer."
];
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
        setTimeout(typeEffect, 500); 
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
    "profile.png",   // Index 0: Gold
    "profile1.png",  // Index 1: Neon Green
    "profile2.png",  // Index 2: Cyan
    "profile3.png",  // Index 3: Deep Pink
    "profile4.png",  // Index 4: Orange Red
    "profile5.png",  // Index 5: Deep Violet
    "profile6.png",  // Index 6: Gold (Geengoo)
    "profile7.png",  // Index 7: Neon Red
    "profilee.png"   // Index 8: Electric Mint (Suuraa Haaraa)
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
let shapeIndex = 0;

function changeProfileImage() {
    const imgBox = document.querySelector(".profile-img-box");
    const imgElement = document.querySelector(".profile-img-box img");

    if (!imgBox || !imgElement) return;

    imgBox.classList.remove("levitate"); 
    imgBox.classList.add("flip-active");
    
    shapeIndex = (shapeIndex + 1) % shapes.length;
    imgIndex = (imgIndex + 1) % profileImages.length;

    setTimeout(() => {
        imgElement.src = profileImages[imgIndex];
        imgBox.style.borderRadius = shapes[shapeIndex];
        imgBox.style.setProperty('--dynamic-color', borderColors[shapeIndex]);
    }, 400); 

    setTimeout(() => {
        imgBox.classList.remove("flip-active");
        imgBox.classList.add("levitate"); 
    }, 800); 
}


// --- 5. 3D VIDEO & SNOW MODES ---
let currentMode = 0; // 0: Off, 1: Video, 2: Snow
let snowTimer = null;

function toggle3DMode() {
    const body = document.body;
    const video = document.getElementById('bgVideo');
    const videoCont = document.querySelector('.video-container');
    const snowContainer = document.getElementById('snow');
    const toggleIcon = document.querySelector('.mode-toggle i');

    currentMode = (currentMode + 1) % 3;

    // Reset All Modes
    body.classList.remove('mode-3d', 'mode-snow');
    if (video) {
        video.pause();
        if (videoCont) videoCont.style.opacity = "0";
    }
    clearInterval(snowTimer);
    if (snowContainer) snowContainer.innerHTML = "";

    if (currentMode === 1) {
        // Mode 1: Video Background
        body.classList.add('mode-3d');
        if (video) {
            video.play();
            if (videoCont) videoCont.style.opacity = "1";
        }
        if (toggleIcon) {
            toggleIcon.className = "fas fa-play-circle";
            toggleIcon.style.color = "#FFD700";
        }
    } 
    else if (currentMode === 2) {
        // Mode 2: Snow Effect
        body.classList.add('mode-snow');
        if (toggleIcon) {
            toggleIcon.className = "fas fa-snowflake";
            toggleIcon.style.color = "#00FFFF";
        }
        snowTimer = setInterval(createSnowflake, 200);
    } 
    else {
        // Mode 0: Default
        if (toggleIcon) {
            toggleIcon.className = "fas fa-cube";
            toggleIcon.style.color = "#FFD700";
        }
    }
}

function createSnowflake() {
    const snowContainer = document.getElementById('snow');
    if (!snowContainer) return;

    const flake = document.createElement('div');
    flake.classList.add('snowflake');
    flake.innerHTML = "❄";
    
    const startLeft = Math.random() * 100;
    flake.style.left = startLeft + "vw";
    
    const duration = Math.random() * 4 + 3;
    flake.style.animationDuration = duration + "s";
    flake.style.fontSize = Math.random() * 15 + 10 + "px";
    flake.style.opacity = Math.random();

    snowContainer.appendChild(flake);

    setTimeout(() => {
        flake.remove();
    }, duration * 1000);
}


// ========================================================
// 🚀 DYNAMIC PROJECTS CATALOG (ALL 12 PROJECTS)
// ========================================================
const defaultProjects = [
   {
        title: "🚀 RLMS Web",
        tags: ["PHP 8.x", "Vanilla JS", "MySQLi", "AJAX"],
        video: "videos/rlms.mp4", 
        poster: "videos/rlms-poster.jpg", 
        description: "A highly secure, 5-tier architecture Registration & Learning Management System. Features Military-grade 2FA, Smart Anti-Cheat Exams, Auto-grading, and a Telegram-style encrypted Chat Hub.",
        link: "https://eplms.page.gd/eplms/",
        btnText: "Visit Website",
        icon: "fas fa-globe",
        themeClass: "color-card-rlms",
        createdAt: "2026-06-12",
        isNew: true
    },
    { 
        title: "🏢 Infoplus Job Portal", 
        tags: ["PHP 8.x", "Tailwind CSS", "AlpineJS", "MySQL"], 
        video: "videos/infoplus.mp4", 
        poster: "videos/infoplus-poster.jpg", 
        description: "A dynamic, high-performance Job Matchmaking platform. Features dual role-based access (Employer & Candidate), auto-generated OTP security, and responsive UI built with Tailwind CSS & AlpineJS.", 
        link: "https://infoplus.ifree.page/",
        btnText: "Visit Website", 
        icon: "fas fa-external-link-alt", 
        themeClass: null, 
        color: "#FFD700", 
        createdAt: "2026-10-23",
        isNew: true
    },
    { 
        title: "🤖 AI Football Predictor Bot", 
        tags: ["Python", "Telegram API", "SQLite3", "REST API", "Data Analytics"], 
        video: "videos/predictor.mp4", 
        poster: "videos/predictor_poster.jpg", 
        description: "An intelligent Telegram bot engineered with Python to deliver data-driven football match predictions, live market odds integration, synthetic risk modeling, and multi-language support.", 
        link: "https://t.me/BirukBetting1_bot", 
        btnText: "Launch Bot", 
        icon: "fab fa-telegram", 
        themeClass: "color-card-4", 
        createdAt: "2026-11-04",
        isNew: true
    },
    { 
        title: "🎓 BHU Exam System", 
        tags: ["Java Swing", "MySQL", "JDBC"], 
        video: "videos/bhu-exam.mp4",           // (Maqaa viidiyoo keetii yoo qabaate akkuma jirutti dhiisi)
        poster: "videos/bhu-exam-poster.jpg",   // (Maqaa poster keetii yoo qabaate akkuma jirutti dhiisi)
        description: "Enterprise Java system with dynamic timers, automated scoring, and secure admin controls. Built from scratch for Bule Hora University.", 
        
        // 👇 LINKII KOODII GITHUB 👇
        link: "https://github.com/birru2217/BHU-Exam-Management-System", 
        
        // 👇 LINKII DOWNLOAD DESKTOP APP (EXE / ZIP / JAR) ASITTI GALCHI 👇
        downloadLink: "LINKII_DOWNLOAD_DESKTOP_APP_KEETII_ASITTI_GALCHI", 

        btnText: "Download App", 
        icon: "fas fa-download", 
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
        video: "videos/cafeteria-app.mp4",
        poster: "videos/cafeteria-app-poster.jpg",
        description: "Native mobile app designed for student convenience. Built with Java and seamlessly integrated with a central university database.", 
        link: "https://github.com/birru2217/bhu-cafeteria-android-app", 
        apkLink: "https://github.com/birru2217/bhu-cafeteria-android-app/releases/download/v1.0.0/app-release.apk",
        btnText: "Download APK", 
        icon: "fas fa-download", 
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


// --- 6. LOAD PROJECTS & SYNC LOCALSTORAGE ---
function loadProjects() {
    const container = document.getElementById("dynamic-projects-container");
    if (!container) return;
    
    // Ragaa LocalStorage irraa fiduu
    let savedProjects = JSON.parse(localStorage.getItem('biruk_projects'));
    
    if (!savedProjects || savedProjects.length < defaultProjects.length) {
        savedProjects = defaultProjects;
    }

    // Always ensure RLMS is current with live link & video preview
    const rlmsProject = savedProjects.find(p => p.title && p.title.includes("RLMS"));
    if (rlmsProject) {
        rlmsProject.link = "https://eplms.page.gd/eplms/";
        rlmsProject.btnText = "Visit Website";
        rlmsProject.icon = "fas fa-globe";
        rlmsProject.video = "videos/rlms.mp4"; 
        rlmsProject.poster = "videos/rlms-poster.jpg";
    }

   // Always ensure Infoplus is current with live link & video preview
    const infoplusProject = savedProjects.find(p => p.title && p.title.includes("Infoplus"));
    if (infoplusProject) {
        infoplusProject.video = "videos/infoplus.mp4";
        infoplusProject.poster = "videos/infoplus-poster.jpg";
    }

    // Always ensure Football Predictor Bot is current with video preview
    const botProject = savedProjects.find(p => p.title && (p.title.includes("Predictor Bot") || p.title.includes("Telegram")));
    if (botProject) {
        botProject.video = "videos/predictor.mp4";
        botProject.poster = "videos/predictor_poster.jpg";
    }

   const cafeteriaAppProject = savedProjects.find(p => p.title && p.title.includes("Cafeteria App"));
    if (cafeteriaAppProject) {
        cafeteriaAppProject.video = "videos/cafeteria-app.mp4";
        cafeteriaAppProject.poster = "videos/cafeteria-app-poster.jpg";
        cafeteriaAppProject.apkLink = "https://github.com/birru2217/bhu-cafeteria-android-app/releases/download/v1.0.0/app-release.apk";
        cafeteriaAppProject.btnText = "Download APK";
        cafeteriaAppProject.icon = "fas fa-download";
    }

    // 👇 BHU EXAM SYSTEM (DESKTOP APP) TIIS GITHUB FI DOWNLOAD SYNC GODHA 👇
    const bhuExamProject = savedProjects.find(p => p.title && p.title.includes("BHU Exam System"));
    if (bhuExamProject) {
        bhuExamProject.link = "https://github.com/birru2217/BHU-Exam-Management-System";
        bhuExamProject.downloadLink = "LINKII_DOWNLOAD_DESKTOP_APP_KEETII_ASITTI_GALCHI"; // 👈 Linkii download app sana bakka buusi!
        bhuExamProject.btnText = "Download App";
        bhuExamProject.icon = "fas fa-download";
    }
// Always ensure BHU Exam System is current with latest Download Link & Video
    const examProject = savedProjects.find(p => p.title && p.title.includes("BHU Exam System"));
    if (examProject) {
        examProject.link = "https://github.com/birru2217/BHU-Exam-Management-System/releases/download/v1.0.0/BHU-Exam-System.rar.zip";
        examProject.btnText = "Download App";
        examProject.icon = "fas fa-download";
        examProject.video = "videos/bhu-exam.mp4";
        examProject.poster = "videos/bhu-exam-poster.jpg";
    }
    // 🔒 INFOPLUS YEROO HUNDA KAARDII 2FFAA (INDEX 1) AKKA TA'U DIRQISIISUU
    const infoIndex = savedProjects.findIndex(p => p.title && p.title.includes("Infoplus"));
    if (infoIndex > -1 && infoIndex !== 1) {
        const [targetInfoplus] = savedProjects.splice(infoIndex, 1);
        savedProjects.splice(1, 0, targetInfoplus);
    }

    // 🔒 TELEGRAM / AI FOOTBALL BOT YEROO HUNDA KAARDII 3FFAA (INDEX 2) AKKA TA'U DIRQISIISUU
    const botIndex = savedProjects.findIndex(p => 
        p.title && (p.title.includes("Predictor Bot") || p.title.includes("Telegram"))
    );
    if (botIndex > -1 && botIndex !== 2) {
        const [targetBot] = savedProjects.splice(botIndex, 1);
        savedProjects.splice(2, 0, targetBot);
    }

    // Save updated data to localStorage
    localStorage.setItem("biruk_projects", JSON.stringify(savedProjects));
    
    let htmlContent = "";

    // LAKKOOFSA (#01, #02...) ITTI DABALUUN TOORU
    savedProjects.forEach((project, index) => {
        const projectNum = String(index + 1).padStart(2, '0'); // Fakkeenyaaf: 01, 02, 03...

        let tagsHtml = "";
        if (Array.isArray(project.tags)) {
            project.tags.forEach(tag => {
                tagsHtml += `<span>${tag.trim()}</span>`;
            });
        }

        // Full-card background video yoo qabaate (INFINITE LOOP GUARANTEED)
        let videoHtml = "";
        if (project.video) {
            let posterAttr = project.poster ? `poster="${project.poster}"` : "";

            videoHtml = `
                <div class="project-video-wrapper">
                    <video class="project-preview-video" 
                           autoplay 
                           muted 
                           loop 
                           playsinline 
                           preload="auto"
                           onended="this.currentTime = 0; this.play();" 
                           ${posterAttr}>
                        <source src="${project.video}" type="video/mp4">
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            `;
        }

        // Badge "NEW"
        let newBadge = project.isNew ? `<div class="badge-new">NEW</div>` : "";

        // Card Colors & Themes
        let cardStyle = "";
        let titleStyle = "";
        let btnStyle = "";
        let cardClass = project.themeClass ? project.themeClass : "custom-added-card";

        if (!project.themeClass) {
            const cardColor = project.color || '#FFD700';
            cardStyle = `border-top-color: ${cardColor};`;
            titleStyle = `color: ${cardColor};`;
            btnStyle = `background: ${cardColor}; color: #000;`;
        }

        htmlContent += `
            <div class="project-card ${cardClass} ${project.video ? 'has-project-video' : ''} reveal" style="${cardStyle}">
                ${newBadge}
                ${videoHtml}
                <div class="project-card-content">
                    <!-- SARARA TOKKORRA WALBIRA: #01 TITLE WALIIN -->
                    <div class="card-title-row">
                        <span class="card-num-badge">#${projectNum}</span>
                        <h3 style="${titleStyle}">${project.title}</h3>
                    </div>
                    <div class="tech-tags">${tagsHtml}</div>

                    <!-- DRAWER HAARAA KAARDIIWWAN HUNDAAF TA'U -->
                    <div class="project-desc-drawer">
                        <p>${project.description}</p>
                    </div>

                  <!-- BUTTONS: DOWNLOAD (APK / DESKTOP) + GITHUB CODE + FLOATING INFO -->
                    <div class="card-actions-wrapper">
                        <a href="${(project.downloadLink || project.apkLink) ? (project.downloadLink || project.apkLink) : project.link}" 
                           class="btn-view" 
                           ${(project.downloadLink || project.apkLink) ? 'download' : 'target="_blank" rel="noopener noreferrer"'} 
                           style="${btnStyle}">
                            <i class="${project.icon || 'fas fa-external-link-alt'}"></i> 
                            <span>${project.btnText || 'View Project'}</span>
                        </a>

                        ${(project.downloadLink || project.apkLink) ? `
                            <a href="${project.link}" class="btn-github-code" target="_blank" rel="noopener noreferrer" title="View Source Code on GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                        ` : ''}

                        <button type="button" class="btn-toggle-desc" onclick="toggleCardDetails(this)" title="Toggle Project Details">
                            <span>Info</span> <i class="fas fa-chevron-up"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    // Add New Project Card
    htmlContent += `
        <div class="project-card add-new-card reveal" onclick="authenticateAndAdd()">
            <div class="project-card-content" style="justify-content: center; align-items: center; text-align: center;">
                <i class="fas fa-plus-circle"></i>
                <h3>Add New Project</h3>
            </div>
        </div>
    `;

    container.innerHTML = htmlContent;

    // 👇 VIIDIYOON MATUMAA AKKA HIN DHAABBANNE GOCHUUF (INFINITE RECYCLE LOOP) 👇
    container.querySelectorAll('.project-preview-video').forEach(video => {
        video.muted = true;
        video.loop = true;
        
        // Yeroo dhumu battalumatti deebisee akka jalqabu
        video.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });

        // Tasa browser-riin yoo pause godhe deebisee akka taphatu
        video.addEventListener('pause', function() {
            this.play();
        });
    });
    
    if (typeof reveal === "function") reveal();
}


// --- 7. SECURITY & ADD PROJECT MODAL ---
function authenticateAndAdd() {
    let password = prompt("🔒 Restricted Access: Enter Developer Password to add a project:");
    
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
    const title = document.getElementById('p_title').value;
    const tagsInput = document.getElementById('p_tags').value;
    const desc = document.getElementById('p_desc').value;
    const link = document.getElementById('p_link').value;
    const color = document.getElementById('p_color').value;

    if (!title || !tagsInput || !desc || !link || !color) {
        alert("⚠️ Please fill all fields!");
        return;
    }

    const tagsArray = tagsInput.split(',');

    const newProj = {
        title: title,
        tags: tagsArray,
        description: desc,
        link: link,
        btnText: "View Project",
        icon: "fas fa-external-link-alt",
        color: color,       
        themeClass: null,   
        isNew: true
    };

    let currentProjects = JSON.parse(localStorage.getItem('biruk_projects')) || defaultProjects;
    currentProjects.push(newProj);
    localStorage.setItem('biruk_projects', JSON.stringify(currentProjects));

    // Clear form inputs
    document.getElementById('p_title').value = '';
    document.getElementById('p_tags').value = '';
    document.getElementById('p_desc').value = '';
    document.getElementById('p_link').value = '';
    document.getElementById('p_color').value = '';
    
    closeProjectModal();
    loadProjects();
    alert("✅ Project Added Successfully!");
}


// --- 8. INITIALIZATION & EVENT LISTENERS ---
window.addEventListener('scroll', reveal);

window.addEventListener('DOMContentLoaded', () => {
    // 1. Load dynamic projects
    loadProjects();

    // 2. Start typing effect
    typeEffect();

    // 3. Initial scroll check
    reveal();

    // 4. Floating profile effect
    const imgBox = document.querySelector(".profile-img-box");
    if (imgBox) imgBox.classList.add("levitate");

    // 5. Morphing profile slideshow every 4s
    setInterval(changeProfileImage, 4000);
});

// --- CARD INFO DRAWER TOGGLE (BILBILAA FI VIDEO-F) ---
function toggleCardDetails(button) {
    const card = button.closest('.project-card');
    if (card) {
        card.classList.toggle('expanded');
    }
}
