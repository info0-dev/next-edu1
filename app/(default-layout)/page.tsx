'use client'

import { useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  useEffect(() => {
    init()
  }, [])

  async function init() {
    const movie = await fetchMovies()
    console.log(movie)
  }
  async function fetchMovies() {
    const { data } = await axios(
      `https://omdbapi.com?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=batman`,
    )
    return data.Search
  }
  return (
    <>
      <h1>Home Page!</h1>
    </>
  )
}
