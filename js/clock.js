(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 35,
	height: 35,
	fps: 24,
	color: "#00FF00",
	manifest: []
};



// symbols:



(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBVIAAipIARAAIAACpg");
	this.shape.setTransform(0,-9.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-18,2,17);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBLIAAiVIAlAAIAACVg");
	this.shape.setTransform(0,-7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-15,4,15);


(lib.clockM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(-0.2,0.1,1,1,0,0,0,-0.2,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:180,y:0},9).to({rotation:270,x:-0.1},5).to({regY:-2.3,scaleX:1,scaleY:1,rotation:345,x:-0.2},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-15.7,2,17);


(lib.clockH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-0.2,0.1,1,1,0,0,0,-0.2,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:180,y:0},119).to({rotation:270,x:-0.1},60).to({rotation:360,x:-0.2,y:0.1},60).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006644").s().p("Ah7B7QgzgzABhIQgBhHAzg0QA0gzBHABQBIgBAzAzQAzA0AABHQAABIgzAzQgzAzhIAAQhHAAg0gzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-17.5,35,35);


(lib.clock_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.clockM();

	// Layer 1
	this.instance_1 = new lib.clockH();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.5,-17.5,35,35);


// stage content:
(lib.clock = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.clock_1();
	this.instance.setTransform(17.5,17.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(17.5,17.5,35,35);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;