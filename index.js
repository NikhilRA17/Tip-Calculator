const rs = document.getElementById('rs');
const service = document.getElementById('service');
const bill = document.getElementById('bill');
const btn = document.getElementById('btn');
const tipEach = document.getElementById('amountEach');

btn.addEventListener('click', () => {
  let total = rs.value;
  let discount = service.value;
  let people = bill.value;

  let tip = (total * discount) / 100 / people;

  tipEach.textContent = 'Rs. ' + tip + ' Each';
});
