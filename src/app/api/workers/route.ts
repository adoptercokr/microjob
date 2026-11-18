import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { addFallbackWorker, getFallbackWorkers } from '@/lib/fallbackStore'

export async function GET() {
  try {
    const workers = await prisma.worker.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(workers)
  } catch {
    return NextResponse.json(getFallbackWorkers())
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
    name: String(body.name ?? ''),
    score: Number(body.score ?? 100),
    badge: String(body.badge ?? '시간엄수'),
    lat: Number(body.lat ?? 37.498),
    lng: Number(body.lng ?? 127.028),
    possibleTasks: String(body.possibleTasks ?? ''),
    diligence: String(body.diligence ?? '우수'),
    attitude: String(body.attitude ?? '친절함'),
    commuteRate: String(body.commuteRate ?? '100%'),
  }

  try {
    const newWorker = await prisma.worker.create({ data: payload })
    return NextResponse.json(newWorker)
  } catch {
    const fallbackWorker = addFallbackWorker(payload)
    return NextResponse.json(fallbackWorker)
  }
}
