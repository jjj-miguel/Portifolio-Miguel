import style from '../Page1/page.module.css';
import Navbar from '../../components/Navbar2/NavBar2';
import React, { useState } from 'react';


function App() {
  const [positions, setPositions] = useState(['center', 'right', 'left']);

  const handleNext = () => {
    setPositions((prevPositions) => {
      return [prevPositions[2], prevPositions[0], prevPositions[1]];
    });
  };

  return (
    <div className={style.App}>
      <Navbar />
      <div className={style.text_home}>
        <h1 className={style.text_h1}>
          Bem Vindo a Minha Sala de Troféus
        </h1>
      </div>
      <div className={style.Container2}>
        <div className={`${style.box} ${style.box1} ${style[positions[0]]}`}>
          1º Lugar
        </div>
        <div className={`${style.box} ${style.box2} ${style[positions[1]]}`}>
          2º Lugar
        </div>
        <div className={`${style.box} ${style.box3} ${style[positions[2]]}`}>
          3º Lugar
        </div>
      </div>
      <button className={style.button} onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;