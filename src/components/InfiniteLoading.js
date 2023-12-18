import { useEffect } from 'react'

export default function InfiniteLoading({ children, page, setPage, fetchData }) {
  const handelInfiniteScroll = async () => {
      try {
        if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
        ) {
          setPage((prev) => prev + 1)
        }
  
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(() => {
      fetchData()
  }, [page])
  
  useEffect(() => {
      window.addEventListener("scroll", handelInfiniteScroll)
      return () => window.removeEventListener("scroll", handelInfiniteScroll)
  }, [])

  return children
}