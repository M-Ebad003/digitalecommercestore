import MaxWidth from '@/components/MaxWidth'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <MaxWidth>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Your Marketplace for high-quality{' '}
            <span className='text-blue-600'>digital assets</span>
            .
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>Welcome to Digital Store. Every asset on our platform is verified by our team to ensure our highest quality standards.</p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
          </div>
      </div>
    </MaxWidth>
  )
}

export default page