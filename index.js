// Array de mensajes románticos cortos
const romanticMessages = [
    "Eres mi razón de ser",
    "Tu sonrisa es mi felicidad",
    "Cada día a tu lado es un regalo",
    "Eres lo más bonito que tengo",
    "Mi corazón late solo por ti",
    "Contigo hasta el fin del mundo",
    "Eres mi sueño hecho realidad",
    "Te amo más de lo que imaginas",
    "Eres perfecta para mí",
    "No cambiaría ni un instante a tu lado",
    "Eres la dueña de mi alma",
    "Mi amor por ti no tiene fin",
    "Eres la mujer más especial",
    "Eres mi inspiración cada día",
    "Quiero toda una vida contigo",
    "Eres mi persona favorita",
    "Tus ojos son mi paz",
    "Me haces la persona más afortunada",
    "Eres mi todo",
    "Eres la luz de mi vida"
];

// Variables globales
let messageCount = 0;
let leftMessageIndex = 0;
let rightMessageIndex = 0;

// Elementos del DOM
const bouquet = document.getElementById('bouquet');
const actionBtn = document.getElementById('actionBtn');
const counter = document.getElementById('counter');
const messagesContainer = document.getElementById('messagesContainer');
const leftMessages = document.getElementById('leftMessages');
const rightMessages = document.getElementById('rightMessages');
const heartsContainer = document.getElementById('heartsContainer');

// Crear flores del ramo
function createFlowers() {
    // Posiciones para las flores en el ramo
    const flowerPositions = [
        {top: 30, left: 60, color: 'red', size: 1.0},
        {top: 20, left: 100, color: 'pink', size: 0.9},
        {top: 40, left: 140, color: 'red', size: 1.1},
        {top: 10, left: 180, color: 'pink', size: 0.8},
        {top: 50, left: 220, color: 'red', size: 1.0},
        {top: 25, left: 40, color: 'pink', size: 0.9},
        {top: 60, left: 80, color: 'red', size: 1.2},
        {top: 35, left: 120, color: 'pink', size: 1.0},
        {top: 15, left: 160, color: 'red', size: 0.9},
        {top: 45, left: 200, color: 'pink', size: 1.1},
        {top: 5, left: 240, color: 'red', size: 0.8},
        {top: 55, left: 20, color: 'pink', size: 1.0}
    ];
    
    // Crear cada flor
    flowerPositions.forEach((pos, index) => {
        createFlower(pos.top, pos.left, pos.color, pos.size, index);
    });
}

// Crear una flor individual
function createFlower(top, left, color, size, index) {
    const flower = document.createElement('div');
    flower.className = `flower flower-${color}`;
    flower.style.top = `${top}px`;
    flower.style.left = `${left}px`;
    flower.style.transform = `scale(${size})`;
    
    // Crear centro de la flor
    const center = document.createElement('div');
    center.className = 'flower-center';
    flower.appendChild(center);
    
    // Crear pétalos
    for (let i = 1; i <= 5; i++) {
        const petal = document.createElement('div');
        petal.className = `flower-petal petal-${i}`;
        petal.style.backgroundColor = color === 'red' ? '#dc143c' : '#ff69b4';
        flower.appendChild(petal);
    }
    
    // Crear tallo
    const stem = document.createElement('div');
    stem.className = 'flower-stem';
    flower.appendChild(stem);
    
    // Crear hojas en algunos tallos
    if (index % 3 === 0) {
        const leaf1 = document.createElement('div');
        leaf1.className = 'flower-leaf leaf-left';
        stem.appendChild(leaf1);
        
        const leaf2 = document.createElement('div');
        leaf2.className = 'flower-leaf leaf-right';
        stem.appendChild(leaf2);
    }
    
    bouquet.appendChild(flower);
}

// Mostrar mensaje en el lado izquierdo
function showLeftMessage() {
    if (leftMessageIndex >= romanticMessages.length) {
        leftMessageIndex = 0;
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = romanticMessages[leftMessageIndex];
    
    leftMessages.appendChild(messageDiv);
    
    // Mostrar con animación después de un breve retraso
    setTimeout(() => {
        messageDiv.classList.add('show');
    }, 10);
    
    leftMessageIndex++;
}

// Mostrar mensaje en el lado derecho
function showRightMessage() {
    if (rightMessageIndex >= romanticMessages.length) {
        rightMessageIndex = 0;
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = romanticMessages[rightMessageIndex];
    
    rightMessages.appendChild(messageDiv);
    
    // Mostrar con animación después de un breve retraso
    setTimeout(() => {
        messageDiv.classList.add('show');
    }, 10);
    
    rightMessageIndex++;
}

// Crear efecto de corazones flotantes
function createHearts() {
    const heartCount = 12;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤';
        
        // Posición aleatoria en la parte inferior
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.fontSize = `${20 + Math.random() * 30}px`;
        
        // Color aleatorio entre rojo y rosa
        const colors = ['#dc143c', '#ff69b4', '#c71585', '#ff1493'];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Duración de animación aleatoria
        const duration = 2 + Math.random() * 2;
        heart.style.animationDuration = `${duration}s`;
        
        heartsContainer.appendChild(heart);
        
        // Eliminar el corazón después de la animación
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, duration * 1000);
    }
}

// Animar el ramo
function animateBouquet() {
    bouquet.classList.add('shake');
    
    // Mover flores individualmente
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
        const randomRotation = (Math.random() - 0.5) * 10;
        flower.style.transform += ` rotate(${randomRotation}deg)`;
    });
    
    // Quitar la clase shake después de la animación
    setTimeout(() => {
        bouquet.classList.remove('shake');
        
        // Restablecer rotación de flores
        flowers.forEach(flower => {
            const currentTransform = flower.style.transform;
            // Eliminar la rotación aleatoria manteniendo la escala
            const scaleMatch = currentTransform.match(/scale\([^)]+\)/);
            flower.style.transform = scaleMatch ? scaleMatch[0] : '';
        });
    }, 500);
}

// Manejar clic en el botón
function handleButtonClick() {
    // Incrementar contador
    messageCount++;
    
    // Actualizar contador
    counter.textContent = `Has descubierto ${messageCount} mensaje${messageCount !== 1 ? 's' : ''} especial${messageCount !== 1 ? 'es' : ''}`;
    
    // Mostrar contenedor de mensajes si es la primera vez
    if (!messagesContainer.classList.contains('show')) {
        messagesContainer.classList.add('show');
    }
    
    // Mostrar mensajes alternando lados
    if (messageCount % 2 === 1) {
        showLeftMessage();
    } else {
        showRightMessage();
    }
    
    // Animar el ramo
    animateBouquet();
    
    // Crear corazones
    createHearts();
    
    // Cambiar color de fondo ligeramente
    const hue = 330 + (messageCount % 10) * 3;
    document.body.style.background = `linear-gradient(135deg, hsl(${hue}, 100%, 98%) 0%, hsl(${hue}, 80%, 96%) 100%)`;
    
    // Efecto visual en el botón
    actionBtn.style.background = `linear-gradient(to right, hsl(${330 + (messageCount % 20)}, 80%, 45%), hsl(${340 + (messageCount % 20)}, 80%, 60%))`;
}

// Inicializar la página
function init() {
    createFlowers();
    
    // Configurar evento del botón
    actionBtn.addEventListener('click', handleButtonClick);
    
    // Mostrar mensaje inicial después de un breve retraso
    setTimeout(() => {
        handleButtonClick();
    }, 800);
}

// Inicializar cuando se carga la página
window.addEventListener('DOMContentLoaded', init);