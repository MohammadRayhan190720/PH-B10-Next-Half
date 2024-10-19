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

#### 39.5- UnderStand the concept of useEffect
- WHat are Effects?
 - There are two type of logic inside React Component
  - Rendering code : Lives at he top label of your component.This is where you take hhe props and state , transform them,and return thr JSX you want to see on screen
  - Event Handlers : An Event Handler might update an input field,submit an HTTP post request to buy a product,or navigate the user to another screen.
  Event handlers contain side effect (they change the programs state)caused by a specific user action (for example , a button click or typing)

  --What are effects ?
   -consider a Chatroom component that must connect to the chat server whenever its visible on the screen
   1.sending message in the chat is an event because it is directly caused by the user clickung a specific button
   2.However,setting up a server connection is an Effect because it shouls happer no matter which interaction caused the componet tp appear

   --What are side effects in react?
   - not predictable
   - Actions which are performed with the outside world
   -A side effect is performed when we need to reach outside the scope of our current react component to do something
   - React component rendering and side effect logic are independent

   --some common side effects-
   - Makeing a request to an API for data form a backend server
   - To interact with browser APIs(that is ,to use document or window directly)/Manipulating DOM drictly
   - Useing unpredictable timing function like setTimeout() or setInterval
   - Reading data form local stroage

   --What is useEffect?
   - useEffect exista=>
    - To synchronize a component with an external system
    - To provide a way to handle perforing the side effects
    - Doesent affect he rendering or performance of the componet this its in
    - Performs asynchronous tasks
    ```
       useEffect = (()=>{...},[depenencies])
    ```

    --How to right an Effect
     - Specify the effect dependencies.Most effects should only re-ren when needed rather than after every rnader.For Example,a fade-in-animation shild only trigger when a component appears
     - add cleanup if needed.Some Effects need to speaify how to stop ,undo ,clean up whatever thr were doing,For example,"connect needs "disconnect"