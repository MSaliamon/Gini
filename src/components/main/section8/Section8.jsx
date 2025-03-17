import './section8.scss';
import peaple from '../../../assets/homepage/png/peaple.png';
import many from '../../../assets/homepage/png/many.png';
import laptop from '../../../assets/homepage/png/laptop.png';
import arrow from '../../../assets/homepage/svg/arrow2.svg';


function Section8() {
  return (
    <section className="section8">
        <h2 className="section8__title">Recent articles and resources</h2>
        <div className="section8-container">
            <div className="section8-box">
                <img src={peaple} alt="peaple" className="section8-box__img" />
                <p className="section8-box__text">EPM vs. ERP: Optimize your account and finance operations</p>
                <a href="#"  className="section8-box__link">
                    <p className="section8-box__link-text">Read more</p>
                    <img src={arrow} alt="arrow2" className="section8-box__link-img" />
                </a>
            </div>
            <div className="section8-box">
                <img src={many} alt="many" className="section8-box__img" />
                <p className="section8-box__text">Understanding actual budget and variance</p>
                <a href="#"  className="section8-box__link">
                    <p className="section8-box__link-text">Read more</p>
                    <img src={arrow} alt="arrow2" className="section8-box__link-img" />
                </a>
            </div>
            <div className="section8-box">
                <img src={laptop} alt="laptop" className="section8-box__img" />
                <p className="section8-box__text">Top 19 small business tools that you need in 2023</p>
                <a href="#"  className="section8-box__link">
                    <p className="section8-box__link-text">Read more</p>
                    <img src={arrow} alt="arrow2" className="section8-box__link-img" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Section8