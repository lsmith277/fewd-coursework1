import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import { ShoppingList } from './ShoppingList.js';
import { UserMenu } from './UserMenu.js';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [shoppingList, setShoppingList] = useState(false);
    const [userMenu, setUserMenu] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
      <BrowserRouter>
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            {/* <img src={logo} alt="Logo"/> */}
            <span className="navbar-logo">Cuisine.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#recipes" className={activeLink === 'recipes' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('recipes')}>Recipes</Nav.Link>
            </Nav>
            <span className="navbar-text">
            <button className="navbar-sl-btn" onClick={() => setShoppingList(true)}><span>Shopping List</span></button>
            <button className="navbar-sl-btn" onClick={() => setUserMenu(true)}><span>Menu</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ShoppingList open={shoppingList} onClose={() => setShoppingList(false)}/>
      <UserMenu open={userMenu} onClose={() => setUserMenu(false)}/>
      </BrowserRouter>
    )
}