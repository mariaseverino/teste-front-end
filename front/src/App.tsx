import { Header } from './components/header';
import { Hero } from './components/hero/hero';
import { Categories } from './components/categories/categories';
import { ProductsCarrossel } from './components/ProductsCarrossel';
import { SectionTitle } from './components/SectionTitle';
import { ProductTypeList } from './components/ProductTypeList';
import styles from './App.module.scss';
import { PartnersSection } from './components/PartnersSection';

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
        </>
    );
}
