import React from 'react'
import { ModeToggle } from '../mode-toggle'
import AuthButton from '../AuthButton'
import { LanguageToggle } from '../language-toggle'

const Header = () => {
  return (
    <header className='flex items-center justify-center py-5 md:justify-between'>
      <p className='hidden text-xl font-bold md:block'>My Github Profile</p>

      <nav>
        <ul className='flex items-center gap-10'>
          <li>
            <ModeToggle />
          </li>
          <li>
            <LanguageToggle />
          </li>
          <li>
            <AuthButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
