import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPhone = this.onChangeUserPhone.bind(this);
    this.onChangeUsertype = this.onChangeUsertype.bind(this);
    this.onChangeUserPlate = this.onChangeUserPlate.bind(this);
    //this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      phone: "",
      type: "",
      plate: "",
      //rollno: "",
    };
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeUserPhone(e) {
    this.setState({ phone: e.target.value });
  }
  onChangeUsertype(e) {
    this.setState({ type: e.target.value });
  }
  onChangeUserPlate(e) {
    this.setState({ plate: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      type: this.state.type,
      plate: this.state.plate,
    };

    axios
      .post("http://localhost:4000/users/create-user", userObject)
      .then((res) => console.log(res.data));
    this.setState({ name: "", email: "", phone: "", type: "", plate: "" });
  }

  render() {
    return (
      <div class="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeStudentName}
            />
          </Form.Group>
          <Form.Group controlId="Email">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeStudentEmail}
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="text"
              value={this.state.rollno}
              onChange={this.onChangeStudentRollno}
            />
          </Form.Group>
          <Form.Group controlId="type">
            <Form.Label>Tipo de vehiculo</Form.Label>
            <Form.Control
              type="text"
              value={this.state.rollno}
              onChange={this.onChangeStudentRollno}
            />
          </Form.Group>
          <Form.Group controlId="plate">
            <Form.Label>Placa</Form.Label>
            <Form.Control
              type="text"
              value={this.state.rollno}
              onChange={this.onChangeStudentRollno}
            />
          </Form.Group>
          <Button
            variant="warning"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Crear Usuario
          </Button>
        </Form>
      </div>
    );
  }
}
