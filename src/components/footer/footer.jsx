import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return ( 
        <Container fluid id='footer' className='py-4'>
            <Row className='text-center'>
                <Col xs={12} lg>
                    <a href="#">preguntas frecuentes</a>
                </Col>
                <Col>
                    <a href="#">contactanos</a>
                </Col>
                <Col xs={12} lg>
                    <a href="#">terminos y condiciones</a>
                </Col>
                <Col xs={12} lg>
                    <a href="#">privacidad</a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer