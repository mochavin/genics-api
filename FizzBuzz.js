for (let i = 1; i <= 100; i++) {
  let genics = "";
  if (i % 3 == 0) {
    genics += "Fizz";
  } 
  if (i % 5 == 0) {
    genics += "Buzz";
  }
  if(genics == "") {
    genics = i;
  }
  console.log(genics);
}
