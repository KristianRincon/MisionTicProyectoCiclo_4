const mongoose = require('mongoose')
//mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');
mongoose.connect(      "mongodb+srv://KristianR:220_9200_0@cluster0.hvenvil.mongodb.net/crudmernstack?retryWrites=true&w=majority");

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conexion correcta a mongoDB')})
objetobd.on('error', ()=>{console.log('Error a la coneccion a mongoDB')})

module.exports = mongoose

// module.exports = {
//     mongoURI:
//       "mongodb+srv://KristianR:220_9200_0@cluster0.hvenvil.mongodb.net/reactdb?retryWrites=true&w=majority",
  
//     secretOrKey: "secret",
//   };