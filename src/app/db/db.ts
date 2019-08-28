import { Sequelize } from "sequelize";
import { USER } from "./userModel";

export const Conn = new Sequelize('cyp', 'root', '1qaz@WSX', {
    host: 'localhost',
    dialect: 'mysql'
});

const user = Conn.define('test', USER ,{
    tableName: 'test',
    timestamps: false
});
