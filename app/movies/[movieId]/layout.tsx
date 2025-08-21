export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1>Sub Layout</h1>
      {children}
    </>
  )
}
