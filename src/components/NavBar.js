import './NavBar.scss'

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
        <form action="">
            <input class='navbarInput' type="text" placeholder='¿Qué estas buscando?'/>
            <button class='navbarButton'>Buscar</button>
        </form>
        <div class='navbarInteraction'>
            <a href="" class='navbarIcon'><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="48" height="48" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"><path fill="currentColor" d="M13.33 5H11.5l-.39-2.33A2 2 0 0 0 9.7 1.18A3.76 3.76 0 0 0 8.62 1H6.38a3.76 3.76 0 0 0-1.08.18a2 2 0 0 0-1.41 1.49L3.5 5H1.67a.5.5 0 0 0-.48.65l1.88 6.3A1.5 1.5 0 0 0 4.5 13h6a1.5 1.5 0 0 0 1.42-1.05l1.88-6.3a.5.5 0 0 0-.47-.65zM4.52 5l.36-2.17a.91.91 0 0 1 .74-.7c.246-.078.502-.121.76-.13h2.24c.261.008.52.051.77.13a.91.91 0 0 1 .74.7L10.48 5h-6z"/></svg></a>
            <a href="" class='navbarIcon'><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="48" height="48" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"/></svg></a>
        </div>
    </nav>
    )

}

export default NavBar;
