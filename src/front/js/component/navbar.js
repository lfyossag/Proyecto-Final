import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				{store.isLogged?
				<div className="ml-auto">
					<Link to="/">
						<button className="btn btn-primary" onClick={() => actions.logout()}>Logout</button>
					</Link>
				</div>:null}
			</div>
		</nav>
	);
};
export default Navbar;