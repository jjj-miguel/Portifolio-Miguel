import style from './../Navbar2/Navbar.module.css';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import profile from '../../assets/Miguel.jpg';
import Logo from '../../assets/Preview.svg'; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
return(

  <div className={style.Container}>   
    <div className={style.LogoNome}>
      <img src={Logo} alt='logo' width={150} ></img>
  </div>    
  <div className={style.profileMenu}>
      <button className={style.profileButton} onClick={toggleMenu}>
        <img
          className={style.profileAvatar}
          src={profile}   
          alt="Avatar"
          width={50}
          height={50}
        />
        <span className={style.profileNome}></span>
      </button>
      {menuOpen && (
        <div className={style.profileDropdown}>
          <ul className={style.profileOptions}>
            <li className={style.profileOption}>Perfil</li>
            <li className={style.profileOption}>Conta</li>
            <li className={style.profileOption}>Dashboard</li>
            <li className={style.profileOption}>Sair</li>
          </ul>
        </div>
      )}
    </div>
  </div>

      
)
}

export default Navbar;