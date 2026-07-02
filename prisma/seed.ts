import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 기존 데이터 초기화
  await prisma.job.deleteMany()
  await prisma.worker.deleteMany()

  console.log('Seeding Jobs...')
  await prisma.job.createMany({
    data: [
      { title: '스타벅스 강남점 런치 타임', wage: 13000, payType: '시급', time: '오늘 11:30~13:30', tag: '급구', score: 98, lat: 37.498, lng: 127.028, tasks: '매장 정리 및 음료 제조 보조', schedule: '주 2일, 하루 2시간' },
      { title: '올리브영 물류 정리 보조', wage: 100000, payType: '일급', time: '내일 14:00~16:00', tag: '단순업무', score: 91, lat: 37.495, lng: 127.025, tasks: '박스 운반 및 매대 진열 보조', schedule: '단기 1일, 총 2시간' },
      { title: '개인 카페 주말 마감', wage: 1200000, payType: '월급', time: '매주 주말 21:00~23:00', tag: '장기', score: 95, lat: 37.502, lng: 127.030, tasks: '홀 청소 및 쓰레기 분리수거', schedule: '주 2일, 하루 2시간' },
      { title: 'GS25 야간 카운터 대타', wage: 15000, payType: '시급', time: '이번 주 금 23:00~06:00', tag: '야간', score: 88, lat: 37.499, lng: 127.025, tasks: '물건 정리 및 바코드 스캔', schedule: '단기 1일, 총 7시간' }
    ]
  })

  console.log('Seeding Workers...')
  await prisma.worker.createMany({
    data: [
      { name: '이스타', score: 98, badge: '시간엄수', lat: 37.497, lng: 127.026, possibleTasks: '홀서빙, 포장, 단순노무', diligence: '매우 우수', attitude: '친절함', commuteRate: '100%' },
      { name: '박알바', score: 95, badge: '깔끔마무리', lat: 37.490, lng: 127.020, possibleTasks: '물류, 재고정리, 상하차', diligence: '우수', attitude: '체력좋음', commuteRate: '98%' },
      { name: '김성실', score: 92, badge: '단골마스터', lat: 37.505, lng: 127.035, possibleTasks: '카페마감, 설거지, 청소', diligence: '우수', attitude: '꼼꼼함', commuteRate: '95%' },
      { name: '최대타', score: 89, badge: '빠른손', lat: 37.492, lng: 127.032, possibleTasks: '포장, 조립, 전단지', diligence: '보통', attitude: '신속함', commuteRate: '90%' }
    ]
  })

  console.log('Seeding complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
