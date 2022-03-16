const CryptoItem = (props) => {
    return (
      <div className="item">
        <img src={props.imageUrl} alt={props.Name} className="icon" />
        <div className="display-container">
          <div className="name">{props.Name}</div>
          <div className="fullname">{props.FullName}</div>
        </div>
        <div className="price-container">
          <div className="price ">{props.price}</div>
          <div
            className={`price-change ${
              props.change24hr < 0 ? " danger" : " success"
            }`}
          >
            {props.change24hr}%
          </div>
        </div>
      </div>
    );
  };
  
  export default CryptoItem;
  