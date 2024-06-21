import style from '../Home/Home.module.css';
import Navbar from '../../components/Navbar/NavBar';
import Background from '../../components/Background/GradientAnimation'
import Galeria from '../../components/Galeria/Galeria';
function App() {
  return (
    <div className={style.App}>
        <Background/>
        <Navbar />
        <div className={style.Container}></div>
        <div className={style.text_home}>
          <h1 className={style.text_h1}>
            Conheça um pouco 
            <br/> sobre o Criador desse site 
          </h1>
        </div>
        <Galeria/>
      </div>
  );
}

export default App;