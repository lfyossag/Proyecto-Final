import React from "react";
import "../../styles/home.css";
import LoginForm from "../component/formLogin";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Login</h1>
		<LoginForm/>
	</div>
);