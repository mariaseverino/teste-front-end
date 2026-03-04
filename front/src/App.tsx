import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { ProductsCarrossel } from './components/ProductsCarrossel';
import { SectionTitle } from './components/SectionTitle';
import { ProductTypeList } from './components/ProductTypeList';
import styles from './App.module.scss';
import { PartnersSection } from './components/PartnersSection';
import { BrandsSection } from './components/BrandsSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <Categories />
            <section className={styles.products}>
                <SectionTitle title="Produtos relacionados" />
                <ProductTypeList />
                <ProductsCarrossel />
            </section>
            <PartnersSection />
            <section className={styles.products}>
                <SectionTitle title="Produtos relacionados" />
                <a href="#" className={styles.btn_view_all}>
                    Ver Todos
                </a>
                <ProductsCarrossel />
            </section>
            <PartnersSection />

            <BrandsSection />
            <section className={styles.products}>
                <SectionTitle title="Produtos relacionados" />
                <a href="#" className={styles.btn_view_all}>
                    Ver Todos
                </a>
                <ProductsCarrossel />
            </section>
            <CallToAction />

            <Footer />
        </>
    );
}
