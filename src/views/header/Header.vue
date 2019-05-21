<template>
	<div class="header">
		<div class="bg-filter"></div>
		<header-nav></header-nav>
		<div class="header-content">
		<search-nav class="search-nav"></search-nav>
	    <a href="javascript:;" class="icon"></a>
		</div>
	</div>
</template>

<script>
	import HeaderNav from "../../components/HeadNav"
	import searchNav from "../../components/SearchNav"
	
	export default{
		name:"appheader",
		data(){
			return{
				changebg:false
			}
		},
		components:{
			HeaderNav,
			searchNav
		},
		mounted(){
//			setInterval(()=>{
//				this.changebg = !this.changebg
//			},10000)

		}
	}
</script>

<style lang="less" scoped>

	
	
	
.header{
		position: relative;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
        height: 200px;
		width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(../../assets/images/nav-bg.png);
        -webkit-animation:changeBg 30s infinite;
        -moz-animation: changeBg 30s infinite;
        -o-animation: changeBg 30s infinite;
        -ms-animation: changeBg 30s infinite;
        animation:changeBg 30s infinite;
        .icon{
	        	background: url(../../assets/images/head-logo1.png);
	        	position: absolute;
			    width: 220px;
			    height: 105px;
			    left: 45px;
			    top: 80px;
			    z-index: 10;
		        -webkit-animation:changeLogo 30s infinite;
		        -moz-animation: changeLogo 30s infinite;
		        -o-animation: changeLogo 30s infinite;
		        -ms-animation: changeLogo 30s infinite;
		        animation:changeLogo 30s infinite;
	        }
}
@keyframes changeLogo {
  0% {
    background-image: url(../../assets/images/head-logo1.png);
  }
   40% {
    background-image: url(../../assets/images/head-logo1.png);
  }
  50% {
    background-image: url(../../assets/images/head-logo.png);
  }
  90% {
    background-image: url(../../assets/images/head-logo.png);
  } 
  100%{
  	background-image: url(../../assets/images/head-logo1.png);
  }
}
@keyframes changeBg {
  0% {
    background-image: url(../../assets/images/nav-bg.png);
  }
   40% {
    background-image: url(../../assets/images/nav-bg.png);
  }
  50% {
    background-image: url(../../assets/images/header_bg.jpg);
  }
  90% {
    background-image: url(../../assets/images/header_bg.jpg);
  } 
  100%{
  	background-image: url(../../assets/images/nav-bg.png);
  }
}


.bg-filter{
		height: 42px;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		background: url(../../assets/images/nav-bg.png) no-repeat ;
		filter: blur(5px);
		z-index: 1 ;
	}
	

</style>