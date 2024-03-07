import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const RegistroEmpleado = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="vehiculo">
            <Form.Label>Vehículo</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Seleccion el tipo de vehículo</option>
              <option value="1">Moto</option>
              <option value="2">Auto</option>
              <option value="3">Camioneta</option>
              <option value="3">Utilitario/Kangoo</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="patente">
            <Form.Label>Número de patente</Form.Label>
            <Form.Control type="text" placeholder="Ej: AAA 999" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="Contraseña">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Acepto los términos y condiciones"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="m-3">
          Registrarse
        </Button>
        <Button variant="primary" onClick={handleShow} className="m-3">
          Inicia sesión
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Usuario">
              <Form.Label>Ingrese Usuario</Form.Label>
              <Form.Control type="email" placeholder="pepito@envioos.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Contraseña">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegistroEmpleado;
