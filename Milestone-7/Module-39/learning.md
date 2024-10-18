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
- 
