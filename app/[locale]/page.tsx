import { auth } from '@/auth'
import ProfileComponent from '@/components/profile-component'
import ProfileSkeleton from '@/components/skeleton/profile-skeleton'
import { Suspense } from 'react'

export async function generateMetadata() {
  const session = await auth()

  return {
    title: session?.user?.name
      ? `Hi, ${session?.user?.name}`
      : 'My Github Profile',
    icons: {
      icon: `${session?.user?.image}`
    }
  }
}

export default async function Home() {
  return (
    <section className='flex h-full items-center justify-center'>
      <Suspense fallback={<ProfileSkeleton />}>
        <ProfileComponent />
      </Suspense>
    </section>
  )
}
