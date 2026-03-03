import { SectionTitle } from '../SectionTitle';
import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';

export function BrandsSection() {
    return (
        <section className={styles.brands_section}>
            <SectionTitle title="Navegue por marcas" separator={false} />

            <div className={styles.brands}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <BrandCard key={index} />
                ))}
            </div>
        </section>
    );
}

function BrandCard() {
    return (
        <div className={styles.brand}>
            <img src={logo} className="logo" alt="Econverse logo" />
        </div>
    );
}
