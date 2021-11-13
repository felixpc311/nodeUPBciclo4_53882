const express = require('express');
const app = express();
const routes = require('./app/routes/users.routes');


require('dotenv').config();

const port = process.env.PORT;

/* app.get('/',(req, res)=>{
    res.json({'data': 'Hola mundo!'})
}); */

app.use(routes);

app.listen(port, (err)=>{
    if (err) {
        console.error(err);
    } else {
        console.log('Conexion exitosa en '+'http://localhost:'+port);
    }
});