<template>
  <div>
    
        <mt-header fixed>
            <span slot="left">elm</span>
            <mt-button @click="gologin" slot="right">登录|注册</mt-button>
        </mt-header>
    

    <div class="padtop40">
      <div class="after ih50 padlr10 box bgfff">
        
        <mt-field type="text" placeholder="输入用户编号" v-model="svalue" ></mt-field>
        
      </div>
      <mt-button @click.native="handleClick">按钮</mt-button> 

    </div>
    
  </div>
</template>

<script>

export default {
  data () {
    return {
      citylist:"",
      hotcity:"",
      svalue:""
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
      //this.$router.push('city');
     // this.$store.state.nowcity = e;
     //1111111111111111111
    window.open("http://localhost:1999/#/redeem?accId="+this.svalue+"&fundationId=10001", '_system');
    },
    handleClick:function(){
      window.open("http://localhost:1999/#/redeem?accId="+this.svalue+"&fundationId=10001", '_system');
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
