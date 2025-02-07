import logo from '../../assets/homepage/svg/logo.svg';
import Nav from './nav/Nav';
import './header.scss';

function Header() {
  return (
    <>
        <header className="header">
            <a href="" className="logo"><img src={logo} alt="logo" className="logo__img" /></a>
            <div className="header-container">
                <Nav />
                <div className="header-container__reges">
                    <button className="header-container__reges-login">Log in</button>
                    <button className="header-container__reges-try">Try for free</button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header