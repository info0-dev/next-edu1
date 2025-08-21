import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex gap-x-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/signin">Sign In</Link>
      <Link href="/movies">Movies</Link>
      <Link href="/movies/tt0372784?plot=full">Sample Movies</Link>
    </header>
  )
}
