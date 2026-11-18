import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { addFallbackJob, getFallbackJobs } from '@/lib/fallbackStore'

export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(jobs)
  } catch {
    return NextResponse.json(getFallbackJobs())
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const payload = {
    title: String(body.title ?? ''),
    wage: Number(body.wage ?? 0),
    payType: String(body.payType ?? '시급'),
    time: String(body.time ?? ''),
    tag: String(body.tag ?? '급구'),
    score: Number(body.score ?? 100),
    lat: Number(body.lat ?? 37.498),
    lng: Number(body.lng ?? 127.028),
    tasks: String(body.tasks ?? ''),
    schedule: String(body.schedule ?? ''),
  }

  try {
    const newJob = await prisma.job.create({ data: payload })
    return NextResponse.json(newJob)
  } catch {
    const fallbackJob = addFallbackJob(payload)
    return NextResponse.json(fallbackJob)
  }
}
