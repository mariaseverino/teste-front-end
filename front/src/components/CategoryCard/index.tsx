import styles from './styles.module.scss';

interface CategoryCardProps {
    img: string;
    select?: boolean;
}

export function CategoryCard({ img, select = false }: CategoryCardProps) {
    return (
        <div
            className={styles.card}
            style={{ backgroundColor: select ? 'white' : '#F4F4F4' }}
        >
            <img src={img} />
        </div>
    );
}
