import React from 'react'
import LinkBlock from './link-block'

export default function Header() {
  return (
   <header className='flex sticky top-0 z-[9999] content-container justify-center items-center py-5 shadow-md bg-uiblack text-uiwhite dark:bg-uiwhite dark:text-uiblack'>
        <LinkBlock />
   </header>
  )
}
