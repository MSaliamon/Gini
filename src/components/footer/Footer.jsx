import './footer.scss';
import logo from '../../assets/homepage/svg/logo2.svg';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
            <a href="" className="logo"><img src={logo} alt="logo" className="logo__img" /></a>
            <p className="footer-container__text">Copyright © 2023 gini</p>
        </div>
        <ul className="footer-container2">
            <li className="footer-container2__item">
                <a href="" className="footer-container2__link">Learn</a>
            </li>
            <li className="footer-container2__item">
                <a href="" className="footer-container2__link">Pricing</a>
            </li>
            <li className="footer-container2__item">
                <a href="" className="footer-container2__link">Blog</a>
            </li>
            <li className="footer-container2__item">
                <a href="" className="footer-container2__link">Schedule a demo</a>
            </li>
            <li className="footer-container2__item">
                <a href="" className="footer-container2__link">Help Center</a>
            </li>
        </ul>
        <ul className="footer-container2">
            <li className="footer-container2__item">
                <a href="" className="footer-container2__link">Our company</a>
            </li>
            <li className="footer-container2__item">
                <a href="" className="footer-container2__link">Privacy Policy</a>
            </li>
            <li className="footer-container2__item">
                <a href="" className="footer-container2__link">User Terms</a>
            </li>
            <li className="footer-container2__item">
                <a href="" className="footer-container2__link">Careers</a>
            </li>
        </ul>
        <ul className="footer-container2">
            <li className="footer-container2__item">
                <a href="" className="footer-container2__link">Get in touch</a>
            </li>
            <li className="footer-container2__item">
                <a href="" className="footer-container2__link">Contact us</a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer