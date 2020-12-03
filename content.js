//style elements
var elements = document.getElementsByTagName('*');
var elements1 = document.getElementsByTagName('body');
var elements2 = document.getElementsByTagName('header');
var elements_h1 = document.getElementsByTagName('h1');
var elements_p = document.getElementsByTagName('div');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  // console.log( element );
  // element.style.setProperty('border', 'solid 1px red');

  // rgb("255, 189, 210");
  // var r = Math.floor(Math.random()*255);
  // var g = Math.floor(Math.random()*200);
  // var b = Math.floor(Math.random()*200);
  // var c = "rgb(" + 255 + "," + 189 + "," + 210 + ")";

  // changes background to pink
  // var c = [ '#ffd9ee'];
  // element.style.setProperty('background-color', c);
  //changes text color to predefined shades of pink
  var fc = [ '#eb63a9', '#e0348d' ];
  var random_fc = fc[Math.floor(Math.random() * fc.length)];
  element.style.setProperty('color', random_fc);

  //font change
  // element.style.setProperty('font-family', "Comic Sans MS");
  // element.style.setProperty('font-family', "Lucida Console");
}
for (var i = 0; i < elements1.length; i++) {
  var element1 = elements1[i];
  var c1 = [ '#ffd9ee'];
  element1.style.setProperty('background-color', c1);
}
for (var i = 0; i < elements2.length; i++) {
  var element2 = elements2[i];
  var c2 = [ '#ffd9ee'];
  element2.style.setProperty('background-color', c2);
}
//H1 ELEMENTS

for (var i = 0; i < elements_h1.length; i++) {
  var element_h1 = elements_h1[i];

  var fs1 = ["Comic Sans MS", "Arial Black"];
  var random_fs1 = fs1[Math.floor(Math.random() * fs1.length)];
  element_h1.style.setProperty('font-family', random_fs1);
}

//DIV ELEMENTS

for (var i = 0; i < elements_p.length; i++) {
  var element_p = elements_p[i];

  var fs2 = ["Lucida Console", "Courier New"]
  var random_fs2 = fs2[Math.floor(Math.random() * fs2.length)];
  element_p.style.setProperty('font-family', random_fs2);
}

//Content replacement
var html = document.querySelector('html');
var walker = document.createTreeWalker(html,NodeFilter.SHOW_TEXT);

var node;
while (node = walker.nextNode()){
// node.nodeValue = node.nodeValue.replace(/trump/gi,'Some Guy');
node.nodeValue = node.nodeValue.replace(/pepsi/gi,'bepis');
node.nodeValue = node.nodeValue.replace(/dog/gi,'doggo');
node.nodeValue = node.nodeValue.replace(/puppy/gi,'pupper');
node.nodeValue = node.nodeValue.replace(/small/gi,'smol');
node.nodeValue = node.nodeValue.replace(/crying/gi,'pepehands');
node.nodeValue = node.nodeValue.replace(/people/gi,'gamers');
node.nodeValue = node.nodeValue.replace(/person/gi,'gamer');
}

var audio = document.createElement('audio');
audio.src = 'https://temporarysitefortwineprojects.weebly.com/uploads/1/3/5/1/135107907/the_burn_marks_on_my_epiano_wont_go_away.mp3';
audio.loop = true;
audio.play();
