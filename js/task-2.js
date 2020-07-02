let string;

const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.toLowerCase().split(" ");
  const engravingPrice = words.length * pricePerWord;
  console.log(
    `Количество слов в вашем заказе ${words.length}.
Стоимость гравировки одного слова ${pricePerWord}.
Итоговая стоимость вашей гравировки - ${engravingPrice}.`
  );
};

calculateEngravingPrice("Nazar hello how its going", 10);

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  20
);

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  28
);
