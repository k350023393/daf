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
	<div class="record">
	  	<div class="title">
		  	<h2>资助记录</h2>
			  <router-link to="record" class="more">更多 <img src="../../img/more@2x.png" width="18px" height="18px"></router-link>
		</div>
			 <ul>
		  		<li v-for="(item,index) in redeemlist" :key="item+index">
			  		<div class="infor">
				  		<h2>{{item.categoryName}}</h2>
				  		<p class="date">{{item.occurDate}}</p>
				  		<p class="money" > {{$rdNum(item.amount)}}</p>
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
  mounted(){
      this.geturlparam();
      this.$http.get('/wxtrust-daf/accoInfo?accoId='+this.$store.state.acc.id).then(response => {
		 console.log(response);
		 this.acco=response.body.result.accoInfo;
		 this.$store.state.wxacc.id=this.acco.accoId;
      }, response => {
        console.log(response);
	  });
	  
	  this.$http.get('/wxtrust-daf/records?accoId='+this.$store.state.acc.id).then(response => {
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
  methods: {
   geturlparam(){
	 let returnArr ={};
     let tempStr = window.location.href;
     let tempArr = tempStr.split('?')[1] ? tempStr.split('?')[1].split('&') : [];
     tempArr.forEach(element => {
     returnArr[element.split('=')[0]] = element.split('=')[1]
	 });
	 this.$store.state.acc.id=returnArr["accId"];
	 this.$store.state.acc.fundationId=returnArr["fundationId"];
	 console.log(returnArr);
	},
	gorecord:function(e){
      this.$router.push('record');
    }
  }
}
</script>

