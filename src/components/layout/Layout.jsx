import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='
    bg-zinc-900 
    min-h-screen
    text-white
    p-10
    flex
    flex-col
    items-center'>
      {children}
    </div>
  )
}

export default Layout
