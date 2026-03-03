import logo from '../../assets/logo.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import styles from './styles.module.scss';

export function Footer() {
    const navSections = [
        {
            title: 'Institucional',
            links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
        },
        {
            title: 'Ajuda',
            links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
        },
        {
            title: 'Termos',
            links: [
                'Termos e Condições',
                'Política de Privacidade',
                'Troca e Devolução',
            ],
        },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_top}>
                <div className={styles.footer_left}>
                    <img src={logo} alt="Logo da Empresa" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className={styles.social_media}>
                        <a href="#" aria-label="Instagram">
                            <img
                                src={instagram}
                                alt="Logo da Empresa"
                                className={styles.icon}
                            />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <img
                                src={facebook}
                                alt="Logo da Empresa"
                                className={styles.icon}
                            />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <img
                                src={linkedin}
                                alt="Logo da Empresa"
                                className={styles.icon}
                            />
                        </a>
                    </div>
                </div>

                <div className={styles.separator}></div>

                <div className={styles.nav_grid}>
                    {navSections.map((section, index) => (
                        <nav
                            key={index}
                            aria-labelledby={`footer-nav-${index}`}
                        >
                            <h3 id={`footer-nav-${index}`}>{section.title}</h3>
                            <ul>
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={`#${link.toLowerCase()}`}>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
            </div>
            <div className={styles.bottom}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </footer>
    );
}
