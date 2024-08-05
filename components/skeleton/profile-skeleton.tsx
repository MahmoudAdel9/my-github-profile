import React from 'react'
import { Skeleton } from '../ui/skeleton'

const ProfileSkeleton = () => {
  return (
    <div className='flex flex-col gap-5 text-2xl'>
      <Skeleton className='bg-skeleton relative mx-auto mb-5 h-40 w-40 overflow-hidden rounded-full'></Skeleton>

      <Skeleton className='bg-skeleton h-4 w-[200px] text-start'></Skeleton>
      <Skeleton className='bg-skeleton h-4 w-[300px] text-start'></Skeleton>
    </div>
  )
}

export default ProfileSkeleton
