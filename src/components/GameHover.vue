<template>
    <div class="m-gamehover">
        <div class="gamepic">
            <div class="gameimg">
                <img src="../assets/images/cont/game-center__img1.jpg" alt="">
            </div>
            <div class="gameimgs">
                <ul class="gameul">
                    <li class="gameli" v-for="(item,index) in gamerecommom" :key="index">
                    	<a @click="openVn" href="javascript:;" class="gamea"><img :src="item.url" alt="">
                    	 <span>{{item.name}}</span>
                    	</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="gamelist">
            <div class="listtitle">
                <div class="listlogo">
                    <img src="../assets/images/game_center_title.png" alt="">
                </div>
                <div class="gametell"><a @click="open" href="javascript:;">游戏论坛</a></div>
            </div>
            <div class="lists">
                <ul>
                    <li v-for="(item,index) in gameData" :key="index">
                        <a @click="openVn" href="javascript:;" @mousemove="showimg(index)" @mouseout="showimgae = 7">{{item.name}}</a>
                        <div class="listsimg" v-show="index == showimgae"><img :src="item.url" alt=""></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
	name:"gamehover",
    data() {
    return {
    	gamerecommom:[
	    	{
	    		name:'刀剑乱舞',
	    		url:require('../assets/images/cont/game_img1.png')
	    	},
	    	{
	    		name:'佳丽速度',
	    		url:require('../assets/images/cont/game_img2.png')
	    	},
	    	{
	    		name:'舞动至尊',
	    		url:require('../assets/images/cont/game_img3.jpg')
	    	}
    	],
    	gameData:[
	    	{
	    		name:"仙剑奇侠传",
	    		url:require("../assets/images/cont/game-list__img1.png")
	    	},
	    	{
	    		name:"魔法禁书目录",
	    		url:require("../assets/images/cont/game-list__img2.png")
	    	},
	    	{
	    		name:"海贼王",
	    		url:require("../assets/images/cont/game-list__img3.png")
	    	},
	    	{
	    		name:"火影忍者",
	    		url:require("../assets/images/cont/game-list__img4.png")
	    	},
	    	{
	    		name:"光明大陆",
	    		url:require("../assets/images/cont/game-list__img5.png")
	    	},
	    	{
	    		name:"妖精的尾巴",
	    		url:require("../assets/images/cont/game-list__img6.png")
	    	},
	    	{
	    		name:"家庭教师",
	    		url:require("../assets/images/cont/game-list__img7.png")
	    	},
    	],
    	showimgae:7
    }
    },
    components: {

    },
    methods:{
    	openVn(){
	    	const h = this.$createElement;
	        this.$message({
	          center: true,
	          message: h('p', null, [
	            h('span', { style: 'color: teal' }, '本站不提供下载，请自行下载'),
	          ])
	        });
    	},
        showimg(val){
        	switch(val){
        		case 0:
	        		this.showimgae=0;
	        		break;
        		case 1:
	        		this.showimgae=1;
	        		break;
        		case 2:
	        		this.showimgae=2;
	        		break;
        		case 3:
	        		this.showimgae=3;
	        		break;
        		case 4:
	        		this.showimgae=4;
	        		break;
        		case 5:
	        		this.showimgae=5;
	        		break;
        		case 6:
	        		this.showimgae=6;
	        		break;
        		default:
        		this.showimgae=7;
        	}
        },
        open() {
	        this.$confirm('此操作将进入到外网论坛, 是否继续?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	          window.location.href = "http://game.ali213.net/"
	        }).catch(() => {
	                 
	        });
      }
        
    }
}
</script>

<style lang="less">
	a{
		text-decoration: none;
		
	}
    .m-gamehover{
        display: flex;
        flex-direction: row;
        width: 466px;
        height: 250px;
        background: white;
        z-index: 50;
        box-shadow:  1px 1px 5px #888888;
        padding: 12px 0 0 12px;
        box-sizing:border-box;
        .gamepic{
            display: flex;
            flex-direction: column;
            height: 244px;
            width: 252px;
            // padding: 12px 0 0 12px;
            .gameimg{
                height: 128px;
                width: 240px;
                border-radius: 5px;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .gameimgs{
                height: 110px;
                width: 240px;
                .gameul{
                    height: 110px;
                    width: 240px;
                    .gameli{
                        padding: 6px 0;
                        height: 110px;
                        width: 80px;
                        float: left;
                        box-sizing: border-box;
                        
                        .gamea{  
                            display: flex;
                            flex-direction: column;
                            height: 98px;
                            width: 80px;
                            color: black;
                            padding: 6px 8px;
                            box-sizing: border-box;
                            &:hover{
                        		color: #66B1FF;
                      	 	 }
                            img{
                                height: 64px;
                                width: 64px;
                                margin: auto;
                            }
                            span{
                                text-align: center;
                            }
                        }
                    }
                }
            }
        }
        .gamelist{
            box-sizing: border-box;
            width: 200px;
            height: 232px;
            padding-left: 6px;
            display: flex;
            flex-direction: column;
            .listtitle{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                height: 26px;
                width: 194px;
                margin-bottom: 10px;   
                .listlogo{
                }
                .gametell{
                    a{
                        display: block;
                        height: 26px;
                        line-height: 26px;
                        color: #00a1d6;
                    }
                    
                }
            }
            .lists{
                
                ul{
                    li{
                        box-sizing: border-box;
                        width: 178px;
                        height: 28px;
                        padding-left: 16px;
                        a{
                            display: block;
                            width: 100%;
                            height: 100%;
                            overflow: hidden;
                            line-height: 28px;
                            color: black;
                            
                            &:hover{
                            	color: #66B1FF;
								background: rgba(102, 177, 255,.1);
							}
                        }
                        .listsimg{
                            position: absolute;
                            top:26px;
                            right: -210px;

                        }
                    }
                }
            }
        }
    }
</style>
