import Sequelize from "sequelize";
import config from './config.json';


const {database, host, password, dialect, username} = config.development;

const db = new Sequelize(database, username, password, {
    host,
    dialect,
});


export default db;