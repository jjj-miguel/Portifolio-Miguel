// src/components/Galeria.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import GitHub from '../../assets/github.png';
import styles from './galeria-contatos.module.css';

function Galeria() {
    return (
        <div className={styles.galeriaContatos}>
            <div className={styles.galeria}>
                <a href="https://www.instagram.com/jjj_miguel" target="_blank" rel="noopener noreferrer">
                    <img
                        src={Instagram}
                        alt="Instagram"
                        className={styles.itemGaleriaContatos}
                    />
                </a>
                <a href="https://www.linkedin.com/in/joao-miguel-carlos-061270260/" target="_blank" rel="noopener noreferrer">
                    <img
                        src={Linkedin}
                        alt="Linkedin"
                        className={styles.itemGaleriaContatos}
                    />
                </a>
                <a href="https://github.com/jjj-miguel" target="_blank" rel="noopener noreferrer">
                    <img
                        src={GitHub}
                        alt="GitHub"
                        className={styles.itemGaleriaContatos}
                    />
                </a>
            </div>
        </div>
    );
}

export default Galeria;