<template>
	    <div class="main-nav">
            <div class="m-nav">
            	
            	
                <div class="m-navtitle">
                    <a href="http://localhost:8080/#/" class="navtitlefirst">
                        <i class="iconfont icon-home2"></i>
                        <span>首页</span>
                    </a>
                </div>
                
                <div class="m-navtitle" v-for="(item,index) in menuLeft" :key="index + 10">
                    <a :href="item.href" class="navtitlea">
                        <span class="navspan">{{item.num>999?"999+":item.num}}</span>
                        <span class="titletext">{{item.name}}</span>
                        <ul class="dropdown" @click.stop="stopbubble()" v-show="item.items != 0">
                        	 <li v-for="(item,index) in item.items" :key="index">
                                <a :href="item.href" >
                                    <i class="iconfont icon-right"></i>
                                    <span class="droptext">
                                        {{item.name}}
                                        <i class="iconfont icon-back"></i>
                                    </span>
                                    
                                </a>
                            </li>
                        </ul>
                    </a>
                </div>
      
               
                <div class="m-navother" v-for="(item,index) in menuRight" :key="index">
                    <a href="" class="othertext">
                        <i :class="item.icon"></i>
                        <span class="text">{{item.name}}</span>
                    </a>
                </div>

            </div>
	            <div class="mainnavgifimg" @click="goOut">
	                <img v-lazy="MenuIcon.icon" :title="MenuIcon.title" alt="">
	            </div>
        </div>
</template>

<script>
	import { mapState } from "vuex"
	import { getMenuIcon } from "../api/api"
	export default{
		name:"mainnav",
		computed:{
			...mapState({
				menuLeft: state=>state.navBar.menuLeft,
				menuRight: state=>state.navBar.menuRight,
				MenuIcon:state =>state.MenuIcon
			})
		},
		data(){
			return {
				MenuIconUrl:null
			}
		},
		created(){
//			getMenuIcon().then(
//				res =>{
//					this.MenuIconUrl = res.data
//				}
//			)
		},
		methods:{
			//阻止冒泡
			stopbubble(){
				
			},
			//跳转
			goOut(){
				window.location.href = this.MenuIcon.links[0]
			}
		}
	}
</script>

<style lang="less" scoped >
.main-nav{
    width: 1160px;
    height: 62px;
    margin: 0 auto;
}
.m-nav{
    float: left;
    /*width: 881px;*/
    height: 38px;
    padding: 12px 0; 
    display: flex;
    flex-direction: row;
    box-sizing: content-box;
    
}
.mainnavgifimg{
    float: left;
    width: 76px;
    height: 44px;
    cursor: pointer;
    margin: 12px 0;
    img{
        width: 76px;
        height: 44px;
    }
}
	
	
	
	
	.m-navtitle{
		margin: 0 1px;
    position: relative;
    box-sizing: border-box;
    .navtitlefirst{
        display: flex;
        height: 46px;
        width: 39px;
        color: black;
        flex-direction: column;
        font-size: 14px;
        text-align: center;
        padding-right:11px;
        padding-bottom: 10px; 
        box-sizing: border-box;
        .iconfont{
            color: #ffafc9;
            font-size: 20px;
            margin-bottom: 2px;
        }
    }
    .navtitlea{
        display: flex;
        height: 46px;
        min-width: 50px;
        flex-direction: column;
        font-size: 14px;
        text-align: center;
        padding: 0 11px 11px 10px;
        box-sizing: border-box;
        font-size: 12px;
        color: #000000;
        .navspan{
            color: white;
            margin: 3px auto 5px;
            padding: 0 3px;
            border-radius: 3px;
            min-width: 28px;
            height: 14px;
            background: #ffafc9;
            font-size: 12px;
        }
        .titletext{
            min-width: 28px;
        }
        .dropdown{
            position: absolute;
            top: 46px;
            min-width: 128px;
            background: white;
            display: none;
            z-index: 9999;
            box-shadow: 0 5px 2px 2px  #DDDDDD ; 
            >li{
                width: 100%;
                height: 30px;
                line-height: 30px;
                padding-right: 20px;
                overflow: hidden;
                >a{
                	float: left;
                    box-sizing: border-box;
                    padding: 0 25px ;
                    position: relative;
                    width: 128px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    text-align: left;
       				color: #000000;
                    .droptext{
                        font-size: 12px;
                        position: relative;
                        left: 0px;
                        text-align: left;
                        white-space: nowrap;
                        .icon-back{
                            position: absolute;
                            right: -40px;
                            font-size: 12px;
                            color: #00a1d6;
                            opacity: 0;
                        }
                    }
                    .icon-right{
                        font-size: 12px;
                        color: #00a1d6;
                        position: absolute;
                        left: 10px;
                    }
                    
                    &:hover{
                        .droptext{
                            position: relative;
                            left: 5px;
                            transition: all 0.4s;
                            .icon-back{
                                position: absolute;
                                right:-15px;
                                font-size: 12px;
                                color: #00a1d6;
                                opacity: 1;
                                transition: all 0.3s;
                            }
                        }
                        .icon-right{
                            font-size: 12px;
                            color: #00a1d6;
                            position: absolute;
                            left: 15px;
                            transition: all 0.3s;
                        }
                    }
                }
            }
        }
        &:hover{
            .dropdown{
                display: block;
            }
        }
    }
    
}
.m-navother{
	margin: 0 8px;
    width: 40px;
    text-align: center;
	.othertext{
		display: inline-block;
        position: relative;
        overflow: hidden;
        zoom: 1;
        &:hover {
            span {
                color: #00a1d6;
            }
        }
		i {
	        display: block;
	        width: 18px;
	        height: 18px;
	        margin: 3px auto 2px;
	        background: url(../assets/images/page_icons.png) no-repeat;
	        display: block;
	        width: 18px;
	        height: 18px;
	        margin: 0 auto 6px;
	        background: url(../assets/images/page_icons.png) no-repeat;
	        &.square {
	            background-position: -87px -2006px;
	        }
	        &.live {
	            background-position: -87px -1878px;
	        }
	        &.blackroom {
	            background-position: -87px -1942px;
	        }
	        &.zhuanlan {
	            background-position: -87px -1814px;
	        }
	    }
	    span {
                display: block;
                color: black;
                margin: 0;
                font-size: 12px;
             }
	}
}

</style>