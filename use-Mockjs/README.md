##### 这次主要学习关于 RAP和Mock.js的用法

#### 首先需要把相关的模块下载

``npm install``

通过浏览器打开html，你会看到这样的页面，把mock的数据渲染到页面上了样子

![image.png](http://upload-images.jianshu.io/upload_images/8168023-bd04f0d7990ff31c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



下面来看看是怎么mock数据的，我们进入[RAP](http://rapapi.org/org/index.do)，自己注册账号并登陆，	在“我的主页”下找到“我的项目”，新添加一个自己项目，

![image.png](http://upload-images.jianshu.io/upload_images/8168023-9b9a59962ba2eedc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



这个是我写好的一个mock数据，get请求，有请求的url

list|4,意思是生成4条数据，每条数据都有图片，名称和价格，图片大小为200x100，价格是1-100之间的带有2个小数点随机数，备注的具体用法请参考[Mock.js](http://mockjs.com/examples.html)

![image.png](http://upload-images.jianshu.io/upload_images/8168023-82dccfabcb384324.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



点击首页旁边的箭头，进入数据显示,点击请求，就会出现数据，看到红色框框里的url，在mockjs后面加上data

完整的url是http://rapapi.org/mockjsdata/31645/index/hotLists?，不然页面只会显示一条数据

![image.png](http://upload-images.jianshu.io/upload_images/8168023-ed9605be3155533e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



参考我的html和index.js，就会在浏览器出现开头的页面，说明数据mock好了，可以使用



```html
<body>
  <ul id="app">
    <li v-for="list in lists">
      <img :src="list.img" alt="" width="200" height="100">
      <p>{{list.name}}</p>
      <p>{{list.price}}</p>
	</li>
  </ul>
  <script src="node_modules/axios/dist/axios.js"></script>
  <script src="node_modules/vue/dist/vue.js"></script>
  <script src="index.js"></script>
</body>

```

```js
let url = ' http://rapapi.org/mockjsdata/31645/index/hotLists?'

new Vue({
  el:'#app',
  data:{
    lists: null
  },
  created(){
    axios.post(url,{
      pageNum:1,
      pageSize:10
    }).then(res=>{
      this.lists = res.data.lists
    })
  }
})
```

