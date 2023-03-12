// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`card ${className}`}>
      <div className="card">
        <h1 className="card-head">{title}</h1>
        <p className="card-para">{description}</p>
        <div className="card-img">
          <img src={imgUrl} className="imgs" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
