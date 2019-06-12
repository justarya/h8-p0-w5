function changeVocals (str) {
  //code di sini
  let change = [
    ['a','b'],['i','j'],['u','v'],['e','f'],['o','p'],['A','B'],['I','J'],['U','V'],['E','F'],['O','P']
  ];
  str = str.split("");
  for(let i in str){
    for(let j in change){
      if(str[i] === change[j][0]){
        str[i] = change[j][1];
      }
    }
  }
  return str.join("");
}

function reverseWord (str) {
  //code di sini
  let word = "";
  for(let i in str){
    word += str[str.length-1-i];
  }
  return word;
}

function setLowerUpperCase (str) {
  //code di sini
  str = str.split("");
  for(let i in str){
    if(str[i] === str[i].toLowerCase()){
      str[i] = str[i].toUpperCase();
    }else if(str[i] === str[i].toUpperCase()){
      str[i] = str[i].toLowerCase();
    }
  }
  return str.join("");
}

function removeSpaces (str) {
  //code di sini
  str = str.split(" ");
  return str.join("");
}

function passwordGenerator (name) {
  if(name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }else{
    let changeVocalsStr = changeVocals(name);
    let reverseWordStr = reverseWord(changeVocalsStr);
    let setLowerUpperCaseStr = setLowerUpperCase(reverseWordStr);
    let finalStr = removeSpaces(setLowerUpperCaseStr);
    return finalStr;
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'