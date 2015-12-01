var resizeMain = function(){
	home.background.resize(window.innerWidth, window.innerHeight);
};

resizeMain();
window.addEventListener('load', resizeMain);
window.addEventListener('resize', resizeMain);