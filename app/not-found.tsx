'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  return (
    <>
      <h1>4040 페이지를 찾을 수 없습니다.!!!</h1>
      <Link href={'/'}>Home(Link)</Link>
      <div onClick={() => router.push('/')}>홈으로 이동 (Push)</div>
    </>
  )
}
