- Explain the difference between request and response interceptors in Axios?

- ### **English Explanation**  
In Axios, **request interceptors** and **response interceptors** are middleware functions used to modify or act upon the data being sent or received.

#### **Request Interceptors**  
- These interceptors are executed **before** the request is sent to the server.
- Common uses:  
  1. Adding authentication tokens to the request headers.  
  2. Logging or modifying the request data (e.g., formatting it).  
  3. Adding custom configurations.

```javascript
axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer your_token`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

#### **Response Interceptors**  
- These interceptors are executed **after** the server sends a response but **before** the response data is passed to your application.
- Common uses:  
  1. Handling and transforming the response data.  
  2. Managing global error handling (e.g., for unauthorized responses).  
  3. Logging or debugging server responses.

```javascript
axios.interceptors.response.use(
  (response) => {
    console.log("Response received:", response);
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      console.error("Unauthorized request");
    }
    return Promise.reject(error);
  }
);
```

---

### **বাংলা ব্যাখ্যা**  
Axios-এ **request interceptors** এবং **response interceptors** হলো এমন ফাংশন, যেগুলো ডাটা পাঠানোর বা পাওয়ার সময় কিছু কাজ করার সুযোগ দেয়।

#### **Request Interceptors**  
- এটি সেই সময় কাজ করে, যখন সার্ভারে রিকোয়েস্ট পাঠানোর **আগে**।
- সাধারণত ব্যবহৃত হয়:  
  1. রিকোয়েস্টের হেডারে অথেন্টিকেশন টোকেন যোগ করার জন্য।  
  2. রিকোয়েস্ট ডাটা লগ বা পরিবর্তন করার জন্য।  
  3. কাস্টম কনফিগারেশন যোগ করার জন্য।

```javascript
axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer আপনার_টোকেন`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

#### **Response Interceptors**  
- এটি সার্ভার থেকে রেসপন্স পাওয়ার **পর** কাজ করে, কিন্তু অ্যাপ্লিকেশনে রেসপন্স ডাটা পৌঁছানোর **আগে**।
- সাধারণত ব্যবহৃত হয়:  
  1. রেসপন্স ডাটা প্রক্রিয়াকরণ বা পরিবর্তন করার জন্য।  
  2. গ্লোবাল এরর হ্যান্ডলিং করার জন্য (যেমন, আনঅথরাইজড রেসপন্স)।  
  3. রেসপন্স ডাটা লগ বা ডিবাগ করার জন্য।

```javascript
axios.interceptors.response.use(
  (response) => {
    console.log("রেসপন্স পেয়েছি:", response);
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      console.error("অনুমোদনহীন রিকোয়েস্ট");
    }
    return Promise.reject(error);
  }
);
```

---

In short, request interceptors modify outgoing requests, while response interceptors handle incoming responses! 😊
