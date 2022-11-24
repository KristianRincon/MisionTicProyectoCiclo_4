import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import Swal from 'sweetalert2'
import imagen from '../assets/img/logo1.jpg'

//import Card from 'react-bootstrap/Card';

function EditarUsuario() {

  const params = useParams()

  //Hooks
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

    //Para volver atras al index
    const navegar = useNavigate()

  useEffect(() => {
    axios.post('/api/usuario/obtenerdatausuario', { idusuario: params.idusuario }).then(res => {
      console.log(res.data[0])
      const datausuario = res.data[0]
      setNombre(datausuario.nombre)
      setEmail(datausuario.email)
      setTelefono(datausuario.telefono)
    })
  }, [params.idusuario]) //////////////////////////////////////////////////////////////////////

  //Función que actualiza
  function editarUsuario() {
    //Nuevo objeto para actualizar el usuario
    const actualizarusuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario: params.idusuario
    }

    //Hacer la petición usando axios
    axios.post('/api/usuario/actualizausuario', actualizarusuario)
      .then(res => {
        console.log(res.data)
        //alert(res.data)
        navegar('/')
        Swal.fire('Correcto', 'El usuario se actualizo con exito')
      })
      .then(err => { console.log(err) })

  }

  return (
    <div className="row mt-3">
      <div className="col-13">
        <img
          src={imagen} width='500' alt='' text-align='center' />
      </div>
    <div className="container">
       
      <div className="row">
        <h2 className="mt-4">Editar usuario</h2>
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

          <button onClick={editarUsuario} className="btn btn-success">Actualizar Usuario</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default EditarUsuario;
