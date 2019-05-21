<template>
  <div class="home" @scroll.native="getScrollTop" ref="homeScrollTop">
  	<!--首推-->
  	<div class="homeContent1 clearfix">
		<!--轮播-->
	  	<animation class="animation"></animation>
	  	<!--首推-->
	  	<div class="recommend-info clearfix">
	  		<div @click="goOut({name: 'playview',query:item})" class="inner-img" v-for="(item,index) in RecommendData" :key="index">
	  			<a href="javascript:;">
	  				<img class="img-auto recommendImg" v-lazy="item.pic" :key="item.pic" alt="" />
	  				<div class="recommendDes" :title="item.title">
	  					<p class="title">{{item.title}}</p>
	  					<p >up主：{{item.author}}</p>
	  					<p >播放：{{item.play}}</p>
	  				</div>
	  				
	  			</a>
	  		</div>
	  		
	  	</div>
  	</div>
  	
  	<!--推广-->
  	<div class="homeContent2 clearfix">
  		
  		<div>
  			<!--分类题目-->
  			<div class="generalizeBar">
  				<i class="generalizeLogo"></i>
  				<span class="generalizeText">推广</span>
  			</div>
  			
  			<div class="generalizecontent clearfix">
  					<div class="generalizeLi" v-for="(item,index) in bannerData[34]" @click="goOut({name: 'playview',query:item.archive})">
  						<div class="generalizeLiImg"><img class="img-auto" v-lazy="item.pic" :key="item.pic" alt="" :title="item.name"/></div>
  						<p>{{item.name}}</p>
  					</div>
  			</div>
  			
  		</div>
  		
  		
  		<div class="rAd">
  			<div class="rightAdTop">
  				<span>在线人数：6079296</span>
  				<span>|</span>
  				<span>最新投稿：97873</span>
  				
  			</div>
  			<div class="rightAdImg" :title="adImg.name">
  				<img class="img-auto" v-lazy="adImg.pic" alt="" />
  			</div>
  		</div>
  		
  	</div>
  	
  	<!--动漫-->
  	<div class="animation clearfix">
  		<div>
  			
	  		<div class="generalizeBar clearfix">
	  				<i class="generalizeLogo"></i>
	  				<span class="generalizeText">动画</span>
	  				<div class="animationFyi">
	  					<span :class="{active:flag == true}" @click="differentShow(falg = true)">有新动态</span>
	  					<span :class="{active:flag == false}" @click="differentShow(falg = false)">最新投稿</span>
	  				</div>
	  		</div>
	  		
	  		<div class="generalizecontent clearfix">
	  			
  					<div class="generalizeLi" v-for="(item,index) in animationData" @click="goOut({name: 'playview',query:item})">
  						<div class="generalizeLiImg"><img class="img-auto" v-lazy="item.pic" alt=""  :key="item.pic" :title="item.title"/></div>
  						<p>{{item.title}}</p>
  					</div>
  			</div>
	  		
  		</div>
  		
  		<div class="rAd">
  			<div class="rightAdTitle">
  				<span>特别推荐</span>
  			</div>
 
  				<swipe class="my-swipe">
					  <swipe-item class="slide1" v-for="(item,index) in adData" :key="index">
					  	<img class="img-auto swiperImg" :title="item.title" v-lazy="item.url" alt="" />
					  </swipe-item>
					</swipe>

  		</div>
  		
  	</div>
  	
  	<!--番剧-->
  	<div class="animationCn clearfix">
  		<div>
  			
	  		<div class="generalizeBar clearfix">
	  				<i class="generalizeLogo"></i>
	  				<span class="generalizeText">番剧</span>
	  				<div class="animationFyi">
	  					<div class="animationFyiLi" :class="{activeCn:flagBangumi == index}" v-for="(item,index) in tabLi" @click="bangumiTaberShow(index)"><span>{{item}}</span></div>
	  				</div>
	  				<div class="rightTarber"><span>新番时间表</span> <i class="iconfont icon-right"></i></div>
	  		</div>
	  		
	  		<div class="animationCnLi clearfix">
	  			
  					<div class="generalizeLi" v-for="(item,index) in TimelineGlobalData" :key="index">
  						<div class="generalizeLiImg"><img class="img-auto" v-lazy="item.square_cover" :key="item.square_cover" alt="" :title="item.title"/></div>
  						<div class="generalizeLiText">
  							<p class="animationCndec" :title="item.title">{{item.title}}</p>
  							<p class="animationCninfo">第{{item.bgmcount}}话</p>
  						</div>
  					</div>
  			</div>
	  		
  		</div>
  		
  		<div class="rAd">
  			<div class="rightAdTitle">
  				<span>排行</span>
  			</div>
 
					<ul class="rankBar">
						<li v-for="(item,index) in rankBangumi" :key="index">
							<span class="r-item-num" :class="{rItemnumActive:index == 0 || index == 1 || index == 2}">{{index + 1}}</span>
							<span class="r-item-text" :title="item.title">{{item.title}}</span>
							<span class="r-item-index">已更新至第{{item.bgmcount}}话</span>
						</li>
						<li class="rankBarLast"><span>查看更多</span><i class="iconfont icon-right"></i></li>
					</ul>


  		</div>
  		
  	</div>
  	
  	<!--国产动画-->
  	<div class="animationCn clearfix">
  		<div>
  			
	  		<div class="generalizeBar clearfix">
	  				<i class="generalizeLogo"></i>
	  				<span class="generalizeText">国创</span>
	  				<div class="animationFyi">
	  					<div class="animationFyiLi" :class="{activeCn:flagCn == index}" v-for="(item,index) in tabLi" @click="taberShow(index)"><span>{{item}}</span></div>
	  				</div>
	  				<div class="rightTarber"><span>新番时间表</span> <i class="iconfont icon-right"></i></div>
	  		</div>
	  		
	  		<div class="animationCnLi clearfix">
	  			
  					<div class="generalizeLi" v-for="(item,index) in TimelineCn" :key="index">
  						<div class="generalizeLiImg"><img class="img-auto" v-lazy="item.square_cover" :key="item.square_cover" alt="" :title="item.title"/></div>
  						<div class="generalizeLiText">
  							<p class="animationCndec" :title="item.title">{{item.title}}</p>
  							<p class="animationCninfo">第{{item.bgmcount}}话</p>
  						</div>
  					</div>
  			</div>
	  		
  		</div>
  		
  		<div class="rAd">
  			<div class="rightAdTitle">
  				<span>排行</span>
  			</div>
 
					<ul class="rankBar">
						<li v-for="(item,index) in rankCn" :key="index">
							<span class="r-item-num" :class="{rItemnumActive:index == 0 || index == 1 || index == 2}">{{index + 1}}</span>
							<span class="r-item-text" :title="item.title">{{item.title}}</span>
							<span class="r-item-index">已更新至第{{item.bgmcount}}话</span>
						</li>
						<li class="rankBarLast"><span>查看更多</span><i class="iconfont icon-right"></i></li>
					</ul>


  		</div>
  		
  	</div>
  	
  	
  	<div class="aside">
  			<ul>
  				<li @click="asideflag(item)" v-for="(item,index) in aside" :key="index" :class="{asideActive: asideActive == item.name}"><span>{{item.name}}</span></li>
  				<li class="reRank"><p class="iconfont icon-zhenhuichongtubiaozhizuo-kuozhan-"></p><span>排序</span></li>
  				<li class="connection"><div class="connectContain"><span class="spanRight">|</span><span class="spanLeft">|</span></div></li>
  				<li class="asideTop" @click="goTop"><i class="iconfont icon-up2"></i></li>
  				<li class="asideBottom" title="下载客户端" @click="goOut('https://app.bilibili.com/?channel=home_recommend')"><i class="iconfont icon-CN_bilibiliB"></i></li>
  				
  			</ul>
  	</div>
  	
  </div>
</template>

<script>
	import Animation from "./Animation.vue"
	import { mapState,mapMutations } from "vuex"
	import { getTimelineCn,getTimelineGlobal,getCnAdSlide,getRankingRegion,getRanking,getSearchDefaultWords,getSuggest} from "../../api/api"
	import adMsg from "../../assets/commomJson/adMsg.json"
export default {
  name: "home",
  props:['scrollTp'],
  data(){
  	return{
  		flag:true,
  		flagCn:0,
  		flagBangumi:0,
  		adData:[],
  		tabLi:[
  		"最新","一","二","三","四","五","六","日"
  		],
  		aside:[
  			{name:"推广",scrollY:502},
	  		{name:"动画",scrollY:747},
	  		{name:"番剧",scrollY:1162},
	  		{name:"国创",scrollY:1559}
	  		],
  		asideActive:"推广"
  	}
  },
  computed:{
  	
  	...mapState({
  		
  		RecommendData:state =>state.RecommendData,
  		bannerData:state =>state.bannerData,
  		adImg:state =>state.adImg,
  		DynamicRegion:state=>state.DynamicRegion,
  		animationData:state=>state.animationData,
  		Newlist: state =>state.Newlist,
  		TimelineCn:state=>state.TimelineCn,
  		rankCn:state=>state.rankCn,
  		TimelineGlobalData:state=>state.TimelineGlobalData,
  		rankBangumi:state=>state.rankBangumi,
  		SearchDefaultWords:state=>state.SearchDefaultWords,
  		getSuggest:state=>state.getSuggest
  		
  	})
  	
  },
  created(){
  	this.adData = adMsg.data
  },
  watch:{
  	scrollTp(){
  		this.asideActive = this.scrollTp
  	}
  },
  methods:{
  	
  	...mapMutations([
  		'changeAnimationData'
  	]),
  	
  	goOut(data){
				this.$router.push(data)
  	},
  	differentShow(params){
  		
		if(this.flag == params){
			return
  		}	
  		this.flag = params
  		
  		if(params){
  			this.changeAnimationData(this.DynamicRegion)
  		}else{
  			var aa = this.Newlist.slice(0,10)
  			
  			this.changeAnimationData(aa)

  		}
  	},
  	changeTimelineCn(start,end){
  		this.$store.commit({
  					type:'changeTimelineCn',
  					start,
  					end
  				});
  	},
  	changeTimelineGlobal(start,end){
  		this.$store.commit({
  					type:'changeTimelineGlobal',
  					start,
  					end
  				});
  	},
//	番剧change
  	bangumiTaberShow(params){
  		this.flagBangumi = params
  		switch(params){
  			case 0:
  				this.changeTimelineGlobal(0,12)
  				break;
				case 1:
					this.changeTimelineGlobal(5,12)
					break;
				case 2:
					this.changeTimelineGlobal(12,19)
					break;
				case 3:
					this.changeTimelineGlobal(20,26)
					break;
				case 4:
					this.changeTimelineGlobal(30,41)
					break;
				case 5:
					this.changeTimelineGlobal(45,50)
					break;
				case 6:
					this.changeTimelineGlobal(60,68)
					break;
				case 7:
  				this.changeTimelineGlobal(70,78)
  				break;
				default:
					break;
  		}
  	},
//	国创
  	taberShow(params){
  		this.flagCn = params
  		switch(params){
  			case 0:
  				this.changeTimelineCn(0,12)
  				break;
				case 1:
					this.changeTimelineCn(5,12)
					break;
				case 2:
					this.changeTimelineCn(12,15)
					break;
				case 3:
					this.changeTimelineCn(15,22)
					break;
				case 4:
					this.changeTimelineCn(22,25)
					break;
				case 5:
					this.changeTimelineCn(25,33)
					break;
				case 6:
					this.changeTimelineCn(34,39)
					break;
				case 7:
  				this.changeTimelineCn(40,50)
  				break;
				default:
					break;
  		}
  	},
  	
  	
  	asideflag(params){
  		this.asideActive = params.name
  		window.scrollTo(0,params.scrollY)
  	},
  	goTop(){
  		window.scrollTo(0,0)
  	},
  	getScrollTop(){
  		console.log("document.body.scrollHeight",document.body.scrollTop)
	
  	}
  
  },
  components:{
  	Animation
  }
  
  
	};
</script>
<style lang="less" scoped>

	.home{
		position: relative;
		width: 1160px;
		margin: 0 auto;
		overflow: hidden;
		
		.homeContent1{
			margin-bottom: 20px;
			width:100%;
			.animation{
				float: left;
				
			}
			.recommend-info{
				float: left;
				height: 220px;
				width: 720px;
				
				.inner-img{
					float: left;
					height: 100px;
					width: 160px;
					margin: 0 0 20px 20px;
					overflow:hidden;
					position: relative;
					&:hover{
							.recommendDes>p{
							white-space:  normal;
							text-overflow: ellipsis;	
						}
						.title{
							overflow: hidden;
			        text-overflow: ellipsis;
			        display: -webkit-box;
			        -webkit-line-clamp:2;
		       	 -webkit-box-orient: vertical;
						}
						.recommendDes	{
							position: absolute;
							top: 0px;
							left: 0px;
							border-radius: 8px;
							background: rgba(39, 40, 34,.5);
							transition: all .5s;
							}
						}
					
					.recommendDes{
						height: 100%;
						width: 100%;
						position: absolute;
						box-sizing: border-box;
						padding-left: 5px;
						bottom: -62px;
						left: 0px;
						font-size: 12px;
						color: white;
						>p{
							overflow:hidden;
							white-space: nowrap;
							text-overflow: ellipsis;	
							margin: 15px 0;
						}
						
					}
					.recommendImg{
						border-radius: 8px;
					}
				}
			}
		}
		
		.homeContent2{
			width: 100%;
			>div{
				float: left;
			} 
				.generalizeLogo{
					width: 40px;
			    height: 40px;
					background: url(../../assets/images/page_icons.png) no-repeat -140px -73px;
				}
			
			/*右边广告栏*/
			.rAd{
				width: calc(100% - 900px);
				.rightAdTop{
					box-sizing: border-box;
					width: 260px;
					height: 34px;
					border-radius: 2px;
					background: yellow;
					font-size: 12px;
					color: #6d757a;
					background: #e5e9ef;
					padding: 0 10px;
					text-align: center;
					line-height: 34px;
					overflow: hidden;
					border-radius: 8px;
					>span{
						vertical-align: top;
					}
					>span:nth-child(2){
						display: inline-block;
						margin: 0 15px;
					}
				
					
				}
				.rightAdImg{
					margin-top: 10px;
					width: 260px;
					height: 150px;
					overflow: hidden;
					border-radius: 8px;
					cursor: pointer;
				}
			}
			
			
		}
		/*=======================*/
		
		.animation{
			>div{
				float: left;
			}
			.rightAdTitle{
				height: 55px;
				line-height: 55px;
				text-align: left;
				color: #000;
				font-size: 18px;
			}
			.generalizeLogo{
					width: 40px;
			    height: 40px;
					background: url(../../assets/images/page_icons.png) no-repeat -140px -908px;;
				}
				.animationFyi{
					float: left;
					height: 55px;
					line-height: 55px;
					margin-left: 15px;
					font-size: 12px;;
					cursor: pointer;
					>span{
						margin-right: 10px ;
					}
				}
				
				
				.rAd{
				width: calc(100% - 900px);
				.rightAdTop{
					box-sizing: border-box;
					width: 260px;
					height: 34px;
					border-radius: 2px;
					background: yellow;
					font-size: 12px;
					color: #6d757a;
					background: #e5e9ef;
					padding: 0 10px;
					text-align: center;
					line-height: 34px;
					overflow: hidden;
					border-radius: 8px;
					>span{
						vertical-align: top;
					}
					>span:nth-child(2){
						display: inline-block;
						margin: 0 15px;
					}
				
					
				}
				.rightAdImg{
					margin-top: 10px;
					width: 260px;
					height: 150px;
					overflow: hidden;
					border-radius: 8px;
					cursor: pointer;
				}
			}
				
			
		}
		/*======================*/
		
		.animationCn{
			>div{
				float: left;
			}
			.animationCnLi{
				width: 880px;
				height: 276px;
				margin: 26px 20px 40px 0;
				overflow: hidden;
				>div{
					float: left;
				}
				.generalizeLi{
					padding: 0 40px 20px 0;
					width: 180px;
					height: 72px;
					overflow: hidden;
					>div{
					float: left;
					}
					.generalizeLiImg{
						height: 72px;
						width: 72px;
						border-radius: 8px;
						overflow: hidden;
						cursor: pointer;
					}
					.generalizeLiText{
						width: calc(100% - 82px);
						font-size: 12px;
						position: relative;
						height: 72px;
						margin-left: 10px;
						
						.animationCndec{
							position: absolute;
							top: 0;
							left: 0;
							line-height: 18px;
							cursor: pointer;
							width: 98px;
							word-break: break-all;
							overflow: hidden;
					    text-overflow: ellipsis;
					    display: -webkit-box;
					    -webkit-line-clamp: 2;
					    -webkit-box-orient: vertical;


							
							&:hover{
								color: #00A9E1;
							}
						}
						.animationCninfo{
							text-align: center;
							min-width: 40px;
							position: absolute;
							bottom: 0;
							left: 0;
							height: 18px;
							line-height: 18px;
							background: #ff8eb3;
							border-radius: 10px;
							padding: 0 4px;
							color: #fff;
							cursor: pointer;
						}
					}
				}
				
			}
			
			.rightAdTitle{
				height: 55px;
				line-height: 55px;
				text-align: left;
				color: #000;
				font-size: 18px;
			}
			.rankBar{
				height: 340px;
			  width: 260px;
			  color: #000000;
			  text-align: left;
		    position: relative;
		    overflow: hidden;
		    >li{
		    	height: 30px;
		    	line-height: 30px;
		    	margin-bottom: 10px;
		    	font-size: 12px;
		    	width: 100%;
	    		overflow: hidden;
	    		text-overflow: ellipsis;
	    		white-space: nowrap;
		    	
		    	.r-item-num{
		    		cursor: default;
		    		color: #fff;
		    		background-color: #B8C0CC;
		    		font-size: 14px;
		    		padding: 0 5px;
		    		border-radius: 4px;
		    	}
		    	
		    	.r-item-text{
		    		cursor: pointer;
		    		margin: 0 10px;
		    		&:hover{
		    			color: #00A1D6;
		    		}
		    	}
		    	.r-item-index{
						cursor: pointer;		  
						color: #99a2aa;  		
		    	}
		    }
			}
			.generalizeLogo{
					width: 40px;
			    height: 40px;
					background: url(../../assets/images/page_icons.png) no-repeat -140px -1610px;
				}
				.animationFyi{
					float: left;
					margin-left: 25px;
					font-size: 18px;
					cursor: pointer;
					overflow: hidden;
					.animationFyiLi{
						height: 55px;
						line-height: 55px;
						box-sizing: border-box;
						border-bottom: 1px solid #E5E9EF;
						float: left;
						&:hover{
								color: #00A1D6;
							}
						>span{
							margin: 0 20px;
						}
					}
				}
				.rightTarber{
					height: 35px;
					line-height: 35px;
					box-sizing: border-box;
					border: 1px solid #f25d8e;
					padding: 0 15px;
					margin: 10px 10px 10px 100px;
					color: #f25d8e;
					border-radius: 4px;
					cursor: pointer;
					&:hover{
						background-color: #f25d8e;
						color: #fff;
					}
				}
				
				
				.rAd{
				width: calc(100% - 900px);
				.rightAdTop{
					box-sizing: border-box;
					width: 260px;
					height: 34px;
					border-radius: 2px;
					background: yellow;
					font-size: 12px;
					color: #6d757a;
					background: #e5e9ef;
					padding: 0 10px;
					text-align: center;
					line-height: 34px;
					overflow: hidden;
					border-radius: 8px;
					>span{
						vertical-align: top;
					}
					>span:nth-child(2){
						display: inline-block;
						margin: 0 15px;
					}
				
					
				}
				.rightAdImg{
					margin-top: 10px;
					width: 260px;
					height: 150px;
					overflow: hidden;
					border-radius: 8px;
					cursor: pointer;
				}
			}
				
			
		}
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	/*======================*/
			/*侧边栏*/
			.aside{
				position: fixed;
				right: 16%;
				top: calc(50% - 164px);
				margin-top: 20px;
				width: 48px;
				>ul{
					text-align: center;

					.reRank{
						width: 46px;
						height: 74px;
						vertical-align: text-bottom !important; 
						border: 1px solid #E5E9EF;
						border-bottom-left-radius: 4px;
						border-bottom-right-radius: 4px;
						
						.iconfont{
							margin-top: 5px;
							font-size: 30px;
							color: #CCD0D7;
						}
					}
					.connection{
						height: 20px;
						width: 48px;
						line-height: 20px;
						border: none;
						background: transparent;
						color: #CCD0D7;
						font-size: 18px;
						position: relative;
						cursor: default;
						&:hover{
								background-color:transparent ;
								color: #CCD0D7;
							}
						.connectContain{
							position: absolute;
							top: -2px;
							left: 4px;
							.spanRight{
								margin-right: 15px;
							}
							.spanLeft{
								margin-left: 15px;
							}
						}
					
					}
					.asideTop{
						width: 46px;
						height: 48px;
						line-height: 48px;
						border-bottom: 1px solid #E5E9EF;
						border-top: 1px solid #E5E9EF;
						position: relative;
						border-radius: 4px;
						.iconfont{
							font-size: 25px;
							color: #CCD0D7;
						}
					}
					
						.asideBottom{
							margin: 15px 0 15px -10px;
							background-color: transparent;
							width: 46px;
							height: 55px;
							line-height: 48px;
							border: none;
							margin-right: 10px;
							cursor: pointer;
							.iconfont{
								font-size: 70px;
								color: #CCD0D7;
							}
							&:hover{
								background-color:#fff ;
								color: #fff;
							}
						}
					
					>li{
						width: 46px;
						height: 32px;
						line-height: 32px;
						font-size: 14px;
						border-left: 1px solid #E5E9EF;
						border-right: 1px solid #E5E9EF;
						cursor: pointer;
						background-color: #f6f9fa;
						&:nth-of-type(1){
							border-top: 1px solid #E5E9EF;
							border-top-left-radius: 4px;
							border-top-right-radius: 4px;
						}
						&:hover{
								background-color:#00A1D6 ;
								color: #fff;
							}
					}
				}
				
			}
			
			/*分类标题*/
			.generalizeBar{				
				width: 900px;
				height: 55px; 
				display: flex;
		    align-items:top;
		    overflow: hidden;
				 
				.generalizeText{
					margin: 15px 0 0 10px;
					font-size: 22px;
				}
			}
			
			/*具体图文介绍*/
			.generalizecontent{
				margin: 0 0 20px 0;
				width: 900px;
				
				.generalizeLi{
					float: left;
					margin: 0 20px 20px 0;
					>p{
						width: 160px;
						height: 40px;
						line-height: 20px;
						margin-top: 8px;
						font-size: 12px;
						overflow: hidden;
		        text-overflow: ellipsis;
		        display: -webkit-box;
		        -webkit-line-clamp:2;
		        -webkit-box-orient: vertical;
					}
					.generalizeLiImg{
						cursor: pointer;
						width: 160px;
						height: 102px;
						border-radius: 8px;
						overflow: hidden;
					}
				}
				
			}
			
			.active{
				color:#66D9EF;
			}
			
			.activeCn{
				color: #00A1D6;
				border-bottom: 1px solid #00A1D6 !important;
			}
			.rItemnumActive{ 
				background-color: #f25d8e !important;
			}
			.asideActive{
				background-color:#00A1D6 !important;
				color: #fff;
			}
			
			.my-swipe {
			  height: 346.5px;
			  width: 260px;
			  color: #fff;
			  font-size: 30px;
			  text-align: center;
		    position: relative;
		    border-radius: 8px;
		    
			  .swiperImg{
		    	cursor: pointer;
			    }
				 
			}
			
			.rankBarLast{
		    		display: block;
		    		text-align: center;
		    		background-color: #B8C0CC;
		    		border-radius: 4px;
		    		cursor: pointer;
		    		&:hover{
		    			background-color:#CCD0D7;
		    		}
		    	}
</style>
