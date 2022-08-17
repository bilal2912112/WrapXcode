import React from 'react'

const coresec = (props) => {
  return (
   <>
   <div>
 {props.data[props.cardIndex].map(item=>(
    <div>
        <h4 className='my-4 shadow-sm p-3'>{item.title}</h4>
        <p className='text-muted'>{item.description}</p>
    </div>
 ))}
   

   </div>
 
   
   </>
  )
}

export default coresec
