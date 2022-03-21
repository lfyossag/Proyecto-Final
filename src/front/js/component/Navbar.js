import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/nav.css";


export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
	
	<nav class="navbar navbar-expand-lg navbar-light bg-light text-muted bg-dark">
	<div class="container">
				<a class="navbar-brand text-white">
					<img
						alt="svgImg"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjNjRiNWY2IiBkPSJNMzcsMzZIMTdjLTIuNzYxLDAtNS0yLjIzOS01LTVWMTFjMC0yLjc2MSwyLjIzOS01LDUtNWgyMGMyLjc2MSwwLDUsMi4yMzksNSw1djIwIEM0MiwzMy43NjEsMzkuNzYxLDM2LDM3LDM2eiBNMjEsMzBoMTRWMTguNWMwLTMuMDM4LTIuNDYyLTUuNS01LjUtNS41SDE4djE0QzE4LDI4LjY1NywxOS4zNDMsMzAsMjEsMzB6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZiOGMwMCIgZD0iTTMxLDQySDExYy0yLjc2MSwwLTUtMi4yMzktNS01VjE3YzAtMi43NjEsMi4yMzktNSw1LTVoMjBjMi43NjEsMCw1LDIuMjM5LDUsNXYyMCBDMzYsMzkuNzYxLDMzLjc2MSw0MiwzMSw0MnogTTE3LjUsMzZIMzBWMjFjMC0xLjY1Ny0xLjM0My0zLTMtM0gxNWMtMS42NTcsMC0zLDEuMzQzLTMsM3Y5LjVDMTIsMzMuNTM4LDE0LjQ2MiwzNiwxNy41LDM2eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM2NGI1ZjYiIGQ9Ik0zNiwyNnYxYzAsMS42NTctMS4zNDMsMy0zLDNIMjN2NmgxNGMyLjc1LDAsNS0yLjI1LDUtNXYtNUgzNnoiPjwvcGF0aD48L3N2Zz4="
						/>
						FIERAS
				</a>
		<div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
			<ul class="navbar-nav topButtons ">
				<li class="nav-item me-5 ">
				<a class="d-flex justify-content-center nav-link active text-white border rounded-pill navigationButtons" aria-current="page" href="#">WOMEN</a>
				</li>
				<li class="nav-item ms-5">
				<a class="d-flex justify-content-center nav-link active text-white border rounded-pill navigationButtons" aria-current="page" href="#">MEN</a>
				</li>
			</ul>
    	</div>
		<form class="d-flex topIcons">
			<i class="bi bi-person-circle  loginIcon"></i>
			<i class="bi bi-cart-check-fill"></i>
		</form>
	</div>
	</nav>
	);
};
export default Navbar;