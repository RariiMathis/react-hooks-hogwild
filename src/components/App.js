import React, {useState} from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";
import hogs from "../porkers_data";

function App() {
	const[isGreased, setIsGreased] = useState(false)
	function handleGreased(){
		 if(isGreased === true){
			setIsGreased(false)
		  }
		  else{
			setIsGreased(true)
		  }
	  
	}
	const filterHogs = hogs.filter((hog) =>{
		if(isGreased == false){
			return hog
		}
		else{
			if(hog.greased == true){
				return hog
			}
		}
	})

	const hogCardArray = filterHogs.map( (hog) => {
		return <HogCard key={hog.id} hog={hog} className="ui eight wide column"  />
	})

	return (
		<div className="App">
			<Nav />
			<button className="filterWrapper " onClick={handleGreased}>Show only greased pigs</button>
			<div className="ui grid container">
			{hogCardArray}
			</div>
			
		</div>
	);
}

export default App;
