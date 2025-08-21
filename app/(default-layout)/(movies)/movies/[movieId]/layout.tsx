export default function RootLayout({
  children,
  p,
}: {
  children: React.ReactNode
  p: React.ReactNode
}) {
  return (
    <>
      <h1>Sub Layout</h1>
      {children}
      {p}
    </>
  )
}
