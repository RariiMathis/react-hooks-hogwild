import React from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";
import hogs from "../porkers_data";

function App() {
	
	const hogCardArray = hogs.map( (hog) => {
		return <HogCard key={hog.id} hog={hog} className="ui eight wide column"  />
	})

	return (
		<div className="App">
			<Nav />
			<div className="ui grid container">
			{hogCardArray}
			</div>
			
		</div>
	);
}

export default App;
