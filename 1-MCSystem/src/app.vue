<template>
    <div>
    	<!--头部-->
		<mt-header title="信息管理系统"></mt-header>


        <router-view></router-view>




    	<!--尾部-->
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon icon-shouye"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon icon-huiyuan"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon icon-gouwuche"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon icon-chazhao"></span>
				<span class="mui-tab-label">查找</span>
			</a>
		</nav>

    </div>
</template>
<script>
</script>
<style>
    
</style>