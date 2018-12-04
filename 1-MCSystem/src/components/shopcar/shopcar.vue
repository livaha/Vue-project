<template>
    <div>
    	shopcar
    	<!--轮播图 -mint-ui  -->
		<mt-swipe>
		  <mt-swipe-item v-for="(img,index) in imgs" :key="index"><a :href="img.url"></a><img :src="img.img"></mt-swipe-item>

		</mt-swipe>

    </div>
</template>
<script>
	export default{
		data(){
			return{
				imgs:[],//轮播图列表
			}
		},
		created(){
			//发起请求
			this.$ajax.get('http://127.0.0.1:8899/lunbotu')
			.then(res=>{
				console.log(res.data.message);
				this.imgs=res.data.message;
			})
		}

	}
</script>
<style scoped>
/*轮播图样式*/
.mint-swipe{
    max-height:300px; 
}
.mint-swipe img {
    height: 100%;
}

</style>