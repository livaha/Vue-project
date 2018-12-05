<template>
    <div class="tmpl">
    		<nav-bar title="新闻列表"></nav-bar>
			<ul class="mui-table-view">
				<li v-for="news in newsList" :key="news.id" class="mui-table-view-cell mui-media">
					<!--跳转到新闻详情-->
					<router-link :to="{name:'news_detail',query:{id:news.id} }">
						<img class="mui-media-object mui-pull-left" :src="news.img_url">
						<div class="mui-media-body">
							<span v-text="news.zhaiyao"></span>
	                        <div class="news-desc">
	                            <p>点击数:{{news.click}}</p>
	                            <!--convertDate为过滤器名-->
	                            <p>发表时间:{{news.add_time | convertDate}}</p>
	                        </div>
						</div>
					</router-link>
				</li>
			</ul>
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
			//发起请求
			this.$ajax.get('http://127.0.0.1:8899/newslist')
			.then(res=>{
				//console.log(res.data.message);
				this.newsList=res.data.message;
	            console.log(this.newsList);
			})
	        .catch(err=>{
	            console.log(err);
	        })
		}

	}
</script>
<style scoped>

.mui-media-body p {
    color: #0bb0f5;
}

.news-desc p:nth-child(1) {
    float: left;
}

.news-desc p:nth-child(2) {
    float: right;
}
</style>