import styles from './styles.module.scss';

interface SectionTitleProps {
    title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div className={styles.upper}>
            <div className={styles.separator}></div>
            <h1>{title}</h1>
            <div className={styles.separator}></div>
        </div>
    );
}
