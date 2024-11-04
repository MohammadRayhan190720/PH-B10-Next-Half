const getstoredReadList = () =>{
  const storedListStr = localStorage.getItem('read-list');
  if (storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList
  }else{
    return [];
  }

}

const addToStoredReadList = (id) =>{
  const storedList = getstoredReadList();
   if(storedList.includes(id)){
    alert('already exists in the list')

   }
   else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr);
   }
}

const getstoredWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};



const addToWishList = (id) =>{
  const storedList = getstoredWishList();
  if(storedList.includes(id)){
     alert("already exists in the list");
  }else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
  }
}

export {addToStoredReadList,addToWishList};