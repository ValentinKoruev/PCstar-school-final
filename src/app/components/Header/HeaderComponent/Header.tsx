import styles from './Header.module.scss'

const Header = () => {
    return <header className={styles.header}>
        <div className={styles.navTopRow}>
            <h1>TITLEXD</h1>
            <form className={styles.searchBox}>
                <input type='text'/>
            </form>
            <ul className={styles.userMenu}>
                <li><a href="#">Профил</a></li>
                <li><a href="#">Любими</a></li>
                <li><a href="#">Количка</a></li>
            </ul>
        </div>
        <nav className={styles.mainNav}>
            <ul>
                <li><a href="#">Категории</a></li>
                <li><a href="#">Промоции</a></li>
                <li><a href="#">Магазини</a></li>
                <li><a href="#">За нас</a></li>
                <li><a href="#">Контакти</a></li>
            </ul>
        </nav>
    </header>
}

export default Header;