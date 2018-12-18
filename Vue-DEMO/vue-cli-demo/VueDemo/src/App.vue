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
				todos:[{title:'inputTodo',complete:false},{title:'inputTodo',complete:false}]
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