<template>
  <div>
    
        <mt-header fixed>
            <span slot="left">elm</span>
            <mt-button @click="gologin" slot="right">登录|注册</mt-button>
        </mt-header>
    

    <div class="padtop40">
      <div class="after ih50 padlr10 box bgfff">
        <span  class="">当前选择城市</span>
        <span  class="right fs0-8 col9f">定位不准时，请在城市列表选择</span>
      </div>
      <mt-cell  :title="$store.state.nowcity.name" class="col after" to="city"  is-link  value=""></mt-cell>

      <div class="mgtop10 bgfff">
        <mt-cell class="after" title="热门城市"></mt-cell>
        <div class="itembox ovhid col fs0-8">
          <div @click='gocity({name:item.name,id:item.id})' v-for="item in hotcity">{{item.name}}</div>
        </div>        
      </div>         

      <div v-for="(items,index) in getlist" class="mgtop10 bgfff">
        <mt-cell class="after" :title="index"></mt-cell>
        <div class="itembox ovhid">
          <div @click='gocity({name:item.name,id:item.id})' class="nowarp col9f fs0-8" v-for="item in items">{{item.name}}</div>
        </div>        
      </div>  

    </div>
    
  </div>
</template>

<script>

export default {
  data () {
    return {
      citylist:"",
      hotcity:""
    }
  },
  component:{
  //注册组件

  },
  mounted:function(){
  //生命周期
      //城市列表
      this.$http.get('http://cangdu.org:8001/v1/cities?type=group').then(response => {
        console.log(response);
        this.citylist=response.body;
      }, response => {
        console.log(response);
        
      });
      //热门城市
      this.$http.get('http://cangdu.org:8001/v1/cities?type=hot').then(response => {
        console.log(response);
        this.hotcity=response.body;
      }, response => {
        console.log(response);
        
      });
 //定位城市
      this.$http.get('http://cangdu.org:8001/v1/cities?type=guess').then(response => {
        console.log(response);
        this.$store.state.nowcity={"name":response.body.name,"id":response.body.id};
      }, response => {
        console.log(response);
        
      });

  },
  computed:{
  //计算属性
      getlist:function(){
        var mycitylist={};
          for(var i=65;i<=90;i++){
            var num= String.fromCharCode(i);
            mycitylist[num]=this.citylist[num];
          }
          return mycitylist
      }
  },
  methods:{
  //函数
    gologin:function(){
      console.log(123);
      this.$router.push('login');
    },
    gocity:function(e){
      this.$router.push('city');
      this.$store.state.nowcity = e;
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itembox>div{
  width:25%;
  float:left;
  text-align:center;
  height:40px;
  line-height:40px;
  box-sizing: border-box;
  border-right:1px solid #e4e4e4;
  border-bottom:1px solid #e4e4e4;
}
.itembox>div:nth-child(4n){
  border-right:0px;
}
</style>
