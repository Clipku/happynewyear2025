// Elemen HTML
const usernameInput = document.getElementById("username");
const submitNameButton = document.getElementById("submitName");
const personalMessage = document.getElementById("personalMessage");
const nextButton = document.getElementById("nextButton");
const goodbyeMessage = document.getElementById("goodbyeMessage");

// Halaman Navigasi
submitNameButton.addEventListener("click", () => {
    const name = usernameInput.value.trim();
    if (name) {
        // Ucapan Selamat Tahun Baru
        personalMessage.innerHTML = `
            Selamat Tahun Baru, <strong>${name}</strong>! 🎉<br>
            Tahun 2025 adalah awal baru yang penuh dengan harapan, kesempatan, dan mimpi-mimpi baru. Mari kita tinggalkan masa lalu dengan pelajaran berharga, dan sambut masa depan dengan semangat dan keyakinan. <br><br>
            Saya berdoa semoga tahun ini membawa kebahagiaan, kesuksesan, dan kedamaian untuk Anda dan semua orang tercinta di sekitar Anda. Jangan pernah takut bermimpi besar, karena setiap langkah kecil menuju impian akan membawa Anda lebih dekat kepada kebahagiaan. 🌟
        `;

        // Salam dari Uddin
        document.getElementById("fromUddin").innerHTML = `
            Dengan penuh rasa syukur dan harapan, saya, <strong>Uddin</strong>, mengucapkan: <br>
            Semoga tahun 2025 menjadi tahun yang penuh berkah, cinta, dan kebahagiaan untuk kita semua. Terima kasih telah menjadi bagian dari perjalanan ini. 🎆
        `;

        // Navigasi ke halaman ucapan
        document.getElementById("home").classList.add("hidden");
        document.getElementById("message").classList.remove("hidden");
    } else {
        alert("Silakan masukkan nama terlebih dahulu!");
    }
});

nextButton.addEventListener("click", () => {
    // Tampilkan nama pengguna di halaman terakhir
    const name = usernameInput.value.trim();
    goodbyeMessage.innerHTML = `Terima kasih telah bergabung dalam perayaan ini, <strong>${name}</strong>!<br>
    Semoga tahun 2025 membawa kebahagiaan dan kesuksesan untuk Anda! Salam hangat,<br><strong>Uddin</strong>`;
    
    // Navigasi ke halaman terakhir
    document.getElementById("message").classList.add("hidden");
    document.getElementById("goodbye").classList.remove("hidden");
});

// Fireworks Effect
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Firework Particles
let particles = [];

function createParticle(x, y) {
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 3 + 2;
    const size = Math.random() * 3 + 1;
    const color = `hsl(${Math.random() * 360}, 100%, 70%)`;
    return { x, y, angle, speed, size, color, life: 100 };
}

function updateParticles() {
    particles.forEach((p, index) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.life--;
        if (p.life <= 0) particles.splice(index, 1);
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
    });
}

// Launch Fireworks Automatically
function autoFireworks() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    for (let i = 0; i < 40; i++) {
        particles.push(createParticle(x, y));
    }
    setTimeout(autoFireworks, 1000 + Math.random() * 1000);
}

// Animation Loop
function loop() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(loop);
}

// Start Animation
loop();
autoFireworks();
