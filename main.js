// const con = require('./connect');
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
  require('dotenv').config();
  //localStorage.setItem('llave', 'valor');
  console.log(localStorage.getItem('llave'));
  //const con = require('./connect');
  


/*
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
  
*/
var con;
var auxiliar="";

function login(){
    const usuario = document.getElementById('login').value;
    const contrase = document.getElementById('password').value;
    if(usuario == 'andy' && contrase == '1234'){
        if (process.env.host != 'null' && process.env.host != ''){  
            location.href="./basetabla.html";
        }else{
            location.href="./baseconect.html";
        }
    }
    else{
        alert ("Oh no :(, error en usuario y contraseña, intentelo de nuevo");   
    }
}
function sendParams() {
    con = require('./connect');
    localStorage.setItem('con', con);
}
/*function sendParams() {
    const host = document.getElementById('host').value;
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const database = document.getElementById('database').value;

}*/


function addData() {
    con = require('./connect');
    const nombre = document.getElementById('nombre').value;
    const ap_pat = document.getElementById('ap_pat').value;
    const ap_mat = document.getElementById('ap_mat').value;
    const edad = document.getElementById('edad').value;

    $query = `INSERT INTO persona (nombre, ap_pat, ap_mat, edad) VALUES ("${nombre}","${ap_pat}","${ap_mat}","${edad}")`;

    con.query($query, function (err, rows, fields) {

        if (err) {
            console.log('Error Query');
            console.log(err);
            alert(err);
            return;
        }

        console.log("Conexion Query exitoso", rows);
        alert(rows);
    });
    auxiliar+= "<pre>"+nombre+"    "+ap_pat+"  "+ap_mat+"  "+edad+"</pre>";
    document.getElementById("datosTabla").innerHTML=auxiliar;    
    
}

function selectData(){
    con = require('./connect');
    var tabla2="";
 
     $query = 'SELECT * FROM persona';
 
     con.query( $query, function(err, results) {
       if (err) throw err;
 
       console.log(results);
               
 
         for (i = 0; i < results.length; i++) {
            tabla2 += '<tr>';
            tabla2 += '  <td>' + results[i].idnombre + '</td>';
             tabla2 += '  <td>' + results[i].nombre + '</td>';
             tabla2 += '  <td>' + results[i].ap_pat + '</td>';
             tabla2 += '  <td>' + results[i].ap_mat + '</td>';
             tabla2 += '  <td>' + results[i].edad + '</td>';
             tabla2 += '</tr>';
         }
         
         document.getElementById('datitostablita').innerHTML = tableBody;
     });   
     
}
