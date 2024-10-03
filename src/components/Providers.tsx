"use client"
import {QueryClient} from '@tanstack/react-query'
import React, { useState } from 'react'

const Providers = () => {
    const [queryClient] = useState(()=> new QueryClient());
    const [trpcClient] = useState(()=> trpc.createClient)

  return (
    <div>Providers</div>
  )
}

export default Providers