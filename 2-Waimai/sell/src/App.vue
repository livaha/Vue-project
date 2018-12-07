<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/star">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
      Iam content
    </div>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  const ERR_OK = 0;

  export default{
    data() {
      return {
        seller: {},
        goods: {}
      };
    },
    components: {
      'v-header': header
    },
    created() {
      // GET /someUrl
      this.$http.get('/api/goods').then(response => {
        // get body data
        response = response.body;
        if (response.errno === ERR_OK) {
          this.goods = response.data;
          console.log(this.goods);
        }
      }, response => {
        // error callback
      });

      this.$http.get('/api/seller').then(response => {
        // get body data
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = response.data;
          console.log(this.seller);
        }
      }, response => {
        // error callback
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-bottom: 1px solid rgba(7, 17,27,0.1)
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)

</style>
