### Css basic recap
- selector
- Text
- box model
- Background ,image
- Pseudo class, pseudo element
- Combinators
- Css Positions
- Flex
- grid

### CSS Interview Questions and Answers in Bangla

---

### **Selectors (নির্বাচক)**

1. **CSS Selector কী?**\
   CSS Selector হল এমন একটি প্যাটার্ন যা HTML এলিমেন্ট নির্বাচন করতে ব্যবহৃত হয়। উদাহরণ: `#id`, `.class`, `tag`।

2. **Universal Selector কীভাবে কাজ করে?**\
   Universal Selector (`*`) সব HTML এলিমেন্টকে নির্বাচন করে।

   ```css
   * {
       margin: 0;
       padding: 0;
   }
   ```

3. **Class এবং ID Selector-এর মধ্যে পার্থক্য কী?**

   - **Class Selector:** একই ক্লাস একাধিক জায়গায় ব্যবহার করা যায়।
     ```css
     .classname { color: red; }
     ```
   - **ID Selector:** একটি ID একবারই ব্যবহার করা যায়।
     ```css
     #idname { color: blue; }
     ```

4. **Attribute Selector কী? উদাহরণ দিন।**\
   এটি এলিমেন্টের নির্দিষ্ট অ্যাট্রিবিউটের উপর ভিত্তি করে নির্বাচন করে।

   ```css
   input[type="text"] {
       background-color: yellow;
   }
   ```

5. **Grouping Selector কীভাবে ব্যবহার করা হয়?**\
   একাধিক সিলেক্টরকে কমা দিয়ে গ্রুপ করা হয়।

   ```css
   h1, h2, p {
       color: green;
   }
   ```

6. **Descendant Selector কী?**\
   এটি Parent এবং Child এলিমেন্ট নির্বাচন করতে ব্যবহৃত হয়।

   ```css
   div p {
       color: red;
   }
   ```

7. **Adjacent Sibling এবং General Sibling Selector-এর মধ্যে পার্থক্য কী?**

   - **Adjacent Sibling (********`+`********)**: সরাসরি পরবর্তী এলিমেন্ট নির্বাচন করে।
   - **General Sibling (********`~`********)**: একই লেভেলের সব পরবর্তী এলিমেন্ট নির্বাচন করে।

---

### **Text (লেখা)**

8. **CSS দিয়ে টেক্সটের রঙ কীভাবে পরিবর্তন করবেন?**

   ```css
   p {
       color: blue;
   }
   ```

9. **Text-decoration-এর বিভিন্ন মান কী কী?**

   - `none`, `underline`, `overline`, `line-through`, `blink`।

10. **Line-height এবং Letter-spacing-এর মধ্যে পার্থক্য কী?**

- **Line-height:** লাইনগুলির মধ্যে উচ্চতা।
- **Letter-spacing:** টেক্সটের অক্ষরগুলির মধ্যে দূরত্ব।

11. **Text-transform কী? এটি কীভাবে কাজে লাগে?**\
    এটি টেক্সটের কেস পরিবর্তন করে।

```css
p {
    text-transform: uppercase;
}
```

12. **Vertical-align প্রপার্টি কীভাবে কাজ করে?**\
    এটি টেক্সট বা এলিমেন্টকে উল্লম্বভাবে কেন্দ্রস্থ করতে ব্যবহার করা হয়।

13. **White-space প্রপার্টি কী? উদাহরণ সহ ব্যাখ্যা করুন।**\
    এটি টেক্সটের মধ্যে স্পেস কন্ট্রোল করতে ব্যবহৃত হয়।

```css
p {
    white-space: nowrap;
}
```

14. **Text-shadow কীভাবে ব্যবহার করা যায়?**

```css
h1 {
    text-shadow: 2px 2px 5px gray;
}
```

---

### **Box Model (বক্স মডেল)**

15. **CSS Box Model কী?**\
    একটি এলিমেন্টের চারটি অংশ নিয়ে গঠিত: Content, Padding, Border, Margin।

16. **Margin এবং Padding-এর মধ্যে পার্থক্য কী?**

- **Margin:** এলিমেন্টের বাইরের স্পেস।
- **Padding:** এলিমেন্টের ভেতরের স্পেস।

17. **Border-collapse প্রপার্টি কীভাবে কাজ করে?**\
    এটি টেবিল বর্ডার মডিফাই করতে ব্যবহৃত হয়।

```css
table {
    border-collapse: collapse;
}
```

18. **Box-sizing প্রপার্টি কী এবং এটি কেন ব্যবহার করা হয়?**\
    এটি এলিমেন্টের সাইজিং নির্ধারণ করে।

```css
div {
    box-sizing: border-box;
}
```

19. **Margin Auto কীভাবে কাজ করে?**\
    এটি এলিমেন্টকে কেন্দ্রস্থ করতে সাহায্য করে।

20. **Overflow**\*\*:hidden\*\*\*\* এবং Overflow\:auto-এর মধ্যে পার্থক্য কী?\*\*

- `hidden`: কন্টেন্ট লুকানো হয়।
- `auto`: স্ক্রলবার যোগ করে।

---

### **Background (পটভূমি)**

21. **CSS দিয়ে একটি Background Image কীভাবে যুক্ত করবেন?**

```css
body {
    background-image: url('image.jpg');
}
```

22. **Background-repeat-এর মানগুলো কী কী?**

- `repeat`, `no-repeat`, `repeat-x`, `repeat-y`।

23. **Background-attachment: fixed এর প্রভাব কী?**\
    ব্যাকগ্রাউন্ড স্ক্রল না করে স্থির থাকে।

24. **Multiple Backgrounds কীভাবে ব্যবহার করবেন?**

```css
div {
    background: url('img1.jpg'), url('img2.jpg');
}
```

25. **Background-size: cover এবং contain-এর মধ্যে পার্থক্য কী?**

- `cover`: পুরো জায়গা জুড়ে থাকে।
- `contain`: সম্পূর্ণ ইমেজ দৃশ্যমান থাকে।

---

### **Pseudo-elements (ছদ্ম-উপাদান)**

26. **Pseudo-element কী? উদাহরণ দিন।**\
    এটি একটি এলিমেন্টের অংশ নির্বাচন করতে ব্যবহৃত হয়। উদাহরণ: `::before`, `::after`।

```css
p::before {
    content: 'Start: ';
}
```

27. **::before এবং ::after-এর মধ্যে পার্থক্য কী?**\
    উভয়ই নতুন কন্টেন্ট যোগ করতে ব্যবহৃত হয়, তবে এগুলি এলিমেন্টের শুরু এবং শেষে প্রয়োগ করা হয়।

28. **Pseudo-class এবং Pseudo-element-এর মধ্যে পার্থক্য কী?**

- **Pseudo-class:** এলিমেন্টের বিশেষ অবস্থার জন্য। যেমন: `:hover`।
- **Pseudo-element:** এলিমেন্টের অংশ স্টাইল করার জন্য। যেমন: `::before`।

29. **::first-letter এবং ::first-line কীভাবে কাজ করে?**

- `::first-letter`: প্রথম অক্ষর নির্বাচন করে।
- `::first-line`: প্রথম লাইন নির্বাচন করে।

30. **Pseudo-elements কি শুধুমাত্র Text Styling-এর জন্য ব্যবহৃত হয়?**\
    না, এটি অন্যান্য স্টাইলিং কাজেও ব্যবহার করা যায়।

---

### **Combinators (সংযোজক)**

31. **CSS Combinator কী?**\
    এটি একাধিক সিলেক্টরের মধ্যে সম্পর্ক স্থাপন করে।

32. **Descendant এবং Child Combinator-এর মধ্যে পার্থক্য কী?**

- **Descendant (********` `********):** যেকোনো স্তরের চাইল্ড।
- **Child (********`>`********):** সরাসরি চাইল্ড।

33. **Adjacent Sibling Combinator কী?**\
    এটি একটি এলিমেন্টের সরাসরি পরবর্তী সিলিং নির্বাচন করে।

34. **General Sibling Combinator কীভাবে কাজ করে?**\
    এটি একই প্যারেন্টের সমস্ত সিলিং নির্বাচন করে।

35. **Combinators ব্যবহার করে নির্দিষ্ট স্টাইলিং কীভাবে করবেন?**\
    উদাহরণ:

```css
div > p {
    color: blue;
}
```

---


---

36. **Position প্রপার্টি কী? এর মানগুলো কী কী?**  
   CSS এর Position প্রপার্টি এলিমেন্টের অবস্থান নির্ধারণ করতে ব্যবহৃত হয়। এর মানগুলো হলো:  
   - **`static`**: ডিফল্ট মান। এলিমেন্ট সাধারণ ফ্লো অনুসারে থাকে।  
   - **`relative`**: এলিমেন্ট নিজ অবস্থান থেকে নির্ধারিত মান অনুযায়ী স্থানান্তরিত হয়।  
   - **`absolute`**: এলিমেন্ট প্যারেন্টের উপর ভিত্তি করে স্থানান্তরিত হয়।  
   - **`fixed`**: এলিমেন্ট স্ক্রল হলেও স্ক্রিনের নির্দিষ্ট স্থানে থাকে।  
   - **`sticky`**: এলিমেন্ট স্ক্রোলের উপর নির্ভর করে অবস্থান পরিবর্তন করে।  

37. **Static এবং Relative Positioning-এর মধ্যে পার্থক্য কী?**  
   - **`static`**: ডিফল্ট পজিশনিং, কোনো পরিবর্তন হয় না।  
   - **`relative`**: এলিমেন্ট নিজস্ব অবস্থান থেকে নির্ধারিত `top`, `right`, `bottom`, `left` অনুযায়ী স্থানান্তরিত হয়।  

38. **Fixed Position ব্যবহার করার সুবিধা কী?**  
   - এলিমেন্ট স্ক্রলিংয়ের সাথে পরিবর্তিত হয় না। এটি সবসময় স্ক্রিনের নির্দিষ্ট স্থানে থাকে।  
   উদাহরণ: ন্যাভিগেশন মেনু বা হেডার।  
   ```css
   header {\n       position: fixed;\n       top: 0;\n       width: 100%;\n   }
   ```

39. **Absolute Positioning কীভাবে Parent Element-এর উপর নির্ভর করে?**  
   - Absolute পজিশনে থাকা এলিমেন্ট তার নিকটবর্তী `relative` পজিশনযুক্ত প্যারেন্টের উপর নির্ভর করে।  
   যদি কোনো প্যারেন্টে `relative` না থাকে, তবে এটি পুরো পেজ (viewport) অনুযায়ী স্থানান্তরিত হয়।  

40. Sticky Position কী? এটি কীভাবে কাজ করে?

 CSS-এ sticky পজিশন একটি বিশেষ প্রপার্টি যা relative এবং fixed পজিশনের সংকর রূপ হিসেবে কাজ করে। এটি এলিমেন্টকে স্ক্রোলের উপর নির্ভর করে অবস্থান পরিবর্তন করতে দেয়।

 সহজ ব্যাখ্যা:
যখন এলিমেন্টের প্যারেন্ট এলিমেন্টের ভিতরে থাকে, তখন এটি relative মতো কাজ করে (নিজের স্বাভাবিক অবস্থানে থাকে)।
যখন আপনি স্ক্রোল করেন এবং এলিমেন্ট নির্দিষ্ট top, left, right বা bottom পজিশনে পৌঁছায়, তখন এটি fixed মতো আচরণ শুরু করে এবং স্ক্রিনে স্থির থাকে।

---

এখানে Z-index সম্পর্কিত প্রশ্নগুলোর বিস্তারিত উত্তর দেওয়া হলো:

---

### **Z-index (স্তর)**

1. **Z-index কী?**  
   CSS-এর `z-index` প্রপার্টি একটি এলিমেন্টের স্তর বা লেয়ারের অবস্থান নির্ধারণ করে। এটি নির্ধারণ করে যে একাধিক এলিমেন্ট ওভারল্যাপ করলে কোনটি উপরে থাকবে।

2. **Z-index-এর default মান কী?**  
   `z-index`-এর ডিফল্ট মান হলো `auto`। এটি ব্রাউজারের ডিফল্ট স্ট্যাকিং অর্ডার অনুসরণ করে।

3. **Negative Z-index ব্যবহার করলে কী হয়?**  
   যদি একটি এলিমেন্টে নেগেটিভ `z-index` দেওয়া হয়, তবে এটি অন্য এলিমেন্টগুলোর নিচে চলে যায়। উদাহরণ:  
   ```css
   div {
       z-index: -1;
       position: relative;
   }
   ```

4. **Stacking Context কী?**  
   Stacking Context হল একটি বিশেষ কনটেক্সট যেখানে এলিমেন্টগুলো `z-index`-এর মান অনুসারে স্তরভিত্তিক সাজানো হয়। এটি সাধারণত তখন তৈরি হয় যখন কোনো এলিমেন্টে নিম্নলিখিত প্রপার্টিগুলো থাকে:  
   - `position: relative;`, `absolute;`, বা `fixed;`  
   - একটি `z-index` মান (যেমন: 1, 2)।  
   উদাহরণ:  
   ```css
   .parent {
       position: relative;
       z-index: 1;
   }
   .child {
       position: absolute;
       z-index: 2;
   }
   ```

5. **Z-index কীভাবে বিভিন্ন Element-এর উপর প্রভাব ফেলে?**  
   - এলিমেন্টের `z-index` যত বেশি হবে, সেটি তত উপরের স্তরে প্রদর্শিত হবে।  
   - `position` (relative, absolute, fixed) ব্যবহার না করলে `z-index` কাজ করবে না।  
   উদাহরণ:  
   ```html
   <div style="position: relative; z-index: 2; background: red;">Layer 1</div>
   <div style="position: relative; z-index: 1; background: blue;">Layer 2</div>
   ```
   এখানে লাল রঙের ডিভটি নীলের উপরে থাকবে কারণ এর `z-index` বেশি।

---

### Overflow (অতিরিক্ত কন্টেন্ট)

46. **CSS-এ Overflow প্রপার্টি কী?**  
CSS-এর `overflow` প্রপার্টি একটি বক্সের ভেতরে থাকা অতিরিক্ত কন্টেন্টকে নিয়ন্ত্রণ করে। এটি নির্ধারণ করে অতিরিক্ত কন্টেন্ট লুকানো, প্রদর্শিত, বা স্ক্রল করা হবে কিনা।

47. **Overflow:auto এবং Overflow:scroll-এর মধ্যে পার্থক্য কী?**  
- **`overflow: auto;`**: অতিরিক্ত কন্টেন্ট থাকলে স্বয়ংক্রিয়ভাবে স্ক্রলবার যুক্ত হয়।  
- **`overflow: scroll;`**: সবসময় স্ক্রলবার দেখায়, এমনকি অতিরিক্ত কন্টেন্ট না থাকলেও।  

48. **Overflow-x এবং Overflow-y কীভাবে কাজ করে?**  
- **`overflow-x`**: কন্টেন্টের অনুভূমিক (horizontal) অতিরিক্ত অংশ নিয়ন্ত্রণ করে।  
- **`overflow-y`**: কন্টেন্টের উল্লম্ব (vertical) অতিরিক্ত অংশ নিয়ন্ত্রণ করে।  
উদাহরণ:  
```css
div {
    overflow-x: scroll;
    overflow-y: hidden;
}
```

49. **Content Overflow সমস্যার সমাধানে CSS-এ কী ব্যবহার করবেন?**  
- `overflow: hidden;`: অতিরিক্ত কন্টেন্ট লুকাতে।  
- `overflow: auto;`: স্ক্রলবার যোগ করতে।  
- `text-overflow: ellipsis;`: টেক্সট কেটে `...` দেখাতে।  
  ```css
  p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  ```

50. **Hidden Overflow ব্যবহার করলে কোন পরিস্থিতিতে সমস্যার সৃষ্টি হতে পারে?**  
- যদি গুরুত্বপূর্ণ কন্টেন্ট লুকানো হয়, যা ব্যবহারকারীর জন্য অ্যাক্সেসযোগ্য হওয়া উচিত।  
- যদি ডায়নামিক কন্টেন্টের আকার পূর্বানুমানযোগ্য না হয়।  
- যেমন: রেসপন্সিভ ডিজাইন তৈরির সময়।  





