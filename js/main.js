console.log("Site carregado com sucesso!");
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  if(menu.classList.contains('hidden')){
    menu.classList.remove('hidden');
    menu.style.display = 'block';
  } else {
    menu.classList.add('hidden');
    menu.style.display = 'none';
  }
});

