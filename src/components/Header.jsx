import React from 'react'


const Header = () => {
  return (
    <div className='py-6'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            {/* <img src='https://i.ibb.co/7t7GK9t/logo.png' alt='logo' />  */}
            Jyothika Manoj
          </a>
          <button className='btn btn-sm'> Contact me</button>
        </div>
      </div>
    </div>
  )
}

export default Header