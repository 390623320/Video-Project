const data = {
	leftNav: [ //顶部左侧导航栏
		{
			name: '主站',
			class: 'home',
			icon: 'bili-icon',
			href: '/'
		},
		{
			name: '画友',
			class: 'hbili',
			href: '/huayou'
		},
		{
			name: '游戏中心',
			class: 'game',
			href: '/'
		},
		{
			name: '直播',
			class: 'live',
			href: '/'
		},
		{
			name: '会员购',
			class: 'buy',
			href: '/'
		},
		{
			name: 'BML',
			href: '/'
		},
		{
			name: '下载APP',
			class: 'mobile',
			icon: 'bili-icon',
			href: '/'
		}
	]
	}

const header = {
	namespaced: true,
  state: { 
		leftNav:data.leftNav
  },
  mutations: { 
  
  toggleinfo(state,payload){
  	state.age += payload.age,
  	state.name = payload.name,
  	state.id = payload.id
  	
  	
  }
  
  }
}
export default header 


