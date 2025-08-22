import { signIn } from '@/app/serverActions'

export default function SignIn() {
  return (
    <>
      <h1>Sing In Page!</h1>
      <form action={signIn}>
        <input
          type="text"
          id="id"
          name="id"
        />
        <input
          type="password"
          id="pw"
          name="pw"
        />
        <button type="submit">로그인</button>
      </form>
    </>
  )
}
