import { Container } from 'react-bootstrap';
import FAQMainBody from '../../components/FAQMainBody/FAQMainBody';
import './FAQPage.css';
import { useEffect } from 'react';


function FAQPage() {
    useEffect(() => {
        document.title = 'Wertigo - FAQ'
    }, []);

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