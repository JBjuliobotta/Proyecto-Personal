import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RegistroUsuario = () => {
  return (
    <>
      <div className="text-center m-3">
        <h1>Registrate con tus datos</h1>
      </div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="Apellido">
            <Form.Label>Apellido/s</Form.Label>
            <Form.Control type="text" placeholder="Apellido" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="Nombre">
            <Form.Label>Nombre/s</Form.Label>
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="Documento">
            <Form.Label>Número de Documento</Form.Label>
            <Form.Control type="text" placeholder="Ej: 14567347" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="Email">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="juancho@envioos.com" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="Telefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="textt" placeholder="Ej: 3813121212" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="Domicilio">
            <Form.Label>Provincia</Form.Label>
            <Form.Control type="text" placeholder="Ej: Tucumán" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="Domicilio">
            <Form.Label>Localidad</Form.Label>
            <Form.Control type="text" placeholder="Ej: Capital" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="Domicilio">
            <Form.Label>Domicilio</Form.Label>
            <Form.Control type="text" placeholder="Domicilio" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="CodigoPostal">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control type="text" placeholder="Ej:4000" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="Contraseña">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button variant="primary" type="submit" className="m-3">
          Registrarse
        </Button>
      </Form>
    </>
  );
};

export default RegistroUsuario;
