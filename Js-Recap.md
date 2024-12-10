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
