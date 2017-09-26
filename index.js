1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
var uppercase, lowercase

function shout(string){
  uppercase = string.toUpperCase();
  string = uppercase;
  return uppercase;
}
function whisper(string){
  lowercase = string.toLowerCase();
  string = lowercase;
  return lowercase;
}
function logShout(string){
  uppercase = string.toUpperCase()
  string = uppercase;
  console.log(uppercase);
}
function logWhisper(string){
  lowercase = string.toLowerCase()
  string = uppercase;
  console.log(lowercase);
}
function sayHiToGrandma(string){
    if (string.toLowerCase() === string){
      return 'I can\'t hear you!';
    }
    if (string.toUpperCase() === string){
      return 'YES INDEED!';
    }
    if (string === 'I love you, Grandma.'){
      return 'I love you, too.';
    }
}
