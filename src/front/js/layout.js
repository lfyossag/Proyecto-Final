import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import  Home  from "./pages/home";
import { CatMen } from "./pages/catmen";
import { CatWomen } from "./pages/catwomen";
import { CreateUser} from "./pages/createuser";
import { UserInfo} from "./pages/userinfo";
import { UserOrders} from "./pages/userorders";
import { NewProducts} from "./pages/newproducts";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar";

import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/catmen">
							<CatMen />
						</Route>
						<Route exact path="/catwomen">
							<CatWomen />
						</Route>
						<Route exact path="/createuser">
							<CreateUser />
						</Route>
						<Route exact path="/userinfo">
							<UserInfo />
						</Route>
						<Route exact path="/userorders">
							<UserOrders />
						</Route>
						<Route exact path="/newproducts">
							<NewProducts />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
