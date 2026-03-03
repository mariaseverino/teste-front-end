import styles from './styles.module.scss';

interface SectionTitleProps {
    title: string;
    separator?: boolean;
}

export function SectionTitle({ title, separator = true }: SectionTitleProps) {
    return (
        <div className={styles.upper}>
            <div
                className={styles.separator}
                style={{ display: separator ? 'block' : 'none' }}
            ></div>
            <h1>{title}</h1>
            <div
                className={styles.separator}
                style={{ display: separator ? 'block' : 'none' }}
            ></div>
        </div>
    );
}
