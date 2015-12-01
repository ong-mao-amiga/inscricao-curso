var home = {
	background: document.querySelector('picture img')
};

home.background.resize = function(width, height){
	this.style.width = width + 'px';
	this.style.height = height + 'px';
};