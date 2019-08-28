import {BIGINT, STRING} from "sequelize";

export const USER = {
    name: {
        type: STRING,
        allowNull: false,
        primaryKey: true
    },
    age: {
        type: BIGINT,
        allowNull: false
    },
    sex: {
        type: BIGINT,
        allowNull: false
    },
    des: {
        type: STRING,
        allowNull: true
    }
};
