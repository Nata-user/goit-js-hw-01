const ADMIN_PASSWORD = 'jqueryismyjam';
let message= 'сообщение о результате';
  let password = prompt('Введите пароль');
switch(password) {
    case ADMIN_PASSWORD:  
      alert('Добро пожаловать!');
      break;

     case null: 
      alert('Отменено пользователем!');
      break;
    
    default: 
    alert('Доступ запрещен, неверный пароль!');
    }
    alert(message);