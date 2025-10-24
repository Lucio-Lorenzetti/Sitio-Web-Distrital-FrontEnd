import React from 'react';
import '../../styles/Documentacion/Documentacion.css';
import DocumentItem from '../../components/Documentacion/DocumentItem';

const Documentacion = () => {
  return (
    <div className="documentacion-page">
      <h1>Documentación</h1>
      <div className="document-list">
        {/* Aquí se mostrarán los documentos */}
        <DocumentItem title="Fichas Médicas" link="#" />
      </div>
    </div>
  );
};

export default Documentacion;
