<template>
  <div class="bg">
        <header class="header">
	      	<P class="hq">M</P>
      		<p class="name"><span>Mingooooo</span>,你好</p>
        </header>
	<div class="assets" >
		<div class="a-content" >
			<div class="total">
				<div class="t-content">
					<h1 class="normal money">18000000.00</h1>
					<p class="title">我的总资产</p>
				</div>
			</div>
			<ul>
				<li>
					<h3 class="money">12000000.00</h3>
					<p class="title" >可资助</p>
				</li>
				<li>
					<h3 class="money">12000000.00</h3>
					<p class="title" >资助中</p>
				</li>
				<li>
					<h3 class="money">12000000.00</h3>
					<p class="title" >已资助</p>
				</li>
			</ul>
		</div>
		<div class="shadow"></div>
	</div>
  </div>
</template>

<script>
export default {
  name: "component_name",
  data () {
    return {
    };
  },
  components: {

  },
  comouted: {

  },
  mounted: function(){

  },
  mehtods: {

  },
}
</script>

<style lang="css" scoped>
.bg{
  background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(243, 244, 253,1) 100%);
  position: fixed;
  z-index: 1; 
  top:0; 
  left: 0; 
  right: 0; 
  bottom: 0;
}
.header{
  width:100%;
  float:left;
  text-align:center;
  height:64px;
  color: red;
  background-color:#000000;/* IE6和部分IE7内核的浏览器(如QQ浏览器)下颜色被覆盖 */
  background-color:rgba(0,0,0,0); /* IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂，但解析为透明 */
  
}
.hq { 
  width: 44px; 
  height: 44px;
  color: white;
  margin-left: 3px;
  background-color: #00132c;
  border-radius: 22px; 
  text-align: center;
} 
.name { 
  width: 44px; 
  height: 44px;
  color: black;
  position: absolute; 
  top: 0; 
  margin-left: 59px;  
}

div.assets > div.a-content h1,div.assets > div.a-content h3, div.assets > div.a-content p.title , div.assets > div.a-content > div.name > h3  { color: #fff; }
div.assets > div.a-content >div.total:after { content: ""; position: absolute; left: 15px; right: 15px; height:1px; background-color: #fff; opacity: 0.2; margin-top: 10px;}
div.assets > div.a-content > ul { margin-top: 20px;}
div.assets > div.a-content > ul > li { display: inline-block; width: 33.33333%; }
div.assets > div.a-content p.title { font-size: 12px; opacity: 0.8; }
div.assets > div.a-content > div.name { margin-bottom: 10px; }
div.assets > div.a-content > div.name > span.line { border: 1px solid #FFF; }
</style>