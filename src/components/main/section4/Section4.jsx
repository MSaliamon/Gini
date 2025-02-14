import './section4.scss'
import Arrow from '../../../assets/homepage/svg/arrow.svg'
import cash from '../../../assets/homepage/png/cash.png'

function Section4() {
  return (
    <section className="section4">
      <div className="section4-container">
        <h2 className="section4-container__title">The flexibility of spreadsheets.</h2>
        <ul className="section4-pagination">
          <li className="section4-pagination__item">
            <a href="" className="section4-pagination__link">Cash flow forecasting</a>
          </li>
          <li className="section4-pagination__item">
            <a href="" className="section4-pagination__link">Financial planning</a>
          </li>
          <li className="section4-pagination__item">
            <a href="" className="section4-pagination__link">Bookkeeping</a>
          </li>
          <li className="section4-pagination__item">
            <a href="" className="section4-pagination__link">Google Sheets Sync</a>
          </li>
        </ul>
      </div>
      <div className="section4-container2">
        <div className="section4-box">
          <p className="section4-box__sub-title">Cash flow forecasting</p>
          <p className="section4-box__title">Real-Time Cash & Runway Reports</p>
          <p className="section4-box__text">Create accurate, investor-ready cash flow forecast models in minutes. Our template is simple to use but with unlimited spreadsheet flexibility and automatic data synchronization.</p>
          <div className="section4-box__cont">
            <p className="section4-box__cont-link">Try for free</p>
            <img src={Arrow} alt="arrow" className="section4-box__cont-img" />
          </div>
        </div>
        <img src={cash} alt="cash" className="section4-container2__img" />
      </div>
    </section>
  )
}

export default Section4