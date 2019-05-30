function kaliTerusRekursif(angka) {
  // you can only write your code here!
  angkaString = angka.toString();
  if(angkaString.length === 1) return parseInt(angkaString[0]);
  return parseInt(angkaString[0]) * kaliTerusRekursif(parseInt(angkaString.slice(1,angkaString.length)));
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6