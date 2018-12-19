## 目录结构 

### DEMO

基本使用

模板语法

计算属性

vue监视

计算属性set  ,get

强制绑定class和style

条件渲染

列表渲染

列表的搜索和排序

事件处理

表单数据的自动收集

生命周期

动画

过滤器

指令 ，自定义指令

插件 



### vue-cli-demo

####  VueDemo

使用vue-cli创建项目

vue打包发布项目

eslint编码规范检查



####  VueDemo/src_todos1

todos

数据交互  增，删，删选择的，全选

localstorge存储数据





组件间通信---  1- props,  2- 自定义事件，3-消息订阅与发布，4-slot



 2- 自定义事件 https://blog.csdn.net/wangchaohpu/article/details/84333362

用自定义事件触发就不需要用props传值了，

a. 用@functionxxx="functionxxx"

~~~javascript
//------app.vue
<TodoHeader @addTodo="addTodo"/>
//自定义函数addTodo
//$on监听事件
//$emit触发事件
  ...
 mounted () {
      // 绑定自定义事件(addTodo)监听
       this.$on('addTodo',  this.addTodo) 绑定监听的目标不对
 }
methods:{
  addTodo(todo){
    this.todos.unshift(todo)
  },
}

//----------TodoHeader.vue
 <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="inputTodo" @keyup.enter="add"/>
  </div>
...

methods: {
  add () {
    // 得到输入的数据
    const inputTodo = this.inputTodo.trim()
    // 检查合法性
    if(!inputTodo) {
      alert('必须输入')
      return
    }
    // 封装一个todo对象
    const todo = {title:inputTodo,complete:false}
    // 添加到todos中显示
    /*触发自定义事件: addTodo*/
    this.$emit('addTodo', todo)
    // 清除输入
    this.inputTodo = ''
  }
}
~~~

b. 用$refs，ref属性的绑定监听类型







3-消息订阅与发布







ajax请求： vue-resource(vue1.x版本的用)，  axios(vue2.x版本的用)

mint-ui

vue-router  基本路由， 嵌套路由，缓存路由组件， 

























