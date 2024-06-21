import React from 'react';
import styles from './GradientAnimation.module.css'; // Importe o arquivo CSS Module onde definiremos os estilos

const GradientAnimation = () => {
  return (
    <div className={styles.gradientContainer}>
      <div className={styles.gradientBox}></div>
    </div>
  );
}

export default GradientAnimation;
