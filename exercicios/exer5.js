const grupo = [
    { idade: 25, peso: 70, sexo: 'M' }, { idade: 30, peso: 65, sexo: 'F' },
    { idade: 40, peso: 80, sexo: 'M' }, { idade: 22, peso: 55, sexo: 'F' },
    { idade: 35, peso: 75, sexo: 'M' }, { idade: 29, peso: 60, sexo: 'F' },
    { idade: 50, peso: 90, sexo: 'M' }, { idade: 27, peso: 58, sexo: 'F' },
    { idade: 45, peso: 85, sexo: 'M' }, { idade: 32, peso: 62, sexo: 'F' }
  ];
  
  let totalHomens = 0;
  let totalMulheres = 0;
  let somaIdadesHomens = 0;
  let somaPesosMulheres = 0;
  
  grupo.forEach(pessoa => {
    if (pessoa.sexo === 'M') {
      totalHomens++;
      somaIdadesHomens += pessoa.idade;
    } else {
      totalMulheres++;
      somaPesosMulheres += pessoa.peso;
    }
  });
  
  console.log(`Total de homens: ${totalHomens}`);
  console.log(`Total de mulheres: ${totalMulheres}`);
  console.log(`Média das idades dos homens: ${(somaIdadesHomens / totalHomens).toFixed(2)}`);
  console.log(`Média dos pesos das mulheres: ${(somaPesosMulheres / totalMulheres).toFixed(2)}`);
  