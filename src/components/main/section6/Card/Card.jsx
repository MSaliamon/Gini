import './card.scss'
function Card(props) {
  return (
    <div className="card">
        <img src={props.img} alt={props.alt} className="card__img" />
        <div className="card-textbox">
            <h3 className="card-textbox__title">{props.title}</h3>
            <p className="card-textbox__text">{props.text}</p>
        </div>
    </div>
  )
}
export default Card