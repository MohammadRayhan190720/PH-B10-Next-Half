
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  
  function handleClick(){
    alert('Bullon Clicked');
  }
  const handleClick2 = () =>{
    alert('button-2 clicked');
  }

  const addToFive = (num) =>{
    alert(num + 5);

  }
  
  return (
    <>
      
      <h3> React Core Concepts Part-2</h3>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>
      

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me-2</button>
      <button onClick={() =>{alert('button-3 clicked')}}>Click Me-3</button>
      
      {/* //mind it vlo kore vejal jinis */}
      <button onClick={() =>{addToFive(3)}}>Add Button</button>
     
    </>
  )
}

export default App
