import { useState } from 'react';
import { Footer } from 'flowbite-react';
import './app.css';


export default function App(){
  const [peso, setPeso] = useState ('');
  const [altura, setAltura] = useState('');
  
  //chamado no h2
  const[mensagem, setMensagem] = useState('');
  
  //calculo do imc
  function calcularImc(){
    const alt =  altura / 100;
    const imc = peso / (alt * alt);
    if(imc < 18.6) {
      setMensagem("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2))
    }else if (imc >= 18.6 && imc < 24.9){
      setMensagem("Peso ideal! Seu IMC: " + imc.toFixed(2))
    }else if (imc >= 24.9 && imc < 34.9){
      setMensagem("Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2))
    }else if (imc > 34.9){
      setMensagem("Cuidado Obesidade! Seu IMC: " + imc.toFixed(2))
    }
  }

  return (
    <div className="app">
      <h1>
        Calculadora IMC
      </h1>
      <span>Vamos calcular seu imc</span>
      <div className="area-input">
        <input 
          type="text"
          placeholder="Peso en (kg) Ex: 90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={calcularImc}>
          Calcular
        </button>
      </div>
      <h2>{mensagem}</h2>

      <div >
      <Footer className='footer'>
      <Footer.Copyright  by=" Desenvolvidor por William R." year={2025} />
    </Footer>
    </div>
    </div>
  )
}