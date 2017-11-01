const stringPermutations = (str) => {
  const set = new Set();

  (function subroutine(remaining, perm = ''){
    // console.log(perm);
    if (perm.length === str.length) set.add(perm);


    for (let i = 0; i < remaining.length; i++) {
      subroutine(remaining.slice(0,i).concat(remaining.slice(i+1)), perm + remaining[i]);
    }
  })(str);

  return set;
};

console.log(stringPermutations('abcc'));