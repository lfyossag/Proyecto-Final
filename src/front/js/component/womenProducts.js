import React, {useContext} from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const womenProducts = (props) => {
const { store, actions } = useContext(Context);
  return (
    <div>
    <div className="card" style={{width: "30rem"}}>
      <img className="card-img-top" src={props.image} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">
        {props.title}
        </p>
        <p className="card-text">
        {props.price}
        </p>
      </div>
    </div>
  </div>
  )
}

export default womenProducts;
