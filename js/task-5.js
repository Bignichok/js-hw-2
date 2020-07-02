const checkForSpam = function (message) {
  const messageArr = message
    .toLowerCase()
    .replace(/[\[\]]+/g, "")
    .split(" ");

  for (let i = 0; i < messageArr.length; i += 1) {
    let wordForCheck = messageArr[i];

    if (wordForCheck === "spam" || wordForCheck === "sale") {
      return true;
    }
  }
  return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
