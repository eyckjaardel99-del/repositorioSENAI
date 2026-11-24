const mysql = require('mysql2/promise');

require('dontenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    passwoerd: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitforConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.esports = pool;