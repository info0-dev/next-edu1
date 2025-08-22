import axios from 'axios'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const generateMetadata = async ({
  params,
  searchParams,
}: {
  params: Promise<{ movieId: string }>
  searchParams: Promise<{ plot: string }>
}): Promise<Metadata> => {
  const { movieId } = await params
  const { plot = 'short' } = await searchParams
  const res = await fetch(
    `https://omdbapi.com?apikey=7035c60c&i=${movieId}&plot=${plot}`,
    {
      cache: 'force-cache',
    },
  )
  const movie: Movie = await res.json()

  const title = movie.Title
  const description = movie.Plot
  const image = movie.Poster

  return {
    title,
    description,
    openGraph: { title, description, images: [image] },
    twitter: { title, description, images: [image] },
  }
}

export interface Movie {
  Title: string
  Plot: string
  Poster: string
  imdbID: string
}

export default async function MovieDetails({
  params,
  searchParams,
}: {
  params: Promise<{ movieId: string }>
  searchParams: Promise<{ plot: string }>
}) {
  const { movieId } = await params
  const { plot = 'short' } = await searchParams
  const res = await fetch(
    `https://omdbapi.com?apikey=7035c60c&i=${movieId}&plot=${plot}`,
    {
      cache: 'force-cache',
    },
  )
  const movie: Movie = await res.json()
  // throw new Error('에러 발생👍')

  return (
    <>
      <h1>{movie.Title}</h1>
      <Link href={`/poster/${movieId}`}>
        <Image
          src={movie.Poster}
          alt={movie.Title}
          width={500}
          height={500 * 1.5}
        />
      </Link>
      <p>{movie.Plot}</p>
    </>
  )
}
