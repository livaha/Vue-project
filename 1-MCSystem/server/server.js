const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors')
const bodyParser = require('koa-bodyparser');
const Data = require('./data.js');

let app = new Koa();
let router = new Router();

//app.listen(8899)
app.listen(8899,function(){
	console.log('running...\nPelease use 127.0.0.1:8899 to access..')
})

app
  .use(cors())
app
  .use(router.routes())

app.use(bodyParser());

/*app.use(ctx => {
  // the parsed body will store in ctx.request.body
  // if nothing was parsed, body will be an empty object {}

  //这里如果执行ctx.body就会直接发送到页面了，下面的覆盖掉，并不能看到数据
  //ctx.body = ctx.request.body;
  console.log('post数据：')
  console.log(ctx.request.body)
});*/


  router.get('/lunbotu', ctx => {
    ctx.response.body={
      status:0,
      message:Data.LunbotuMessage
    };
  })

  router.get('/newslist', ctx => {
    ctx.response.body={
      status:0,
      message:Data.NewsMessage
    };
  })


  router.get('/newslist/:id', ctx => {
    //console.log(ctx.params);

    ctx.response.body={
      status:0,
      message:Data.NewsMessage[ctx.params.id]
    };

    //console.log(Data.NewsMessage[3]);
  })












  //node server.js