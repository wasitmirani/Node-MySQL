let http = require('http')
let mysql = require('mysql')

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crm_db'
});
http.createServer((req, res) => {


    check_db();

}).listen(3000);

function check_db() {
    conn.connect((err) => {
        if (err) throw err;
        console.log("Connected");
    })
}