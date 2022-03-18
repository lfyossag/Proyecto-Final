import React from "react";
import "../../styles/home.css";
import LoginForm from "../component/formLogin";
import FormRegister from "../component/formRegister";
import Jumbotron from "../component/Jumbotron";


const Home = () => {
	return(
		<div className="text-center mt-5">
		<Jumbotron/>
		<FormRegister/>
		</div>
	)
	
};
	


export default Home;