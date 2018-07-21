import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Attractions from "./pages/Attractions";
import Reviews from "./pages/Reviews";
import Detail from "./pages/Detail";
import Blog from "./pages/Blog";
import MapView from "./pages/MapView";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import Contact from "./pages/Contact";

const App = () => (

	<Router>
		<div>
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/Hotels" component={Hotels} />
				<Route exact path="/Hotels/:id" component={Detail} />
				<Route exact path="/Reviews" component={Reviews} />
				<Route exact path="/Reviews/:id" component={Detail} />
				<Route exact path="/Blog" component={Blog} />
				<Route exact path="/Blogs/:id" component={Detail} />
				<Route exact path="/MapView" component={MapView} />
				<Route exact path="/Activities" component={Attractions} />
			</Switch>
			<Footer />
		</div>
	</Router>
);

export default App;
