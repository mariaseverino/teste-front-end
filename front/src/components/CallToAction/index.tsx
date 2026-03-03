import styles from './styles.module.scss';

export function CallToAction() {
    return (
        <section className={styles.call_to_action} aria-labelledby="cta-title">
            <div className={styles.container}>
                <div className="content">
                    <h2 id="cta-title">Inscreva-se na nossa newsletter</h2>
                    <p>
                        Assine a nossa newsletter e receba as novidades e
                        conteúdos exclusivos da Econverse.
                    </p>
                </div>

                <form>
                    <div>
                        <input type="text" placeholder="Digite seu nome" />
                        <input type="text" placeholder="Digite seu e-mail" />
                        <button>INSCREVER</button>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            className={styles.checkbox}
                        />
                        <span>Aceito os termos e condições</span>
                    </div>
                </form>
            </div>
        </section>
    );
}
