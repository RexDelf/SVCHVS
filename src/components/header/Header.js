import styles from './Header.module.css'
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className={styles.content}>
                    iBuy Laptop
                    <nav className={styles.navbar}>
                        <Link to='/products'>
                            <div>
                                Продукты
                            </div>
                        </Link>
                        <Link to='/help'>
                            <div>
                                Помощь
                            </div>
                        </Link>
                        <Link to='/legal'>
                            <div>
                                Лицензирование
                            </div>
                        </Link>
                        <Link to='/about'>
                            <div>
                                О нас
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;