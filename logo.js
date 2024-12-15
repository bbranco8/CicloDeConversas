let intervalId; // Armazena o ID do intervalo para poder parar

    // Função para gerar um número aleatório entre 0 e 7
    function getRandomVersion() {
      return Math.floor(Math.random() * 8); // Valores de 0 a 7
    }

    // Função que troca aleatoriamente duas letras por versões diferentes
    function randomizeLetters() {
      const letters = document.querySelectorAll('.letter');
      const totalLetters = letters.length;

      // Escolhe dois índices aleatórios (diferentes) para trocar
      let index1 = Math.floor(Math.random() * totalLetters);
      let index2;
      do {
        index2 = Math.floor(Math.random() * totalLetters);
      } while (index1 === index2); // Garante que os índices são diferentes

      // Obtém os elementos das letras selecionadas
      const letter1 = letters[index1];
      const letter2 = letters[index2];

      // Gera novos números aleatórios para as versões
      const newVersion1 = getRandomVersion();
      const newVersion2 = getRandomVersion();

      // Atualiza os atributos `src` das imagens com o novo caminho
      letter1.src = `/data/${letter1.dataset.letter}/${letter1.dataset.letter}${newVersion1}.png`;
      letter2.src = `/data/${letter2.dataset.letter}/${letter2.dataset.letter}${newVersion2}.png`;
    }

    // Inicia a troca constante das letras
    function startRandomizing() {
      // Chama a função `randomizeLetters` a cada 200ms
      intervalId = setInterval(randomizeLetters, 400);
    }

    // Para a troca constante das letras
    function stopRandomizing() {
      clearInterval(intervalId);
    }

    // Adiciona eventos ao contêiner da palavra
    const wordContainer = document.getElementById('word');
    wordContainer.addEventListener('mouseenter', startRandomizing); // Inicia ao passar o mouse
    wordContainer.addEventListener('mouseleave', stopRandomizing);  // Para ao sair com o mouse