<template>
  <div>
    <mt-header :title="$store.state.nowcity.name" class='fs1-2' fixed>
        <mt-button slot="left"><mt-button icon="back"></mt-button></mt-button>
        <mt-button slot="right" class='fs0-8'>切换城市</mt-button>
    </mt-header>

    <div class="mgtop50 padlr10 bgfff padbot10">
      <input class="cityinput" placeholder="输入商务楼，学校，地址"></input>
      <div class="submit bgcol ih40">提交</div>
    </div>

    <div class="main">

      <div class="his after">
        <div class='maintop fs0-8 padlr10'>搜索历史</div>
        <div class="mainbody bgfff ">
          <div class="pad10 after">
              <div class="ih30">南开区公园</div>
              <div class="ih30 fs0-8 col9f">天津市南开区金马路112号</div>
          </div>
          <div class="pad10 after">
              <div class="ih30">南开区公园</div>
              <div class="ih30 fs0-8 col9f">天津市南开区金马路112号</div>
          </div>
          <div class="clearall ih30 pad10 col9f">
              清空所有
          </div>
        </div>
      </div>

      <div class='search bgfff'> 
          <div class="pad10 after">
              <div class="ih30">南开区公园</div>
              <div class="ih30 fs0-8 col9f">天津市南开区金马路112号</div>
          </div>
          <div class="pad10 after">
              <div class="ih30">南开区公园</div>
              <div class="ih30 fs0-8 col9f">天津市南开区金马路112号</div>
          </div>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      
    }
  },
  component:{
  //注册组件

  },
  mounted:function(){
  //生命周期

  },
  computed:{
  //计算属性
      
  },
  methods:{
  //函数
    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cityinput{
  width:100%;
  height:40px;
  margin:50px 0px 10px 0px;
  outline:0px;
  padding:0px 5px;
  box-sizing:border-box;
}
.submit{
  text-align:center;
  color:white;
  border-radius:3px;
}
.fs0-8{
  font-size:0.8rem !important;
}

.main{
  border-top:2px solid #E4E4E4;
}
.maintop{ 
  border-bottom:2px solid #E4E4E4;
}
.clearall{
  text-align:center;
}
</style>