import { Container } from 'react-bootstrap';
import FAQMainBody from '../../components/FAQMainBody/FAQMainBody';
import './FAQPage.css'


function FAQPage() {
    return (
        <>
            <div className='Jumbotron'>
                <h1>FAQ</h1>
            </div>
            <Container>
                <FAQMainBody />
            </Container>
        </>
    )
}

export default FAQPage;