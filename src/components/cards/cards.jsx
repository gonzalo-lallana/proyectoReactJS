import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Cards = ({id, nombre, descripcion, precio, img, categoria}) => {
    return ( 
        <Row className="col-6 col-md-4 my-4">
            <Col>
                <Card id="Cards" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>{descripcion}</Card.Text>
                        <Card.Text>Precio: ${precio}</Card.Text>
                        <Button variant="primary" href={`/detail/${id}`}>Ver más</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Cards;