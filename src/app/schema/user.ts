import {GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList} from "graphql";
import {Conn} from "../db/db";

const user = new GraphQLObjectType({
    name: 'user',
    description: 'this is user',
    fields: () => {
        return {
            name: {
                type: GraphQLString,
                resolve (user) {
                    return user.name
                }
            },
            age: {
                type: GraphQLInt,
                resolve (user) {
                    return user.age
                }
            },
            sex: {
                type: GraphQLInt,
                resolve (user) {
                    return user.sex
                }
            },
            des: {
                type: GraphQLString,
                resolve (user) {
                    return user.des
                }
            }
        }
    }
});
export const userSchema =  new GraphQLSchema({

    query: new GraphQLObjectType({
        name: 'Queries',
        fields: () => {
            return {
                users: {
                    type: new GraphQLList(user),
                    args: {
                        name: {
                            type: GraphQLString
                        },
                        age: {
                            type: GraphQLInt
                        },
                        sex: {
                            type: GraphQLInt
                        }
                    },
                    resolve(root, args){
                        console.log('1111', Conn.models.test);
                        const data = Conn.models.test.findAll();
                        return data;
                    }
                }
            }
        }
    })
});
