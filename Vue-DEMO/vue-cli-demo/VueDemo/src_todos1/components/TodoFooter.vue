<template>

      <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="checkAll"/>
        </label>
        <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" v-show="completeSize" @click="deleteAllCompleted">清除已完成任务</button>
      </div>
</template>
<script>
  export default{
  	props:{
  		todos:Array,
  		deleteCompleteTodos:Function,
  		selectAll:Function
  	},
    data(){
      return {
        
      }
    },
    computed:{
    	completeSize(){
    		return this.todos.reduce((preTotal,todo)=>preTotal+(todo.complete?1:0),0)
    	},
    	checkAll:{
    		//既要获取checkAll的值，又想要监听值的变化
    		//get：如果全选就返回true,否则为false
    		get(){
    			return this.completeSize===this.todos.length && this.completeSize>0
    		},
    		set(value){//value就是checkAll的值
    			this.selectAll(value)
    		}
    	}
    },
    methods:{
    	deleteAllCompleted(){
    		if(window.confirm('确定清除已完成的吗?')){
    			this.deleteCompleteTodos()
    		}
    	}
    }
  }
	
</script>
<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>