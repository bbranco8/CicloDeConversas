let rejaineInterval; // Armazena o ID do intervalo para parar quando necessário

    // Função para gerar um número aleatório entre 0 e 2 (3 versões)
    function getRandomVersion() {
      return Math.floor(Math.random() * 3); // Retorna 0, 1 ou 2
    }

    // Função que altera a imagem do Braulio aleatoriamente
    function randomizeRejaineImage() {
      const rejaineImage = document.getElementById('rejaine');
      const newVersion = getRandomVersion();
      rejaineImage.src = `data/speakers/rejaine${newVersion}.png`;
    }

    // Inicia a troca constante das imagens
    function startRejaineRandomizing() {
      rejaineInterval = setInterval(randomizeRejaineImage, 400); // Altera a cada 200ms
    }

    // Para a troca constante das imagens
    function stopRejaineRandomizing() {
      clearInterval(rejaineInterval);
    }

    // Adiciona eventos à imagem
    const rejaineImage = document.getElementById('rejaine');
    rejaineImage.addEventListener('mouseenter', startRejaineRandomizing); // Inicia a troca ao passar o cursor
    rejaineImage.addEventListener('mouseleave', stopRejaineRandomizing); // Para a troca ao tirar o cursor