import {Sequelize} from "sequelize"

const conn = new Sequelize('agentLog', 'root', 'Sen@iDev77!.', {
    host: 'localhost',
    dialect: 'mysql'
})

export default conn