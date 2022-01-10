import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { makeFriendlyURL } from '../../utils/urlUtils';
import { Col, Container, Row } from 'react-bootstrap';

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
            <div className='Jumbotron'>
                <h1>{business?.name}</h1>
                <br></br>
                <img class='business_image' src={business?.picturePath} alt='' />
            </div>
            <Container>
                <Row className='justify-content-center'>
                    <Col>
                        <div className='centeredText'>
                            <div className='block-text'>
                                <p id='informationText'>{business?.description}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            hello..{business?.name}
            <br></br>

            {/* {count}
            <button onClick={() => { setCount(count + 1) }}>Click here</button> */}
        </>
    )
}

export default BusinessPage;