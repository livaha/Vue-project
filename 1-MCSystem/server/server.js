const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors')
const bodyParser = require('koa-bodyparser');

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
    console.log(ctx.params);
    console.log(ctx.request.body)
    ctx.response.body={
      status:0,
      message:[{
        url:"https://tieba.baidu.com/f?kw=%E4%B8%80%E6%B2%AB%E9%98%B3%E5%85%89__%E7%9A%84%E8%AE%B0%E5%BF%86&fr=home",
        img:"https://i4.3conline.com/images/piclib/201101/27/batch/1/82869/1296117944310c6ojarzzr1.jpg"
      },{
        url:"https://tieba.baidu.com/f?kw=%E4%B8%80%E6%B2%AB%E9%98%B3%E5%85%89__%E7%9A%84%E8%AE%B0%E5%BF%86&fr=home",
        img:"https://img01.sogoucdn.com/app/a/100520093/12400ee0679b6e1e-d3e639ff657519ea-a9d4d43a8f00e80cfae6b8f74af91564.jpg"        
      },{
        url:"https://tieba.baidu.com/f?kw=%E4%B8%80%E6%B2%AB%E9%98%B3%E5%85%89__%E7%9A%84%E8%AE%B0%E5%BF%86&fr=home",
        img:"https://img.zcool.cn/community/014565554b3814000001bf7232251d.jpg@1280w_1l_2o_100sh.png"        
      }]
    };
  })






  //node server.js
  //http://localhost:8899/lunbotu