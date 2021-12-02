import {useState} from 'react';
import './App.scss';

import DropdownCustom from '../dropdown-custom/dropdownCustom';

import goldImage from '../../assets/img/gold-image.jpg';
import silverImage from '../../assets/img/silver.jpg';

import {metal, payMethod} from '../../data/data.js';

console.log(DropdownCustom)

function App() {

  const [index, setIndex] = useState(0);
  const metalClick = (i) => {
    setIndex(i);
    console.log(index)
  }

  return (
    <div className="App">
      <div className="calculator-wrapper">
        <h2>КАЛЬКУЛЯТОР</h2>
        <div className="calculator-content-wrapper">
          <div className="image-wrapper">
            <img className="metal-image" src={goldImage} alt="gold"/>

          </div>
          <div className="calculator-content">
            <ul className="buttons-wrapper">
              {
                metal.map((el, i)=>(
                  <li className="button-wrapper">
                    <button onClick={()=>metalClick(i)} className="metal-button">
                      {el.title}
                    </button>
                  </li>
                ))
              }
            </ul>
            <p>Укажите<br/> следующие параметры:</p>
            <DropdownCustom data={metal[index].finenessList} placeholder="Проба металла"/>
            <DropdownCustom data={payMethod} placeholder="Способ выплаты"/>
            <input className="text-input" type="text" placeholder="Вес металла (в граммах)"/>
            <div className="total-wrapper">
              <span className="total-text">ИТОГО: 11 500</span>
              <button>Расчитать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
