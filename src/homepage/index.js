import 'index';

'use strict';

const Homepage = class Me {

	static instance = null;

	visitors = 0;

	constructor() {
		
	}

	static getInstance() {
		if (!Me.instance) {
			Me.instance = new Me();
		}
		Me.instance.visitors ++;
		return Me.instance;
	}

	init() {
		document.write(this.visitors);
	}

}

export default (() => {
	
	return Homepage.getInstance();

})();