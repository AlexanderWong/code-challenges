function isPermOfPal(string) {
  const charMap = {};
  for (let char of string) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  let count = 0;
  for (let char in charMap) {
    if (charMap[char[value]] % 2 == 1) {
      count += 1;
    }
  }
  return count;
}

const pal = "racecar";
