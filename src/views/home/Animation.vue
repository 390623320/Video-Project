<template>
	<div class="animation">
	  	<swipe class="my-swipe">
		  <swipe-item class="slide1" v-for="(item,index) in bannerData[23]" :key="index">
		  	<img class="img-auto swiperImg" :title="item.name" v-lazy="item.pic" alt="" />
		    <p class="swiperTitle">{{item.name}}</p>
		  </swipe-item>
		</swipe>

	</div>
</template>

<script>
	import { mapState,mapActions } from 'vuex'
	export default{
		name:"animation",
		computed:{
			
			...mapState({
				bannerData:state =>state.bannerData,
				Online:state =>state.Online,
				Liveling:state =>state.Liveling
			})
			
		},
		methods:{
			
			getdata(){
			
			this.getBannerDate({
                pf: 0,
                ids: '23,34,29,31,40,42,44'
            })
			this.getRecommend(3)//获取3天排行榜推荐 1 3 7
			
			},
			
			...mapActions([
				'getBannerDate',
				'getRecommend'
				
			])
			
			
		},
		
		created(){
			//取数据
			this.getdata()
		},
		mounted(){  
			     
			    
		}

	
	}
</script>

<style lang="less" scoped>
    
    .my-swipe {
	  height: 220px;
	  width: 440px;
	  color: #fff;
	  font-size: 30px;
	  text-align: center;
	   position: relative;
	   .swiperTitle{
       	 	position: absolute;
       	 	bottom: 20px;
       	 	left: 20px;
       	 	font-size: 14px;
       	 	font-weight: 600;
       	 	color: #fff;
       	 	background: rgba(0,0,0,.1);
       	 	border-radius: 5px;
       	 }
	  .swiperImg{
		    	cursor: pointer;
		    	border-radius: 8px;
		    }
	}


</style>