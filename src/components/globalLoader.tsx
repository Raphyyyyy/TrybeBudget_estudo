import React from 'react';
import '../styles/globalLoader.css'; 

export default function GlobalLoader({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;

  return (
    <div className="loader-overlay">
      <div className="spinner" />
      {console.log('Carregando...')}
    </div>
  );
}
