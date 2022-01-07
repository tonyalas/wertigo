import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { makeFriendlyURL } from '../../utils/urlUtils';

function BusinessPage(props) {
    const params = useParams();
    const business = props.businesses.find(
        (b) => makeFriendlyURL(b.name) == params.businessName
    )
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (business == undefined || count > 5) {
            navigate('/')
        }
        // Update the document title using the browser API
    }, [business, count, navigate]);

    return (
        <>
            hello..{business?.name}
            <br></br>
            {count}
            <button onClick={() => { setCount(count + 1) }}>Click here</button>
        </>
    )
}

export default BusinessPage;