
import React from 'react'

const Header = () => {
  return (
    <header className='p-4 m-4'>
        <div className='flex' >

         <p className='p-3 text-3xl font-black border-4 rounded-lg bg-fuchsia-900 text-white  border-fuchsia-900'>M</p>
        <p className='p-3 text-3xl font-bold text-fuchsia-900'>Mmachukwu</p>
      
       </div>
       <div className='text-end align-top font-serif '>
        <a href='/contact'>ABOUT</a>
       </div>
    </header>

  )
}

export default Header