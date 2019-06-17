<template>
<section>
  <div class="bg"></div>
  <section class="main" >
    <header>
		  <p class="hq">M</p>
		  <p class="name"><span>{{acco.name}}</span>,你好</p>
	</header>
	<div class="assets"  >
	    <div class="a-content" >
		 	<div class="total">
			 	<div class="t-content">
				  	<h1 class="normal money">{{acco.total}}</h1>
				  	<p class="title">我的总资产</p>
			  	</div>
		 	</div>
			<ul>
				<li>
					<h3 class="money">{{acco.available}}</h3>
					<p class="title" >可资助</p>
				</li>
				<li>
					<h3 class="money">{{acco.subsidizing}}</h3>
					<p class="title" >资助中</p>
				</li>
				<li>
			 	 	<h3 class="money">{{acco.subsidized}}</h3>
			  		<p class="title" >已资助</p>
				</li>
			 </ul>
		</div>
		<div class="shadow"></div>
  	</div>
	<div class="record">
	  	<div class="title">
		  	<h2>资助记录</h2>
			  <a href="record.html" class="more">更多 <img src="../../img/more@2x.png" width="18px" height="18px"></a>
		</div>
			 <ul>
		  		<li class="left" v-for="item in redeemlist">
			  		<div class="infor">
				  		<h2>{{item.categoryName}}</h2>
				  		<p class="date">{{item.occurDate}}</p>
				  		<p class="money" >{{item.amount}}</p>
			  		</div>
			  		<img v-bind:src="item.status" class="status" width="60px" height="48px">
		  		</li>
	  		</ul>
	 </div>
  </section>
</section>
</template>

<style lang="css" scoped>
@import '../../style/redeem';
</style>

<script>
export default {
  name: "component_name",
  data () {
    return {
		acco:"",
		redeemlist:""
    };
  },
  components: {

  },
  comouted: {
  },
  mounted: function(){
      this.$http.get('/api/wxtrust-daf/accoInfo/111111').then(response => {
		 console.log(response);
		 this.acco=response.body.result.accoInfo;
      }, response => {
        console.log(response);
	  });
	  
	  this.$http.get('/api/wxtrust-daf/records?accoId=111111').then(response => {
		 console.log(response);
		 this.redeemlist=response.body.result.recordList;
		 for(var i=0;i<this.redeemlist.length;i++){
			 if(this.redeemlist[i].status =="1"){
				 this.redeemlist[i].status ="/static/finish@2x.png";
			 }
			 else
			 {
                this.redeemlist[i].status ="/static/review@2x.png";
			 }
			
		 }
      }, response => {
        console.log(response);
      });
  },
  mehtods: {

  },
}
</script>

