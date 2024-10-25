const gameStats = {
  playing: false,
  life: 6,
  secretElement: '',
  palavraSecreta: '',
  categoria: '',
  arrayDePalavras: '',
  wordsClicked: []
}

function palavrasAndCategory() {
  return palavras = [
      palavra001 = {
          nome: "IRLANDA",
          categoria:"PAÍS"
      },
      palavra002 = {
          nome: "EQUADOR",
          categoria:"PAÍS"
      },
      palavra003 = {
          nome: "CHILE",
          categoria:"PAÍS"
      },
      palavra004 = {
          nome: "INDONESIA",
          categoria:"PAÍS"
      },
      palavra005 = {
          nome: "MALDIVAS",
          categoria:"LUGARES"
      },
      palavra006 = {
          nome: "INGLATERRA",
          categoria:"PAÍS"
      },
      palavra007 = {
          nome: "GROELANDIA",
          categoria:"PAÍS"
      },
      palavra008 = {
          nome: "UZBEQUISTAO",
          categoria:"PAÍS"
      },
      palavra009 = {
          nome: "INDONESIA",
          categoria:"LUGARES"
      },
      palavra010 = {
          nome: "CREGUENHEM",
          categoria:"LUGARES"
      },
      palavra011 = {
          nome: "BICICLETA",
          categoria:"TRANSPORTE"
      },
      palavra012 = {
          nome: "LANCHA",
          categoria:"TRANSPORTE"
      },
      palavra013 = {
          nome: "NAVIO",
          categoria:"TRANSPORTE"
      },
      palavra014 = {
          nome: "TELEFERICO",
          categoria:"TRANSPORTE"
      },
      palavra015 = {
          nome: "MOTOCICLETA",
          categoria:"TRANSPORTE"
      },
      palavra016 = {
          nome: "BARCO",
          categoria:"TRANSPORTE"
      },
      palavra017 = {
          nome: "AERONAVE",
          categoria:"TRANSPORTE"
      },
      palavra018 = {
          nome: "TREM",
          categoria:"TRANSPORTE"
      },
      palavra019 = {
          nome: "CAIAQUE",
          categoria:"TRANSPORTE"
      },
      palavra020 = {
          nome: "FUNICULAR",
          categoria:"TRANSPORTE"
      },
      palavra021 = {
          nome: "XICARA",
          categoria:"OBJETOS"
      },
      palavra022 = {
          nome: "MOEDA",
          categoria:"OBJETOS"
      },
      palavra023 = {
          nome: "ESPARADRAPO",
          categoria:"OBJETOS"
      },
      palavra024 = {
          nome: "SINO",
          categoria:"OBJETOS"
      },
      palavra025 = {
          nome: "CHUVEIRO",
          categoria:"OBJETOS"
      },
      palavra026 = {
          nome: "TAMBORETE",
          categoria:"OBJETOS"
      },
      palavra027 = {
          nome: "LAMPADA",
          categoria:"OBJETOS"
      },
      palavra028 = {
          nome: "BOCAL",
          categoria:"OBJETOS"
      },
      palavra029 = {
          nome: "CORTINA",
          categoria:"OBJETOS"
      },
      palavra030 = {
          nome: "LAPIS",
          categoria:"OBJETOS"
      },
      palavra031 = {
          nome: "MELANCIA",
          categoria:"ALIMENTOS"
      },
      palavra032 = {
          nome: "AMENDOIM",
          categoria:"ALIMENTOS"
      },
      palavra033 = {
          nome: "ESFIRRA",
          categoria:"ALIMENTOS"
      },
      palavra034 = {
          nome: "GOROROBA",
          categoria:"ALIMENTOS"
      },
      palavra035 = {
          nome: "JANTAR",
          categoria:"ALIMENTOS"
      },
      palavra036 = {
          nome: "SABOROSO",
          categoria:"ALIMENTOS"
      },
      palavra037 = {
          nome: "DESJEJUM",
          categoria:"ALIMENTOS"
      },
      palavra038 = {
          nome: "MASTIGAR",
          categoria:"ALIMENTOS"
      },
      palavra039 = {
          nome: "ENGOLIR",
          categoria:"ALIMENTOS"
      },
      palavra040 = {
          nome: "DOCERIA",
          categoria:"ALIMENTOS"
      },
      palavra040 = {
          nome: "DRAGAO",
          categoria:"ANIMAIS"
      },
      palavra041 = {
          nome: "GALINHA",
          categoria:"ANIMAIS"
      },
      palavra042 = {
          nome: "PAVAO",
          categoria:"ANIMAIS"
      },
      palavra043 = {
          nome: "CAMELO",
          categoria:"ANIMAIS"
      },
      palavra044 = {
          nome: "PERU",
          categoria:"ANIMAIS"
      },
      palavra045 = {
          nome: "ZEBRA",
          categoria:"ANIMAIS"
      },
      palavra046 = {
          nome: "DROMEDARIO",
          categoria:"ANIMAIS"
      },
      palavra047 = {
          nome: "CALANGO",
          categoria:"ANIMAIS"
      },
      palavra048 = {
          nome: "SAGUI",
          categoria:"ANIMAIS"
      },
      palavra049 = {
          nome: "LAGARTIXA",
          categoria:"ANIMAIS"
      },
      palavra050 = {
          nome: "HIPOPOTAMO",
          categoria:"ANIMAIS"
      },
      palavra051 = {
          nome: "A ERA DO GELO",
          categoria:"TV E CINEMA"
      },
      palavra052 = {
          nome: "HOMEM ARANHA",
          categoria:"TV E CINEMA"
      },
      palavra053 = {
          nome: "CASA MONSTRO",
          categoria:"TV E CINEMA"
      },
      palavra054 = {
          nome: "TELA QUENTE",
          categoria:"TV E CINEMA"
      },
      palavra055 = {
          nome: "STRANGER THINGS",
          categoria:"TV E CINEMA"
      },
      palavra056 = {
          nome: "O REI DO GADO",
          categoria:"TV E CINEMA"
      },
      palavra057 = {
          nome: "MULHER MARAVILHA",
          categoria:"TV E CINEMA"
      },
      palavra058 = {
          nome: "O INCRIVEL HULK",
          categoria:"TV E CINEMA"
      },
      palavra059 = {
          nome: "BOB ESPONJA",
          categoria:"TV E CINEMA"
      },
      palavra060 = {
          nome: "PANICO NA TV",
          categoria:"TV E CINEMA"
      }
  ];
}

function gerarPalavraSecreta(arr) {
  const i = Math.floor(Math.random() * arr.length)
  return gameStats.secretElement = arr[i]
}

function createInput(palavra) {
  const content = document.querySelector('.content-word')

  for(let i = 0; i < palavra.length; i++) {
    if (palavra[i] === ' ') {
      const space = document.createElement('span')
      space.classList.add('box')
      space.textContent = ' '
      content.append(space)
    } else {
      const box = document.createElement('span')
      box.classList.add('box', 'letra')
      box.dataset.position = i
      box.textContent = palavra[i]
      content.append(box)
    }
  }
}

function startGame() {
  gameStats.life = 6
  gameStats.arrayDePalavras = palavrasAndCategory()
  gameStats.secretElement = gerarPalavraSecreta(gameStats.arrayDePalavras)
  gameStats.palavraSecreta = gameStats.secretElement.nome
  gameStats.categoria = gameStats.secretElement.categoria

  console.log(gameStats.palavraSecreta);
  console.log(gameStats.categoria);
  
  createInput(gameStats.palavraSecreta)
}

function playerLife() {
  const img = document.getElementById('forca-image')
  switch (gameStats.life) {
    case 6:
      img.src = '../img/forca.png'
      break;
  
    default:
      break;
  }
}

const starGameBtn = document.getElementById('play-game')
starGameBtn.addEventListener('click', () => {
  const header = document.querySelector('header')
  header.classList.add('display')

  const container = document.querySelector('.content')
  container.classList.remove('display')

  gameStats.playing = true

  const category = document.getElementById('category')
  category.innerText = `Categoria: ${gameStats.categoria}`

  playerLife()
})

if (gameStats) {
  startGame()
}