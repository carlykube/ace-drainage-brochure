import type { NextPage } from 'next';
import Head from 'next/head';
import PhoneIcon from '../components/PhoneIcon';
import EmailIcon from '../components/EmailIcon';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Lawn Drainage | Serving Clear Lake, TX and Surrounding Areas
                </title>
                <meta
                    name="description"
                    content="Standing water? Ace Drainage will design and install a custom drainage solution for your home, guaranteed to drain standing water from your yard."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.topSection}>
                    <div
                        className={`${styles.topSectionBlock} ${styles.topSectionText}`}
                    >
                        <h2 className={styles.companyName}>
                            Ace Drainage Company
                        </h2>
                        <p>
                            Do you have standing water in your backyard, garden,
                            or large piece of land in the Clear Lake area? Allow
                            us to use our 40+ years of drainage experience to
                            help you with your drainage needs!
                        </p>
                        <ul>
                            <li>Free Estimates</li>
                            <li>Custom Drainage Solutions</li>
                            <li>Lawn Drain Installation</li>
                            <li>French Drain Installation</li>
                            <li>Residential and Commercial Service</li>
                        </ul>
                    </div>

                    <div
                        className={`${styles.topSectionBlock} ${styles.topSectionImageContainer}`}
                    >
                        <img
                            alt=""
                            className={styles.topSectionImage}
                            src="/water-boots.jpg"
                        />
                    </div>

                    <div
                        className={`${styles.topSectionBlock} ${styles.topSectionContact}`}
                    >
                        <div className={styles.contactContainer}>
                            <h3 className={styles.contactTitle}>Contact Us</h3>
                            <div className={styles.contactDetail}>
                                <PhoneIcon></PhoneIcon>
                                <a href="tel:2817447871">281-744-7871</a>
                            </div>
                            <div className={styles.contactDetail}>
                                <EmailIcon></EmailIcon>
                                <a href="mailto:mark@acedrainage.com">
                                    mark@acedrainage.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className={styles.title}>
                    Get Lawn Drainage in Clear Lake
                </h1>
                <p className={styles.moreInfo}>
                    Our master drain layer will work with you to determine which
                    type of drainage system is best for your drainage needs.
                    Reach out today to schedule a free estimate. You&apos;ll be
                    glad you did.
                </p>
            </main>

            <footer className={styles.footer}>
                <div>Contact Us</div>
                <div>
                    <a href="tel:2817447871">281-744-7871</a>
                </div>
                <div>
                    <a href="mailto:mark@acedrainage.com">
                        mark@acedrainage.com
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Home;
