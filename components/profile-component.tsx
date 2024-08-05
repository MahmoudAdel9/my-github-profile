import { auth } from '@/auth'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

const ProfileComponent = async () => {
  const session = await auth()
  const t = await getTranslations()

  return (
    <>
      {session?.user?.name ? (
        <div className='flex flex-col gap-5 text-lg md:text-2xl'>
          <div className='relative mx-auto mb-5 h-44 w-44 overflow-hidden rounded-full border-4 border-amber-500'>
            <Image
              src={session?.user?.image || ''}
              alt={`${session?.user?.name} image`}
              fill
              className='object-cover'
            />
          </div>

          <p className='text-start'>
            <span className='me-2 bg-blue-400 px-2'>{t('profile.name')}</span>{' '}
            {session?.user?.name}
          </p>
          <p className='text-start'>
            <span className='me-2 bg-blue-400 px-2'>{t('profile.email')}</span>{' '}
            {session?.user?.email}
          </p>
        </div>
      ) : (
        <h1 className='text-xl font-bold md:text-3xl'>
          {t('profile.no-data')}{' '}
          <span className='bg-green-400 px-2'>{t('profile.user')}</span>{' '}
          {t('profile.yet')}!
        </h1>
      )}
    </>
  )
}

export default ProfileComponent
