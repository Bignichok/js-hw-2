let login;
const logins = [];

const isLoginValid = function (login) {
  if (login.length < 4 || login.length > 16) {
    alert("логин должен содержать от 4 до 16 символов");
    return false;
  }
  return true;
};

const isLoginUnique = function (allLogings, login) {
  if (allLogings.includes(login)) {
    alert("Такой логин уже существует");
    return false;
  }
  return true;
};

const addLogin = function (allLogings, login) {
  if (isLoginValid(login) && isLoginUnique(allLogings, login)) {
    alert("Логин успешно добавлен!");
    logins.push(login);
  }
};

do {
  login = prompt("Введите логин");
  if (login === null) {
    alert("Отменено пользователем");
  }
  addLogin(logins, login);
} while (true);
