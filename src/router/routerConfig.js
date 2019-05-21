//导入路由组件
import routerComponent from './routerComponent.js';

//导出路由配置
export default [

	{
		path: '/',
		name: 'home',
		component: routerComponent.home,
		
	},
	{
		path: '/playview',
		name: 'playview',
		component: routerComponent.playview,
		
	},
	{
		path: '/bullet',
		name: 'bullet',
		component: routerComponent.bullet,
		
	}

]