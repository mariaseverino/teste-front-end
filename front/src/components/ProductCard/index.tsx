import { useState } from 'react';
import styles from './styles.module.scss';
import { ProductModal } from '../ProductModal';

interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

export function ProductCard(product: Product) {
    const [openModal, setOpenModal] = useState(false);
    const [selectProduct, setSelectProduct] = useState<Product>();

    function handleOpenModal(product: Product) {
        console.log(product);
        setOpenModal(true);
        setSelectProduct(product);
    }

    return (
        <>
            <div className={styles.card}>
                <img src={product.photo} alt="" />
                <div>
                    <p className={styles.title}>{product.productName}</p>
                    <div>
                        <p className={styles.oldPrice}>R${product.price}</p>
                        <p className={styles.newPrice}>R${product.price}</p>
                    </div>

                    <div>
                        <p>ou 2x de R$ 49,95 sem juros</p>
                        <p className={styles.free}>Frete grátis</p>
                    </div>
                </div>
                <button onClick={() => handleOpenModal(product)}>
                    Comprar
                </button>
            </div>

            {openModal == true && selectProduct && (
                <ProductModal
                    product={product}
                    onClose={() => setOpenModal(false)}
                />
            )}
        </>
    );
}
