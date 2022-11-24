import axios from 'axios'
import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'


function UsuarioIndividual({ usuario }) {

  const navegar = useNavigate()

  //Para animacion de scroll al bajar
  useEffect(() => {
    AOS.init()
  })


  //Función para borrar usuario
  function borrarusuario(idusuario) {

    //alert(res.data)   
    //navegar('/')  
    Swal.fire({
      title: 'Estas Seguro?',
      text: "El usuario se eliminara definitivamente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {

        axios.post('/api/usuario/borrarusuario', { idusuario: idusuario }).then(res => {
          console.log(res.data)
        }).catch(err => {
          console.log(err)
        })
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El usuario se elimino con exito',
          showConfirmButton: false,
          timer: 5500
        })
        navegar(0)

      }

    })
  }

  return (

    <div className='container'>
      <div ClassName='row'>

        <div className="col-sm-4 offset-4" data-aos="flip-right">
          <ul className='list-group'>
            {/* <li className='list-group-item'>{usuario.idusuario}</li> */}
            <li className='list-group-item'>{usuario.nombre}</li>
            <li className='list-group-item'>{usuario.email}</li>
            <li className='list-group-item'>{usuario.telefono}</li>
          </ul>

          <Link to={`/editarusuario/${usuario.idusuario}`}><li className="btn btn-success">Editar</li></Link>
          &nbsp;
          <button className="btn btn-danger" onClick={() => { borrarusuario(usuario.idusuario) }}>Borrar</button>
          <hr className="mt-4"></hr>
        </div>
      </div>
    </div>
  );
}

export default UsuarioIndividual;
