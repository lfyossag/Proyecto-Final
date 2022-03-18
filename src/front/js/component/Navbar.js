import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<div class="container-fluid">
        <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="col 1"></div>
                    <i class="bi bi-instagram"></i>
                    <a class="col-8 m-1 navbar-brand">Instagram</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex">
                            <button class="col btn btn-outline-success" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create a new Post</button>
                            <div class="dropdown">
                                <i class="ms-3 bi bi-gear" data-bs-toggle="dropdown"></i>
                                <button class="ps-0 btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    <li>
                                        <hr class="dropdown-divider"/>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
		<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-success">Publish</button>
                    </div>
                </div>
            </div>
        </div>
		</div>
		
	);
};
export default Navbar;