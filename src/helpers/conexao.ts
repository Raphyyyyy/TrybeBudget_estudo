const API_URL = 'http://localhost:3050';

// faz a conexão com o servidor para fazer login
export const logar = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Erro ao fazer login');
  }

  const token: Login = await response.json();
  return token;
};

// Faz a conexão com o servidor para cadastrar um novo usuário
export const cadastrar = async (name: string, email: string, password: string) => {

    console.log('Dados enviados:', { name, email, password });

  const response = await fetch(`${API_URL}/register`, { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });

if (!response.ok) {
  const errorText = await response.text();
  console.error('Erro do backend (texto):', errorText);

  try {
    const errorData = JSON.parse(errorText);
    throw new Error(errorData.message || 'Erro ao cadastrar usuário');
  } catch {
    throw new Error(errorText || 'Erro ao cadastrar usuário');
  }
}



  
  const result = await response.json();
  return result;
};