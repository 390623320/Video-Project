import {getTimelineGlobal,getLocs,getRankingIndex,getMenuIcon,getOnline,getLiveling,getDynamicRegion,getNewlist,getTimelineCn,getSearchDefaultWords} from '../api/api'
const actions = {
	
  	getBannerDate (context,parmas) {
  		getLocs(parmas).then( (res)=>{
					 context.commit('setBannerData',res)
				})
     
   },
   getRecommend (context,params) {
  		getRankingIndex(params).then( (res)=>{
					 context.commit('setRecommendData',res)
				})
     
   },
   getMenuIconData (context,params) {
  		getMenuIcon(params).then( (res)=>{
					 context.commit('setMenuIcon',res)
				})
     
   },
   getOnlineData (context,params) {
  		getOnline(params).then( (res)=>{
					 context.commit('setOnline',res)
				})
     
   },
   getLivelingData (context,params) {
  		getLiveling(params).then( (res)=>{
					 context.commit('setLiveling',res)
				})
     
   },
   getDynamicRegionData (context,params) {
  		getDynamicRegion(params).then( (res)=>{
					 context.commit('setDynamicRegion',res)
				})
     
   },
   getNewlistData (context,params) {
  		getNewlist(params).then( (res)=>{
					 context.commit('setNewlist',res)
				})
     
   },
   getTimelineGlobalData (context,params) {
  		getTimelineGlobal(params).then( (res)=>{
					 context.commit('setTimelineGlobal',res)
				})
     
   },
     getTimelineCnData (context,params) {
  		getTimelineCn(params).then( (res)=>{
					 context.commit('setTimelineCn',res)
				})
     
   },
    getSearchDefaultWordsData (context,params) {
  		getSearchDefaultWords(params).then( (res)=>{
					 context.commit('setSearchDefaultWords',res)
				})
     
   }
   
   
   
   
   
 }
	

export default actions