import { NextRequest } from 'next/server'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ userId: string }> },
) {
  const { userId } = await params
  return Response.json({
    id: userId,
    name: 'Neo',
    age: 22,
  })
}
