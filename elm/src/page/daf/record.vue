<template>
<section>
  <div class="bg"></div>
  <section class="main">
    <header>
		  <router-link to="redeem"><img src="../../../static/back@2x.png" alt="" width="44px" height="44px;"></router-link>
		  <p>资助记录</p>
	</header>
    <div class="tab">
        <ul>
            <li :class="this.status=='0'?'chosen':''"><span @click="handleClick('0')">审核中</span></li>
            <li :class="this.status=='1'?'chosen':''"><span @click="handleClick('1')">已完成</span></li>
        </ul>
    </div>
	<div class="record"  v-for="(item,index) in redeemlist" :key="item+index">
        <template v-if="item.status == status">
          	<ul :class="item.status=='1'?'finish':'review'">
		  	    <li>
				<div class="infor">
				  	<h2>{{item.categoryName}}</h2>
				  	<p class="date">{{item.occurDate}}</p>
				  	<p class="money" > {{$rdNum(item.amount)}}</p>
			  	</div>
                <img :src="item.status=='1'?'../../../static/finish@2x.png':'../../../static/review@2x.png'" class="status" alt="" width="60px" height="48px;" >
			 </li>
	  	</ul>
        </template>
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
        redeemlist:"",
        status: '0'
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
    handleClick(status){
        this.status = status;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created: function() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted: function() {
     this.$https.get('/wxtrust-daf/records?accoId='+sessionStorage.getItem('wxaccId')).then(response => {
		 console.log(response);
		 this.redeemlist=response.data.result.recordList;
      }, response => {
        console.log(response);
      });

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
@import '../../style/record';
</style>