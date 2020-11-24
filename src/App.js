import './App.css';
import React, { useState } from 'react';
import SliderWrapper from './SliderWrapper';

function App() {
  const [cost, setCost] = useState(5000);
  const [term, setTerm] = useState(3);
  const min_cost=5000;
  const max_cost=50000;
  const min_term=3;
  const max_term=24;
  const marksCost = {"5000":"$5.000","50000":"$50.000"};
  const marksTerm = {"3":3,"24":24};

  const setInput = value => {
    document.querySelector("#cost").value=value;
    calculatePorcentage();
  }

  const setInputTerm = value => {
    document.querySelector("#term").value=value;
    calculatePorcentage();
  }

  const calculatePorcentage = _ => {
    const rate = 197.98;
    const total = document.querySelector("#cost").value * rate / 100;
    const quota = total / document.querySelector("#term").value;
    const formatted = "$" + new Intl.NumberFormat("en-IN").format(quota);
    document.querySelector(".value_cost").innerHTML = formatted;
  }


  const _onBlur=(e)=>{
    if(e.target.name==="cost") {
      if (e.target.value < min_cost || e.target.value > max_cost) {
        alert("¡Verifique el valor ingresado, no debe ser inferior a "+min_cost+" ni superior a "+max_cost+"!");
        document.querySelector("#cost").value = min_cost;
      } else {
        setCost(e.target.value);
        calculatePorcentage();
      }
    }else {
      if (e.target.value < min_term || e.target.value > max_term) {
        alert("¡Verifique el valor ingresado, no debe ser inferior a "+min_term+" ni superior a "+max_term+"!");
        document.querySelector("#term").value = min_term;;
      } else {
        setTerm(e.target.value);
        calculatePorcentage()
      }
    }
  }

  const handlerButton = (e) =>{
      alert("¡Estaremos procesando su solicitud en el plazo de 24 horas nos comunicaremos con usted! Gracias.");
  }

  const handlerDetails = (e) =>{
    alert("Detalle de cuotas ....");
  }

  return (
    <>
    <div className="App">

        <div className="box_main">

          <div className="box_credit">

            <h1> Simulá tu credito</h1>

            <div className="calculate_slider">
              <div className="choice_money">
                <div className="title">Monto Total</div>
                <input type="text" id="cost" name="cost" defaultValue={min_cost} className="input_background" onBlur={_onBlur.bind(this)} />
              </div>
              <SliderWrapper min={min_cost} max={max_cost} value={cost} handleSlider={setCost} setInput={setInput} marks={marksCost}/>
              <div className="choice_term">
                <div className="title">Plazo</div>
                <input type="text" id="term" name="term" defaultValue={min_term} className="input_background" onBlur={_onBlur.bind(this)} />
              </div>
              <SliderWrapper min={min_term} max={max_term} value={term} handleSlider={setTerm} setInput={setInputTerm} marks={marksTerm}/>
            </div>

            <div className="box_cost">
              <div className="mensual_cost">
                <div className="title_cost">Cuota fija por mes</div>
                <div className="value_cost"> $2,412.91</div>
              </div>

              <div className="buttons_cost">
                <div className="credit" onClick={handlerButton}>
                  <h2>Obtené credito</h2>
                </div>
                <div className="details" onClick={handlerDetails}>
                  <h3>Ver Detalle de Cuotas</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default App;


