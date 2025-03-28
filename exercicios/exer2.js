  const espectadores = [
    { idade: 25, opiniao: 3 }, { idade: 30, opiniao: 2 }, { idade: 22, opiniao: 1 },
    { idade: 40, opiniao: 3 }, { idade: 35, opiniao: 2 }, { idade: 18, opiniao: 1 },
    { idade: 50, opiniao: 3 }, { idade: 28, opiniao: 2 }, { idade: 32, opiniao: 1 },
    { idade: 26, opiniao: 3 }, { idade: 29, opiniao: 2 }, { idade: 45, opiniao: 1 },
    { idade: 20, opiniao: 3 }, { idade: 27, opiniao: 2 }, { idade: 23, opiniao: 1 }
  ];
  
  let somaIdadesOtimo = 0;
  let qtdeOtimo = 0;
  let qtdeRegular = 0;
  let qtdeBom = 0;
  
  espectadores.forEach(espectador => {
    if (espectador.opiniao === 3) {
      somaIdadesOtimo += espectador.idade;
      qtdeOtimo++;
    } else if (espectador.opiniao === 2) {
      qtdeBom++;
    } else {
      qtdeRegular++;
    }
  });
  
  console.log(`Média de idade (ótimo): ${(somaIdadesOtimo / qtdeOtimo).toFixed(2)}`);
  console.log(`Quantidade de pessoas que responderam regular: ${qtdeRegular}`);
  console.log(`Porcentagem de bom: ${(qtdeBom / espectadores.length * 100).toFixed(2)}%`);
  
