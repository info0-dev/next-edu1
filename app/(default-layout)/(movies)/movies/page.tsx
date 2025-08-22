'use client'
import { fetchMovies } from '@/app/serverActions'
import React, { useState } from 'react'

export default function Movies() {
  const [movies, setMovies] = useState([])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const movies = await fetchMovies(formData)
    setMovies(movies)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="searchText" />
        <button type="submit">검색</button>
      </form>
      <pre>{JSON.stringify(movies, null, 2)}</pre>
    </>
  )
}
