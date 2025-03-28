const pessoas = [
    { altura: 1.75, sexo: 'M' }, { altura: 1.60, sexo: 'F' }, { altura: 1.82, sexo: 'M' },
    { altura: 1.55, sexo: 'F' }, { altura: 1.90, sexo: 'M' }, { altura: 1.65, sexo: 'F' },
    { altura: 1.72, sexo: 'M' }, { altura: 1.58, sexo: 'F' }, { altura: 1.68, sexo: 'F' },
    { altura: 1.80, sexo: 'M' }, { altura: 1.59, sexo: 'F' }, { altura: 1.63, sexo: 'F' },
    { altura: 1.70, sexo: 'M' }, { altura: 1.75, sexo: 'F' }, { altura: 1.85, sexo: 'M' }
  ];
  
  let maiorAltura = pessoas[0].altura;
  let menorAltura = pessoas[0].altura;
  let somaAlturaMulheres = 0;
  let qtdeMulheres = 0;
  let qtdeHomens = 0;
  
  for (let i = 0; i < pessoas.length; i++) {
    let pessoa = pessoas[i];
    if (pessoa.altura > maiorAltura) maiorAltura = pessoa.altura;
    if (pessoa.altura < menorAltura) menorAltura = pessoa.altura;
    if (pessoa.sexo === 'F') {
      somaAlturaMulheres += pessoa.altura;
      qtdeMulheres++;
    } else {
      qtdeHomens++;
    }
  }
  
  console.log(`Maior altura: ${maiorAltura}`);
  console.log(`Menor altura: ${menorAltura}`);
  console.log(`Média de altura das mulheres: ${(somaAlturaMulheres / qtdeMulheres).toFixed(2)}`);
  console.log(`Número de homens: ${qtdeHomens}`);
  
