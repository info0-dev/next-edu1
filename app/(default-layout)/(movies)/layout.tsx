export default function RootLayout({
  children,
  poster,
}: {
  children: React.ReactNode
  poster: React.ReactNode
}) {
  return (
    <>
      <h1>Sub Layout</h1>
      {children}
      {poster}
    </>
  )
}
