  function ehPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  const numeros = [12, 7, 9, 13, 16, 5, 8, 3, 10, 19];
  let somaPares = 0;
  let somaPrimos = 0;
  
  numeros.forEach(n => {
    if (n % 2 === 0) somaPares += n;
    if (ehPrimo(n)) somaPrimos += n;
  });
  
  console.log(`Soma dos números pares: ${somaPares}`);
  console.log(`Soma dos números primos: ${somaPrimos}`);
