//get from ls
const getFromLocalStroage = () =>{
  const storedCoffeeStr = localStorage.getItem('favourite');
  if(storedCoffeeStr){
   const storedCoffee = JSON.parse(storedCoffeeStr);
   return storedCoffee;
  }else{
    return []
  }
}


//add to ls

const addToLocalStroage = coffee =>{
  const storedCoffee = getFromLocalStroage();
  const isExist = storedCoffee.find((item) => item.id == coffee.id);
  if(isExist){
    return alert('already added to favourites list')
  }else{

    storedCoffee.push(coffee);
    localStorage.setItem('favourite', JSON.stringify(storedCoffee));
  }
 

}


//remove from ls

export  {addToLocalStroage,getFromLocalStroage}