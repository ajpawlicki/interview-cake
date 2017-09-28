function reverseWordsEasy(str) {
  const characters = str.split(' ');
  
  let start = 0, end = characters.length - 1;

  while (start < end) {
    swap(characters, start, end);
    
    start++;
    end--;
  }

  return characters.join(' ');
};

function swap(arr, i, j) {
  const saved = arr[i];
  arr[i] = arr[j];
  arr[j] = saved;
};

function reverseWordsBroken(str) {
  const characters = str.split('');
  let start = 0, end = characters.length - 1;

  while (start < end) {

    while (characters[end-1] !== ' ') {
      end--;
    }

    // swapping characters won't work b/c diff length words!
    while (characters[start] !== ' ') {
      swap(characters, start, end);
      start++;
      end++;
    }

    while (characters[end] !== ' ') {
      end--;
    }

    start++;
    end--;
  }

  return characters.join('');
};

var message = 'find you will pain only go you recordings security the into if';

function reverseWords(str) {
  const characters = str.split('');

  reverseCharacters(characters, 0, characters.length - 1);

  let currWordStartIndex = 0;
  for (let i = 0; i < characters.length; i++) {
    if (characters[i+1] === ' ' || i === characters.length - 1) {
      reverseCharacters(characters, currWordStartIndex, i);
      currWordStartIndex = i + 2;
    }
  }

  return characters.join('');

  // let i, j, savedJ, savedI;
  // for (i = 0, j = 0; i < characters.length; i++) {
  //   if (characters[i+1] === ' ' || i === characters.length - 1) {
  //     savedJ = j;
  //     savedI = i;

  //     for (; j < savedJ + (i - savedJ)/2; j++) {
  //       swap(characters, savedI, j);
  //       savedI--;
  //     }
  //     j = i + 2;
  //   }
  // }
}

function reverseCharacters(arr, start, end) {
  while (start < end) {
    swap(arr, start, end);
    start++;
    end--;
  }
}

console.log(reverseWords(message));