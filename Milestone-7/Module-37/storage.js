const addToLocalStroage = () =>{
  const id = document.getElementById("stroage-id").value;
  console.log(id);
  const value = document.getElementById("stroage-value").value;
  console.log(value);

  localStorage.setItem(id , value);
}

