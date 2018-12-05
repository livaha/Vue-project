<template>
    <div class="tmpl">
        <nav-bar title="新闻详情"></nav-bar>
        <div class="news-title">
            <p>{{newsList.title}}</p>
            <div>
                <span>{{newsList.click}}次点击</span>
                <span>分类:民生经济</span>
                <span>添加时间:{{newsList.add_time | convertDate}}</span>
            </div>
        </div>
        <div class="news-content">{{newsList.zhaiyao}}</div>
    </div>
</template>
<script>

    export default{
        data(){
            return{
                newsList:[],//轮播图列表
            }
        },
        created(){
            //获取路由参数
            let id = this.$route.query.id
            //发起请求
            this.$ajax.get('http://127.0.0.1:8899/newslist/'+id)
            .then(res=>{
                console.log(res.data.message);
                //3:响应回来渲染页面
                this.newsList=res.data.message;
            })
            .catch(err=>{
                console.log(err);
            })
        }

    }

</script>
<style scoped>
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 30px;
}

.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}


/*主体文章的左右距离*/

.news-content {
    padding: 10 5;
}
</style>
