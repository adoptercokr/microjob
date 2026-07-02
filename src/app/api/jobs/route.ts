import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(jobs)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newJob = await prisma.job.create({
      data: {
        title: body.title,
        wage: Number(body.wage),
        payType: body.payType,
        time: body.time,
        tag: body.tag,
        score: Number(body.score),
        lat: Number(body.lat),
        lng: Number(body.lng),
        tasks: body.tasks,
        schedule: body.schedule
      }
    })
    return NextResponse.json(newJob)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 })
  }
}
