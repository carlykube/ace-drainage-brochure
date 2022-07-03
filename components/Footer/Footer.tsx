import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.blurb}>
                <div className={styles.mainTitle}>Standing water?</div>
                <div>
                    We’re experts at solving drainage issues. All questions and
                    inquiries are welcome.
                </div>
            </div>
            <div className={styles.contactInfo}>
                <div className={styles.title}>Contact Us</div>
                <a className={styles.contact} href="tel:2817447871">
                    281-744-7871
                </a>
                <a
                    className={styles.contact}
                    href="mailto:mark@acedrainageco.com"
                >
                    mark@acedrainageco.com
                </a>
            </div>
        </footer>
    );
};

export default Footer;
