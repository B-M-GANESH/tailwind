import React from 'react'

const FruitsCard = ({fruit}) => {
  return (
    <div className='rounded-2xl overflow-hidden shadow-xl transform group hover:scale-110 duration-100 relative'>
        <img className='w-full h-52 object-cover' src={require(`../assests/${fruit.image}.jpeg`)} alt={`${fruit.image}`}/>
        <div className='flex flex-col my-1  space-y-1 items-center'>
            <span className='font-body text-slate-500 block'>{fruit.name}</span>
            <span className='font-body text-slate-500'>₹{fruit.price}</span>
            <span className='font-body text-lime-300 text-xs invisible group-hover:visible'>ADD TO CART</span>
        </div>
        <span className='absolute top-3 right-3 bg-sky-300 text-white border-sky-300 p-1 text-sm rounded-lg'>1%off</span>
    </div>
  )
}

export default FruitsCard