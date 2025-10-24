import React from 'react';

interface CronogramaCardProps {
  title: string;
}

const CronogramaCard = ({ title }: CronogramaCardProps) => {
  return (
    <div className="cronograma-card">
      <h3>{title}</h3>
      {/* Aquí luego se agregará la información del cronograma */}
    </div>
  );
};

export default CronogramaCard;
