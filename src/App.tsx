import { useState } from 'react'
import styles from './App.module.css'
import logo from './assets/powered.png'

function App() {
  const [heightField, setHeightField] = useState<number>(0)
  const [weighttField, setWeightField] = useState<number>(0)

  const handleCalculateIMC = () => {
    if(heightField && weighttField) {

    } else {
      alert('Preencha todos os Campos')
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logo} alt="" width={100} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para indice de Massa Corpórea, paràmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa</p>
          <input 
            type="number" 
            placeholder='Digite sua Altura Ex: 1.8 (Em Metros)'
            className=''
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(+e.target.value)}
          />
          <input 
            type="number" 
            placeholder='Digite seu Peso Ex: 75 (Em Kilos)'
            className=''
            value={weighttField > 0 ? weighttField : ''}
            onChange={e => setWeightField(+e.target.value)}
          />
          <button
            className=''
            onClick={handleCalculateIMC}
          >Calcular IMC</button>
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  )
}

export default App
