<template>
  <div id="app">
  	<app-header></app-header>
  	<main-nav></main-nav>
		<router-view v-bind:scrollTp="scrollT" />
		<app-footer></app-footer>
		<web-login></web-login>
		<button @click="hua">ddd</button>
  </div>
</template>
<script type="text/javascript">
	
	import AppHeader from "./views/header/Header"
	import AppFooter from "./views/foot/Footer"
	import MainNav from "./components/MainNav"
	import WebLogin from "./views/Login/WebLogin"
	import { mapActions,mapState } from 'vuex'
	import debounce from "./utils/debounce.js"
	
	export default{
		components:{
			AppHeader,
			AppFooter,
			MainNav,
			WebLogin
		},
		name:"app",
		data(){
			return{
				scrollT:"推广"
			}
		},
		mounted(){
			
			window.addEventListener('scroll',debounce.debounce(()=>{
				let scrollTp = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
				if(scrollTp<747){
						this.scrollT = "推广"
						return
				}
				if(scrollTp<1162 && scrollTp>=747){
						this.scrollT = "动画"
						return
				}
				if(scrollTp<1559 && scrollTp>=1162){
						this.scrollT = "番剧"
						return
				}
				if(scrollTp>=1559){
						this.scrollT = "国创"
						return
				}
			
			}),false)
			
		},
		computed:{
			...mapState({
				Liveling: state =>state.Liveling,
				DynamicRegion: state =>state.DynamicRegion,
				Newlist: state =>state.Newlist,
				timelineGlobal: state =>state.timelineGlobal,
				bannerData: state =>state.bannerData,
				TimelineGlobal:state=>state.TimelineGlobal,
				TimelineCn:state=>state.TimelineCn,
				SearchDefaultWords:state=>state.SearchDefaultWords
				
			})

		},
		
		methods:{
			...mapActions([
				'getMenuIconData',
				'getOnlineData',
				'getLivelingData',
				'getDynamicRegionData',
				'getNewlistData',
				'getTimelineGlobalData',
				'getTimelineCnData',
				'getSearchDefaultWordsData'
			]),
			getData(){
				this.getMenuIconData(null)
				this.getLivelingData(null)
				this.getDynamicRegionData(null)
				this.getNewlistData(null)
				this.getTimelineGlobalData(null)
				this.getTimelineCnData(null)
				this.getSearchDefaultWordsData(null)
			},
			hua(){
				console.log("Liveling",this.Liveling)
				console.log("DynamicRegion",this.DynamicRegion)
				console.log("Newlist",this.Newlist)
				console.log("timelineGlobal",this.timelineGlobal)
				console.log("bannerData",this.bannerData)
				console.log("TimelineCn",this.TimelineCn)
				console.log("SearchDefaultWords",this.SearchDefaultWords)

			}
		},
		
		created(){
			this.getData()
		}
		
	}
</script>
<style lang="less">
	.clearfix{
		overflow: hidden;
	}
	.img-auto{
		width: 100%;
	}
</style>
