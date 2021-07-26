
const mysql = require('mysql2');

require('dotenv').config();

/*const host = document.getElementById('host').value;
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const database = document.getElementById('database').value;
*/
    const host = process.env.host;
    const user = process.env.user;
    const password = process.env.password;
    const database = process.env.database;
    const port = process.env.port;

    //document.getElementById('txtData').value =console.log('Generando conexion');


const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: port
});

connection.connect(function (err) {
    if (err) {
        document.getElementById('txtData').value = "error de conexion";
        //console.log(err.code);
        //console.log(err.fatal);
        //console.log('error')
    } else {
        document.getElementById('txtData').value ="Conectando...";
        setTimeout( function(){location.href="./basetabla.html"},2000);
        //document.getElementById('txtData').value = `host: ${host} user: ${user} password: ${password} database: ${database} port: ${port}\nconexion exitosa`;
    }
});

module.exports = connection 