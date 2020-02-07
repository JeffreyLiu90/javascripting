

let camelCase= function(words) {

  words = words.split(" ");
  newWord = [];
  for ( var i = 0; i < words.length; i++) {
  
    newWord.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    joinWord = newWord.join("");
  }
  return joinWord.charAt().toLowerCase() + joinWord.slice(1); // changes first letter to lowercase and then adds the rest of the word
} 

let pascal = function(words) {
  words = words.split(" ") // splits the spaces by commas
  newWord = [];
  for ( var i = 0; i < words.length; i++) {
  
    newWord.push(words[i].charAt(0).toUpperCase() + words[i].slice(1)); // continously pushes the words of the string- showing first letter to upper case and then joining the rest of the word
    joinWord = newWord.join(""); // join the words together with no space
  }
  return joinWord;
} 

let snake = function(words) {
  wordOne = words.replace(/ /g, "_"); // the / /g means to replace all matches, not just after the first one. Alternative method is str.split(' ').join('_')
  return wordOne;
}

let kebab = function(words) { 
  wordOne = words.replace(/ /g, "-");
  return wordOne;
}

let title = function(words) { 
  words = words.split(" ");
  newWord = [];
  for (var i = 0; i < words.length; i++) {
    newWord.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    joinWord = newWord.join(" "); // join the words together with space
  
  } return joinWord;
}

let vowels = function(words) {
  return words.toLowerCase().replace(/[aeiou]/g, function(l) {
    return l.toUpperCase();
  });
}

let consonant = function(words) {
  return words.toLowerCase().replace(/[bcdfghjklmnpqrstvwxz]/g, function(l) {
    return l.toUpperCase();
  });
}

let capital = function(words) {
  wordOne = words.replace(/ /g, "_"); // the / /g means to replace all matches, not just after the first one. Alternative method is str.split(' ').join('_')
  return wordOne.toUpperCase();
}

const makeCase = function(input, type) {
  string = "";
if (type === "camel") {
  string = camelCase(input);
} else if( type === "pascal") {
  string = pascal(input);
} else if (type === "snake") {
  string = snake(input);
} else if(type === "kebab") {
string = kebab(input); 
} else if(type === "title") {
  string = title(input)
} else if(type === "vowel") {
  string = vowels(input);
} else if(type=== "consonant") {
  string = consonant(input)
} else if(type === "upper", "snake") {
  string = capital(input);
}
return string;
} 


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

