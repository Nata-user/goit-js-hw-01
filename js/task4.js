const credits='23580';
const pricePerDroid='3000';
let credit='остаток кредитов';
let totalPrice= 'общая цена заказа';
let totalDroid = prompt('Введите количество дроидов, которые хотите купить');
if (totalDroid === null) {
  alert('Отменено пользователем!');}
  else { totalPrice = totalDroid * pricePerDroid;
    alert(totalPrice);
  }
  if (totalPrice > credits) {
  alert('Недостаточно средств на счету!');}
  else {credit = credits - totalPrice;
  alert(`Вы купили ${totalDroid} дроидов, на счету осталось ${credit} кредитов.`)
}
