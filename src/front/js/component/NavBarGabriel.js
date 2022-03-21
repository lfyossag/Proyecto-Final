import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/nav.css";


export const NavbarGabriel = () => {
	const {store, actions} = useContext(Context)
	return (
	
	<nav className="navbar navbar-expand-lg navbar-light bg-light text-muted bg-dark">
	<div className="container">
				<a className="navbar-brand text-white">
					<img
						alt="svgImg"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjNjRiNWY2IiBkPSJNMzcsMzZIMTdjLTIuNzYxLDAtNS0yLjIzOS01LTVWMTFjMC0yLjc2MSwyLjIzOS01LDUtNWgyMGMyLjc2MSwwLDUsMi4yMzksNSw1djIwIEM0MiwzMy43NjEsMzkuNzYxLDM2LDM3LDM2eiBNMjEsMzBoMTRWMTguNWMwLTMuMDM4LTIuNDYyLTUuNS01LjUtNS41SDE4djE0QzE4LDI4LjY1NywxOS4zNDMsMzAsMjEsMzB6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZiOGMwMCIgZD0iTTMxLDQySDExYy0yLjc2MSwwLTUtMi4yMzktNS01VjE3YzAtMi43NjEsMi4yMzktNSw1LTVoMjBjMi43NjEsMCw1LDIuMjM5LDUsNXYyMCBDMzYsMzkuNzYxLDMzLjc2MSw0MiwzMSw0MnogTTE3LjUsMzZIMzBWMjFjMC0xLjY1Ny0xLjM0My0zLTMtM0gxNWMtMS42NTcsMC0zLDEuMzQzLTMsM3Y5LjVDMTIsMzMuNTM4LDE0LjQ2MiwzNiwxNy41LDM2eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM2NGI1ZjYiIGQ9Ik0zNiwyNnYxYzAsMS42NTctMS4zNDMsMy0zLDNIMjN2NmgxNGMyLjc1LDAsNS0yLjI1LDUtNXYtNUgzNnoiPjwvcGF0aD48L3N2Zz4="
						/>
						FIERAS
				</a>
		<div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
			<ul className="navbar-nav topButtons ">
				<li className="nav-item me-5 ">
				<a className="d-flex justify-content-center nav-link active text-white border rounded-pill navigationButtons" aria-current="page" href="#">WOMEN</a>
				</li>
				<li className="nav-item ms-5">
				<a className="d-flex justify-content-center nav-link active text-white border rounded-pill navigationButtons" aria-current="page" href="#">MEN</a>
				</li>
			</ul>
    	</div>
		<form className="d-flex topIcons ">
        <div className="dropdown  ">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownLoginUsuario" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-person-circle  loginIcon "></i>
                    </button>
                    <div className="dropdown-menu " aria-labelledby="dropdownLoginUsuario">
                        <div className="d-flex">
                            <span>Sing in</span>
                            <a className="" href="#">Sing up</a>
                        </div>
                        <form >
                            <div className="form-floating ">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password*</label>
                            </div>
                        </form>
                        <div className="invisible">
                             <a href="#">You forgot,right?</a>
                        </div> 
                        <div >
                                <button type="submit" className="btn btn-secondary">Login</button>
                        </div> 
                    </div>  
                </div>
			<i className="bi bi-cart-check-fill"></i>
		</form>
	</div>
	</nav>
	);
};
export default NavbarGabriel;