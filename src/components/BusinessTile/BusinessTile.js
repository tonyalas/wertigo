import './BusinessTile.css'
import { Link } from 'react-router-dom';
import { makeFriendlyURL } from '../../utils/urlUtils';

function BusinessTile(props) {
    return (
        <div className='wrapper'>
            <Link to={`/discover/businessPages/${makeFriendlyURL(props.name)}`}>
                {props.name}
            </Link>
            <br></br>
            {props.description}
            <br></br>

        </div>
    )
}

export default BusinessTile;