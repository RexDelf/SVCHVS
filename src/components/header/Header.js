import styles from './Header.module.css'


const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className={styles.content}>
                    iBuy Laptop
                </div>
            </div>
        </header>
    )
}

export default Header;