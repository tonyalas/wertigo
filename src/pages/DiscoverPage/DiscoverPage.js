import { Container } from 'react-bootstrap';
import BusinessTile from '../../components/BusinessTile/BusinessTile'
import DiscoverFilterByCategory from '../../components/DiscoverFilterByCategory/DiscoverFilterByCategory';

function DiscoverPage(props) {
    return (
        <>
            <div className='Jumbotron'>
                <h1>Discover Local</h1>
                <h4>From existing fan-favourites to hidden gems, discover great local businesses here!</h4>
            </div>

            <Container>
                <div class='row justify-content-center'>
                    <div class='col'>
                        <div class='centeredText'>
                            <br></br>
                            <p><b>Want to add your own business? Register <a href='/contactus' target='_blank' rel='noopener noreferrer'>here</a> today!</b></p>
                        </div>
                    </div>
                </div>
                <hr></hr>

                <DiscoverFilterByCategory />

                {props.businesses.map(business => {
                    return (
                        <BusinessTile name={business.name} description={business.description} key={business.id} businessID={business.id} />
                    )
                })}

            </Container>


        </>
    )
}

export default DiscoverPage;