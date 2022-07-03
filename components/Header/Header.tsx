import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.linkContent}>
                <img
                    alt=""
                    src="/logo-filled-white-2.png"
                    className={styles.logo}
                />
                <div className={styles.linkText}>
                    <div className={styles.linkTextMain}>Ace</div>
                    <div className={styles.linkTextSecondary}>
                        Drainage Company
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
