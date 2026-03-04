import styles from './styles.module.scss';
import minus from '../../assets/minus.svg';
import plus from '../../assets/plus.svg';
import X from '../../assets/X.svg';

interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

interface ModalProps {
    product: Product;
    onClose: () => void;
}

export function ProductModal({ product, onClose }: ModalProps) {
    const count = 1;
    return (
        <div className={styles.modal_overlay}>
            <div className={styles.card}>
                <button className={styles.close}>
                    <img src={X} alt="" onClick={onClose} />
                </button>
                <img src={product.photo} alt="" />
                <div>
                    <div>
                        <div>
                            <h2 className={styles.title}>
                                {product.productName}
                            </h2>
                            <p className={styles.price}>R$ {product.price}</p>
                        </div>
                        <div>
                            <p className={styles.description}>
                                {product.descriptionShort}
                            </p>
                            <p className={styles.see_more}>
                                Veja mais detalhes do produto
                            </p>
                        </div>
                    </div>

                    <div className={styles.btn}>
                        <div className={styles.actions}>
                            <button>
                                <img src={minus} />
                            </button>
                            <div>{count.toString().padStart(2, '0')}</div>
                            <button>
                                <img src={plus} />
                            </button>
                        </div>
                        <button onClick={onClose}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
