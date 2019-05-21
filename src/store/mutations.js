const mutations = {
	
  	setBannerData(state,payload){
  		
		state.bannerData = payload.data
		state.adImg = payload.data[29][0]
  		
  	},
  	setRecommendData(state,payload){
  		
		state.RecommendData = payload.data
		
  	},
  	setMenuIcon(state,payload){
  		
		state.MenuIcon = payload.data
		
  	},
  	setOnline(state,payload){
  		
		state.Online = payload.data
		
  	},
  	setLiveling(state,payload){
  		
		state.Liveling = payload.data
		
  	},
  	setDynamicRegion(state,payload){
  		
		state.DynamicRegion = payload.data.archives
		state.animationData = payload.data.archives
		
  	},
  	setNewlist(state,payload){
  		
		state.Newlist = payload.data.archives
		
  	},
  	setTimelineGlobal(state,payload){
  		
		state.timelineGlobal = payload.result
		state.TimelineGlobalData = payload.result.slice(0,12)
		state.rankBangumi = payload.result.slice(15,22)
		
  	},
  	changeAnimationData(state,payload){
  		
		state.animationData = payload
		
  	},
  	setTimelineCn(state,payload){
		state.TimelineCnData = payload.result
		state.TimelineCn = payload.result.slice(0,12)
		state.rankCn = payload.result.slice(15,22)
		
  	},
  	changeTimelineCn(state,payload){
  		
		state.TimelineCn = state.TimelineCnData.slice(payload.start,payload.end)
		
  	},
  	changeTimelineGlobal(state,payload){
  		
		state.TimelineGlobalData = state.timelineGlobal.slice(payload.start,payload.end)
		
  	},
  	setSearchDefaultWords(state,payload){

		state.SearchDefaultWords = payload.data.show_name

  	},
  	setLoginState(state,payload){
  		state.islogin  = payload
  	},
  	setOdlVolume(state,payload){
  		state.odlVolumeData  = payload
  	}
  	
  }

export default mutations