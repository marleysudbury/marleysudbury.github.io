var axiom = "F-G-G";
var sentence = axiom;
var rules = [];
rules[0] = {
  a: "F",
  b: "F-G+F+G-F"
}
rules[1] = {
  a: "G",
  b: "GG"
}
var len = 200;
var angle;

function generate(){
  len *= 0.5
  var nextsentence = "";
  for (var i = 0; i < sentence.length; i++){
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++){
      if (current == rules[j].a) {
        found = true;
        nextsentence += rules[j].b;
        break;
      }
    }
    if (!found){
      nextsentence += current;
    }
  }
  sentence = nextsentence;
  createP(sentence);
  turtle();
}

function turtle(){
  background(51);
  resetMatrix();
  translate(width / 2, height);
  stroke(255);
  for (var i = 0; i < sentence.length; i++){
    var current = sentence.charAt(i);
    if (current == "F"){
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == "G"){
	  line(0, 0, 0, -len);
	  translate(0, -len);
	} else if (current == "+"){
      rotate(angle);
    } else if (current == "-"){
      rotate(-angle);
    } else if (current == "["){
      push();
    } else if (current == "]"){
      pop();
    }
  }
}

function setup(){
  angle = radians(120);
  createCanvas(400, 400);
  background(51)
  createP(axiom);
  turtle();
  var button = createButton("generate");
  button.mousePressed(generate);
}

function draw(){

}
