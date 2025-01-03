const quantity = document.getElementById('quantity');
const priceSell = document.getElementById('price-sell');
const priceBuy = document.getElementById('price-buy');
const result = document.querySelector('.result');

quantity.value = localStorage.getItem('quantity') ? +localStorage.getItem('quantity') : 1;

let res = 0;

const setResult = () => {
  result.textContent = `Результат: ${res.toFixed(2)}`;
};

quantity.addEventListener('input', (e) => {
  const count = +e.target.value;

  localStorage.setItem('quantity', count);
  setResult();
});

priceSell.addEventListener('input', (e) => {
  const count = +quantity.value;
  const priceS = e.target.value ? +e.target.value : 1;
  const priceB = priceBuy.value ? +priceBuy.value : 1;

  res = (count * priceS) / priceB;
  setResult();
});

priceBuy.addEventListener('input', (e) => {
  const count = +quantity.value;
  const priceS = priceSell.value ? +priceSell.value : 1;
  const priceB = e.target.value ? +e.target.value : 1;

  res = (count * priceS) / priceB;
  setResult();
});

