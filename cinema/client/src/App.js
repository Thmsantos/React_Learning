import './App.css';
import Axios from 'axios'
import React,{useState, useEffect} from "react"

function App() {

  useEffect(() => {
      Axios.get('http://localhost:3001/cinema/get')
      .then((res) =>{
        console.log(res.data)
        /* orfa primeiro horario */
        setOrfa_Filme(res.data[0].Filme)
        setOrfa_Sala(res.data[0].Sala)
        setOrfa_Duracao(res.data[0].Duracao)
        setOrfa_Horario(res.data[0].Horario)
        setOrfa_sinopse(res.data[0].Sinopse)
        /* orfa segundo horario */
        set_segundoHorarioOrfa_Horario(res.data[1].Horario)
       /*  nao se preoucupe querida */
        set_Nsepreoucupe_filme(res.data[2].Filme)
        set_Nsepreoucupe_sala(res.data[2].Sala)
        set_Nsepreoucupe_duracao(res.data[2].Duracao)
        set_nsepreocupe_Horario(res.data[2].Horario)
        set_nsepreocupe_Sinopse(res.data[2].Sinopse)
        /* o telefone preto */
        set_telefone_filme(res.data[3].Filme)
        set_telefone_sala(res.data[3].Sala)
        set_telefone_duracao(res.data[3].Duracao)
        set_telefone_Horario(res.data[3].Horario) 
        set_telefone_sinopse(res.data[3].Sinopse)
        /* a mulher rei primeiro horario */
        set_mulher_rei_filme(res.data[4].Filme)
        set_mulher_rei_sala(res.data[4].Sala)
        set_mulher_rei_duracao(res.data[4].Duracao)
        set_mulher_rei_Horario(res.data[4].Horario)
        set_mulher_rei_sinopse(res.data[4].Sinopse)
        /* a mulher rei segundo horario */
        set_mulherRei_segundoHorario_Horario(res.data[5].Horario)
         /* avatar */
        set_avatar_filme(res.data[6].Filme)
        set_avatar_sala(res.data[6].Sala)
        set_avatar_duracao(res.data[6].Duracao)
        set_avatar_Horario(res.data[6].Horario)
        set_avatar_sinopse(res.data[6].Sinopse)
         /* sorria */
         set_sorria_filme(res.data[7].Filme)
         set_sorria_sala(res.data[7].Sala)
         set_sorria_duracao(res.data[7].Duracao)
         set_sorria_Horario(res.data[7].Horario)
         set_sorria_sinopse(res.data[7].Sinopse)
         /* a Queda */
         set_aQueda_filme(res.data[8].Filme)
         set_aQueda_sala(res.data[8].Sala)
         set_aQueda_duracao(res.data[8].Duracao)
         set_aQueda_Horario(res.data[8].Horario)
         set_aQueda_sinopse(res.data[8].Sinopse)
          /* a Queda segundo horario */
          set_aQueda_segundoHorario_Horario(res.data[9].Horario)
      })
  },[])

  const [Orfa_filme,setOrfa_Filme] = useState("")
  const [Orfa_sala,setOrfa_Sala] = useState("")
  const [Orfa_duracao, setOrfa_Duracao] = useState("")
  const [Orfa_horario, setOrfa_Horario] = useState("")
  const [Orfa_sinopse, setOrfa_sinopse] = useState("")
  const [Orfa_segundoHorario_horario, set_segundoHorarioOrfa_Horario] = useState("")
  const [orfaIngressos_primeiroHorario, setOrfaIngressos_primeiroHorario] = useState(100);
  const [faturamento_orfa_primeiroHorario, setFaturamento_orfa_primeiroHorario] = useState(0);
  const [orfaIngressos_segundoHorario, setOrfaIngressos_segundoHorario] = useState(100);
  const [faturamento_orfa_segundoHorario, setFaturamento_orfa_segundoHorario] = useState(0);

  const [nsepreocupe_filme, set_Nsepreoucupe_filme] = useState("")
  const [nsepreocupe_sala, set_Nsepreoucupe_sala] = useState("")
  const [nsepreocupe_duracao, set_Nsepreoucupe_duracao] = useState("")
  const [nsepreocupe_horario, set_nsepreocupe_Horario] = useState("")
  const [nsepreocupe_sinopse, set_nsepreocupe_Sinopse] = useState("")
  const [nsepreocupe_ingressos, setNsepreocupeIngressos] = useState(120);
  const [nsepreocupe_faturamento, setNsepreocupe_faturamento] = useState(0);

  const [telefone_filme, set_telefone_filme] = useState("")
  const [telefone_sala, set_telefone_sala] = useState("")
  const [telefone_duracao, set_telefone_duracao] = useState("")
  const [telefone_horario, set_telefone_Horario] = useState("")
  const [telefone_sinopse, set_telefone_sinopse] = useState("")
  const [telefone_ingressos, setTelefoneIngressos] = useState(110);
  const [telefone_faturamento, setTelefone_faturamento] = useState(0);

  const [mulher_rei_filme, set_mulher_rei_filme] = useState("")
  const [mulher_rei_sala, set_mulher_rei_sala] = useState("")
  const [mulher_rei_duracao, set_mulher_rei_duracao] = useState("")
  const [mulher_rei_horario, set_mulher_rei_Horario] = useState("")
  const [mulher_rei_sinopse, set_mulher_rei_sinopse] = useState("")
  const [mulherRei_segundoHorario_horario, set_mulherRei_segundoHorario_Horario] = useState("")
  const [mulherRei_ingressos_primeiroHorario, setmulherRei_ingressos_primeiroHorario] = useState(90);
  const [faturamento_mulherRei_primeiroHorario, setFaturamento_mulherRei_primeiroHorario] = useState(0);
  const [mulherRei_ingressos_segundoHorario, setmulherRei_ingressos_segundoHorario] = useState(90);
  const [faturamento_mulherRei_segundoHorario, setFaturamento_mulherRei_segundoHorario] = useState(0);

  const [avatar_filme, set_avatar_filme] = useState("")
  const [avatar_sala, set_avatar_sala] = useState("")
  const [avatar_duracao, set_avatar_duracao] = useState("")
  const [avatar_horario, set_avatar_Horario] = useState("")
  const [avatar_sinopse, set_avatar_sinopse] = useState("")
  const [avatar_ingressos, setAvatar_ingressos] = useState(100);
  const [faturamento_avatar, setFaturamento_avatar] = useState(0);

  const [sorria_filme, set_sorria_filme] = useState("")
  const [sorria_sala, set_sorria_sala] = useState("")
  const [sorria_duracao, set_sorria_duracao] = useState("")
  const [sorria_horario, set_sorria_Horario] = useState("")
  const [sorria_sinopse, set_sorria_sinopse] = useState("")
  const [sorria_ingressos, setsorria_ingressos] = useState(90);
  const [faturamento_sorria, setFaturamento_sorria] = useState(0);

  const [aQueda_filme, set_aQueda_filme] = useState("")
  const [aQueda_sala, set_aQueda_sala] = useState("")
  const [aQueda_duracao, set_aQueda_duracao] = useState("")
  const [aQueda_horario, set_aQueda_Horario] = useState("")
  const [aQueda_sinopse, set_aQueda_sinopse] = useState("")
  const [aQueda_segundoHorario_horario, set_aQueda_segundoHorario_Horario] = useState("")
  const [aQueda_ingressos_primeiroHorario, setaQueda_ingressos_primeiroHorario] = useState(150);
  const [faturamento_aQueda_primeiroHorario, setFaturamento_aQueda_primeiroHorario] = useState(0);
  const [aQueda_ingressos_segundoHorario, setaQueda_ingressos_segundoHorario] = useState(150);
  const [faturamento_aQueda_segundoHorario, setFaturamento_aQueda_segundoHorario] = useState(0);

  const [toogleOrfa_primeiroHorario, setToogleOrfa_primeiroHorario] = React.useState(true);
  const [corOrfa_primeiroHorario, setCorOrfa_primeiroHorario] = React.useState('#E0FFFF');
  React.useEffect(() => {
    if (orfaIngressos_primeiroHorario < 100){
        setCorOrfa_primeiroHorario((state) => toogleOrfa_primeiroHorario ? '#1E90FF': '#1E90FF');
        setToogleOrfa_primeiroHorario(state => !state)
    }
    if (orfaIngressos_primeiroHorario < 25){
        setCorOrfa_primeiroHorario((state) => toogleOrfa_primeiroHorario ? '#B22222': '#B22222');
        setToogleOrfa_primeiroHorario(state => !state)
    }

  }, [toogleOrfa_primeiroHorario]);

  const [toogleOrfa_segundoHorario, setToogleOrfa_segundoHorario] = React.useState(true);
  const [corOrfa_segundoHorario, setCorOrfa_segundoHorario] = React.useState('#E0FFFF');
  React.useEffect(() => {
    if (orfaIngressos_segundoHorario < 100){
        setCorOrfa_segundoHorario((state) => toogleOrfa_segundoHorario ? '#1E90FF': '#1E90FF');
        setToogleOrfa_segundoHorario(state => !state)
    }
    if (orfaIngressos_segundoHorario < 25){
        setCorOrfa_segundoHorario((state) => toogleOrfa_segundoHorario ? '#B22222': '#B22222');
        setToogleOrfa_segundoHorario(state => !state)
    }
  }, [toogleOrfa_segundoHorario]);

  const [toogleNsepreocupe, setToogleNsepreocupe] = React.useState(true);
  const [corNsepreocupe, setCorNsepreocupe] = React.useState('#E0FFFF');
  React.useEffect(() => {
    if (nsepreocupe_ingressos < 120){
        setCorNsepreocupe((state) => toogleNsepreocupe ? '#1E90FF': '#1E90FF');
        setToogleNsepreocupe(state => !state)
    }
    if (nsepreocupe_ingressos < 30){
        setCorNsepreocupe((state) => toogleNsepreocupe ? '#B22222': '#B22222');
        setToogleNsepreocupe(state => !state)
    }
  }, [toogleNsepreocupe]);

  const [toogleTelefone, setToogleTelefone] = React.useState(true);
  const [corTelefone, setCorTelefone] = React.useState('#E0FFFF');
  React.useEffect(() => {
    if (telefone_ingressos < 110){
        setCorTelefone((state) => toogleTelefone ? '#1E90FF': '#1E90FF');
        setToogleTelefone(state => !state)
    }
    if (telefone_ingressos < 27){
        setCorTelefone((state) => toogleTelefone ? '#B22222': '#B22222');
        setToogleTelefone(state => !state)
    }
  }, [toogleTelefone]);

  const [toogleMulher_rei_primeiro_horario, setToogleMulher_rei_primeiro_horario] = React.useState(true);
  const [corMulher_rei_primeiro_horario, setCorMulher_rei_primeiro_horario] = React.useState('#E0FFFF');
  React.useEffect(() => {
    if (mulherRei_ingressos_primeiroHorario < 90){
        setCorMulher_rei_primeiro_horario((state) => toogleMulher_rei_primeiro_horario ? '#1E90FF': '#1E90FF');
        setToogleMulher_rei_primeiro_horario(state => !state)
    }
    if (mulherRei_ingressos_primeiroHorario < 22){
        setCorMulher_rei_primeiro_horario((state) => toogleMulher_rei_primeiro_horario ? '#B22222': '#B22222');
        setToogleMulher_rei_primeiro_horario(state => !state)
    }
  }, [toogleMulher_rei_primeiro_horario]);

  const [toogleMulher_rei_segundo_horario, setToogleMulher_rei_segundo_horario] = React.useState(true);
  const [corMulher_rei_segundo_horario, setCorMulher_rei_segundo_horario] = React.useState('#E0FFFF');
  React.useEffect(() => {
    if (mulherRei_ingressos_segundoHorario < 90){
        setCorMulher_rei_segundo_horario((state) => toogleMulher_rei_segundo_horario ? '#1E90FF': '#1E90FF');
        setToogleMulher_rei_segundo_horario(state => !state)
    }
    if (mulherRei_ingressos_primeiroHorario < 22){
        setCorMulher_rei_segundo_horario((state) => toogleMulher_rei_segundo_horario ? '#B22222': '#B22222');
        setToogleMulher_rei_segundo_horario(state => !state)
    }
  }, [toogleMulher_rei_segundo_horario]);

  const [toogleAvatar, setToogleAvatar] = React.useState(true);
  const [corAvatar, setCorAvatar] = React.useState('#E0FFFF');
  React.useEffect(() => {
    if (avatar_ingressos < 100){
        setCorAvatar((state) => toogleAvatar ? '#1E90FF': '#1E90FF');
        setToogleAvatar(state => !state)
    }
    if (avatar_ingressos < 25){
        setCorAvatar((state) => toogleAvatar ? '#B22222': '#B22222');
        setToogleAvatar(state => !state)
    }
  }, [toogleAvatar]);

  const [toogleSorria, setToogleSorria] = React.useState(true);
  const [corSorria, setCorSorria] = React.useState('#E0FFFF');
  React.useEffect(() => {
    if (sorria_ingressos < 90){
        setCorSorria((state) => toogleSorria ? '#1E90FF': '#1E90FF');
        setToogleSorria(state => !state)
    }
    if (sorria_ingressos < 40){
        setCorSorria((state) => toogleSorria ? '#B22222': '#B22222');
        setToogleSorria(state => !state)
    }
  }, [toogleSorria]);

  const [toogleAqueda_primeiroHorario, setToogleAqueda_primeiroHorario] = React.useState(true);
  const [corAqueda_primeiroHorario, setCorAqueda_primeiroHorario] = React.useState('#E0FFFF');
  React.useEffect(() => {
    if (aQueda_ingressos_primeiroHorario < 150){
        setCorAqueda_primeiroHorario((state) => toogleAqueda_primeiroHorario ? '#1E90FF': '#1E90FF');
        setToogleAqueda_primeiroHorario(state => !state)
    }
    if (aQueda_ingressos_primeiroHorario < 37){
        setCorAqueda_primeiroHorario((state) => toogleAqueda_primeiroHorario ? '#B22222': '#B22222');
        setToogleAqueda_primeiroHorario(state => !state)
    }
  }, [toogleAqueda_primeiroHorario]);

  const [toogleAqueda_segundoHorario, setToogleAqueda_segundoHorario] = React.useState(true);
  const [corAqueda_segundoHorario, setCorAqueda_segundoHorario] = React.useState('#E0FFFF');
  React.useEffect(() => {
    if (aQueda_ingressos_segundoHorario < 75){
        setCorAqueda_segundoHorario((state) => toogleAqueda_segundoHorario ? '#1E90FF': '#1E90FF');
        setToogleAqueda_segundoHorario(state => !state)
    }
    if (aQueda_ingressos_segundoHorario < 37){
        setCorAqueda_segundoHorario((state) => toogleAqueda_segundoHorario ? '#B22222': '#B22222');
        setToogleAqueda_segundoHorario(state => !state)
    }
  }, [toogleAqueda_segundoHorario]);

  const [arrecadao, setArrecadacao] = useState('0');

  const [disable_orfaIngressosPrimeiroHorario, setDisable_orfaIngressosPrimeiroHorario] = React.useState(false);
 

  function desabilitar_orfaIngressosPrimeiroHorario(){
    setOrfaIngressos_primeiroHorario(orfaIngressos_primeiroHorario - 1)

    setToogleOrfa_primeiroHorario(state => !state)

    setFaturamento_orfa_primeiroHorario((101 - orfaIngressos_primeiroHorario) * 30)

    if (orfaIngressos_primeiroHorario < 2){
        setDisable_orfaIngressosPrimeiroHorario(true)
    }
  }

  const [disable_orfaIngressosSegundoHorario, setDisable_orfaIngressosSegundoHorario] = React.useState(false);

  function desabilitar_orfaIngressosSegundoHorario(){
    setOrfaIngressos_segundoHorario(orfaIngressos_segundoHorario - 1)

    setToogleOrfa_segundoHorario(state => !state)

    setFaturamento_orfa_segundoHorario((101 - orfaIngressos_segundoHorario) * 30)

    if (orfaIngressos_segundoHorario < 2){
        setDisable_orfaIngressosSegundoHorario(true)
    }
  }

  const [disable_nsepreocupe, setDisable_nsepreocupe] = React.useState(false);

  function desabilitar_nsepreocupe(){
    setNsepreocupeIngressos(nsepreocupe_ingressos - 1)

    setToogleNsepreocupe(state => !state)

    setNsepreocupe_faturamento((121 - nsepreocupe_ingressos) * 30)

    if (nsepreocupe_ingressos < 2){
        setDisable_nsepreocupe(true)
    }
  }

  const [disable_telefone, setDisable_telefone] = React.useState(false);

  function desabilitar_telefone(){
    setTelefoneIngressos(telefone_ingressos - 1)

    setToogleTelefone(state => !state)

    setTelefone_faturamento((111 - telefone_ingressos) * 30)

    if (nsepreocupe_ingressos < 2){
        setDisable_telefone(true)
    }
  }

  const [disable_Mulher_rei_primeiro_horario, setDisable_Mulher_rei_primeiro_horario] = React.useState(false);

  function desabilitar_Mulher_rei_primeiro_horario(){
    setmulherRei_ingressos_primeiroHorario(mulherRei_ingressos_primeiroHorario - 1)

    setToogleMulher_rei_primeiro_horario(state => !state)

    setFaturamento_mulherRei_primeiroHorario((91 - mulherRei_ingressos_primeiroHorario) * 30)

    if (mulherRei_ingressos_primeiroHorario < 2){
        setDisable_Mulher_rei_primeiro_horario(true)
    }
  }

  const [disable_Mulher_rei_segundo_horario, setDisable_Mulher_rei_segundo_horario] = React.useState(false);

  function desabilitar_Mulher_rei_segundo_horario(){
    setmulherRei_ingressos_segundoHorario(mulherRei_ingressos_segundoHorario - 1)

    setToogleMulher_rei_segundo_horario(state => !state)

    setFaturamento_mulherRei_segundoHorario((91 - mulherRei_ingressos_segundoHorario) * 30)

    if (mulherRei_ingressos_segundoHorario < 2){
        setDisable_Mulher_rei_segundo_horario(true)
    }
  }

  const [disable_avatar, setDisable_avatar] = React.useState(false);

  function desabilitar_avatar(){
    setAvatar_ingressos(avatar_ingressos  - 1)

    setToogleAvatar(state => !state)

    setFaturamento_avatar((101 - avatar_ingressos) * 30)

    if (avatar_ingressos < 2){
        setDisable_avatar(true)
    }
  }

  const [disable_sorria, setDisable_sorria] = React.useState(false);

  function desabilitar_sorria(){
    setsorria_ingressos(sorria_ingressos  - 1)

    setToogleSorria(state => !state)

    setFaturamento_sorria((91 - sorria_ingressos) * 30)

    if (sorria_ingressos < 2){
        setDisable_sorria(true)
    }
  }

  const [disable_Aqueda_primeiroHorario, setDisable_Aqueda_primeiroHorario] = React.useState(false);

  function desabilitar_Aqueda_primeiroHorario(){
    setaQueda_ingressos_primeiroHorario(aQueda_ingressos_primeiroHorario  - 1)

    setToogleAqueda_primeiroHorario(state => !state)

    setFaturamento_aQueda_primeiroHorario((151 - aQueda_ingressos_primeiroHorario) * 30)

    if (aQueda_ingressos_primeiroHorario < 2){
        setDisable_Aqueda_primeiroHorario(true)
    }
  }

  const [disable_Aqueda_segundoHorario, setDisable_Aqueda_segundoHorario] = React.useState(false);

  function desabilitar_Aqueda_segundoHorario(){
    setaQueda_ingressos_segundoHorario(aQueda_ingressos_segundoHorario - 1)

    setToogleAqueda_segundoHorario(state => !state)

    setFaturamento_aQueda_segundoHorario((151 - aQueda_ingressos_segundoHorario) * 30)

    if (aQueda_ingressos_segundoHorario < 2){
        setDisable_Aqueda_segundoHorario(true)
    }
  }

  return (
    <div className="App">
      <div className="container">

          <div className='Header'>
            <p className='txtHeader'>
                Thiago Primeflix
            </p>
          </div>

          <div className='arrecadacao_total'>
            <button className='arrecadacao_geral_btn' onClick={() => 
                setArrecadacao(
                 faturamento_orfa_primeiroHorario +
                 faturamento_orfa_segundoHorario +
                 nsepreocupe_faturamento +
                 telefone_faturamento +
                 faturamento_mulherRei_primeiroHorario +
                 faturamento_mulherRei_segundoHorario +
                 faturamento_avatar +
                 faturamento_sorria +
                 faturamento_aQueda_primeiroHorario +
                 faturamento_aQueda_segundoHorario
                 )}> Ver faturamento geral
            </button>
            <p className='txtArrecadacaoGeral'>Faturamento Geral: {arrecadao} $</p>
          </div>

          <div className="linha_um">
                <p style={{backgroundColor:corOrfa_primeiroHorario}} className='um'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{Orfa_sinopse}</span>
                    </div>
                    <p style={{backgroundColor:corOrfa_primeiroHorario}} className='sala'>Sala: {Orfa_sala}</p>
                    <p style={{backgroundColor:corOrfa_primeiroHorario}} className='filme'>Filme: {Orfa_filme}</p>
                    <p style={{backgroundColor:corOrfa_primeiroHorario}} className='duracao'>Duração: {Orfa_duracao}</p>
                    <p style={{backgroundColor:corOrfa_primeiroHorario}} className='horario'>Horário: {Orfa_horario}</p>
                    <p style={{backgroundColor:corOrfa_primeiroHorario}} className='capacidade'>Capacidade: 100</p>
                    <p style={{backgroundColor:corOrfa_primeiroHorario}} className='restantes'>Ingressos_Restantes: {orfaIngressos_primeiroHorario}</p>
                    <p style={{backgroundColor:corOrfa_primeiroHorario}} className='arrecadao'>Arrecadado: {faturamento_orfa_primeiroHorario}$</p>
                    <button disabled={disable_orfaIngressosPrimeiroHorario} className='comprar' onClick={desabilitar_orfaIngressosPrimeiroHorario}>Comprar</button>
                </p>
            
                <p style={{backgroundColor:corOrfa_segundoHorario}} className='dois'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{Orfa_sinopse}</span>
                    </div>
                    <p style={{backgroundColor:corOrfa_segundoHorario}} className='sala'>Sala: {Orfa_sala}</p>
                    <p style={{backgroundColor:corOrfa_segundoHorario}} className='filme'>Filme: {Orfa_filme}</p>
                    <p style={{backgroundColor:corOrfa_segundoHorario}} className='duracao'>Duração: {Orfa_duracao}</p>
                    <p style={{backgroundColor:corOrfa_segundoHorario}} className='horario'>Horário: {Orfa_segundoHorario_horario}</p>
                    <p style={{backgroundColor:corOrfa_segundoHorario}} className='capacidade'>Capacidade: 100</p>
                    <p style={{backgroundColor:corOrfa_segundoHorario}} className='restantes'>Ingressos_Restantes: {orfaIngressos_segundoHorario}</p>
                    <p style={{backgroundColor:corOrfa_segundoHorario}} className='arrecadao'>Arrecadado: {faturamento_orfa_segundoHorario}$</p>
                    <button disabled={disable_orfaIngressosSegundoHorario} className='comprar' onClick={desabilitar_orfaIngressosSegundoHorario}>Comprar</button>
                </p>
          </div>

          <div className="linha_dois">
              <p style={{backgroundColor:corNsepreocupe}} className='tres'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{nsepreocupe_sinopse}</span>
                    </div>
                    <p style={{backgroundColor:corNsepreocupe}} className='sala'>Sala: {nsepreocupe_sala}</p>
                    <p style={{backgroundColor:corNsepreocupe}} className='filme'>Filme: {nsepreocupe_filme}</p>
                    <p style={{backgroundColor:corNsepreocupe}} className='duracao'>Duração: {nsepreocupe_duracao}</p>
                    <p style={{backgroundColor:corNsepreocupe}} className='horario'>Horário: {nsepreocupe_horario}</p>
                    <p style={{backgroundColor:corNsepreocupe}} className='capacidade'>Capacidade: 120</p>
                    <p style={{backgroundColor:corNsepreocupe}} className='restantes'>Ingressos_Restantes: {nsepreocupe_ingressos}</p>
                    <p style={{backgroundColor:corNsepreocupe}} className='arrecadao'>Arrecadado: {nsepreocupe_faturamento}$</p>
                    <button disabled={disable_nsepreocupe} className='comprar' onClick={desabilitar_nsepreocupe}>Comprar</button>
              </p>

              <p style={{backgroundColor:corTelefone}} className='quatro'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{telefone_sinopse}</span>
                    </div>
                    <p style={{backgroundColor:corTelefone}} className='sala'>Sala: {telefone_sala}</p>
                    <p style={{backgroundColor:corTelefone}} className='filme'>Filme: {telefone_filme}</p>
                    <p style={{backgroundColor:corTelefone}} className='duracao'>Duração: {telefone_duracao}</p>
                    <p style={{backgroundColor:corTelefone}} className='horario'>Horário: {telefone_horario}</p>
                    <p style={{backgroundColor:corTelefone}} className='capacidade'>Capacidade: 110</p>
                    <p style={{backgroundColor:corTelefone}} className='restantes'>Ingressos_Restantes: {telefone_ingressos}</p>
                    <p style={{backgroundColor:corTelefone}} className='arrecadao'>Arrecadado: {telefone_faturamento}$</p>
                    <button disabled={disable_telefone} className='comprar' onClick={desabilitar_telefone}>Comprar</button>
              </p>
          </div>

          <div className="linha_tres">
              <p style={{backgroundColor:corMulher_rei_primeiro_horario}} className='cinco'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{mulher_rei_sinopse}</span>
                    </div>
                    <p style={{backgroundColor:corMulher_rei_primeiro_horario}} className='sala'>Sala: {mulher_rei_sala}</p>
                    <p style={{backgroundColor:corMulher_rei_primeiro_horario}} className='filme'>Filme: {mulher_rei_filme}</p>
                    <p style={{backgroundColor:corMulher_rei_primeiro_horario}} className='duracao'>Duração: {mulher_rei_duracao}</p>
                    <p style={{backgroundColor:corMulher_rei_primeiro_horario}} className='horario'>Horário: {mulher_rei_horario}</p>
                    <p style={{backgroundColor:corMulher_rei_primeiro_horario}} className='capacidade'>Capacidade: 90</p>
                    <p style={{backgroundColor:corMulher_rei_primeiro_horario}} className='restantes'>Ingressos_Restantes: {mulherRei_ingressos_primeiroHorario}</p>
                    <p style={{backgroundColor:corMulher_rei_primeiro_horario}} className='arrecadao'>Arrecadado: {faturamento_mulherRei_primeiroHorario}$</p>
                    <button disabled={disable_Mulher_rei_primeiro_horario} className='comprar' onClick={desabilitar_Mulher_rei_primeiro_horario}>Comprar</button>
              </p>
            
              <p style={{backgroundColor:corMulher_rei_segundo_horario}} className='seis'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{mulher_rei_sinopse}</span>
                    </div>
                    <p style={{backgroundColor:corMulher_rei_segundo_horario}} className='sala'>Sala: {mulher_rei_sala}</p>
                    <p style={{backgroundColor:corMulher_rei_segundo_horario}} className='filme'>Filme: {mulher_rei_filme}</p>
                    <p style={{backgroundColor:corMulher_rei_segundo_horario}} className='duracao'>Duração: {mulher_rei_duracao}</p>
                    <p style={{backgroundColor:corMulher_rei_segundo_horario}} className='horario'>Horário: {mulherRei_segundoHorario_horario}</p>
                    <p style={{backgroundColor:corMulher_rei_segundo_horario}} className='capacidade'>Capacidade: 90</p>
                    <p style={{backgroundColor:corMulher_rei_segundo_horario}} className='restantes'>Ingressos_Restantes: {mulherRei_ingressos_segundoHorario}</p>
                    <p style={{backgroundColor:corMulher_rei_segundo_horario}} className='arrecadao'>Arrecadado: {faturamento_mulherRei_segundoHorario}$</p>
                    <button disabled={disable_Mulher_rei_segundo_horario} className='comprar' onClick={desabilitar_Mulher_rei_segundo_horario}>Comprar</button>
              </p>
          </div>

          <div className="linha_quatro">
            <p style={{backgroundColor:corAvatar}} className='sete'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{avatar_sinopse}</span>
                    </div>
                    <p style={{backgroundColor:corAvatar}} className='sala'>Sala: {avatar_sala}</p>
                    <p style={{backgroundColor:corAvatar}} className='filme'>Filme: {avatar_filme}</p>
                    <p style={{backgroundColor:corAvatar}} className='duracao'>Duração: {avatar_duracao}</p>
                    <p style={{backgroundColor:corAvatar}} className='horario'>Horário: {avatar_horario}</p>
                    <p style={{backgroundColor:corAvatar}} className='capacidade'>Capacidade: 100</p>
                    <p style={{backgroundColor:corAvatar}} className='restantes'>Ingressos_Restantes: {avatar_ingressos}</p>
                    <p style={{backgroundColor:corAvatar}} className='arrecadao'>Arrecadado: {faturamento_avatar}$</p>
                    <button disabled={disable_avatar} className='comprar' onClick={desabilitar_avatar}>Comprar</button>
            </p>
            
            <p style={{backgroundColor:corSorria}} className='oito'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{sorria_sinopse}</span>
                    </div>
                    <p style={{backgroundColor:corSorria}} className='sala'>Sala: {sorria_sala}</p>
                    <p style={{backgroundColor:corSorria}} className='filme'>Filme: {sorria_filme}</p>
                    <p style={{backgroundColor:corSorria}} className='duracao'>Duração: {sorria_duracao}</p>
                    <p style={{backgroundColor:corSorria}} className='horario'>Horário: {sorria_horario}</p>
                    <p style={{backgroundColor:corSorria}} className='capacidade'>Capacidade: 90</p>
                    <p style={{backgroundColor:corSorria}} className='restantes'>Ingressos_Restantes: {sorria_ingressos}</p>
                    <p style={{backgroundColor:corSorria}} className='arrecadao'>Arrecadado: {faturamento_sorria}$</p>
                    <button disabled={disable_sorria} className='comprar' onClick={desabilitar_sorria}>Comprar</button>
            </p>
          </div>

          <div className="linha_cinco">
              <p style={{backgroundColor:corAqueda_primeiroHorario}} className='nove'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{aQueda_sinopse}</span>
                    </div>
                    <p style={{backgroundColor:corAqueda_primeiroHorario}} className='sala'>Sala: {aQueda_sala}</p>
                    <p style={{backgroundColor:corAqueda_primeiroHorario}} className='filme'>Filme: {aQueda_filme}</p>
                    <p style={{backgroundColor:corAqueda_primeiroHorario}} className='duracao'>Duração: {aQueda_duracao}</p>
                    <p style={{backgroundColor:corAqueda_primeiroHorario}} className='horario'>Horário: {aQueda_horario}</p>
                    <p style={{backgroundColor:corAqueda_primeiroHorario}} className='capacidade'>Capacidade: 150</p>
                    <p style={{backgroundColor:corAqueda_primeiroHorario}} className='restantes'>Ingressos_Restantes: {aQueda_ingressos_primeiroHorario}</p>
                    <p style={{backgroundColor:corAqueda_primeiroHorario}} className='arrecadao'>Arrecadado: {faturamento_aQueda_primeiroHorario}$</p>
                    <button disabled={disable_Aqueda_primeiroHorario} className='comprar' onClick={desabilitar_Aqueda_primeiroHorario}>Comprar</button>
              </p>
          
              <p style={{backgroundColor:corAqueda_segundoHorario}} className='dez'>
                    <div class="tooltip-dolar" >
                        <h5 className="texto-dolar">sinopse</h5>
                            <span class="tooltiptext-dolar">{aQueda_sinopse}</span>
                    </div>
                    <p style={{backgroundColor:corAqueda_segundoHorario}} className='sala'>Sala: {aQueda_sala}</p>
                    <p style={{backgroundColor:corAqueda_segundoHorario}} className='filme'>Filme: {aQueda_filme}</p>
                    <p style={{backgroundColor:corAqueda_segundoHorario}} className='duracao'>Duração: {aQueda_duracao}</p>
                    <p style={{backgroundColor:corAqueda_segundoHorario}} className='horario'>Horário: {aQueda_segundoHorario_horario}</p>
                    <p style={{backgroundColor:corAqueda_segundoHorario}} className='capacidade'>Capacidade: 150</p>
                    <p style={{backgroundColor:corAqueda_segundoHorario}} className='restantes'>Ingressos_Restantes: {aQueda_ingressos_segundoHorario}</p>
                    <p style={{backgroundColor:corAqueda_segundoHorario}} className='arrecadao'>Arrecadado: {faturamento_aQueda_segundoHorario}$</p>
                    <button disabled={disable_Aqueda_segundoHorario} className='comprar' onClick={desabilitar_Aqueda_segundoHorario}>Comprar</button>
              </p>
          </div>
      </div>
    </div>
  );
}

export default App;
