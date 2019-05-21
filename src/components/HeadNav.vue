<template>
	<div class="headerNav">
		<ul class="leftNav">
			<li v-for="(item,index) in leftNav" :class="item.class" @click="gopath(item.class)" @mouseenter="showgame(item.class)" @mouseleave="noshowGame(item.class)" :ref="item.class" :key="index" >{{item.name}}</li>
			<div v-show="showgames" @mouseenter="showgames = true" @mouseleave="showgames = false">
           	 <game-hover class="game-hover"></game-hover>
           </div>
          	 </transition>
             <el-collapse-transition>
	            <div v-show="showScanCode" class="scanCode-hover">
	            	<img src="../assets/images/app-qrcode__box.png"/>
	            </div>
            </el-collapse-transition>
		</ul>
		<div class="rightNav">
			<div class="postText" @mouseenter="showposts = true" @mouseleave="showposts =false">
				投稿 
				<div class="postDetail" v-show="showposts">
                        <a class="postvideo" href="javascript:;">
                            <span>视频投稿</span>
                        </a>
                        <a class="postadmin" href="javascript:;">
                            <span>投稿管理</span>
                        </a>
                        <a class="postcenter" href="javascript:;">
                            <span>创作中心</span>
                        </a>
				</div>
			</div>
			<div><span @click="isLogin" class="login" >登录</span><span>|</span><span @click="regester" class="register">注册</span></div>
		</div>
	</div>
</template>

<script>
	import { mapState,mapActions,mapMutations } from 'vuex'
	import http from "../utils/axios"
	import gameHover from "./GameHover"
	
	export default{
		name:"headernav",
		data(){
			return{
				dataa:null,
				showposts:false,
				showgames:false,
				showScanCode:false
			}
		},
		components:{
			gameHover
		},
		methods:{
			gopath(path){
				console.log(path)
			},
			showgame(params){
				switch(params){
					case "game":
						this.showgames = true;
						break;
					case "mobile":
						this.showScanCode =true;
						break;
					default:
						break;
				}
				
			},
			noshowGame(){
				this.showgames = false
				this.showScanCode =false
			},
			
			...mapMutations([
				'setLoginState'
			]),
			isLogin(){
				this.setLoginState(true)
			},
			regester(){
				 this.$message({
			          message: '注意!系统暂不提供注册，请等待注册开放',
			          type: 'warning',
			          center:true
			        });
			}

		},
		computed: {
		  ...mapState({
		  	leftNav: state => state.header.leftNav
		  })
		
		}
	}
</script>

<style lang="less" scoped>
	/*nav高度 左右margin*/
	@height : 42px;
	@marginNavl:15%;
	@marginNavr : 20%;
	/*每个li个边距*/
	.layout(@padding:10px){
		padding: 0 @padding;
		line-height: @height;
	}
	.headerNav{
		position: relative;
		height: @height;
		width: 100%;
  	    background: rgba(255,255,255,.4);
		color: #222222;
  		font-size: 12px;
  		z-index: 10;
		.leftNav{
			float: left;
			margin-left:@marginNavl;
			height:100%;
			position: relative;
			cursor: pointer;
			>li{
				float: left;
				&:hover{
                    background-color: rgba(255, 255, 255, .2);
                }
				.layout
				
			}
			>.home{
				padding-left: 32px;
				background: url(../assets/images/page_icons.png) no-repeat -910px -74px;
			}
			.mobile{
				padding-left: 32px;
				background: url(../assets/images/page_icons.png) no-repeat -1353px -1162px;
			}
			.game-hover{
				position: absolute;
				top: @height;
				left: 110px;
			}
			.scanCode-hover{
				position: absolute;
				top: @height;
				left: 240px;
			}
		}
		.rightNav{
			float: right;
			margin-right: @marginNavr;
			>div{
				float: right;
				.layout
			}
			
			span{
				padding: 5px;
			}
			.login:hover{
				color: #DF5671;
				cursor: pointer;
			}
			.register:hover{
				color: #DF5671;
				cursor: pointer;
			}
			.postText{
				padding: 0;
				height: 48px;
			    width: 58px;
			    line-height: 42px;
			    text-align: center;
			    color: #fff;
			    font-size: 12px;
			    background: #df5671;
			    border-radius: 0 0 10px 10px;
			    position: relative;
			    cursor: pointer;
			    .postDetail{
	                position: absolute;
	                display: flex;
	                flex-wrap: wrap;
	                width: 216px;
	                height: 64px;
	                top: 42px;
	                right:0;
	                background: #ffffff;
	                >a:hover{
	                	box-sizing: border-box;
	                	border: 1px dashed #DF5671;
	                }
	                .postvideo{
		                    width: 72px;
		                    height: 64px;
		                    display: inline-block;
		                    font-size: 12px;
		                    color: rgba(223, 86, 113);
		                    background: url(../assets/images/page_icons.png) no-repeat;
		                    background-position: -444px -905px;
		                    text-align: center;
		                    line-height: 98px;
		                }
	                .postadmin{
		                    width: 72px;
		                    height: 64px;
		                    display: inline-block;
		                    font-size: 12px;
		                    color: rgba(223, 86, 113);
		                    background: url(../assets/images/page_icons.png) no-repeat;
		                    background-position: -444px -967px;
		                    text-align: center;
		                    line-height: 98px;
		                }
	                .postcenter{
		                    width: 72px;
		                    height: 64px;
		                    display: inline-block;
		                    font-size: 12px;
		                    color: rgba(223, 86, 113);
		                    background: url(../assets/images/page_icons.png) no-repeat;
		                    background-position: -444px -1736px;
		                    text-align: center;
		                    line-height: 98px;
		                }
         	   }
			}
		}
	}
	.iconfont{
		color: whitesmoke;
	}
	

	
</style>