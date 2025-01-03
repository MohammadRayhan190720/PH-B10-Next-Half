## Here are the top 5 interview questions about variables in JavaScript, along with concise answers:

---

### **1. What are the different ways to declare variables in JavaScript?**
**Answer:**  
JavaScript provides three ways to declare variables:  
- `var`: Function-scoped or globally scoped. Can be re-declared and updated.  
- `let`: Block-scoped. Cannot be re-declared in the same scope but can be updated.  
- `const`: Block-scoped. Cannot be re-declared or updated. Used for constants.

---

### **2. What is the difference between `var`, `let`, and `const`?**  
**Answer:**  
- **Scope**:  
  - `var`: Function-scoped.  
  - `let` and `const`: Block-scoped.  
- **Re-declaration**:  
  - `var`: Can be re-declared.  
  - `let` and `const`: Cannot be re-declared in the same scope.  
- **Hoisting**:  
  - `var`: Hoisted and initialized with `undefined`.  
  - `let` and `const`: Hoisted but not initialized (accessing before initialization causes a `ReferenceError`).  
- **Mutation**:  
  - `const`: Value cannot be reassigned, but object properties can be modified.  
  - `let` and `var`: Can be reassigned.

---

### **3. What is variable hoisting in JavaScript?**
**Answer:**  
Variable hoisting is a behavior where variable declarations are moved to the top of their scope during the compile phase. For example:  
```javascript
console.log(a); // undefined
var a = 5;
```  
Here, `a` is hoisted, so the code behaves as:  
```javascript
var a;
console.log(a); // undefined
a = 5;
```  
For `let` and `const`, accessing them before declaration throws a `ReferenceError`.

---

### **4. What is the temporal dead zone (TDZ)?**
**Answer:**  
The Temporal Dead Zone is the time between the hoisting of a variable and its initialization. For variables declared with `let` and `const`, accessing them before their declaration in the code will result in a `ReferenceError`.  
```javascript
console.log(x); // ReferenceError
let x = 10;
```

---

### **5. How can you check if a variable is undefined in JavaScript?**  
**Answer:**  
You can check if a variable is undefined using:  
1. **Equality check**:  
   ```javascript
   if (typeof variable === 'undefined') {
       console.log('Variable is undefined');
   }
   ```  
2. **Direct comparison**:  
   ```javascript
   if (variable === undefined) {
       console.log('Variable is undefined');
   }
   ```  
   Note: Ensure the variable is declared before this check to avoid a `ReferenceError`.

--- 

## Here are the top 5 interview questions about **Data Types** in JavaScript, along with answers:

---

### **1. What are the different data types in JavaScript?**  
**Answer:**  
JavaScript has **7 primitive types** and **1 non-primitive type**:  
- **Primitive types**:  
  1. `String` - Represents text (e.g., `"hello"`)  
  2. `Number` - Represents numbers (e.g., `42`, `3.14`)  
  3. `BigInt` - For large integers beyond `Number.MAX_SAFE_INTEGER`  
  4. `Boolean` - Represents `true` or `false`  
  5. `Undefined` - A variable that is declared but not assigned a value  
  6. `Null` - Represents an empty or non-existent value  
  7. `Symbol` - A unique and immutable value used as object property keys  

- **Non-primitive type**:  
  - `Object` - A collection of key-value pairs (e.g., `{ name: "John" }`), including arrays and functions.

---

### **2. What is the difference between `null` and `undefined`?**  
**Answer:**  
- `null`: Represents an intentional absence of value. It's an object type.  
  ```javascript
  let x = null; // x is explicitly set to have no value.
  ```
- `undefined`: Indicates that a variable has been declared but not yet assigned a value or does not exist in scope.  
  ```javascript
  let y; // y is undefined as no value has been assigned.
  ```

Key Difference:  
- `null` is an intentional empty value, while `undefined` typically signals a variable that has yet to be assigned.

---

### **3. What are the differences between `==` and `===` when comparing data types?**  
**Answer:**  
- **`==` (Loose Equality)**: Compares values after type conversion.  
  ```javascript
  '5' == 5; // true (string '5' is converted to a number)
  ```  
- **`===` (Strict Equality)**: Compares values without type conversion.  
  ```javascript
  '5' === 5; // false (string and number are not the same type)
  ```  

For more predictable results, always use `===` to avoid unexpected type coercion.

---

### **4. How does JavaScript handle dynamic typing?**  
**Answer:**  
JavaScript is a dynamically typed language, meaning the type of a variable is determined at runtime and can change.  
```javascript
let x = 10;       // x is a Number
x = "hello";      // x is now a String
x = true;         // x is now a Boolean
```  
Variables can hold values of any data type without explicit declaration, making JavaScript flexible but also prone to type-related errors.

---

### **5. What are `NaN`, `Infinity`, and `-Infinity` in JavaScript?**  
**Answer:**  
- **`NaN` (Not-a-Number)**: Indicates an invalid number operation.  
  ```javascript
  let result = "abc" / 2; // NaN
  console.log(isNaN(result)); // true
  ```  

- **`Infinity`**: Represents a value greater than the largest possible number in JavaScript.  
  ```javascript
  let result = 1 / 0; // Infinity
  console.log(result); // Infinity
  ```

- **`-Infinity`**: Represents a value smaller than the smallest possible number in JavaScript.  
  ```javascript
  let result = -1 / 0; // -Infinity
  console.log(result); // -Infinity
  ```

Both `Infinity` and `-Infinity` are special values of the `Number` type.

--- 

### Here are the **top 5 interview questions** about **Conditionals** in JavaScript with answers:

---

### **1. What are the different types of conditional statements in JavaScript?**  
**Answer:**  
JavaScript provides the following conditional statements:  
1. **`if` statement**: Executes a block of code if a specified condition is true.  
   ```javascript
   if (a > b) { console.log("a is greater than b"); }
   ```  

2. **`if-else` statement**: Executes one block if the condition is true, otherwise executes another.  
   ```javascript
   if (a > b) { console.log("a is greater"); } 
   else { console.log("b is greater"); }
   ```  

3. **`else if` ladder**: Handles multiple conditions sequentially.  
   ```javascript
   if (a > b) { console.log("a is greater"); } 
   else if (a === b) { console.log("a is equal to b"); } 
   else { console.log("b is greater"); }
   ```

4. **`switch` statement**: Evaluates an expression and matches it against multiple cases.  
   ```javascript
   switch (day) {
       case 1: console.log("Monday"); break;
       case 2: console.log("Tuesday"); break;
       default: console.log("Other day");
   }
   ```

5. **Ternary operator**: A compact alternative for simple `if-else` conditions.  
   ```javascript
   let result = a > b ? "a is greater" : "b is greater";
   ```

---

### **2. What is the difference between `if-else` and `switch` statements?**  
**Answer:**  
| Feature        | `if-else`                          | `switch`                           |
|----------------|------------------------------------|------------------------------------|
| **Use Case**   | Used for range or complex conditions. | Used for exact, discrete matches.  |
| **Syntax**     | More verbose for multiple conditions. | Cleaner for multiple case checks. |
| **Comparison** | Supports any boolean condition.    | Compares a single value to cases. |

Example:  
**`if-else`** for ranges:  
```javascript
if (x < 10) { console.log("Small"); } 
else if (x <= 20) { console.log("Medium"); }
else { console.log("Large"); }
```  

**`switch`** for discrete values:  
```javascript
switch (x) {
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    default: console.log("Other");
}
```

---

### **3. What is the Ternary Operator in JavaScript, and how does it work?**  
**Answer:**  
The Ternary Operator is a shorthand for simple `if-else` statements. Its syntax is:  
```javascript
condition ? expressionIfTrue : expressionIfFalse;
```  
Example:  
```javascript
let age = 18;
let status = age >= 18 ? "Adult" : "Minor"; 
console.log(status); // "Adult"
```  
Use it for concise and readable code, but avoid nesting it for clarity.

---

### **4. What is the purpose of the `default` case in a `switch` statement?**  
**Answer:**  
The `default` case acts as a fallback when no other cases match. It is optional but recommended for completeness.  
Example:  
```javascript
let fruit = "apple";
switch (fruit) {
    case "banana": console.log("Yellow"); break;
    case "cherry": console.log("Red"); break;
    default: console.log("Unknown fruit");
}
// Output: "Unknown fruit"
```

---

### **5. Can you execute multiple conditions in a single `if` statement? If so, how?**  
**Answer:**  
Yes, you can combine multiple conditions using **logical operators**:  
1. **AND (`&&`)**: All conditions must be true.  
   ```javascript
   if (a > 0 && b > 0) { console.log("Both are positive"); }
   ```  

2. **OR (`||`)**: At least one condition must be true.  
   ```javascript
   if (a > 0 || b > 0) { console.log("At least one is positive"); }
   ```  

3. **NOT (`!`)**: Negates a condition.  
   ```javascript
   if (!isValid) { console.log("Invalid input"); }
   ```

Example:  
```javascript
let age = 25, isStudent = true;
if (age > 18 && isStudent) { 
    console.log("Eligible for student discount"); 
}
```

---

## Here are the **top 5 interview questions** about **Loops** in JavaScript with answers:

---

### **1. What are the different types of loops in JavaScript?**  
**Answer:**  
JavaScript provides the following loops for iterating over data:  

1. **`for` loop**: Iterates a specific number of times.  
   ```javascript
   for (let i = 0; i < 5; i++) {
       console.log(i); // 0, 1, 2, 3, 4
   }
   ```

2. **`while` loop**: Executes as long as the condition is true.  
   ```javascript
   let i = 0;
   while (i < 5) {
       console.log(i);
       i++;
   }
   ```

3. **`do...while` loop**: Executes the block at least once, then repeats as long as the condition is true.  
   ```javascript
   let i = 0;
   do {
       console.log(i);
       i++;
   } while (i < 5);
   ```

4. **`for...of` loop**: Iterates over iterable objects like arrays, strings, or sets.  
   ```javascript
   for (let char of "hello") {
       console.log(char); // h, e, l, l, o
   }
   ```

5. **`for...in` loop**: Iterates over enumerable properties of an object.  
   ```javascript
   let obj = { a: 1, b: 2 };
   for (let key in obj) {
       console.log(key); // a, b
   }
   ```

---

### **2. What is the difference between `for...of` and `for...in` loops?**  
**Answer:**  
| Feature          | `for...in`                          | `for...of`                           |
|------------------|-------------------------------------|-------------------------------------|
| **Usage**        | Iterates over object keys.          | Iterates over values of iterables.  |
| **Target**       | Works with objects.                 | Works with arrays, strings, maps, sets, etc. |
| **Example**      |  
**`for...in`**:  
```javascript
let obj = { a: 1, b: 2 };
for (let key in obj) { console.log(key); } // Outputs: a, b
```  
**`for...of`**:  
```javascript
let arr = [10, 20];
for (let value of arr) { console.log(value); } // Outputs: 10, 20
```

---

### **3. How can you break out of a loop in JavaScript?**  
**Answer:**  
Use the `break` statement to exit a loop prematurely when a condition is met.  
Example:  
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // Outputs: 0, 1, 2, 3, 4
}
```

---

### **4. How can you skip an iteration in a loop?**  
**Answer:**  
Use the `continue` statement to skip the current iteration and move to the next one.  
Example:  
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i); // Outputs: 0, 1, 3, 4
}
```

---

### **5. What are infinite loops, and how can you avoid them?**  
**Answer:**  
An **infinite loop** occurs when the termination condition in a loop is never met, causing the loop to run indefinitely.  

Example of an infinite loop:  
```javascript
while (true) {
    console.log("This will run forever!");
}
```

**How to avoid:**  
1. Ensure the condition eventually becomes `false`.  
2. Use proper increment/decrement operations inside the loop.  
3. Use `break` to add an exit condition.  

Example of a corrected loop:  
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++; // Increment ensures the loop ends.
}
```

---
### Here are the **Top 10 Interview Questions** about **Arrays** in JavaScript, along with answers:

---

### **1. What are arrays in JavaScript, and how do you declare them?**  
**Answer:**  
An **array** is a collection of elements stored in a single variable. Each element can be accessed by its index. Arrays can hold values of any type, including objects and other arrays.  

**Declaration:**  
```javascript
let arr = [1, 2, 3]; // Array with numbers
let arr2 = ["apple", "banana"]; // Array with strings
let arr3 = []; // Empty array
```

---

### **2. How do you add or remove elements in an array?**  
**Answer:**  
- **Adding elements:**  
  - `push()` - Adds to the end.  
  - `unshift()` - Adds to the beginning.  
  ```javascript
  let arr = [1, 2, 3];
  arr.push(4); // [1, 2, 3, 4]
  arr.unshift(0); // [0, 1, 2, 3, 4]
  ```

- **Removing elements:**  
  - `pop()` - Removes from the end.  
  - `shift()` - Removes from the beginning.  
  ```javascript
  arr.pop(); // [0, 1, 2, 3]
  arr.shift(); // [1, 2, 3]
  ```

---

### **3. What is the difference between `splice()` and `slice()` in arrays?**  
**Answer:**  
- **`splice()`**: Modifies the original array by adding/removing elements.  
  ```javascript
  let arr = [1, 2, 3, 4];
  arr.splice(1, 2); // Removes 2 elements starting at index 1 => [1, 4]
  arr.splice(1, 0, "a", "b"); // Adds "a", "b" at index 1 => [1, "a", "b", 4]
  ```

- **`slice()`**: Returns a shallow copy of a portion of the array without modifying the original array.  
  ```javascript
  let arr = [1, 2, 3, 4];
  let sliced = arr.slice(1, 3); // [2, 3]
  console.log(arr); // [1, 2, 3, 4]
  ```

---

### **4. How do you iterate through an array in JavaScript?**  
**Answer:**  
Several methods can be used to iterate:  
- **`for` loop**:  
  ```javascript
  for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
  }
  ```

- **`forEach()`**:  
  ```javascript
  arr.forEach((element) => console.log(element));
  ```

- **`for...of` loop**:  
  ```javascript
  for (let element of arr) {
      console.log(element);
  }
  ```

---

### **5. What are the methods to find elements in an array?**  
**Answer:**  
- **`indexOf()`**: Finds the index of an element.  
  ```javascript
  let arr = [1, 2, 3];
  console.log(arr.indexOf(2)); // 1
  ```

- **`includes()`**: Checks if an element exists.  
  ```javascript
  console.log(arr.includes(2)); // true
  ```

- **`find()`**: Returns the first element that matches a condition.  
  ```javascript
  console.log(arr.find((x) => x > 1)); // 2
  ```

- **`findIndex()`**: Returns the index of the first matching element.  
  ```javascript
  console.log(arr.findIndex((x) => x > 1)); // 1
  ```

---

### **6. How can you merge two or more arrays?**  
**Answer:**  
Use the **`concat()`** method or the **spread operator (`...`)**:  
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2); // [1, 2, 3, 4]
let merged2 = [...arr1, ...arr2]; // [1, 2, 3, 4]
```

---

### **7. What is the difference between `map()` and `forEach()`?**  
**Answer:**  
- **`map()`**: Creates a new array by applying a function to each element. Returns the transformed array.  
  ```javascript
  let arr = [1, 2, 3];
  let squared = arr.map((x) => x * x); // [1, 4, 9]
  ```

- **`forEach()`**: Iterates over an array but does not return a new array.  
  ```javascript
  arr.forEach((x) => console.log(x)); // Logs 1, 2, 3
  ```

---

### **8. How do you sort an array in JavaScript?**  
**Answer:**  
Use the **`sort()`** method.  
- Sorting numbers:  
  ```javascript
  let arr = [3, 1, 4];
  arr.sort((a, b) => a - b); // [1, 3, 4]
  ```

- Sorting strings:  
  ```javascript
  let arr = ["banana", "apple", "cherry"];
  arr.sort(); // ["apple", "banana", "cherry"]
  ```

---

### **9. How do you remove duplicate elements from an array?**  
**Answer:**  
Use the **`Set`** object or array methods:  
```javascript
let arr = [1, 2, 2, 3];
let unique = [...new Set(arr)]; // [1, 2, 3]
```

---

### **10. How do you flatten a nested array?**  
**Answer:**  
Use the **`flat()`** method or recursion:  
- Using `flat()`:  
  ```javascript
  let arr = [1, [2, [3, 4]]];
  console.log(arr.flat(2)); // [1, 2, 3, 4]
  ```

- Using recursion:  
  ```javascript
  function flatten(arr) {
      return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
  }
  console.log(flatten([1, [2, [3, 4]]])); // [1, 2, 3, 4]
  ```

--- 


## Here are the **Top 5 Interview Questions** about **Strings** in JavaScript, along with answers:

---

### **1. What are strings in JavaScript, and how do you declare them?**  
**Answer:**  
A **string** in JavaScript is a sequence of characters used to represent text. Strings are immutable, meaning their value cannot be changed once created.

**Declaration:**  
Strings can be enclosed in single quotes (`'`), double quotes (`"`), or template literals (`` ` ``).  
```javascript
let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, ${str2}`; // Template literal
```

---

### **2. What are some common methods for string manipulation in JavaScript?**  
**Answer:**  
Some commonly used string methods include:

1. **`length`**: Returns the number of characters in a string.  
   ```javascript
   let str = "Hello";
   console.log(str.length); // 5
   ```

2. **`toUpperCase()` / `toLowerCase()`**: Changes case.  
   ```javascript
   console.log(str.toUpperCase()); // "HELLO"
   console.log(str.toLowerCase()); // "hello"
   ```

3. **`indexOf()`**: Finds the first occurrence of a substring.  
   ```javascript
   console.log(str.indexOf("l")); // 2
   ```

4. **`substring()`**: Extracts part of a string.  
   ```javascript
   console.log(str.substring(1, 4)); // "ell"
   ```

5. **`replace()`**: Replaces part of a string.  
   ```javascript
   console.log(str.replace("l", "x")); // "Hexlo"
   ```

6. **`split()`**: Splits a string into an array.  
   ```javascript
   console.log("a,b,c".split(",")); // ["a", "b", "c"]
   ```

---

### **3. How do you concatenate strings in JavaScript?**  
**Answer:**  
Strings can be concatenated using:  
1. **`+` operator**:  
   ```javascript
   let str1 = "Hello";
   let str2 = "World";
   console.log(str1 + " " + str2); // "Hello World"
   ```

2. **Template literals (`` ` ``)**:  
   ```javascript
   console.log(`${str1} ${str2}`); // "Hello World"
   ```

3. **`concat()` method**:  
   ```javascript
   console.log(str1.concat(" ", str2)); // "Hello World"
   ```

---

### **4. How do you check if a string contains a substring?**  
**Answer:**  
- Use **`includes()`** to check if a substring exists:  
  ```javascript
  let str = "Hello World";
  console.log(str.includes("World")); // true
  ```

- Use **`indexOf()`** to find the position of the substring:  
  ```javascript
  console.log(str.indexOf("World") !== -1); // true
  ```

- Use **`startsWith()`** or **`endsWith()`** for specific positions:  
  ```javascript
  console.log(str.startsWith("Hello")); // true
  console.log(str.endsWith("World")); // true
  ```

---

### **5. What is the difference between `slice()`, `substring()`, and `substr()`?**  
**Answer:**  

| Method       | Description                                                                                 | Example                                          |
|--------------|---------------------------------------------------------------------------------------------|-------------------------------------------------|
| **`slice()`**     | Extracts a section of the string based on start and end indices. Can accept negative indices.  | `"Hello".slice(1, 4)` → `"ell"`                 |
| **`substring()`** | Similar to `slice()`, but does not accept negative indices.                             | `"Hello".substring(1, 4)` → `"ell"`             |
| **`substr()`**    | Extracts a substring based on a start index and length (deprecated).                    | `"Hello".substr(1, 3)` → `"ell"`                |

---

## Here are the **Top 10 Interview Questions** about **Objects** in JavaScript, along with their answers:

---

### **1. What is an object in JavaScript? How do you create one?**  
**Answer:**  
An **object** in JavaScript is a collection of key-value pairs. Keys are strings (or Symbols), and values can be of any type.

**Ways to create an object:**  
1. **Object literal:**  
   ```javascript
   let obj = { name: "John", age: 30 };
   ```

2. **Using `new Object()`:**  
   ```javascript
   let obj = new Object();
   obj.name = "John";
   obj.age = 30;
   ```

3. **Using a constructor function or class:**  
   ```javascript
   function Person(name, age) {
       this.name = name;
       this.age = age;
   }
   let obj = new Person("John", 30);
   ```

---

### **2. How do you access and update object properties?**  
**Answer:**  
- **Dot notation:**  
  ```javascript
  console.log(obj.name); // Access
  obj.name = "Doe"; // Update
  ```

- **Bracket notation:**  
  ```javascript
  console.log(obj["name"]); // Access
  obj["name"] = "Doe"; // Update
  ```

---

### **3. What are the differences between `Object.keys()`, `Object.values()`, and `Object.entries()`?**  
**Answer:**  
- **`Object.keys()`**: Returns an array of keys.  
  ```javascript
  let obj = { a: 1, b: 2 };
  console.log(Object.keys(obj)); // ["a", "b"]
  ```

- **`Object.values()`**: Returns an array of values.  
  ```javascript
  console.log(Object.values(obj)); // [1, 2]
  ```

- **`Object.entries()`**: Returns an array of key-value pairs.  
  ```javascript
  console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]
  ```

---

### **4. How can you copy an object in JavaScript?**  
**Answer:**  
1. **Using `Object.assign()`**:  
   ```javascript
   let obj = { a: 1 };
   let copy = Object.assign({}, obj);
   ```

2. **Using the spread operator (`...`)**:  
   ```javascript
   let copy = { ...obj };
   ```

3. **Deep copy with JSON methods (for simple objects):**  
   ```javascript
   let deepCopy = JSON.parse(JSON.stringify(obj));
   ```

---

### **5. How do you check if a property exists in an object?**  
**Answer:**  
1. **Using the `in` operator:**  
   ```javascript
   console.log("name" in obj); // true
   ```

2. **Using `hasOwnProperty()` method:**  
   ```javascript
   console.log(obj.hasOwnProperty("name")); // true
   ```

---

### **6. How do you iterate over the properties of an object?**  
**Answer:**  
1. **Using `for...in`:**  
   ```javascript
   for (let key in obj) {
       console.log(key, obj[key]);
   }
   ```

2. **Using `Object.keys()` with `forEach()`:**  
   ```javascript
   Object.keys(obj).forEach((key) => console.log(key, obj[key]));
   ```

3. **Using `Object.entries()` with `for...of`:**  
   ```javascript
   for (let [key, value] of Object.entries(obj)) {
       console.log(key, value);
   }
   ```

---

### **7. What are getter and setter methods in JavaScript objects?**  
**Answer:**  
- **Getter**: Used to define a method that is called when a property is accessed.  
- **Setter**: Used to define a method that is called when a property is set.  

**Example:**  
```javascript
let obj = {
    _name: "John",
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    },
};

console.log(obj.name); // Access using getter: "John"
obj.name = "Doe"; // Update using setter
console.log(obj.name); // "Doe"
```

---

### **8. How do you merge two or more objects?**  
**Answer:**  
1. **Using `Object.assign()`**:  
   ```javascript
   let obj1 = { a: 1 };
   let obj2 = { b: 2 };
   let merged = Object.assign({}, obj1, obj2);
   ```

2. **Using the spread operator (`...`)**:  
   ```javascript
   let merged = { ...obj1, ...obj2 };
   ```

---

### **9. What is the difference between `Object.create()` and `{}` for creating objects?**  
**Answer:**  
- **`Object.create()`**: Creates a new object with a specified prototype.  
   ```javascript
   let proto = { greet: () => console.log("Hello") };
   let obj = Object.create(proto);
   obj.greet(); // "Hello"
   ```

- **`{}` (Object literal)**: Creates a new object without explicitly setting a prototype.  
   ```javascript
   let obj = {};
   console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
   ```

---

### **10. What is the purpose of `Object.freeze()` and `Object.seal()`?**  
**Answer:**  
- **`Object.freeze()`**: Prevents any changes (adding, deleting, or modifying properties) to the object.  
   ```javascript
   let obj = { a: 1 };
   Object.freeze(obj);
   obj.a = 2; // No effect
   console.log(obj.a); // 1
   ```

- **`Object.seal()`**: Prevents adding or deleting properties but allows modification of existing ones.  
   ```javascript
   let obj = { a: 1 };
   Object.seal(obj);
   obj.a = 2; // Allowed
   obj.b = 3; // Not allowed
   console.log(obj); // { a: 2 }
   ```

---
## Here are the **Top 10 Interview Questions** about **Functions** in JavaScript with their answers:

---

### **1. What are functions in JavaScript? How do you define them?**  
**Answer:**  
A **function** is a reusable block of code designed to perform a specific task. Functions can take input (parameters), process them, and return an output.

**Ways to define functions:**
1. **Function Declaration:**  
   ```javascript
   function greet(name) {
       return `Hello, ${name}`;
   }
   ```

2. **Function Expression:**  
   ```javascript
   const greet = function(name) {
       return `Hello, ${name}`;
   };
   ```

3. **Arrow Function (ES6):**  
   ```javascript
   const greet = (name) => `Hello, ${name}`;
   ```

---

### **2. What is the difference between `function` declaration and `function` expression?**  
**Answer:**  
1. **Function Declaration:**  
   - Hoisted to the top of their scope, so they can be called before they are defined.  
   ```javascript
   greet(); // Works
   function greet() {
       console.log("Hello");
   }
   ```

2. **Function Expression:**  
   - Not hoisted; you cannot call them before they are defined.  
   ```javascript
   greet(); // Error
   const greet = function() {
       console.log("Hello");
   };
   ```

---

### **3. What are arrow functions, and how are they different from regular functions?**  
**Answer:**  
**Arrow Functions** (introduced in ES6) are a concise way to write functions. They differ from regular functions in the following ways:

1. **Syntax:**  
   ```javascript
   const sum = (a, b) => a + b; // Arrow function
   ```

2. **No `this` binding:** Arrow functions don’t have their own `this`; they inherit it from the surrounding scope.  
   ```javascript
   function regular() {
       console.log(this);
   }
   const arrow = () => console.log(this);
   ```

3. **Cannot be used as constructors:**  
   ```javascript
   const Person = (name) => { this.name = name }; // Error
   ```

---

### **4. What is the purpose of `return` in a function? What happens if you omit it?**  
**Answer:**  
- The **`return`** statement specifies the value a function will return to the caller.  
- If `return` is omitted, the function implicitly returns `undefined`.

**Example:**
```javascript
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

function noReturn() {
    let x = 10;
}
console.log(noReturn()); // undefined
```

---

### **5. What are default parameters in JavaScript functions?**  
**Answer:**  
Default parameters allow you to assign default values to function parameters if no value is provided or if `undefined` is passed.

**Example:**
```javascript
function greet(name = "Guest") {
    return `Hello, ${name}`;
}
console.log(greet()); // "Hello, Guest"
console.log(greet("John")); // "Hello, John"
```

---

### **6. What are higher-order functions in JavaScript? Provide an example.**  
**Answer:**  
A **higher-order function** is a function that either:  
1. Takes another function as an argument, or  
2. Returns a function as a result.

**Example:**
```javascript
function higherOrder(fn, x) {
    return fn(x);
}
function double(num) {
    return num * 2;
}
console.log(higherOrder(double, 5)); // 10
```

---

### **7. What is a callback function, and how is it used?**  
**Answer:**  
A **callback function** is a function passed as an argument to another function and executed later.

**Example:**
```javascript
function processUserInput(callback) {
    const name = "John";
    callback(name);
}
processUserInput((name) => {
    console.log(`Hello, ${name}`); // "Hello, John"
});
```

---

### **8. What is the difference between `call()`, `apply()`, and `bind()`?**  
**Answer:**  
These methods are used to invoke functions with a specific `this` value.

1. **`call()`**: Invokes a function with arguments passed individually.  
   ```javascript
   function greet(greeting) {
       console.log(`${greeting}, ${this.name}`);
   }
   greet.call({ name: "John" }, "Hello"); // "Hello, John"
   ```

2. **`apply()`**: Invokes a function with arguments passed as an array.  
   ```javascript
   greet.apply({ name: "John" }, ["Hi"]); // "Hi, John"
   ```

3. **`bind()`**: Returns a new function with `this` set to the specified value.  
   ```javascript
   const boundGreet = greet.bind({ name: "John" }, "Hey");
   boundGreet(); // "Hey, John"
   ```

---

### **9. What is an Immediately Invoked Function Expression (IIFE)?**  
**Answer:**  
An **IIFE** is a function that is executed immediately after being defined.

**Example:**
```javascript
(function () {
    console.log("This runs immediately!");
})();
```

---

### **10. How do you handle arguments passed to a function when the number of arguments is unknown?**  
**Answer:**  
1. **Using `arguments` object (for non-arrow functions):**  
   ```javascript
   function sum() {
       let total = 0;
       for (let i = 0; i < arguments.length; i++) {
           total += arguments[i];
       }
       return total;
   }
   console.log(sum(1, 2, 3, 4)); // 10
   ```

2. **Using rest parameters (`...args`):**  
   ```javascript
   function sum(...args) {
       return args.reduce((total, num) => total + num, 0);
   }
   console.log(sum(1, 2, 3, 4)); // 10
   ```

---



