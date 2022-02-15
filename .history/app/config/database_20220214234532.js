import Sequelize from "sequelize";
import config from './config.json';


const {database, host, password, dialect, username} = config.development;

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect,
});


export default sequelize;