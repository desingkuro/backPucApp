const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static('public'));

const port = 3000;

app.get('/',(req,res)=>{
    res.json({"erda":"hola"})
});

app.get('/download',(req, res)=>{
    console.log('peticion realizada')
    const file = `${path.resolve()}/public/puc.apk`;
    res.download(file); // Envía el archivo APK al cliente
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
