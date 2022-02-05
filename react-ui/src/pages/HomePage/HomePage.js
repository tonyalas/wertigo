import Container from 'react-bootstrap/Container';
import IndexCarousel from '../../components/IndexCarousel/IndexCarousel';
import IndexMainBody from '../../components/IndexMainBody/IndexMainBody';
import JumbotronHeader from '../../components/JumbotronHeader/JumbotronHeader';
import { useEffect } from 'react';
import BusinessOfTheWeek from '../../components/BusinessOfTheWeek/BusinessOfTheWeek';
import GetStartedNow from '../../components/GetStartedNow/GetStartedNow';

function HomePage() {
    useEffect(() => {
        document.title = 'Wertigo'
    }, []);

    return (
        <>

            <header>
                <JumbotronHeader />
            </header>

            <Container>
                <div className='centeredText'>
                    <IndexCarousel />
                    <GetStartedNow />
                    {/* <BusinessOfTheWeek /> */}

                    <IndexMainBody />

                </div>
            </Container>

        </>
    )
}

export default HomePage;