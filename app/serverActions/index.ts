'use server'

import axios from 'axios'
import { redirect } from 'next/navigation'
import z from 'zod'

export async function hello() {
  console.log('Hello Server Actions!')
}

export async function fetchMovies(formData: FormData) {
  const searchText = formData.get('searchText')
  const searchTextSchema = z.string().min(3).max(12)
  const { error } = searchTextSchema.safeParse(searchText)
  if (error) {
    console.log('에러처리')
  }
  const { data } = await axios(`${process.env.OMDB_URL}&s=${searchText}`)
  return data.Search
}

export async function signIn(formData: FormData) {
  const id = formData.get('id')
  const pw = formData.get('pw')
  console.log(id, pw)
  redirect('/')
}
