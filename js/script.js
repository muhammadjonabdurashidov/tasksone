// 1-masala\

// function foo(i){
//   console.log(i ? "Yes" : "No")  
// }

// foo(true)


//2-masala

 const numbers = [1, -1, 1, -1, 1, -1, 1];
  const yes = [];
 const no = [];

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] === 1){
    yes.push(numbers[i]);
   }
   else{
     no.push(numbers[i]);
   }
}

console.log(yes);
console.log(no);
