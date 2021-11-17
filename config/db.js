const mongoose = require('mongoose');
require('dotenv').config();
const db_url = process.env.DB_URL;
module.exports = () => {
    const conex = () => {
        mongoose.connect(db_url,{
            keepAlive: true,
            useNewUrlparser: true,
            useUnifiedTopology: true            
        },
        (err) => {
            if (err) {
                console.log('Error de Conexion: ' + err);
                //console.error(err);
            } else {
                console.log('Conexion exitosa!');
            }
        });
    };
    conex();
};