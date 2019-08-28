import Koa from 'koa';
import router from "./router";
import KoaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';
import mount = require("koa-mount");
import graphqlHTTP from "koa-graphql";
import {userSchema} from "./app/schema/user";

const app = new Koa();

app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

app.use(async (ctx, next) => {
    // Log the request to the console
    console.log("Url: ", ctx.url);

    // Pass the request to the next middleware function
    await next();
});

app.use(mount('/graphiql', graphqlHTTP({
    schema: userSchema,
    graphiql: true
})));
app.use(router.routes())
    .use(router.allowedMethods);

app.listen(3000);
console.log('server running on port 3000');
