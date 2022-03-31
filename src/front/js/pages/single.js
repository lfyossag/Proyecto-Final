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
		<div className="jumbotron">
			<img src={store.item.image}></img>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
