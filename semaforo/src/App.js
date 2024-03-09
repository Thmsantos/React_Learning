import './App.css';
import React, { useState } from 'react'

function App() {

  const [toogleVermelho, setToogleVermelho] = useState('#FF2600')
  const [toogleVerde, setToogleVerde] = useState('#fff')
  const [toogleAmarelo, setToogleAmarelo] = useState('#fff')


setInterval(() => {
  setToogleVerde('#24b600')
  setToogleVermelho('#fff')
  setToogleAmarelo('#fff')
}, 30000)

if (toogleVerde === '#24b600'){
  console.log('foi')

      setTimeout(() => {
        setToogleVerde('#fff')
        setToogleAmarelo('#FFFF00')
        setToogleVermelho('#fff')
      },  10000)
    
      setInterval(() => {
        setToogleVermelho('#FF2600')
        setToogleVerde('#fff')
        setToogleAmarelo('#fff')
      }, 15000)
}

  return (
    <div className="App">
      <div className='container'>
        <div style={{backgroundColor: toogleVermelho}} className='semaforo_vermelho'></div>
        <div style={{backgroundColor: toogleAmarelo}} className='semaforo_verde'></div>
        <div style={{backgroundColor: toogleVerde}} className='semaforo_amarelo'></div>
      </div>
    </div>
  );
}

export default App;
 