import Router from 'koa-router';

const router  = new Router();

router.get('/hello', async (ctx) => {
    ctx.body = 'Hello Universe!'
});

export default router;
