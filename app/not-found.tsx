'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NotFound() {
  const router = useRouter()
  useEffect(() => {
    router.prefetch('/')
  }, [])

  function handleClick() {
    router.push('/')
  }

  return (
    <>
      <h1>404 페이지를 찾을 수 없습니다.!!!</h1>
      <Link href={'/'}>Home(Link)</Link>
      <div
        onClick={handleClick}
        onMouseEnter={() => {
          router.prefetch('/')
        }}>
        홈으로 이동 (Push)
      </div>
    </>
  )
}
