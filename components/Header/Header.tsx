import styles from './Header.module.css';
import Link from 'next/Link';

const Header = () => {
    return (
        <header className={styles.container}>
            <Link href="/">
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
            </Link>
        </header>
    );
};

export default Header;
