(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.Parallelotris = function() {
	this.initialize();

	// Calque 1
	this.signature = new cjs.Text("", "bold 10px Calibri", "#CCCCCC");
	this.signature.textAlign = "center";
	this.signature.lineHeight = 12;
	this.signature.lineWidth = 100;
	this.signature.setTransform(411,-1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.2,1,1).p("EghVAAAMBCrAAA");
	this.shape.setTransform(210.5,180);

	this.addChild(this.shape,this.signature);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-1,468,181.1);


// symbols:
(lib.Prop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_4 = function() {
		this.stop()
	}
	this.frame_5 = function() {
		this.stop()
	}
	this.frame_6 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7));

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABliSIj0D0ACQhhIj0D0");
	this.shape.setTransform(0.4,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjNgqQAAgGAug2QAtg1AAgVQAAgNgCgGQgGgPgUAAQgJAAgTAJQgRAIgDAAQgUAAADgSQAAgPAUgLQAUgLAZABQBBABAABGQAAAhgRAXQgcAggYAgIA/AAQAcADAAARQAAASgXAAIhrgCQgPgEgDgHQgCgCAAgJIAAAAAC7BaQAAAigRAXQgcAggYAgIA/AAQAcACAAARQAAASgXAAIhrgCQgPgEgDgHQgCgCAAgJQAAgGAug1QAtg2AAgVQAAgNgDgGQgFgPgUAAQgKAAgSAJQgRAJgDAAQgUAAACgTQAAgPAVgLQAUgLAZABQBBABAABGIAAAA").cp();
	this.shape_1.setTransform(-0.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ABshcIAqATABshcIglgSAgghUIAggcAgghUIglAfAgahFIAggcAgahFIglAfAiVBJIAnAVIAiATAA3AfIghAcIgkAfAAcBMIAggaAAcBMIglAh");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("ADci8IhsBdAg0iWIAYBAIAGAPIAZBGIBtheAhqBcIhxBhAhqBcIBthdIAWA5IAHASIAVA4");
	this.shape_3.setTransform(-0.3,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AhYglIAeAqIAWAhABZglIgXAkIgVAg");
	this.shape_4.setTransform(-1.6,3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AhYjmIBfCXIBniSAg8ARIiSDNAg8ARIBDhgIA5BXICPDfAgvBkIBcAAAgvCGIBcAA");
	this.shape_5.setTransform(-1.4,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AggjsIAACAIDXAAAgghsIAAA7IA7AAIAAgzAgggxIAAEeAi2hsICWAA");
	this.shape_6.setTransform(3.4,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AhMgcICZAAAhMAdICZAA");
	this.shape_7.setTransform(11.5,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag2hnQATgLAaABQA/ABAABGQAAAhgSAVQgbAggWAgIA9AAQAcADAAARQAAASgXAAIhqgCQgOgEgEgHQgBgCAAgJQAAgGAug2QArgzAAgVQAAgNgDgGQgFgPgSAAQgKAAgSAJQgRAIgEAAQgTAAACgSQAAgPAVgLIAAAA").cp();
	this.shape_8.setTransform(-13.4,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcgTQgJASgSAjIBHAAQAAg6ACgdIAAgRQgeARgQAiIAAAAAA5heQABACgCA6IAABBIAaAAQAMAAAFAIIADAJQAAAYgugEQAAACAAAUQgEAUgUAAQgbAAABgQQAAgDAKgVIhVAAQgZgGgGgIQgBgCAAgLQA3iYA1AAQAtAAAFAPIAAAA").cp();
	this.shape_9.setTransform(-13.9,-2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AjFB/IA9AAIAABGAjLjIIAAGRIGXAA");
	this.shape_10.setTransform(2.3,-2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABIhCQAAAtgdARQAWAPAHAQQAFALAAAVQAAA8hNACQhMACAAgrQgBgFADgEQAFgLARAAQALAAAJAHQAPANACACIAWAAQANgIALgFQAHgDAAgHQAAgggsgHQgugIAAgPQAAgPArgIQAogJAAgeQAAgDgdgOIggAAQgCADgIAFQgJADgDAAQgSAAAAgUQgBgIAGgHQANgOAnAAQAsAAAYAWQARAQAAAQIAAAA").cp();
	this.shape_11.setTransform(4.7,-1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEg+QgiAZgLAAQgNAAgEgJQgCgDAAgEQBDhFATAZQAKALgBAwQAAAlgDAmQgBASgCAOQAwAEAAAQQAAAHgDADQgIAGgVAAQhHAAgSgJQgGgDAAgLQAAgQAvAAQAAgDAAgDQABgWAGgqIAAg6").cp();
	this.shape_12.setTransform(5.3,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_9},{t:this.shape_7}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_12},{t:this.shape_10}]},1).wait(1));

	// Fond
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#00E2A8","#33FFFF"],[0,1],23.2,-22.6,-23,22.7).s().p("ADIlEQB9AAAAB9IAAGPQAAB9h9AAImPAAQh9AAAAh9IAAmPQAAh9B9AAIGPAAAETjHQAAhLhLAAImPAAQhLAAAABLIAAGPQAABLBLAAIGPAAQBLAAAAhLIAAmP").cp();

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#00E2A8","#33FFFF"],[0,1],-27.4,0,27.5,0).s().p("AETjHIAAGPQAABLhLAAImPAAQhLAAAAhLIAAmPQAAhLBLAAIGPAAQBLAAAABLIAAAA").cp();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-32.4,65,65);


(lib.Piece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_4 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4));

	// Calque 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("AAPi7Ii7BlIgsCPIGxCDIjKl3").cp();
	this.shape_15.setTransform(-1.5,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("ADhhvIhxDfIlQAAIBxjfIFQAA").cp();

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,1,1).p("ADPhsImdAAIAADZIGdAAIAAjZ").cp();
	this.shape_17.setTransform(0,0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("AB5ABIh4jzIh5DyIB4DzIB5jy").cp();
	this.shape_18.setTransform(0.3,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,1,1).p("ACWiVIAAErIkrAAIAAkrIErAA").cp();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	// Fond
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FAE2A8","#FF9966"],[0,1],-27.4,0,27.5,0).s().p("AETjHIAAGPQAABLhLAAImPAAQhLAAAAhLIAAmPQAAhLBLAAIGPAAQBLAAAABLIAAAA").cp();

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FAE2A8","#FF9966"],[0,1],23.2,-22.6,-23,22.7).s().p("AETjHQAAhLhLAAImPAAQhLAAAABLIAAGPQAABLBLAAIGPAAQBLAAAAhLIAAmPADIlEQB9AAAAB9IAAGPQAAB9h9AAImPAAQh9AAAAh9IAAmPQAAh9B9AAIGPAA").cp();

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFA00","#FFCF00"],[0,1],23.2,-22.6,-23,22.7).s().p("AETjHQAAhLhLAAImPAAQhLAAAABLIAAGPQAABLBLAAIGPAAQBLAAAAhLIAAmPADIlEQB9AAAAB9IAAGPQAAB9h9AAImPAAQh9AAAAh9IAAmPQAAh9B9AAIGPAA").cp();

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FFFF00","#FFCC00"],[0,1],-27.4,0,27.5,0).s().p("AETjHIAAGPQAABLhLAAImPAAQhLAAAAhLIAAmPQAAhLBLAAIGPAAQBLAAAABLIAAAA").cp();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).to({state:[{t:this.shape_23},{t:this.shape_22}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-32.4,65,65);


(lib.Flash = function() {
	this.initialize();

	// Calque 1
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFF00").ss(2,1,1).p("ABLhKIAACVIiVAAIAAiVICVAA").cp();

	this.addChild(this.shape_24);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.4,-7.4,15,15);


(lib.Tranforme = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_14 = function() {
		fond2.removeAllChildren();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14));

	// Boom
	this.instance = new lib.Flash();
	this.instance.setTransform(0,0,0.467,0.467);
	this.instance.shadow = new cjs.Shadow("#FF0000",0,0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.91},0).wait(1).to({scaleX:1.43,scaleY:1.43,alpha:0.828},0).wait(1).to({scaleX:1.88,scaleY:1.88,alpha:0.75},0).wait(1).to({scaleX:2.3,scaleY:2.3,alpha:0.68},0).wait(1).to({scaleX:2.7,scaleY:2.7,alpha:0.609},0).wait(1).to({scaleX:3.07,scaleY:3.07,alpha:0.551},0).wait(1).to({scaleX:3.42,scaleY:3.42,alpha:0.488},0).wait(1).to({scaleX:3.74,scaleY:3.74,alpha:0.43},0).wait(1).to({scaleX:4.04,scaleY:4.04,alpha:0.379},0).wait(1).to({scaleX:4.31,scaleY:4.31,alpha:0.328},0).wait(1).to({scaleX:4.56,scaleY:4.56,alpha:0.289},0).wait(1).to({scaleX:4.79,scaleY:4.79,alpha:0.25},0).wait(1).to({scaleX:4.99,scaleY:4.99,alpha:0.219},0).wait(1).to({scaleX:5.17,scaleY:5.17,alpha:0.191},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-3.4,7,7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
