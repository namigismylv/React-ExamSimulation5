import React, { useContext } from "react";
import MainContext from "../../../Context/Context";
import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({homeDataItem}) => {
    const {addToBasket}=useContext(MainContext)
  return (
    <>
    <div className="col-4 cardCol">
      <div class="card mb-5" style={{width:"18rem"}}>
        <img src={homeDataItem.image}  class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{homeDataItem.title}</h5>
          <p class="card-text">
            {homeDataItem.desc}
          </p>
          <button className="btn btn-primary" onClick={()=>addToBasket(homeDataItem)}> Cart</button>
          <Link to={`details/${homeDataItem._id}`}>View</Link>
        </div>
    </div>
      </div>
    </>
  );
};

export default Card;
