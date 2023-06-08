// Lista de Pokémon e suas tipagens
const pokemonList = [
  { name: 'Pikachu', type: 'Elétrico' },
  { name: 'Bulbasaur', type: 'Planta' },
  { name: 'Charizard', type: 'Fogo' },
  { name: 'Squirtle', type: 'Água' },
  // Adicione mais Pokémon à lista, se desejar
];

// Função para escolher um Pokémon aleatório da lista
function chooseRandomPokemon() {
  const randomIndex = Math.floor(Math.random() * pokemonList.length);
  return pokemonList[randomIndex];
}

function appendResult(result) {
  const div = document.getElementById('resultado');
  div.innerHTML = result;
}

// Função para comparar a tipagem dos Pokémon
function compareTypes(guess, target) {
  if (guess.type === target.type) {
    return 'Você acertou!';
  } if (guess.type === 'Elétrico' && target.type === 'Planta') {
    return 'O Pokémon que você escolheu é de tipagem mais fraca.';
  } if (guess.type === 'Fogo' && target.type === 'Elétrico') {
    return 'O Pokémon que você escolheu é de tipagem mais fraca.';
  } if (guess.type === 'Água' && target.type === 'Fogo') {
    return 'O Pokémon que você escolheu é de tipagem mais fraca.';
  }
  return 'O Pokémon que você escolheu é de tipagem mais forte.';
}

// Função principal do jogo
function playGuessThePokemon() {
  const targetPokemon = chooseRandomPokemon();
  const guess = prompt('Digite o nome de um Pokémon:');

  if (!guess) {
    return; // O jogador cancelou o jogo
  }

  const guessedPokemon = pokemonList.find(
    (pokemon) => pokemon.name.toLowerCase() === guess.toLowerCase(),
  );

  if (!guessedPokemon) {
    appendResult('Esse Pokémon não existe.');
    return;
  }
  appendResult(compareTypes(guessedPokemon, targetPokemon));
}

// Execução do jogo
playGuessThePokemon();
