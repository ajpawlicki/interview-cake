function rand7() {
  return Math.ceil(Math.random() * 7);
};

function rand5() {
  const randomNum = rand7();
  return randomNum <= 5 ? randomNum : rand5();
};

function rand5Iterative() {
  let randomNum = rand7();

  while (randomNum > 5) {
    randomNum = rand7();
  }

  return randomNum;
};

console.log(rand5());
console.log(rand5Iterative());