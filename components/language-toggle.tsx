'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useLocale } from 'next-intl'
import { getLocale } from 'next-intl/server'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const newPathname =
    locale === 'ar'
      ? pathname.replace(/^\/ar/, `/en`)
      : pathname.replace(/^\/en/, `/ar`)

  return (
    <div>
      {locale === 'ar' ? (
        <div
          onClick={() => router.replace(newPathname)}
          className='flex cursor-pointer items-center gap-2.5'
        >
          <div>
            <Image
              src='/us.svg'
              width={20}
              height={20}
              alt='arabic'
              className='-mt-1'
            />
          </div>

          <p>En</p>
        </div>
      ) : (
        <div
          onClick={() => router.replace(newPathname)}
          className='flex cursor-pointer items-center gap-2.5'
        >
          <p>Ar</p>
          <div>
            <Image
              src='/sa.svg'
              width={20}
              height={20}
              alt='arabic'
              className='-mt-1'
            />
          </div>
        </div>
      )}
    </div>
  )
}
