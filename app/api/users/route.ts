import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json([
    { name: 'Neo', age: 22 },
    { name: 'Evan', age: 17 },
    { name: 'Lewis', age: 40 },
  ])
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  return NextResponse.json({
    ...body,
    createdAt: new Date().toISOString(),
  })
}
