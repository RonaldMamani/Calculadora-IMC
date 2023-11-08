import { Level } from "../../helpers/imc"
import styles from './GridItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props = {
    item: Level
}

export const GridItem = ({item} : Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img 
                    src={item.icon === 'up' ? upImage : downImage} 
                    alt={item.color === 'up' ? 'Icone Positivo' : 'Icone Negativo'} 
                    width={30} 
                />
            </div>
            <div className={styles.gridTitle}>
                <h4>{item.title}</h4>
            </div>

            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>
            }

            <div className={styles.gridInfo}>
                <p>IMC está entre <strong>{item.imc[0]}</strong> até <strong>{item.imc[1].toFixed(1)}</strong></p>
            </div>
        </div>
    )
}