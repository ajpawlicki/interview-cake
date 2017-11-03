let j = 0;

function getPermutations(str) {
  if (str.length <= 1) return [str];

  let lastIndex = str.length - 1;
  let lastChar = str[lastIndex];
  let remaining = str.slice(0, lastIndex);

  const permsOfRemaining = getPermutations(remaining);

  const perms = [];

  permsOfRemaining.forEach(permOfRemaining => {
    for (let i = 0; i <= permOfRemaining.length; i++) {
      let perm = permOfRemaining.slice(0, i) + lastChar + permOfRemaining.slice(i);
     
      perms.push(perm);
      j++
    }
  });

  return perms.sort();
};

console.log(getPermutations('cats'));
console.log(j);