'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div>
      {theme === 'light' ? (
        <MoonIcon
          onClick={() => setTheme('dark')}
          className='h-6 w-6 cursor-pointer'
        />
      ) : (
        <SunIcon
          onClick={() => setTheme('light')}
          className='h-6 w-6 cursor-pointer'
        />
      )}
    </div>
  )
}
