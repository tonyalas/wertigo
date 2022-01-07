import Container from 'react-bootstrap/Container';
import IndexCarousel from '../../components/IndexCarousel/IndexCarousel';
import IndexMainBody from '../../components/IndexMainBody/IndexMainBody';
import JumbotronHeader from '../../components/JumbotronHeader/JumbotronHeader';

function HomePage() {
    return (
        <>

            <header>
                <JumbotronHeader />
            </header>

            <Container>
                <div>
                    <IndexCarousel />

                    <IndexMainBody />

                </div>
            </Container>

        </>
    )
}

export default HomePage;