import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const workers = await prisma.worker.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(workers)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch workers' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newWorker = await prisma.worker.create({
      data: {
        name: body.name,
        score: Number(body.score),
        badge: body.badge,
        lat: Number(body.lat),
        lng: Number(body.lng),
        possibleTasks: body.possibleTasks,
        diligence: body.diligence,
        attitude: body.attitude,
        commuteRate: body.commuteRate
      }
    })
    return NextResponse.json(newWorker)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create worker' }, { status: 500 })
  }
}
