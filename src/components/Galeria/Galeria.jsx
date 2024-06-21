// src/components/App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styles from './Galeria.module.css';
import trofeu from '../../assets/trofeu.png';
import perfil from '../../assets/perfil.png';

function App() {

  return (
    <div className={styles.ContainerGaleria}>
      <div className={styles.Galeria}>
        <div className={styles.ItemGaleria}>
          <img src={trofeu} alt="Placeholder"  />
        </div>
        <div className={styles.ItemGaleria}>
          <img src={perfil} alt="Placeholder" />
        </div>
        {/* Adicione mais itens da galeria aqui */}
      </div>
    </div>
  );
}

export default App;
