import { useState } from "react"

function HogCard(props){
    const {hog} = props
    const [isHidden, setHidden] = useState(true)
    function handleClick(){
		
        if(isHidden === true){
          setHidden(false)
        }
        else{
          setHidden(true)
        }
	}
    console.log(isHidden)
    return(
        <div onClick={handleClick}>
         <h3>{hog.name}</h3>
            <div hidden={isHidden}>
                <p>{ hog.specialty}</p>
                <p>{hog.weight}</p>
                <p>{hog.greased}</p>
                <p>{hog["highest medal achieved"]}</p>
            </div>
         <img src={hog.image}/>
        </div>
    )
}
export default HogCard