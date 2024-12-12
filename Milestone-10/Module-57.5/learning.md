## Axios

Using **Axios** instead of **Fetch** for HTTP requests in JavaScript or a React application can be beneficial due to the following reasons:

---

### **1. Simplified Syntax**
Axios provides a simpler and cleaner syntax compared to `fetch`. For example:
- **Axios Example:**
  ```javascript
  axios.get('https://api.example.com/data')
    .then((response) => {
      console.log(response.data); // Axios automatically parses JSON
    })
    .catch((error) => {
      console.error(error.message);
    });
  ```

- **Fetch Equivalent:**
  ```javascript
  fetch('https://api.example.com/data')
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json(); // Must parse JSON manually
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error.message);
    });
  ```

**Key Difference:** Axios handles JSON parsing automatically, while `fetch` requires manual parsing of the `response` using `response.json()`.

---

### **2. Error Handling**
Axios provides better error handling out of the box. If a request fails, Axios rejects the promise and provides error details.

- **Axios Example:**
  ```javascript
  axios.get('/some-endpoint')
    .catch((error) => {
      console.log(error.response?.status); // Access HTTP status code
      console.log(error.message); // Access error message
    });
  ```

- **Fetch Example:**
  With `fetch`, you need to check the response status manually:
  ```javascript
  fetch('/some-endpoint')
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      return response.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
  ```

**Key Difference:** Axios automatically rejects promises on HTTP errors (like `404` or `500`), while `fetch` considers these successful and requires additional handling.

---

### **3. Automatic JSON Data Handling**
Axios automatically converts request and response data to and from JSON, which reduces the need for manual `JSON.stringify()` or `response.json()`.

- **Axios:**
  ```javascript
  axios.post('/submit', { name: 'John', age: 30 }); // Automatically stringifies
  ```

- **Fetch:**
  ```javascript
  fetch('/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'John', age: 30 }),
  });
  ```

**Key Difference:** Axios simplifies sending and receiving JSON data, while `fetch` requires extra steps.

---

### **4. Interceptors**
Axios allows you to use **interceptors** to modify requests or responses globally before they are handled. This is helpful for:
- Adding authentication tokens.
- Logging request and response data.

- **Example:**
  ```javascript
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${yourAuthToken}`;
    return config;
  });
  ```

**Key Difference:** `fetch` lacks native support for interceptors, requiring custom wrapper functions for similar functionality.

---

### **5. Timeout Handling**
Axios has built-in support for request timeouts, while `fetch` requires custom code to achieve this.

- **Axios:**
  ```javascript
  axios.get('/endpoint', { timeout: 5000 }) // 5-second timeout
    .catch((error) => {
      if (error.code === 'ECONNABORTED') console.log('Request timed out');
    });
  ```

- **Fetch (Manual Timeout):**
  ```javascript
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  fetch('/endpoint', { signal: controller.signal })
    .then((response) => response.json())
    .catch((error) => {
      if (error.name === 'AbortError') console.log('Request timed out');
    });
  ```

**Key Difference:** Axios handles timeouts more easily with a single option.

---

### **6. Wider Browser Compatibility**
Axios supports older browsers (like Internet Explorer 11) because it uses `XMLHttpRequest` under the hood. `fetch` relies on the modern `Fetch` API, which is not supported in some legacy browsers without polyfills.

---

### **7. Request and Response Transformation**
Axios lets you transform requests or responses easily with built-in configuration options.

- **Example:**
  ```javascript
  axios.post('/endpoint', { name: 'John' }, {
    transformResponse: [(data) => {
      return JSON.parse(data).name.toUpperCase(); // Transform response
    }],
  });
  ```

**Key Difference:** With `fetch`, you’d need to handle these transformations manually.

---

### **8. Simpler Cancellation**
Axios provides a straightforward way to cancel ongoing requests using `AbortController`.

- **Axios:**
  ```javascript
  const controller = new AbortController();
  axios.get('/endpoint', { signal: controller.signal });
  controller.abort(); // Cancel the request
  ```

**Key Difference:** Axios integrates with modern cancellation techniques seamlessly.

---

### **When Should You Use Fetch?**
- If you need a lightweight solution with no dependencies.
- If you’re targeting modern browsers and don’t need features like interceptors or timeout handling.

---

### **When Should You Use Axios?**
- If you’re working on a complex project that benefits from:
  - Interceptors.
  - Automatic JSON handling.
  - Advanced error handling.
  - Timeout support.
  - Wider compatibility.
- If you want a cleaner and more concise codebase.

---

In summary, **Axios** is more feature-rich and developer-friendly, while **Fetch** is a good choice for simple, lightweight use cases.



## **TanStack Query in React: When, How, and What**

---

### **What is TanStack Query?**
TanStack Query (formerly React Query) is a powerful library for **data fetching, caching, synchronizing, and state management** in React applications. It simplifies server-state management by providing tools to fetch, cache, update, and manage data from APIs or other asynchronous sources efficiently.

Key features:
1. **Automatic Caching:** Data is cached intelligently to minimize redundant network requests.
2. **Real-time Data Synchronization:** Updates the UI in real-time whenever the underlying data changes.
3. **Optimistic Updates:** Ensures a fast, responsive UI by updating the state optimistically before confirming the server response.
4. **Background Updates:** Refetches stale data in the background to keep your app up-to-date.
5. **Built-in Support for Pagination & Infinite Queries:** Simplifies working with paginated APIs.

---

### **When Should You Use TanStack Query?**
You should use TanStack Query in React applications:
1. **When working with remote server state:** If your app relies on external APIs for its data (e.g., REST APIs, GraphQL).
2. **To manage API data fetching and caching:** It eliminates the need for custom hooks or `useEffect` to manage API calls.
3. **For real-time updates and synchronization:** When your app needs to display up-to-date information (e.g., dashboards, stock tickers, or chat apps).
4. **To manage paginated or infinite scrolling data:** When working with APIs that support pagination.
5. **For better error handling and retries:** It provides robust tools for managing errors and retrying failed requests.
6. **When avoiding global state management libraries:** If you want to avoid using Redux or Context API for managing server-side state.

---

### **How Does TanStack Query Work?**

#### **1. Installation**
Install TanStack Query in your React project:

```bash
npm install @tanstack/react-query
```

Additionally, if you need to fetch data from a server, install Axios or fetch-compatible tools:

```bash
npm install axios
```

#### **2. Set Up QueryClient**
To use TanStack Query, you need to set up a `QueryClient` and a `QueryClientProvider` to wrap your React application.

```javascript
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourAppComponents />
    </QueryClientProvider>
  );
}

export default App;
```

#### **3. Fetch Data Using `useQuery`**
The `useQuery` hook fetches data and handles caching, error states, and loading indicators.

**Example: Fetching Data from an API**
```javascript
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function UserList() {
  const { data, isLoading, error } = useQuery(['users'], async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

- **`['users']`:** A unique key for caching and managing the query.
- **`async () => ...`:** The function to fetch data.
- **Returned values:**
  - `data`: Fetched data.
  - `isLoading`: Boolean indicating loading state.
  - `error`: Error object if the request fails.

---

#### **4. Background Refetching**
TanStack Query can refetch data in the background to ensure your app has up-to-date information.

**Example: Refetch Data Every 5 Seconds**
```javascript
const { data, isLoading } = useQuery(['users'], fetchUsers, {
  refetchInterval: 5000, // Refetch every 5 seconds
});
```

---

#### **5. Mutations**
Use `useMutation` for actions that change data on the server (e.g., POST, PUT, DELETE).

**Example: Adding a User**
```javascript
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

function AddUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newUser) => axios.post('https://jsonplaceholder.typicode.com/users', newUser),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users']); // Refetch user list
      },
    }
  );

  const handleAddUser = () => {
    mutation.mutate({ name: 'New User' });
  };

  return (
    <button onClick={handleAddUser}>
      Add User
    </button>
  );
}
```

---

#### **6. Optimistic Updates**
Optimistic updates allow you to update the UI before the server response, providing a snappy user experience.

**Example: Deleting a User**
```javascript
const mutation = useMutation(
  (userId) => axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`),
  {
    onMutate: async (userId) => {
      await queryClient.cancelQueries(['users']);
      const previousUsers = queryClient.getQueryData(['users']);
      queryClient.setQueryData(['users'], (old) => old.filter((user) => user.id !== userId));
      return { previousUsers };
    },
    onError: (err, userId, context) => {
      queryClient.setQueryData(['users'], context.previousUsers); // Rollback on error
    },
    onSettled: () => {
      queryClient.invalidateQueries(['users']); // Refetch to sync with server
    },
  }
);
```

---

#### **7. Pagination and Infinite Scrolling**
TanStack Query makes it easier to work with paginated data using `useInfiniteQuery`.

**Example: Infinite Scrolling**
```javascript
const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
  ['users'],
  ({ pageParam = 1 }) => fetchUsersByPage(pageParam),
  {
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
  }
);

return (
  <div>
    {data.pages.map((page) =>
      page.data.map((user) => <p key={user.id}>{user.name}</p>)
    )}
    {hasNextPage && <button onClick={fetchNextPage}>Load More</button>}
  </div>
);
```

---

### **Benefits of TanStack Query**
1. **Efficient Caching:** Minimizes redundant network requests.
2. **Declarative API:** Makes code easier to read and maintain.
3. **Automatic Refetching:** Keeps data fresh in the background.
4. **Improved Error Handling:** Provides robust error states.
5. **Simplifies Complex Patterns:** Handles pagination, infinite scrolling, and optimistic updates easily.

---

### **When NOT to Use TanStack Query**
1. **Simple Applications:** For basic apps with a couple of API calls, `fetch` or `axios` might suffice.
2. **Stateful Operations:** Use local state management for purely client-side state (e.g., form inputs).
3. **Non-React Apps:** It’s designed specifically for React.

---

TanStack Query is a game-changer for managing server state in React applications, making complex data-fetching logic effortless while improving performance and maintainability.