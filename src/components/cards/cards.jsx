import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";



const Cards = ({id, nombre, descripcion, precio, img, categoria, stock}) => {
    return ( 
        <Row className="col-6 col-md-4 my-4">
            <Col>
                <Card id="Cards" style={{width: '20rem' }}>
                    <Card.Img variant="top" src={img} style={{height: '22rem'}}/>
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>{descripcion}</Card.Text>
                        {stock <= 5 && <p className="h6" style={{color: 'red'}}>ultimas {stock} unidades</p>}
                        <Card.Text>Precio: ${precio}</Card.Text>
                        <Button variant="primary" as={Link} to={`/detail/${id}`}>Ver más</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Cards;