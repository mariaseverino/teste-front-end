import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/MagnifyingGlass.svg';
import boxIcon from '../../assets/Group.svg';
import heartIcon from '../../assets/Heart.svg';
import userIcon from '../../assets/UserCircle.svg';
import shoppingCartIcon from '../../assets/ShoppingCart.svg';
import shildCheckIcon from '../../assets/ShieldCheck.svg';
import truckIcon from '../../assets/Truck.svg';
import creditCardIcon from '../../assets/CreditCard.svg';
import crownIcon from '../../assets/CrownSimple.svg';

export function Header() {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.notification}>
                <ul>
                    <li>
                        <img src={shildCheckIcon} />
                        <div>
                            Compra <span>100% segura</span>
                        </div>
                    </li>
                    <li>
                        <img src={truckIcon} />
                        <div>
                            <span>Frete grátis </span> acima de R$ 200 Compra
                        </div>
                    </li>
                    <li>
                        <img src={creditCardIcon} />
                        <div>
                            <span>Parcele</span> suas compras
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.container}>
                <div>
                    <img src={logo} className="logo" alt="Econverse logo" />
                </div>

                <form
                    className={styles.searchBar}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="search"
                        placeholder="O que você está buscando?"
                        aria-label="Buscar produtos"
                    />
                    <button type="submit">
                        <img src={searchIcon} alt="Ícone de lupa" />
                    </button>
                </form>

                <nav className={styles.userActions}>
                    <ul>
                        <li>
                            <button aria-label="Meus Pedidos">
                                <img src={boxIcon} className={styles.boxIcon} />
                            </button>
                        </li>
                        <li>
                            <button aria-label="Lista de Desejos">
                                <img src={heartIcon} />
                            </button>
                        </li>
                        <li>
                            <button aria-label="Minha Conta">
                                <img src={userIcon} />
                            </button>
                        </li>
                        <li>
                            <button aria-label="Carrinho de Compras">
                                <img src={shoppingCartIcon} />
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <nav className={styles.categoryNav}>
                <div>
                    <ul>
                        <li>
                            <a href="#eletronicos">Todas Categorias</a>
                        </li>
                        <li>
                            <a href="#moda">Supermercado</a>
                        </li>
                        <li>
                            <a href="#casa">Livros</a>
                        </li>
                        <li>
                            <a href="#casa">Moda</a>
                        </li>
                        <li>
                            <a href="#casa">Lançamentos</a>
                        </li>
                        <li>
                            <a href="#casa" className={styles.sale}>
                                Ofertas do dia
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <img src={crownIcon} />
                                Assinatura
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
