const newPromise = new Promise(function (resolve, reject) {
    resolve('Раз'); // Сразу получим обработанный промис
});

function firstAction(value) {
  /* Значением value станет то, что мы передали
  функции resolve при создании промиса.
  То есть строка "Раз". */

    return `${value}, два`;
}

function secondAction(value) {
  /* Тут значение value — это то, что вернёт
  предыдущий метод then, то есть строка "Раз, два" */

    return `${value}, три`;
}

function thirdAction(value) {
    console.log(value);
}

newPromise.then(firstAction).then(secondAction).then(thirdAction);

const newPromise = new Promise(function (resolve, reject) {
    reject('Раз'); // Сразу получим отклонённый промис
});

function firstAction(value) {
    return `${value}, два`;
}

function secondAction(value) {
    return `${value}, три`;
}

function thirdAction(value) {
    console.log(value);
}

newPromise
  .then(firstAction)
  .then(secondAction)
  .catch(thirdAction);

