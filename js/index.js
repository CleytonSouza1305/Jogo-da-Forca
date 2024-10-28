import palavrasAndCategory from "./palavras.js";

const gameStats = {
  playing: false,
  status: 'paused',
  life: 7,
  secretElement: '',
  palavraSecreta: '',
  categoria: '',
  arrayDePalavras: '',
  wordsClicked: []
};

const keysActivs = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

function gerarPalavraSecreta(arr) {
  const i = Math.floor(Math.random() * arr.length);
  return gameStats.secretElement = arr[i];
}

function createInput(palavra) {
  const content = document.querySelector('.content-word');
  content.innerHTML = ''; 

  for(let i = 0; i < palavra.length; i++) {
    const box = document.createElement('span');
    box.dataset.position = i;
    if (palavra[i] === ' ') {
        box.classList.add('box', 'space');
        content.append(box)
    } else {
        box.classList.add('box', 'letra');
        box.textContent = '_'
        content.append(box);
    }
  }
}

function startGame() {
  gameStats.life = 7;
  gameStats.playing = true;
  gameStats.status = 'playing';
  gameStats.wordsClicked = [];
  gameStats.arrayDePalavras = palavrasAndCategory();
  gameStats.secretElement = gerarPalavraSecreta(gameStats.arrayDePalavras);
  gameStats.palavraSecreta = gameStats.secretElement.nome.toLowerCase();
  gameStats.categoria = gameStats.secretElement.categoria;

  document.getElementById('category').innerText = `Categoria: ${gameStats.categoria}`;
  document.getElementById('tenttive').innerText = `Tentativas restantes: ${gameStats.life}`;

  console.log(gameStats.palavraSecreta);
  createInput(gameStats.palavraSecreta);
}

function updatePlayerLife(life) {
  const img = document.getElementById('forca-image');
  img.src = `../img/forca0${7 - life}.png`;

  if (life <= 0) {
    img.src = '../img/forca06.png'
    gameStats.status = 'game-over';

    const revelate = document.querySelector('.text')
    revelate.classList.remove('display')
    const palavra = document.querySelector('.revelate-palavra')
    palavra.textContent = `"${gameStats.palavraSecreta.toUpperCase()}"`
  }
}

const starGameBtn = document.getElementById('play-game');
starGameBtn.addEventListener('click', () => {
  document.querySelector('header').classList.add('display');
  document.querySelector('.content').classList.remove('display');
  
  startGame();
  keyBoardFn();
});

function disableKey(key, palavra) {
  if (gameStats.status === 'playing' && !gameStats.wordsClicked.includes(key)) {
    gameStats.wordsClicked.push(key);

    if (!palavra.includes(key)) {
      gameStats.life--
      document.getElementById('tenttive').innerText = `Tentativas restantes: ${gameStats.life}`;
      updatePlayerLife(gameStats.life);
    } else {
      addLetra(key, palavra);
    }

    if (checkIfWinner()) {
      gameStats.status = 'winner';
      alert('Parabéns, você venceu!');
    }
  }
}

function keyBoardFn() {
  document.addEventListener('keypress', (ev) => {
    if (gameStats.status === 'playing') {
      const key = ev.key.toLowerCase();
      if (keysActivs.includes(key)) {
        disableKey(key, gameStats.palavraSecreta);
      }
    }
  });
}

function addLetra(key, palavra) {
  palavra.split("").forEach((l, i) => {
    if (l === key) {
      changeBoxInside(l, i);
    }
  });
}

function changeBoxInside(key, index) {
  document.querySelectorAll('.letra').forEach((element) => {
    if (parseInt(element.dataset.position) === index) {
      element.textContent = key;
    }
  });
}

function checkIfWinner() {
    const checkPalavra = [...document.querySelectorAll('.letra')]
      .map(el => el.textContent)
      .join('')
      .replace(/\s+/g, ''); 
  
    return checkPalavra === gameStats.palavraSecreta.replace(/\s+/g, '');
  }
  
