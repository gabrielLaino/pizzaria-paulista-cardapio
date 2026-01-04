const pizzas = [
  { numero: 1,  titulo: "Paulista", descricao: "presunto, frango, mussarela e bacon", valor: 50.00 },
  { numero: 2,  titulo: "Carne Seca", descricao: "carne seca, cebola, mussarela e bacon", valor: 53.00 },
  { numero: 3,  titulo: "Atum", descricao: "atum, cebola e mussarela", valor: 53.00 },
  { numero: 4,  titulo: "Strogonoff", descricao: "strogonoff de frango, batata palha e mussarela", valor: 52.00 },
  { numero: 5,  titulo: "A Moda da Casa", descricao: "presunto, milho, mussarela, catupiry e bacon", valor: 45.00 },
  { numero: 6,  titulo: "Portuguesa", descricao: "presunto, ovos, cebola e mussarela", valor: 45.00 },
  { numero: 7,  titulo: "Quatro Queijos", descricao: "mussarela, catupiry, gorgonzola e parmesão", valor: 47.00 },
  { numero: 8,  titulo: "Caipira", descricao: "frango, mussarela, bacon e milho", valor: 45.00 },
  { numero: 9,  titulo: "Siciliana", descricao: "mussarela, champignon, catupiry e bacon", valor: 47.00 },
  { numero: 10, titulo: "Larissa", descricao: "mussarela, catupiry e bacon", valor: 45.00 },
  { numero: 11, titulo: "Bacon", descricao: "mussarela, bacon e milho", valor: 45.00 },
  { numero: 12, titulo: "Bauru", descricao: "presunto, tomate e mussarela", valor: 45.00 },
  { numero: 13, titulo: "Brócolis", descricao: "brócolis, mussarela, alho frito e bacon", valor: 45.00 },
  { numero: 14, titulo: "Frango com catupiry", descricao: "mussarela, frango, catupiry e milho", valor: 45.00 },
  { numero: 15, titulo: "Três queijos", descricao: "mussarela, catupiry e cheddar", valor: 48.00 },
  { numero: 16, titulo: "Calabresa com catupiry", descricao: "mussarela, calabresa, catupiry e cebola", valor: 45.00 },
  { numero: 17, titulo: "Frango com Cheddar", descricao: "mussarela, frango, cheddar, milho e bacon", valor: 47.00 },
  { numero: 18, titulo: "Toscana", descricao: "calabresa moída, mussarela e cebola", valor: 45.00 },
  { numero: 19, titulo: "Marguerita", descricao: "mussarela, tomate, manjericão e parmesão", valor: 45.00 },
  { numero: 20, titulo: "Baiana", descricao: "calabresa moída, ovos, cebola, mussarela e pimenta", valor: 45.00 },
  { numero: 21, titulo: "Calabresa", descricao: "mussarela, calabresa e cebola", valor: 43.00 },
  { numero: 22, titulo: "Mussarela", descricao: "mussarela", valor: 45.00 },
  { numero: 23, titulo: "Calabresa com cheddar", descricao: "mussarela, calabresa, cebola e cheddar", valor: 47.00 },
];

const pizzasDoces = [
  { numero: 24, titulo: "Chocolate", descricao: "chocolate e confetti", valor: 45.00 },
  { numero: 25, titulo: "Chocolate e Morango", descricao: "chocolate com fatias de morango", valor: 45.00 },
  { numero: 26, titulo: "Banana", descricao: "banana, leite condensado, mussarela e canela", valor: 45.00 },
  { numero: 27, titulo: "Banana com Chocolate", descricao: "banana, mussarela e chocolate", valor: 45.00 },
  { numero: 28, titulo: "Romeu e Julieta", descricao: "mussarela e goiaba", valor: 45.00 },

]

porcoes = [
  { numero: 29, titulo: "Batata c/ Bacon e Cheddar", descricao: "", valor: 32.00 },
  { numero: 30, titulo: "Esfihas", descricao: "Vários sabores", valor: 5.00 },  
]


const list = document.querySelector(".pizzas");

function mostraPizzas() {
  pizzas
    .sort((a, b) => a.titulo.localeCompare(b.titulo, 'pt-BR'))
    .forEach((pizza, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="text-[#fdfe0c] text-lg">${index + 1} - </span>
        <span class="text-white text-lg">${pizza.titulo} </span>
        <span class="text-sm text-[#fdfe0c]">${pizza.descricao}</span>
        <span class="text-white">R$ ${pizza.valor.toFixed(2)}</span>
      `;
      list.appendChild(li);
    });
}

mostraPizzas()
