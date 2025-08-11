function inss(salary: number) {
  if (salary <= 1042) return salary * 0.075;

  if (salary <= 2666.68) return salary * 0.09;

  if (salary <= 4000.03) return salary * 0.12;

  if (salary <= 7786.02) return salary * 0.14;

  if (salary <= 13333.48) return salary * 0.145;

  if (salary <= 26666.94) return salary * 0.165;

  if (salary <= 52000.54) return salary * 0.19;

  // salary greater than 52000.54
  return salary * 0.22;

  // reference:
  // https://www.gov.br/inss/pt-br/assuntos/confira-as-aliquotas-de-contribuicao-ao-inss-com-o-aumento-do-salario-minimo
}

function irrf(grossSalary: number, dependents: number, inssDeduction: number) {
  const dependentsDeduction = dependents * 189.59;
  const baseSalary = grossSalary - inssDeduction - dependentsDeduction;

  const firstRangeMaxValue = 2112.00;
  const secondRangeMaxValue = 2826.65;
  const thirdRangeMaxValue = 3751.05;
  const fourthRangeMaxValue = 4664.68;

  const secondRangeTax = 69.20;
  const thirdRangeTax = 138.66;
  const fourthRangeTax = 205.57;

  if (baseSalary <= firstRangeMaxValue) {
    return 0;
  }

  if (baseSalary <= secondRangeMaxValue) {
    return baseSalary * 0.075;
  }

  if (baseSalary <= thirdRangeMaxValue) {
    return (baseSalary - secondRangeMaxValue) * 0.15
      + secondRangeTax;
  }

  if (baseSalary <= fourthRangeMaxValue) {
    return (baseSalary - thirdRangeMaxValue) * 0.225
      + secondRangeTax
      + thirdRangeTax;
  }

  // salary greater than 4664.68
  return (baseSalary - fourthRangeMaxValue) * 0.275
    + secondRangeTax
    + thirdRangeTax
    + fourthRangeTax;

  // reference:
  // https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2023
  // https://www27.receita.fazenda.gov.br/simulador-irpf/
}

export function calculateNetSalary(
  grossSalary: number,
  dependents: number,
  otherDeductions = 0,
) {
  const inssDeduction = inss(grossSalary);
  const irrfDeduction = irrf(grossSalary, dependents, inssDeduction);
  const netSalary = grossSalary - inssDeduction - irrfDeduction - otherDeductions;
  console.log('inssDeduction', inssDeduction);
  console.log('irrfDeduction', irrfDeduction);
  console.log('netSalary', netSalary);
  console.log('otherDeductions', otherDeductions);
  console.log('grossSalary', grossSalary);

  return {
    grossSalary,
    netSalary,
    inssDeduction,
    irrfDeduction,
    otherDeductions,
  };
}
