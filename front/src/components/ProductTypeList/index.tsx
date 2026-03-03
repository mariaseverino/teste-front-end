import styles from './styles.module.scss';

export function ProductTypeList() {
    const productTypes = [
        {
            select: true,
            title: 'celular',
        },
        {
            select: false,
            title: 'acessórios',
        },
        {
            select: false,
            title: 'tablets',
        },
        {
            select: false,
            title: 'NOTEBOOKS',
        },
        {
            select: false,
            title: 'TVs',
        },
        {
            select: false,
            title: 'Ver todos',
        },
    ];

    return (
        <div className={styles.productTypeList}>
            {productTypes.map((item) => (
                <div
                    style={{
                        color: item.select ? '#3442B5' : '#3B3B3B',
                        fontWeight: item.select ? '700' : '400',
                    }}
                >
                    {item.title}
                </div>
            ))}
        </div>
    );
}
