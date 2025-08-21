import { Movie } from '@/app/(default-layout)/(movies)/movies/[movieId]/page'
import axios from 'axios'
import Image from 'next/image'

export default async function Poster({
  params,
}: {
  params: Promise<{ movieId: string }>
}) {
  const movieId = await params
  const { data: movie } = await axios<Movie>(
    `https://omdbapi.com?apikey=7035c60c&i=${movieId}`,
  )
  return (
    <>
      <Image
        src={movie.Poster.replace('SX300', 'SX517')}
        alt={movie.Title}
        width={1500}
        height={1500 * 1.5}
      />
    </>
  )
}
