  const data = "22/04/1983".split("/");
  const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  console.log(`${data[0]} de ${meses[parseInt(data[1]) - 1]} de ${data[2]}`);
  