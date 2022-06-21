import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget';
import UserWidget from '../UserWidget/UserWidget';
import Search from '../Search/Search';

const NavBar = () => {
    return (
        <nav class='navbar container'>
            <a href="#" class='navbarBrand'>ClothEs</a>
            <ul class="navbarLinks">
                <li class="navbarLink active"><a href="#" class="navbarAnchor">Inicio</a></li>
                <li class="navbarLink"><a href="#" class="navbarAnchor">Categorias</a></li>
                <li class="navbarLink"><a href="#" class="navbarAnchor">FAQs</a></li>
                <li class="navbarLink"><a href="#" class="navbarAnchor">Contacto</a></li>
            </ul>
            <Search />
            <div class='navbarInteraction'>
                <CartWidget />
                <UserWidget />
            </div>
        </nav>
    )

}

export default NavBar;
