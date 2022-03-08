import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<button className="btn btn-success" onClick={()=>actions.getProfile()}>mis datos</button>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
