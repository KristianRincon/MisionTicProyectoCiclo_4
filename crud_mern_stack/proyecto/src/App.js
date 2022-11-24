import "./App.css";
import ListaUsuarios from "./components/ListaUsuarios";
import AgregarUsuario from "./components/AgregarUsuario";
import EditarUsuario from "./components/EditarUsuario";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import parkingLogo from "./assets/img/logo.png";

function App() {
  return (

    <div className="App">
      {/* <h1>Usuarios Parquedero</h1> */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <img src={parkingLogo} width='80' alt='' />

          <a className="navbar-brand" href="/">ParqueateWeb</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario" >Agregar usuario</a>
              </li>
              <li className="nav-item" variant="light">
                <a className="nav-link active" aria-current="page" href="/">Lista de Usuarios</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>



      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaUsuarios />} exact></Route>
          <Route path='/agregarusuario' element={<AgregarUsuario />} exact></Route>
          <Route path='/editarusuario/:idusuario' element={<EditarUsuario />} exact></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
