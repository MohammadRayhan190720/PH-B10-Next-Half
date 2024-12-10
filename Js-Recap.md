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


