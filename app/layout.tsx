import { Noto_Sans } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const title = 'Next.js Demo App'
const description = 'Samsung Electronics React 심화 과정'
const image = 'https://picsum.photos/500'
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [image],
  },
  twitter: {
    title,
    description,
    images: [image],
  },
}

// 글꼴 계열
// serif - 바탕체
// sans-serif - 고딕체
// monospace - 고정 너비체
// cursive - 필기체

// nestjs는 구글 font에서 사용하는 모든 폰트 내장, cdn을 사용할 필요가 없음

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${notoSans.className} antialiased`}>{children}</body>
    </html>
  )
}
