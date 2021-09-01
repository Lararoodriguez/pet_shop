import '../styles/InfoContainer.css';
import frenchie from '../components/frenchie-container.png';

function InfoContainer() {
  return (
    <div className="info-container">
        <div>
            <h1>Pet Style</h1>
            <span>Accesorios & Ropa</span>
        </div>
        <div>
         <img className="info-container__img" src={frenchie} alt="frenchiContainer"/>
        </div>
    </div>
  );
}

export default InfoContainer;