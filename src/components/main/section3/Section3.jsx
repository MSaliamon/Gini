import './section3.scss'
import due from '../../../assets/homepage/png/due.png'
function Section3() {
  return (
    <section className="section3">
        <div className="section3-textbox">
            <h2 className="section3-textbox__title">Your finances in sync</h2>
            <p className="section3-textbox__text">gini syncs spreadsheets with Xero & Quickbooks so founders, finance teams, accountants and investors stay in financial harmony.</p>
        </div>
        <img src={due} alt="due" className="section3__img" />
    </section>
  )
}

export default Section3