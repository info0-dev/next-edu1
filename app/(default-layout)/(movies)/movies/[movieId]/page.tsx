import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

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
  await new Promise(resolve => setTimeout(resolve, 2000))
  const { data: movie } = await axios<Movie>(
    `https://omdbapi.com?apikey=7035c60c&i=${movieId}&plot=${plot}`,
  )

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
