import Card from './Card/Card';
import './section6.scss';
import Analysis from '../../../assets/homepage/png/Analysis.png';
import Forecast from '../../../assets/homepage/png/Forecast.png';
import Purpose from '../../../assets/homepage/png/Purpose.png';

function Section6() {
  return (
    <section className="section6">
        <h2 className="section6__title">How to forecast business finances with gini</h2>
        <div className="section6-container">
          <Card img={Analysis} alt="Analysis" title="Run Instant Analysis" text="Quick sync your accounting software to experience fast-track automation that produces power-packed financial reports. Select parameters to run forecasts and access relevant metrics." />
          <Card img={Forecast} alt="Forecast" title="Design and Forecast" text="Find all of your data in a flexible spreadsheet for easy viewing and custom modeling. Study real-time reports and quickly forecast with simplified tools that put you in charge." />
          <Card img={Purpose} alt="Purpose" title="Collaborate with Purpose" text="Enjoy one-click sharing with interactive capabilities that bring your entire team to the same page. Collaboratively map out financial plans with the purpose-driven data you need to make big decisions." />
        </div>
    </section>
  )
}

export default Section6