class RouterComponent{

	constructor() {}

	home(resolve) {
		return require(['../views/home/Home'], resolve);
	}
	
	playview(resolve) {
		return require(['../views/playView/PlayView'], resolve);
	}
	bullet(resolve) {
		return require(['../views/playView/bullet'], resolve);
	}

}

export default new RouterComponent();
