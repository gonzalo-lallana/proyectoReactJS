import { Container, Row, Col } from "react-bootstrap";

const Overlay = () => {
    return ( 
        <Container id='overlay' fluid>
                <Row id='row-carousel' className='align-items-center'>
                    <Col xs={{ span:8, offset:2}} md={{ span: 6, offset: 6 }} id='texto-carousel' className='text-right'>
                        <h1>bienvenido a Crazy<span id='brand4'>4</span>Boxing</h1>
                        <p className='d-none d-md-block'>Somos la tienda para todo aquel amante del boxeo, aqui encontraras los mejores productos de las mejores marcas tanto para entrenar o para la hora de un combate amateur o profesional.</p>
                    </Col>
                </Row>
        </Container>
    );
}

export default Overlay;