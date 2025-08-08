function adicionarAoCarrinho(nome, preco, imagem) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push({ nome, preco, imagem });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function carregarCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const container = document.getElementById('carrinho-container');

  if (carrinho.length === 0) {
    container.innerHTML = "<p>Seu carrinho está vazio.</p>";
    return;
  }

  let total = 0;
  container.innerHTML = "";

  carrinho.forEach((item, index) => {
    total += item.preco;
    const card = document.createElement('div');
    card.className = 'carrinho-item';
    card.innerHTML = `
      <img src="../${item.imagem}" alt="${item.nome}" />
      <div>
        <h3>${item.nome}</h3>
        <p>R$ ${item.preco.toFixed(2)}</p>
        <button onclick="removerDoCarrinho(${index})">Remover</button>
      </div>
    `;
    container.appendChild(card);
  });

  const totalDiv = document.createElement('div');
  totalDiv.className = 'carrinho-total';
  totalDiv.innerHTML = `<h3>Total: R$ ${total.toFixed(2)}</h3>`;
  container.appendChild(totalDiv);
}

function removerDoCarrinho(index) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  carregarCarrinho();
}