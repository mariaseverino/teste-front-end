import { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRigth from '../../assets/arrow-rigth.svg';
import styles from './styles.module.scss';

interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

export function ProductsCarrossel() {
    const [products, setProducts] = useState<Product[]>([]);

    async function getData() {
        const url =
            '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            setProducts(result.products);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    function handleScroll(direction: 'prev' | 'next') {
        const wrapper = document.getElementById('scrollWrapper');
        const cardWidth = 304;
        const gap = 18;

        if (wrapper) {
            const scrollAmount = (cardWidth + gap) * 4;

            wrapper.scrollBy({
                left: direction === 'next' ? scrollAmount : -scrollAmount,
                behavior: 'smooth',
            });
        }
    }

    return (
        <div className={styles.carousel_container}>
            <button
                className={styles.prev}
                onClick={() => handleScroll('prev')}
            >
                <img src={arrowLeft} alt="" />
            </button>

            <div className={styles.scroll_wrapper} id="scrollWrapper">
                {products.map((item) => (
                    <ProductCard
                        descriptionShort={item.descriptionShort}
                        photo={item.photo}
                        productName={item.productName}
                        price={item.price}
                    />
                ))}
            </div>

            <button
                className={styles.next}
                onClick={() => handleScroll('next')}
            >
                <img src={arrowRigth} alt="" />
            </button>
        </div>
    );
}
