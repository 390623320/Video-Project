<template>
	<div>
		<div class="g-searchbar">
	        <div class="g-searchcontent">
	            <div class="g-search">
	                <div class="m-seacrh">
	                    <div class="rank">排行榜</div>
	                    <div class="search clearfix">
	                        <input v-model="value" @input="Suggest(value)" @focus="showSuggest = true" @blur="showSuggest = false" type="text" name="" id="" class="searchinp" :placeholder="SearchDefaultWords">
	                        <a class="find"></a>
	                    </div>
	                    
	                    <ul class="suggest" v-show="showSuggest">
                    		<li class="suggestExplie">--- 搜索推荐 ---</li>
                    		<li v-for="(item,index) in searchSuggest" :key="index">{{item.value}}</li>
                        </ul>
	                </div>
	            </div>
	            
	        </div>
	    </div>
	</div>
</template>

<script>
	import { mapState } from "vuex"
	import { getSuggest} from "../api/api"
	export default{
		name:"searchnav",
		data(){
			return {
				searchSuggest:[],
				value:null,
				showSuggest:false
			}
		},
		computed:{
			...mapState({
				SearchDefaultWords:state=>state.SearchDefaultWords
			})
		},
		methods:{
			
			Suggest(keyWord){
				getSuggest(keyWord).then(
					res =>{
						this.searchSuggest = res.result.tag
					}
				)
  			}
			
		}
	}
</script>

<style lang="less" scoped>
	.g-searchbar{
		position: absolute;
		top: 0px;
	    width: 100%;
	    height: 200px;

	    .g-searchcontent{
	        width: 1145px;
	        height: 200px;
	        margin: 0 auto;
	        position: relative;
	        .g-search{
	            position: absolute;
	            bottom: 54px;
	            right: 0;
	            border-color: rgba(0,0,0,0.12);

	        .suggest{
	        	position: absolute;
	        	top: 35px;
	        	left: 68px;
	        	background: white;
	        	z-index: 9999;
	        	border-radius: 4px;
	        	width: 268px;
	        	min-height: 250px;
	        	text-align:left;
	        	box-shadow: 0 2px 5px 2px #EBEBEB;
	        	padding-bottom: 10px;
	        	overflow: hidden;
        		text-overflow: ellipsis;
        		white-space: nowrap;
	        	.suggestExplie{
	        		text-align:center;
	        		font-size: 14px;
	        		margin-left: 0;
	        		&:hover{
	        			background-color: #fff;
	        			color: #000000;
	        		}
	        	}
	        	>li{
	        		height: 30px;
	        		line-height:30px;
	        		padding-left: 10px;
	        		cursor: pointer;
	        		font-size: 14px;
	        		&:hover{
	        			background-color: #E5E9EF;
	        			color: #00A1D6;
	        		}
	        	}
	        }
	        }
	    }
	}
	
	.m-seacrh{
	    display: flex;
	    flex-direction: row;
	    height: 32px;
	    width: 338px;
	    .rank{
	    	font-size: 12px;
	        background-color: rgba(255,255,255,0.882);
	        border-radius: 5px;
	        padding: 0 4px;
	        margin-right: 2px; 
	        text-align: center;
	        line-height: 32px;
	        color: #f25d8e;
	        padding-left:26px; 
	        background-image: url(../assets/images/page_icons.png);
	        background-repeat: no-repeat;
	        background-position: -659px -655px;
	        cursor: pointer;
	    }
	    .search{
	        display: flex;
	        flex-direction: row;
	        background-color: white;
	        opacity: 0.8;
	        width: 268px;
	        height: 100%;
	        border-radius: 5px;
	        
	        .searchinp{
	            padding:0 0 0 12px;
	            height: 100%;
	            width: 220px;
	            border-width: 0;
	        }
	        .find{
	            display: block;
	            width: 36px;
	            height: 32px;
	            margin-top: 8px;
	            background: url(../assets/images/page_icons.png) no-repeat -663px -728px;
	            cursor: pointer;
	            &:hover{
	            	background: url(../assets/images/page_icons.png) no-repeat -728px -728px;
	            }
	        }
	        
	    }
	}
	
</style>