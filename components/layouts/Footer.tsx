import { getLocale } from 'next-intl/server'
import Link from 'next/link'
import React from 'react'

const Footer = async () => {
  const locale = await getLocale()
  return (
    <footer className='flex items-center justify-center py-5 md:justify-start'>
      {locale === 'ar' ? (
        <p className='text-dark-600'>
          حقوق الملكية{' '}
          <Link
            className='bg-gradient-to-r from-cyan-600 to-emerald-500 bg-clip-text font-semibold text-transparent'
            target='_blank'
            href='https://www.linkedin.com/in/mahmoud-adel9/'
          >
            @Mahmoud Adel
          </Link>
          💖
        </p>
      ) : (
        <p className='text-dark-600'>
          <Link
            className='bg-gradient-to-r from-cyan-600 to-emerald-500 bg-clip-text font-semibold text-transparent'
            target='_blank'
            href='https://www.linkedin.com/in/mahmoud-adel9/'
          >
            @Mahmoud Adel
          </Link>{' '}
          copyright 2024 💖
        </p>
      )}
    </footer>
  )
}

export default Footer
