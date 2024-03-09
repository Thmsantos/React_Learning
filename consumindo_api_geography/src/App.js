import './App.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function App() {

  let array_nomes = []
  let array_capitais = []
  let array_continentes = []
  let array_idiomas = []
  let puxar_idiomas = []
  let obj_idiomas = []
  let puxar_moedas = []
  let array_moedas = []
  let obj_moedas = []

  const[nomes, setNomes] = useState([])
  const[capitais, setCapitais] = useState([])
  const[idiomas, setIdiomas] = useState([])
  const[continentes, setContinentes] = useState([])
  const[moedas, setMoedas] = useState([])

  useEffect(() => {
    Axios.get("https://restcountries.com/v3.1/all")
    .then((res) => {
      
      for(let i = 0; i < res.data.length; i++){

          array_nomes.push(res['data'][i]['name']['common'])
          array_capitais.push(res['data'][i]['capital'])
          array_continentes.push(res['data'][i]['continents'])

          obj_moedas.push(res['data'][i]['currencies'])
        
          if(i == 6 || i == 82 || i == 163){
            puxar_moedas[i] = 'vazio'
          }else{
            puxar_moedas.push(Object.values(obj_moedas[i]))
          }
          array_moedas.push(puxar_moedas[i][0]['name'])

          obj_idiomas.push(res['data'][i]['languages'])

          if(i == 6){
            puxar_idiomas[i] = ''
          }else{
            puxar_idiomas.push(Object.values(obj_idiomas[i]))
          }

          array_idiomas.push(puxar_idiomas[i][0])
      }

      setNomes(array_nomes)
      setCapitais(array_capitais)
      setContinentes(array_continentes)
      setIdiomas(array_idiomas)
      setMoedas(array_moedas)
    })
  }, [])

  return (
    <div className='app'>
        <header>
          <p>All nations</p>
        </header>
          {nomes.map((n, index) => {
            return(
              <div className='corpo'>
                <p>{n}</p>
                <p>{capitais[index]}</p>
                <p>{continentes[index]}</p>
                <p>{idiomas[index]}</p>
                <p>{moedas[index]}</p>
              </div>
            )
          })}
    </div>
  );
}

export default App;
