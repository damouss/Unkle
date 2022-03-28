import {React,useState,useRef,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container} from 'react-bootstrap';

const Navigation = () => {

    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])
    return (
        <div className="navigation">
            <Navbar expand="sm" fixed="top" style={{ transition: '0.3s ease',backgroundColor: navBackground ? 'white' : '#e2f3ff'}}>
                <Container>
                <NavLink to="/" className="d-flex align-items-center">
                    <img
                    alt="Logo Unkle"
                    src="https://assets.website-files.com/61017ce461144e8b7ef7d545/61017ce461144edf78f7d591_Unkle-bleu-fond-transparent-safe-zone.svg"
                    width="140"
                    height="65"
                    className="d-inline-block align-top"
                    />{' '}
                Tooltips use case
                </NavLink>
                </Container>
            </Navbar>           
        </div>
    );
};
export default Navigation;