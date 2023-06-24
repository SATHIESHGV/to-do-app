import React from 'react'
import ItemsList  from  './ItemsList';



const Content = ({items,handleCheck,handleDelete}) => {
   
  return (
   <main>
    {items.length ? (
       <ItemsList  
       items={items}
       handleCheck={handleCheck}
       handleDelete={handleDelete} />
     ):(
      <p>YOUR LIST IS EMPTY</p>
     )}
   </main>
    
  )
  
  
}

export default Content;
