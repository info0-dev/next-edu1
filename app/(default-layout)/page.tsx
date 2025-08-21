'use client'

import { useEffect } from 'react'
import { fetchMovies } from '../serverActions'

export default function Home() {
  useEffect(() => {
    init()
  }, [])

  async function init() {
    const movie = await fetchMovies()
    console.log(movie)
  }

  return (
    <>
      <h1>Home Page!</h1>
    </>
  )
}
