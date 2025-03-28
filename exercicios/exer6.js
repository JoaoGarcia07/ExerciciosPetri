  
  let salario = 1000;
  let percentual;
  if (salario <= 280) percentual = 0.2;
  else if (salario <= 700) percentual = 0.15;
  else if (salario <= 1500) percentual = 0.1;
  else percentual = 0.05;
  
  let aumento = salario * percentual;
  let novoSalario = salario + aumento;
  console.log(`Salário antes do reajuste: R$ ${salario.toFixed(2)}`);
  console.log(`Percentual de aumento aplicado: ${(percentual * 100)}%`);
  console.log(`Valor do aumento: R$ ${aumento.toFixed(2)}`);
  console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
  
