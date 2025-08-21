'use server'

import axios from 'axios'

export async function hello() {
  console.log('Hello Server Actions!')
}

export async function fetchMovies() {
  const { data } = await axios(`${process.env.OMDB_URL}&s=batman`)
  return data.Search
}
