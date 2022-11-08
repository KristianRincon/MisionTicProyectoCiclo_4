import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import UserList from "./components/user-list.component";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="success" variant="light">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-user"} className="nav-link">
                  Parqueate Web
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-user"} className="nav-link">
                    Crear Usuario
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/user-list"} className="nav-link">
                    Listar Usuarios
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateUser {...props} />}
                  />
                  <Route
                    exact
                    path="/create-user"
                    component={(props) => <CreateUser {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-user/:id"
                    component={(props) => <EditUser {...props} />}
                  />
                  <Route
                    exact
                    path="/user-list"
                    component={(props) => <UserList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
