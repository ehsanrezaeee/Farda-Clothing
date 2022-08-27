
import './directory-item.styles.scss'

const DirectoryItem = (props) => {
  return (
      <div className="directory-item-container">
        <div className="background-image" style={{backgroundImage: `url(${props.imageUrl})`}}/>
        <div className="body">
          <h2>
            {props.title}
          </h2>
          <p>
            سفارش
          </p>
        </div>
      </div>
  )
};





export default DirectoryItem;