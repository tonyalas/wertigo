import { useState } from "react";
import BusinessButton from "./BusinessButton";
import './BusinessTile.css'

function BusinessTile(props) {
    console.log(props);
    const onVisitedClick = () => {
        setVisited(visited + 1)
    }
    const [visited, setVisited] = useState(0);
    return (
        <div className="wrapper">
            {props.name}
            <br></br>
            {props.description}
            <br></br>
            <div>
                {visited}
            </div>
            <BusinessButton onVisitedClick={onVisitedClick} />
        </div>
    )
}

export default BusinessTile;