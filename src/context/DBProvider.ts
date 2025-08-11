import { useEffect, useState } from 'react';
import axios from 'axios';

const incomeURL = 'http://localhost:3050/incomes';
const expenseURL = 'http://localhost:3050/expenses';

export default function useDB(setLoading) {
  const [token, setToken] = useState('');
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  // busca token
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  // busca dados 
  useEffect(() => {
    async function fetchData() {
      try {
        if (typeof setLoading === 'function') setLoading(true); // só chama se for função

        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const [incomeResponse, expenseResponse] = await Promise.all([
          axios.get(incomeURL, config),
          axios.get(expenseURL, config),
        ]);
        setIncome(incomeResponse.data || []);
        setExpense(expenseResponse.data || []);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        if (typeof setLoading === 'function') setLoading(false);
      }
    }

    if (token) {
      fetchData();
    }
  }, [token]);

  // deleta o dado da tabela de acordo com os dados recebidos
  const deleteRecord = async (id, table) => {
    const url = table === 'incomes' ? `${incomeURL}/${id}` : `${expenseURL}/${id}`;
    // aqui ele escolhe a tabela de acordo com o que foi passado

    // console.log('url:', url);
    try {
      if (typeof setLoading === 'function') setLoading(true);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.delete(url, config);
      if (table === 'incomes') {
        setIncome((prev) => prev.filter((record) => record.id !== id));
      } else {
        setExpense((prev) => prev.filter((record) => record.id !== id));
      }
    } catch (error) {
      console.error('Erro ao excluir registro:', error);
    } finally {
      if (typeof setLoading === 'function') setLoading(false);
    }
  };

  return { income, expense, deleteRecord };
}
