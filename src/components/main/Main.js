import styles from './Main.module.css'
import Cards from '../cards/Cards'

const Main = () => {
    return (
        <main>
            <div className="wrapper">
                <div className={styles.content}>
                    <Cards/>
                </div>
            </div>
        </main>
    )
}

export default Main;