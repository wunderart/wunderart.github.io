var angle = 0;
var loading = true;

function setup(argument) {

	createCanvas(windowWidth, windowHeight);
	let content = select(".fixed-menu");
	
	
	
	this.postAnimationDelay=1500
	setTimeout(function(){
		content.style.display="block";
	}, 5000);
}


function draw(argument) {

	if(loading){
		background(51);
		translate(width/2, height/2);
		rotate(angle);
		strokeWeight(4);
		stroke(255);
		line(0,0,100,0);
		angle+=0.1;
	}
	else 
		background(255,255);

}