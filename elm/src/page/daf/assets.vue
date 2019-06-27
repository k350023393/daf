<template>
<section>
    <div class="bg" ></div>
    <section class="main">
        <header>
		    <router-link to="redeem"><img src="../../img/back@2x.png" alt="" width="44px" height="44px;"></router-link>
		    <p> 全部资产</p>
	    </header>
	<div class="assets"  >
	    <div class="a-content" >
		 	<div class="total">
			 	<div class="t-content">
				  	<h1 class="normal money">{{$rdNum(acco.total)}}</h1>
				  	<p class="title">我的总资产</p>
			  	</div>
		 	</div>
			<ul>
				<li>
					<h3 class="money">{{$rdNum(acco.available)}}</h3>
					<p class="title" >可资助</p>
				</li>
				<li>
					<h3 class="money">{{$rdNum(acco.subsidizing)}}</h3>
					<p class="title" >资助中</p>
				</li>
				<li>
			 	 	<h3 class="money">{{$rdNum(acco.subsidized)}}</h3>
			  		<p class="title" >已资助</p>
				</li>
			 </ul>
		</div>
		<div class="shadow"></div>
  	</div>
        <div class="t-assets">
            <div><h2>全部资产</h2></div>
            <ul>
			    <li v-for="(item,index) in assets" :key="item+index" @click='goassetsdetail({fundcode:item.fundId,fundname:item.fundName})'>
				    <h2>{{item.fundName}}</h2>
				    <span class="status">{{item.fundTypeName}}</span>
				    <ul>
					    <li>
						    <h4 >{{$rdNum(item.total)}}</h4>
						    <p>总资产</p>
					    </li>
					    <li>
						    <h4>{{$rdNum(item.available)}}</h4>
						    <p>可资助</p>
					    </li>
					    <li>
						    <h4>{{$rdNum(item.subsidizing)}}</h4>
						    <p>资助中</p>
					    </li>
					    <li>
						    <h4>{{$rdNum(item.subsidized)}}</h4>
						    <p>已资助</p>
					    </li>
				    </ul>
			    </li>
            </ul>
          </div>
    </section>
</section>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  name: "component_name",
  //import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    return {
        acco:"",
        assets:""
    };
  },
  //监听属性 类似于data概念
  computed: {

  },
  //监控data中的数据变化
  watch: {

  },
  //方法集合
  methods: {
	goassetsdetail:function(e){
	  this.$router.push('assetsdetail');
	  this.$store.state.nowfund = e;
	}
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created: function() {

  },
  mounted(){
       this.$https.get('/wxtrust-daf/accoInfo?accoId='+this.$store.state.acc.id+'&fundationId='+this.$store.state.fundationId.id).then(response => {
		 console.log(response);
		 this.acco=response.data.result.accoInfo;
      }, response => {
        console.log(response);
      });
      
       this.$https.get('/wxtrust-daf/assets?accoId='+this.$store.state.wxacc.id).then(response => {
		 console.log(response);
		 this.assets=response.data.result.assetList;
      }, response => {
        console.log(response);
	  });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mehtods: function() {

  },
  beforeCreate: function() {}, //生命周期 - 创建之前
  beforeMount: function() {}, //生命周期 - 挂载之前
  beforeUpdate: function() {}, //生命周期 - 更新之前
  updated: function() {}, //生命周期 - 更新之后
  beforeDestroy: function() {}, //生命周期 - 销毁之前
  destroyed: function() {}, //生命周期 - 销毁完成
  activated: function() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang="css" scoped>
@import '../../style/assets';
</style>