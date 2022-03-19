import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const NavbarGabriel = () => {
    const { store, actions } = useContext(Context)
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand">Navbar</a>

                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Icono
                    </button>
                    {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"> */}
                    <form class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    Column
                                </div>
                                <div class="col">
                                    Column
                                </div>
                                <div class="col">
                                    Column
                                </div>
                            </div>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <button type="submit" class="btn btn-secondary">Login</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};
export default NavbarGabriel;