import React, { useState } from "react";
import uniquid from 'uniqid'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import imagen from '../assets/img/image.png'
//import Card from 'react-bootstrap/Card';

function AgregarUsuario() {


  //Hooks
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

  //Para volver atras al index
  const navegar = useNavigate()

  function agregarUsuario() {
    var usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario: uniquid()
    }
    console.log(usuario)

    axios.post('/api/usuario/agregarusuario', usuario)
      .then(res => {
        //alert(res.data)
        navegar('/')
        Swal.fire('Correcto', 'El usuario se creo con exito')
      })
      .then(err => { console.log(err) })
  }

  return (
    <div className="row mt-3">
      <div className="col-13">
        <img
          src={imagen} width='500' alt='' text-align='center'/>
      </div>

      <div className="container">

        <div className="row">
          <h2 className="mt-4">Crear un nuevo usuario</h2>
        </div>

        <div className="row">
          <div className="col-sm-4 offset-4">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" value={nombre} onChange={(e) => { setNombre(e.target.value) }}></input>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
            </div>

            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">Teléfono</label>
              <input type="text" className="form-control" value={telefono} onChange={(e) => { setTelefono(e.target.value) }}></input>
            </div>

            <button onClick={agregarUsuario} className="btn btn-success">Guardar Usuario</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgregarUsuario;
