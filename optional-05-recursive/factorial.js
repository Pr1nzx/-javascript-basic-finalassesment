function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// const numberForFactorial = 5;
// console.log(`Faktorial dari ${numberForFactorial} adalah ${factorial(numberForFactorial)}`);

// Jangan hapus kode di bawah ini!
export default factorial;
