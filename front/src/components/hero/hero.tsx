import styles from './hero.module.scss';

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <div>
                    <h1>Venha conhecer nossas promoções</h1>
                    <p>
                        <span>50% Off</span> nos produtos
                    </p>
                    <button>Ver produto</button>
                </div>
            </div>
        </section>
    );
}
