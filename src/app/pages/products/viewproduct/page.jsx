import React from 'react'

const ViewProductDetail = () => {
  return (
    <div>
    <div>
     <h1 className='text-lg font-bold '>Product detail</h1>  

     <div className='flex space-x-10 mt-5'>
      <div className='flex flex-col space-y-2'>
       <img src="/p1.png" alt='t-shirt' width={100} height={99}/>   
       <img src="/p1.png" alt='t-shirt' width={100} height={99}/>  
       <img src="/p1.png" alt='t-shirt' width={100} height={99}/>  
       <img src="/p1.png" alt='t-shirt' width={100} height={99}/>  
     </div>  
        <div className='py-5'>
          <img src="/p1.png"/>  
        </div>
        <div className='py-5'>
         <p className='text-gray-300'>T-Shirt</p>
         <h1 className='text-2xl font-semibold'>Men Black Slim Fit T-Shirt </h1>
         <p className='text-2xl font-semibold'>$80</p>
        </div>
    </div> 
    </div>
     <div>
      <h1 className='text-lg font-bold'>Discription</h1>  
     </div>
     <p>Reflective design details
    </p>
    <p>Fabric: Body: 100% recycled polyester. Lining: 79% polyester.... Read more</p>
    </div>
  )
}

export default ViewProductDetail