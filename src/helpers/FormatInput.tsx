import { useState } from 'react';
import { formatToBRL } from './currency';

// Muda para formato de dinheiro no evento onBlur
function FormatInput({ name, value, onChange }) {
  const [inputValue, setInputValue] = useState(value);

  const handleBlur = () => {
    let valorInput = inputValue.replace(/[^\d,]/g, ''); // Remove caracteres inválidos (permite apenas números e vírgula)

    // Substituir apenas a última vírgula por um ponto para permitir casas decimais
    if (valorInput.includes(',')) {
      const partes = valorInput.split(',');
      const parteInteira = partes.slice(0, -1).join(''); // Junta tudo antes da última vírgula
      const parteDecimal = partes[partes.length - 1]; // Última parte após a vírgula

      valorInput = `${parteInteira}.${parteDecimal}`; // Monta o número corretamente
    }

    if (valorInput) {
      valorInput = formatToBRL(parseFloat(valorInput)); // Converte para BRL mantendo casas decimais
    }

    setInputValue(valorInput); // Atualiza o valor no estado interno do campo
    onChange({ target: { name, value: valorInput } }); // Atualiza o estado do componente pai
  };

  const handleChange = (e) => {
    setInputValue(e.target.value); // Atualiza o estado local enquanto o usuário digita
  };

  return <input name={ name } value={ inputValue } onChange={ handleChange } onBlur={ handleBlur } />;
}

export default FormatInput;
