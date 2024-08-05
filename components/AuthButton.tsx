import React from 'react'
import { Button } from './ui/button'
import { auth, signIn, signOut } from '@/auth'

const AuthButton = async () => {
  const session = await auth()

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
        <Button className='bg-foreground text-background hover:bg-foreground/80'>
          Logout
        </Button>
      ) : (
        <Button className='bg-foreground text-background hover:bg-foreground/80'>
          Login
        </Button>
      )}
    </form>
  )
}

export default AuthButton
