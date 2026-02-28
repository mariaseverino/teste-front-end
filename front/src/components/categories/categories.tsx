import styles from './categories.module.scss';
import screen from '../../assets/screen.png';
import market from '../../assets/market.png';
import drink from '../../assets/drink.png';
import tools from '../../assets/tools.png';
import health from '../../assets/health.png';
import sports from '../../assets/sports.png';
import fashion from '../../assets/fashion.png';
import { CategoryCard } from '../categoryCard/categoryCard';

export function Categories() {
    const categories = [
        {
            img: screen,
            select: true,
            title: 'Tecnologia',
        },
        {
            img: market,
            select: false,
            title: 'Supermercado',
        },
        {
            img: drink,
            select: false,
            title: 'Bebidas',
        },
        {
            img: tools,
            select: false,
            title: 'Ferramentas',
        },
        {
            img: health,
            select: false,
            title: 'Saúde',
        },
        {
            img: sports,
            select: false,
            title: 'Esportes e Fitness',
        },
        {
            img: fashion,
            select: false,
            title: 'Moda',
        },
    ];

    return (
        <section className={styles.list}>
            {categories.map((category) => (
                <div>
                    <CategoryCard img={category.img} select={category.select} />

                    <span
                        style={{
                            color: category.select ? '#3019B2' : '#4E4E4E',
                            fontWeight: category.select ? '600' : '500',
                        }}
                    >
                        {category.title}
                    </span>
                </div>
            ))}
        </section>
    );
}
