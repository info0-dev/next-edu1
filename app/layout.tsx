import './globals.css'

// 글꼴 계열
// serif - 바탕체
// sans-serif - 고딕체
// monospace - 고정 너비체
// cursive - 필기체

// nestjs는 구글 font에서 사용하는 모든 폰트 내장, cdn을 사용할 필요가 없음

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
