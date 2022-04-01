import React, {useState,useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import "../../styles/nav.css";

console.log("prueba", process.env.TEST);

export const Navbar = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const {store, actions} = useContext(Context)
	const handleSubmit = (e) => {
		e.preventDefault()
		actions.login(email, password);
		setEmail("")
		setPassword("")
	}
console.log(store.isLogged);

	return (
	
	<nav className="navbar navbar-expand-lg navbar-light bg-light text-muted bg-dark">
	<div className="container-md">
				<a className="navbar-brand text-white">
					<img
						alt="svgImg"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjNjRiNWY2IiBkPSJNMzcsMzZIMTdjLTIuNzYxLDAtNS0yLjIzOS01LTVWMTFjMC0yLjc2MSwyLjIzOS01LDUtNWgyMGMyLjc2MSwwLDUsMi4yMzksNSw1djIwIEM0MiwzMy43NjEsMzkuNzYxLDM2LDM3LDM2eiBNMjEsMzBoMTRWMTguNWMwLTMuMDM4LTIuNDYyLTUuNS01LjUtNS41SDE4djE0QzE4LDI4LjY1NywxOS4zNDMsMzAsMjEsMzB6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZiOGMwMCIgZD0iTTMxLDQySDExYy0yLjc2MSwwLTUtMi4yMzktNS01VjE3YzAtMi43NjEsMi4yMzktNSw1LTVoMjBjMi43NjEsMCw1LDIuMjM5LDUsNXYyMCBDMzYsMzkuNzYxLDMzLjc2MSw0MiwzMSw0MnogTTE3LjUsMzZIMzBWMjFjMC0xLjY1Ny0xLjM0My0zLTMtM0gxNWMtMS42NTcsMC0zLDEuMzQzLTMsM3Y5LjVDMTIsMzMuNTM4LDE0LjQ2MiwzNiwxNy41LDM2eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM2NGI1ZjYiIGQ9Ik0zNiwyNnYxYzAsMS42NTctMS4zNDMsMy0zLDNIMjN2NmgxNGMyLjc1LDAsNS0yLjI1LDUtNXYtNUgzNnoiPjwvcGF0aD48L3N2Zz4="
						/>
						FIERAS
				</a>
		<form className="d-flex topIcons dropdown ">
                    <a type="button" id="dropdownLoginUsuario" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-person-circle  loginIcon "></i>
                    </a>
                    <div className="dropdown-menu loginContainer " aria-labelledby="dropdownLoginUsuario">
                        <div className="d-flex justify-content-between d-grid gap-2">
                            <h3>Sign in</h3>
                            <Link className=" text-right mt-2" to="#">Sign up</Link>
                        </div>
                        
                            <div className="form-floating form-group mt-3 ">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email</label>
                            </div>
                            <div className="form-floating form-group mt-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password*</label>
                            </div>
                        
                        <div className="invisible forgot-password text-right mt-2">
                             <Link to="#">You forgot,right?</Link>
                        </div> 
                        <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-secondary">Login</button>
                        </div> 
                    </div>   
			<i className="bi bi-cart-check-fill"></i>
		</form>
	</div>
	</nav>
	);
};
export default Navbar;