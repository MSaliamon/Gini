import './section7.scss';
import cash from '../../../assets/homepage/svg/cash.svg';
import profit from '../../../assets/homepage/svg/profit.svg';
import perfomance from '../../../assets/homepage/svg/perfomance.svg';
import plan from '../../../assets/homepage/svg/plan.svg';
import creating from '../../../assets/homepage/svg/creating.svg';
import arrow1 from '../../../assets/homepage/svg/arrow1.svg';
import dashboard from '../../../assets/homepage/png/dashboard.png';

function Section7() {
  return (
    <section className="section7">
        <div className="section7-container">
            <h2 className="section7-container__title">Automated flows and templates for Google Sheets</h2>
            <div className="section7-container__want">
                <p className="section7-container__want-text">I want to...</p>
            </div>
            <div className="section7-box">
                <div className="section7-cont">
                    <img src={cash} alt="cash" className="section7-cont__img" />
                    <p className="section7-cont__text">Automate my cash flow forecasting</p>
                </div>
                <div className="section7-cont">
                    <img src={profit} alt="profit" className="section7-cont__img" />
                    <p className="section7-cont__text">Automate your profit & loss reporting</p>
                </div>
                <div className="section7-cont">
                    <img src={perfomance} alt="perfomance" className="section7-cont__img" />
                    <p className="section7-cont__text">Automate financial performance tracking</p>
                </div>
                <div className="section7-cont">
                    <img src={plan} alt="plan" className="section7-cont__img" />
                    <p className="section7-cont__text">Automate financial plan modeling</p>
                </div>
                <div className="section7-cont">
                    <img src={creating} alt="creating" className="section7-cont__img" />
                    <p className="section7-cont__text">Automate creating investor pitch decks</p>
                </div>
            </div>
            <div className="section7-container__link">
                <p className="section7-container__link-text">See more models and reports</p>
                <img src={arrow1} alt="arrow1" className="section7-container__link-img" />
            </div>
        </div>
        <img src={dashboard} alt="dashboard" className="section7__img" />
    </section>
  )
}

export default Section7