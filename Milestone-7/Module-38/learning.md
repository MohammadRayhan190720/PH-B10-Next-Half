### Module-38 React Core Concept Part-1

#### 38.1- What is React?react vs angular vs Vue
##### What is React?
- ReactJs is a Javascript library for building UI
- ReactJs is declarative , efficient , and flexible
- It is fast and component based 
- It was initality developed and maintain by facebook
- React breaks web elements down into reusable components makeing it easy to manage compled web interfaces
- React virtual DOM is a Javascript representation of actual dom when updates are made React compares the current DOM and only updates the differents between the two

#### ReactJs vs AngularJS
- ReactJs is a Javascript Library.Angular js a complate framework build on Typescript- a superset of Javascript
- React js is a smaller piece of the overall puzzle,whereas angular is a collection of all different puzzle pieces
--Templates
- The template used by React Js is called JSX which combines the js code and markup in one line of code to creat user interfaces efficiently
- Angular uses template based on advanced HTML,means you will need to learn proper HTML syntax in order to be able to write code in angular
--DOM
- ReactJS maintains a virtual DOM Which allows it to be lightning fast
- Angular has a regular DOM which Updates the entire HTML structure everytime a new change is made
--Data binding
- ReactJs is a one-way data binding
- angular is a two way data binding

#### 38.2- What is Components,Conponent Types,Build Your frist components
- What is components?
 - Building blocks of the user interfaces
 - Each component exists in the same space but work independently
 - splits UI into independent and reusable pieces
 - all of the componets are being merged in a parent component(the final UI)
 - accepts input called props(optional) and returns react elements

 --4 ways to define components
 - similar to look ,different to use
 - container components
 - No common pattern ,But breakdown for working purpose
 - stand alone componets

 --so ,What is component?
 - component are the foundation upon which you build user interfaces
 - In react app ,every piece of UI is a component
 - A react component is a javascript that you can sprinkle with markup except
  1. Their names alwasy begin with a capital letter
  2. they returns JSX markup
  -- How to build a component?
  - Export the component
  - Define the function

  #### 38.3- JSX,Its rules and add dynamic content to jSX in your frist component

  ##### What is JSX?
  - JSX is a syntax extension for Javascript 
  - JSX stands for Javascript XML
  - Lets you write HTML_LIKE - Markup inside a Javascript file
  - Under the hood it is transformed regular javascript useing cimolies like Babel of Typescript
  - browser unabel to read jsx

  #### The Rules of JSX
  1.Return a single root element>use div or fragment
  2. closed all the tag
  3. Must use camelcase
    -class => className
    - onclick =>onClick
  4.Javascript in JSX with Curly Braces
   - if want to add something dynamically use {}
   5.You can pass object in JSX useing Double curlies
   6.When you need an inline style,You pass an object to the style attribute

   JSx is javascript ar modde HTML write ar akta way

  #### 38.4-Explore JSX and Props Basics
  - 3 ways to add style in JSX

  #### 38.5 - Props types and How to pass/read a props
  - props hisabe kno data pataile seta object hisabe jabe
  - object destructring kore usse krte hbe
  - i can set a deafult value

  ##### what is props?
  - react components use props to communicate with each other.
  - Every parent component can pass some information to its chils components by give them props
  - you can pass value through props,including objects , arrays and functions
  - props are unidirectional
  --different values of props
  1.string
  <props = "My string value"/>
  2.template literals with variables
  <prop = `{My string value is ${variable}`}/>
  3.number literals
  <prop = {42}/>
  4.boolean literals
  <prop = {true}/>
  5.object literals
  <prop = {{property: "value"}}>
  6.array literals
  <prop = {[property: "value"]}>
  7.JSX
  <prop = <Friends who = ''/>/>

  - To pass props ,and then to the JSX,Just like you would with HTML attributes
  - To read props , use function Avatar({person,size}) destructuring syntax
  - you can specify a default value like size = 100 ,which is uysed for missing and undefined props
  - props are read only 
  - unchangeble-props