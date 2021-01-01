let mysql = require('mysql');

const dotenv = require('dotenv');
dotenv.config();

const connMysql = () => {
    //console.log('connection ok')
    let data_db = [{
        host: `${process.env.HOST}`,
        port: `${process.env.PORTDB}`,
        user: `${process.env.USERDB}`,
        password: `${process.env.PASSWORD}`,
        database: `${process.env.DATABASE}`
    },{
        host: `${process.env.LOCAL_HOST}`,
        user: `${process.env.LOCAL_USER}`,
        password: `${process.env.LOCAL_PASSWORD}`,
        database: `${process.env.LOCAL_DATABASE}`
    }];
    //console.log(data_db[0]);
    return mysql.createConnection(data_db[0]);    
};

module.exports = () => { return connMysql };