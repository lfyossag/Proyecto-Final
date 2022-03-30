import React, {useContext}from "react";
import "../../styles/home.css";
import Jumbotron from "../component/Jumbotron";
import {Context} from "../store/appContext";

const Home = () => {
	const {store, actions} = useContext (Context);
	console.log(store.catMen);
	console.log(store.catWomen);
	return(
		<div >
		<Jumbotron/>
		</div>
	)
	
};

export default Home;