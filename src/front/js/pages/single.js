import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(store.item);
	useEffect(()=>{
		actions.getItem(params.theid)
	},[])
	return (
    // <div className="jumbotron">
    // 	<img src={store.item.image}></img>

    // 	<Link to="/">
    // 		<span className="btn btn-primary btn-lg" href="#" role="button">
    // 			Back home
    // 		</span>
    // 	</Link>
    // </div>
      <div className="row container">
        <div className="col-lg-8">
          <div
            className="ecommerce-gallery"
            data-mdb-zoom-effect="true"
            data-mdb-auto-height="true"
          >
            <div className="row py-3 shadow-5">
              <div className="col-12 mb-1">
                <div className="lightbox">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                    alt="Gallery image 1"
                    className="ecommerce-gallery-main-img active w-100"
                  />
                </div>
              </div>
              <div className="col-3 mt-1">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                  data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                  alt="Gallery image 1"
                  className="active w-100"
                />
              </div>
              <div className="col-3 mt-1">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                  data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                  alt="Gallery image 2"
                  className="w-100"
                />
              </div>
              <div className="col-3 mt-1">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                  data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                  alt="Gallery image 3"
                  className="w-100"
                />
              </div>
              <div className="col-3 mt-1">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15a.webp"
                  data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15a.webp"
                  alt="Gallery image 4"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 my-3 mx-auto">
          <div className="card h-100">
            <h5 className="card-header">Product details</h5>
            <div className="card-body">
              <h5 className="card-title">{store.item.title}</h5>
              <p className="card-text">
               $ {store.item.price} : 
              </p>
			  <span>item{store.item.id}</span>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

Single.propTypes = {
	match: PropTypes.object
};
