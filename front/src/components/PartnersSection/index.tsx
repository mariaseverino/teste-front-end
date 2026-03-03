import styles from './styles.module.scss';
export function PartnersSection() {
    return (
        <section className={styles.partners_section}>
            <div className={styles.partners}>
                <PartnersCard />
                <PartnersCard />
            </div>
        </section>
    );
}

function PartnersCard() {
    return (
        <div className={styles.partner_card}>
            <div>
                <h1>Parceiros</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button>Confira</button>
            </div>
        </div>
    );
}
