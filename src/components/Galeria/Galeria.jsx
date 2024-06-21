// src/components/App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import styles from './Galeria.module.css';
import trofeu from '../../assets/trofeu.png';
import perfil from '../../assets/perfil.png';

function App() {

  return (
    <div className={styles.ContainerGaleria}>
      <div className={styles.Galeria}>

      <Link to="/page2">
      <div  className={styles.ItemGaleria}>
          <img src={perfil} 
          alt="Placeholder"
          className={styles.ItemGaleria}  />
          </div>
      </Link>
      <Link to="/page1">
          <div  className={styles.ItemGaleria}>
          <img src={trofeu} 
          alt="Placeholder" />
          </div>
          
          

      </Link>

      </div>
    </div>
  );
}

export default App;
