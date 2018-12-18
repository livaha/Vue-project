<template>
	
<div id="app">
  <div class="todo-container">
	<div class="todo-wrap">
		<todo-header :addTodo="addTodo"></todo-header>
		<todo-list :todos="todos" :deleteTodo="deleteTodo"></todo-list>
		<todo-footer :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAll="selectAll"></todo-footer>
	</div>
  </div>
</div>
</template>
<script>
	import TodoHeader from './components/TodoHeader.vue'
	import TodoList from './components/TodoList.vue'
	import TodoFooter from './components/TodoFooter.vue'

	export default{
		data(){
		  return {
				/*todos:[{title:'inputTodo',complete:false},{title:'inputTodo',complete:false}]*/
				//从localStorage读取todos ,里面是一个文本字符串，所以要转为JSON格式 
				todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]')
				//深度监视  任何改变都监视  在watch里面
		  }
		},
		watch:{
			todos:{
				deep:true,//深度监视
				handler:function(value){//value 为todos的最新值
					//将todos最新的值 保存到localStorage中
					//存为json数据格式
					window.localStorage.setItem('todos_key',JSON.stringify(value))
				}
			}
		},
		components:{
			TodoHeader,
			TodoFooter,
			TodoList
		},
		methods:{
			addTodo(todo){
				this.todos.unshift(todo)
			},
			deleteTodo(index){
				this.todos.splice(index,1)
			},
			deleteCompleteTodos(){
				this.todos=this.todos.filter(todo=>!todo.complete)
			},
			selectAll(isSelectAll){
				this.todos.forEach(todo=>{
					todo.complete = isSelectAll
				})
			}
		}
	}

</script>
<style>
	
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>