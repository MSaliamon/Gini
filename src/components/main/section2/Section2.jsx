import './section2.scss'
import board from '../../../assets/homepage/png/board.png'
import Xccele from '../../../assets/homepage/svg/Xccele.svg'
import pershing from '../../../assets/homepage/svg/pershing.svg'
import caker from '../../../assets/homepage/svg/caker.svg'
import comic from '../../../assets/homepage/svg/comic.svg'
import Krisp from '../../../assets/homepage/svg/Krisp.svg'
import winki from '../../../assets/homepage/svg/winki.svg'

function Section2() {
  return (
    <section className="section2">
      <img src={board} alt="board" className="section2-img" />
      <div className="section2-container">
        <img src={Xccele} alt="Xccele" className="section2-container__img" />
        <img src={pershing} alt="" className="section2-container__img" />
        <img src={caker} alt="caker" className="section2-container__img" />
        <img src={comic} alt="comic" className="section2-container__img" />
        <img src={Krisp} alt="Krisp" className="section2-container__img" />
        <img src={winki} alt="winki" className="section2-container__img" />
      </div>
    </section>
  )
}

export default Section2