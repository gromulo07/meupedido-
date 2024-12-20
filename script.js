// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function() {
  
    // Faz o botão "Não" fugir para qualquer lugar da tela
    const noBtn = document.getElementById('no-btn');
    noBtn.addEventListener('mouseover', () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
  
      // Calcula novas posições aleatórias dentro da janela
      const randomX = Math.random() * (viewportWidth - noBtn.offsetWidth);
      const randomY = Math.random() * (viewportHeight - noBtn.offsetHeight);
  
      // Move o botão para a nova posição
      noBtn.style.position = 'absolute';
      noBtn.style.left = `${randomX}px`;
      noBtn.style.top = `${randomY}px`;
    });
  
    // Quando clicar no "Sim"
    document.getElementById('yes-btn').addEventListener('click', () => {
      alert('Aaaaaaeeeeee 😍😍');
  
      // Seleciona o contêiner para os fogos de artifício
      const container = document.querySelector(".fireworksdiv");
  
      // Inicializa os fogos de artifício
      const fireworks = new Fireworks(container, {
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        lineStyle: 'round',
        hue: {
          min: 0,
          max: 360
        },
        delay: {
          min: 30,
          max: 60
        },
        rocketsPoint: {
          min: 50,
          max: 50
        },
        lineWidth: {
          explosion: {
            min: 1,
            max: 3
          },
          trace: {
            min: 1,
            max: 2
          }
        },
        brightness: {
          min: 50,
          max: 80
        },
        decay: {
          min: 0.015,
          max: 0.03
        },
        mouse: {
          click: false,
          move: false,
          max: 1
        }
      });
  
      // Inicia os fogos de artifício
      fireworks.start();
    });
  
  });
  
