const modelo = require('../models/users.model');
exports.getdata = (req, res)=>{
    //res.json({"data": "Hola desde complemento"})
    modelo.find({},(err,data) => {
        if (err) {
            console.log('Error ' + err);
        } else {
            res.json({data});
        }
    });
};