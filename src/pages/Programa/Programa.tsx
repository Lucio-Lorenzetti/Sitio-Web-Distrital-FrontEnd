import React from 'react';
import '../../styles/Programa/Programa.css';
import CronogramaCard from '../../components/Programa/CronogramaCard';

const Programa = () => {
  return (
    <div className="programa-page">
      <h1>Cronogramas</h1>
      <div className="cronogramas-list">
        {/* Aquí se mostrarán los cronogramas */}
        <CronogramaCard title="Cronograma de ejemplo" />
      </div>
    </div>
  );
};

export default Programa;
