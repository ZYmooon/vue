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