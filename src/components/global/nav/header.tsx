import React from 'react'
import LinkBlock from './link-block'

export default function Header() {
  return (
   <header className='flex sticky top-0 content-container justify-center items-center py-5 shadow-md bg-white text-black'>
        <LinkBlock />
   </header>
  )
}
