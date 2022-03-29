import React from "react";
import "../../styles/home.css";
import Jumbotron from "../component/Jumbotron";
import FormRegister from "../component/formRegister"

const Home = () => {
	return(
		<div >
		<Jumbotron/>
		<FormRegister/>
		</div>
	)
	
};

export default Home;