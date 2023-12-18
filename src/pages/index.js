'use client'


import { useState, useEffect } from 'react'
import Photos from '@/components/Photos'
import InfiniteLoading from '@/components/InfiniteLoading'

export default function Home() {
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true)
 
  const fetchPhotos = async () => {
    const res = await fetch(`https://api.unsplash.com/photos/?per_page=5&page=${page}&client_id=MxURYp4vxa2U0x7_u6E9RZgJoQXCD_Hgw7J50tELcQo`)
    const data = await res.json()
    
    setPhotos((prev) => [...prev, ...data])
    setLoading(false)
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-20">
      <h1 className="mb-5">My Photos</h1>
      <div className="mx-auto">
        <InfiniteLoading page={page} setPage={setPage} fetchData={fetchPhotos}>
          <Photos 
            photos={photos}
            loading={isLoading}
          />
        </InfiniteLoading>
      </div>    
    </main>
  )
}
