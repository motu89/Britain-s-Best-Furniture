// Three.js background animation
let scene, camera, renderer, particles;
let animationFrameId;
let isScrolling = false;
let scrollTimeout;

function init() {
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Create renderer with performance settings
    renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: false,
        powerPreference: "high-performance"
    });
    
    // Get the container
    const container = document.getElementById('hero-canvas');
    if (!container) return;

    // Setup renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = window.innerWidth < 768 ? 800 : 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create material
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: '#FFFFFF',
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
        depthWrite: false
    });

    // Create mesh
    particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Position camera
    camera.position.z = 3;

    // Handle window resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (resizeTimeout) clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            onWindowResize();
        }, 250);
    });

    // Handle scroll performance
    window.addEventListener('scroll', () => {
        isScrolling = true;
        if (scrollTimeout) clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 150);
    }, { passive: true });
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

function animate() {
    animationFrameId = requestAnimationFrame(animate);

    if (particles) {
        // Reduce animation speed during scroll
        const speed = isScrolling ? 0.0001 : 0.0003;
        particles.rotation.x += speed;
        particles.rotation.y += speed;
        renderer.render(scene, camera);
    }
}

// Cleanup function
function cleanup() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    if (renderer) {
        renderer.dispose();
    }
    if (particles) {
        particles.geometry.dispose();
        particles.material.dispose();
    }
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
}

// Initialize Three.js scene when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    animate();
});

// Cleanup on page unload
window.addEventListener('unload', cleanup);
