//Temperature Conversion Star
let celsius = 25; 
let fhrenheit;
let fahrenheit = (celsius * 9/5) + 32;


console.log(fahrenheit); 
//Temperature Conversion End


// Swapping Variables start
 let a = 5;
 let b = 10;
 let x= a;
 a=b;
 b=x;

 console.log(a); // Should print 10
 console.log(b); // Should print 5 
// Swapping Variables End

//Simple Interest Calculation Start
let principal = 1000; 
let rate = 5;         
let time = 2;         
let simpleInterest;
simpleInterest = (principal * rate * time) / 100;
console.log(simpleInterest); 

//Simple Interest Calculation End

// Sum of Natural Numbers Start
 let n=10;
 let sum=0;
 for (let i=1; i<=n; i++) {
    sum=sum+i;
 }
 console.log(sum);
// Sum of Natural Numbers End

//Even Number Star
 for (let n = 2; n <= 100; n += 2) {
    console.log(n);
 }
//Even Number End

 //Student Object Start
   let student = {
    name: "John",
    age: 16,
    grade: 10
   };
   function print(student) {
     console.log(`${student.name} is ${student.age} years old and in grade ${student.grade}`);
   }

   print(student); 
  //Student Object End

 // Updating Object Properties end 
   let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2018
   };
  
   function updateCarYear(car, newYear) {
    car.year = newYear; 
    console.log(car); 
   }
   updateCarYear(car, 2022);
  // Updating Object Properties end 
  
  //Product List start
   let products = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Shoes", price: 100, category: "Fashion" }
   ];
  
  
   for (let i = 0; i < products.length; i++) {
    console.log(`Name: ${products[i].name}, Price: $${products[i].price}`);
   }
  //Product List End

  //Calculate Total Price star
   let products2 = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Shoes", price: 100, category: "Fashion" }
   ];
   let totalPrice = 0;
  
  
   for (let i = 0; i < products2.length; i++) {
    totalPrice += products2[i].price; 
   }
  
   console.log(totalPrice); 
  
  //Calculate Total Price End