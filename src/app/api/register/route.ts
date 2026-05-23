import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  const response = await fetch('https://script.google.com/macros/s/AKfycbx1IYlnjdmRUga9mjF-8TNLRbsuEqK_VFmTvYCbti5lTvp8Tbhcn0jmxR2M35fhZQUJNQ/exec', {
    method: 'POST',
    body: JSON.stringify(data),
  })
  const result = await response.text()
  return NextResponse.json({ success: true })
}
