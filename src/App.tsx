import { useState } from 'react'
import styles from './App.module.css'
import logo from './assets/powered.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logo} alt="" width={100} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          ...
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  )
}

export default App
