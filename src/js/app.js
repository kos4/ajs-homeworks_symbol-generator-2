function canIterate(item) {
  if (item === null) {
    return false;
  }

  return typeof item[Symbol.iterator] === 'function';
}

console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate('Netology')); // true
