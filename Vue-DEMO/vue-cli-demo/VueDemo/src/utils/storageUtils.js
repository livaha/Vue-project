/*
向local中存储数据的工具模块
1. 向外暴露一个功能（函数）
2. 向外暴露多个功能（一个对象）
*/
const TODOS_KEY = 'todos_key'
export default{
	readTodos(){
		return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
	},
	saveTodos(todos){
		localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
	}
}

/*
export.function.xxx(){}

export.function.yyy(){}
*/
