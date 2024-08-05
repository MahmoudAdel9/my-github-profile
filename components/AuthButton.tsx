import React from 'react'
import { Button } from './ui/button'
import { auth, signIn, signOut } from '@/auth'
import { getTranslations } from 'next-intl/server'

const AuthButton = async () => {
  const session = await auth()
  const t = await getTranslations()

  return (
    <form
      action={async () => {
        'use server'
        if (session?.user?.name) {
          await signOut()
        } else {
          await signIn('github')
        }
      }}
    >
      {session?.user?.name ? (
        <Button
          size='sm'
          className='bg-foreground py-2 text-sm text-background hover:bg-foreground/80'
        >
          {t('button.logout')}
        </Button>
      ) : (
        <Button
          size='sm'
          className='bg-foreground py-2 text-sm text-background hover:bg-foreground/80'
        >
          {t('button.login')}
        </Button>
      )}
    </form>
  )
}

export default AuthButton
