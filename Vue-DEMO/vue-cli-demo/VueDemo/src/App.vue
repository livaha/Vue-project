<template>
	
<div id="app">
  <div class="todo-container">
	<div class="todo-wrap">
		<todo-header></todo-header>
		<todo-list></todo-list>
		<todo-footer></todo-footer>
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
			
		  }
		},
		components:{
			TodoHeader,
			TodoFooter,
			TodoList
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