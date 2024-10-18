#### Module-39 React COre concept part-2

 ##### 39.1- Module introduction and Project overview
 - we learned form previous module
  - component (it is a function)
  - JSX(Javascript ar modde HTML write ar akta system)
  - props(akta component theke ar akta componet a data patano)
  - conditional rendering
  - array of object => map

  #### 39.2- Different way to handle events in React
  -- Rules of adding event handler
  - Event handler function
  - are usually defined inside your components
  - have names that start with handle ,folloed by the name of the event
  - by convention
  - onClick = {handleClick}
  ###### Recap
  - You can handle events by passing a function as a prop to an element like <button>
  - Event handlers must be passed , not called. onClick ={handleClick} , not onClick ={handleClick()};
  - You can define an event handler function separately or inline
  - Event handlers are defined inside a component,so they cann access props
  - You can declare an event handler in a parent and pass it as a prop to a child
  - you can define your own event handler props with a application -specific names
  - Explicity calling an event handler prop form a child handler is a good alternative of propagation

#### 39.3- A simple imtroduction to state change in React
- state- kno kicu change hole hte pare amn bujate state use kora hoy

#### 39.4 Understand the concept of UseState and react hooks
-- What exactly is state?
- component often need to change whats on the scree as a result an interaction
- Typeing into the form should update the input field ,clicking next on an image carousel should change which image is displayed chickinf "buy" should put a product shopping cart.
- components need to remember things : the cirrent input value , the current image ,the shoping cart.In react this of component -specific memory is called state.

--How to write a useState Hook?
- The useState Hook provides those two things
 1. A state variable to retain the data between renders.
 2. A state setter function to update the variable and teigger React to render the component again
 
 ```
  const [count , setCount] = useState(0)
        (current state , function to update state)
  ```

  -- Why UseState() is needed?
  - to update a component with new data,two things need to happen
   - ratain the data between renders
   - Trigger React to render the component with new data (re-rendering)
   - varibales do not preserve data between renders and cannot trigger React to render .hence useState is needed as if preserves data since it is a memory as well trigger React to render with the help of setter function.

   -- 5 use cases of useState
   1.state management
   2.conditional rendering
   3. Toggle flages(true/false)
   4.Counter
   5.Store API data in state

   -- different types of hooks
   1. state hooks
   2. context hooks
   3. ref hooks
   4. Effect hooks
   5. performance hooks
   6. others