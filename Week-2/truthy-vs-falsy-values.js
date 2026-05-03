if ("Hello") {
  console.log("This is a truthy value");
}

if (0) {
  //it will never run
  console.log("This is a falsy value");
}

//AND
console.log(0 && "Hello"); //0- returns first fasly value
console.log("Hi" && "Hello"); //"Hello" (both truthy value is returnde)

//OR
console.log(0 || "Hello"); // "Hello" , 0 is falsy, moves to "Hello"
console.log(null || undefined); // undefined , both falsy, returns last
console.log("" || 42); // 42 , "" is falsy, moves to 42
console.log(100 || 200); // 100 , stops immediately, 100 is truthy
