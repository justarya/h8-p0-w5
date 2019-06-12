function totalDigitRekursif(angka) {
  // you can only write your code here!
  let angkaString = angka.toString();
  if(angkaString.length === 1){
    return Number(angkaString[angkaString.length-1]);
  }
  let trimAngka = Number(angka.toString().slice(1,angka.toString().length));
  return Number(angka.toString()[0]) + totalDigitRekursif(trimAngka);
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5