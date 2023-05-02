(function (lib, img, cjs) {
  var p; // shortcut to reference prototypes

  // stage content:
  (lib.Puzzle2D_Controle = function () {
    this.initialize();

    // Grille
    this.tourner = new lib.H();
    this.tourner.setTransform(75, 32.6, 1, 1, 0, 0, 0, 20, -22.4);

    this.Gauche = new lib.Symbole1();
    this.Gauche.setTransform(29, 75, 1, 1, -89.9, 0, 0, 0, 30);

    this.Bas = new lib.Symbole1();
    this.Bas.setTransform(75, 121, 1, 1, 180, 0, 0, 0, 30);

    this.Droite = new lib.Symbole1();
    this.Droite.setTransform(121, 75, 1, 1, 90, 0, 0, 0, 30);

    this.addChild(this.Droite, this.Bas, this.Gauche, this.tourner);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = new cjs.Rectangle(5, 10, 140, 135);

  // symbols:
  (lib.H = function () {
    this.initialize();

    // Calque 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(4, 1, 1)
      .p(
        "AggCCQgpgKgfgfQgsgsAAg8QAAg+AsgsQAsgsA8AAQA+AAAsAsQAlAlAGAyAAACFIgwgyAAACIIhEAe"
      );
    this.shape.setTransform(20.5, -22.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .rf(["#0037C8", "#FFF3AA"], [0, 0.722], -0.4, 0.3, 0, -0.4, 0.3, 30.6)
      .s()
      .p(
        "AgcCDQgpgJgfgfQgsgtAAg8QAAg+AsgsQAtgsA8AAQA+AAAsAsQAkAmAHAxQgHgxgkgmQgsgsg+AAQg8AAgtAsQgsAsAAA+QAAA8AsAtQAfAfApAJIAAAAADIjgIAAHBImPAAIAAnBIGPAAAAFCHIgxgyIAxAyAAFCJIhFAeIBFge"
      )
      .cp();
    this.shape_1.setTransform(20, -22.4);

    this.addChild(this.shape_1, this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = new cjs.Rectangle(0, -44.9, 40, 45);

  (lib.Symbole1 = function () {
    this.initialize();

    // Calque 1
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000066")
      .s()
      .p(
        "ACWhRIhqAAQgJAAgIAFQgIAGgEAKQgDAJADAJIBPESIi7AAIBPkSQACgJgDgJQgDgKgIgGQgIgFgKAAIhpAAICWiWICVCW"
      )
      .cp();
    this.shape_2.setTransform(0, 30.5, 0.8, 0.8);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .lf(["#0037C8", "#FFF3AA"], [0, 1], 0, -25.4, 0, 25.6)
      .s()
      .p(
        "ACXhLIiWiWIiWCWIBpAAQAKAAAIAGQAIAFADAKQADAJgCAKIhPESIC7AAIhPkSQgCgKADgJQADgKAIgFQAIgGAKAAIBqAAAABkrQANAAAJAJIDfDgQAJAJAAANQAAAMgJAKQgJAIgMAAIiMAAIBPETQADAJgDAKQgEAJgIAFQgIAGgJAAIkNAAQgJAAgIgGQgIgFgEgJQgDgKADgJIBPkTIiMAAQgMAAgJgIQgJgKAAgMQAAgNAJgJIDijgQAJgJALAAIAAAA"
      )
      .cp();
    this.shape_3.setTransform(0, 30, 0.8, 0.8);

    this.addChild(this.shape_3, this.shape_2);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = new cjs.Rectangle(-20.4, 6, 40.9, 48);
})((lib = lib || {}), (images = images || {}), (createjs = createjs || {}));
var lib, images, createjs;
