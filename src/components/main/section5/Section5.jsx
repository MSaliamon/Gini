import './section5.scss';
import key from '../../../assets/homepage/png/key.png'

function Section5() {
  return (
    <section className="section5">
        <h2 className="section5-title">You know the business.</h2>
        <ul className="section5-pagination">
            <li className="section5-pagination__item">
                <a href="" className="section5-pagination__link">Finance teams</a>
            </li>
            <li className="section5-pagination__item">
                <a href="" className="section5-pagination__link">Founders</a>
            </li>
            <li className="section5-pagination__item">
                <a href="" className="section5-pagination__link">Investors</a>
            </li>
            <li className="section5-pagination__item">
                <a href="" className="section5-pagination__link">Accountants</a>
            </li>
        </ul>
        <div className="section5-container">
            <div className="section5-box">
                <p className="section5-box__sub-title">Easy forecasting</p>
                <p className="section5-box__title">gini provides flexible, shareable financial forecasting for finance teams</p>
                <p className="section5-box__text">Easily consolidate and create financial reports and expense forecasts. With gini, financial data automatically syncs with your accounting software. Easily share reports with founders and investors so you can invest more time in strategic planning.</p>
            </div>
            <img src={key} alt="key" className="section5-container__img" />
        </div>
    </section>
  )
}

export default Section5