function sum(a, b) {
<<<<<<< HEAD
  if(typeof a !== 'number' || typeof b !== 'number') throw new TypeError;
  
  return a+b;
=======
  if ([a, b].some((value) => typeof value !== 'number')) {
    throw new TypeError();
  }

  return a + b;
>>>>>>> 85cfdc54b5e61753b7001b53fe18b1ed9bce77a7
}

module.exports = sum;

