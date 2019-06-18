// function kaliTerusRekursif(angka) {
//   // you can only write your code here!
//   let angkaString = angka.toString();
//   if(angkaString.length === 1)return parseInt(angkaString[0]);
//   console.log('angka',angka);
//   let hasil = kaliTerusRekursif(parseInt(angkaString[0]) * kaliTerusRekursif(parseInt(angkaString.slice(1,angkaString.length))));
//   return hasil;
// }

function kaliTerusRekursif(angka) {
  // you can only write your code here!
  let angkaString = angka.toString();
  let hasil = kaliRekursif(angka);
  let hasilString = hasil.toString();
  if(hasilString.length > 1){
    hasil = kaliTerusRekursif(hasil);
  }
  return hasil;
  
}
function kaliRekursif(angka) {
  // you can only write your code here!
  angkaString = angka.toString();
  if(angkaString.length === 1) return parseInt(angkaString[0]);
  return parseInt(angkaString[0]) * kaliRekursif(parseInt(angkaString.slice(1,angkaString.length)));
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(2347)); // 6
console.log(kaliTerusRekursif(3333)); // 8