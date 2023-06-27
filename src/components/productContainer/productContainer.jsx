import { Container, Row, Col } from 'react-bootstrap';
import Cards from '../cards/cards';


function ProductContainer({items}) {

    return (
        <Container className='my-4'>
            <Row>
                <Col className='text-center text-uppercase'>
                    <h2>nuestros productos</h2>
                </Col>
            </Row>
            <Row>
                {
                    items.map((prod) => <Cards key={prod.id} {...prod}></Cards>)
                }
            </Row>
        </Container>
        
    );
}

export default ProductContainer;