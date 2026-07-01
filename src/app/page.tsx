import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  const jobs = [
    { id: 1, title: '스타벅스 강남점 런치 타임', wage: 13000, time: '오늘 11:30~13:30', tag: '급구' },
    { id: 2, title: '올리브영 물류 정리 보조', wage: 12500, time: '내일 14:00~16:00', tag: '단순업무' },
    { id: 3, title: '개인 카페 마감 청소', wage: 14000, time: '오늘 21:00~22:30', tag: '초보가능' },
  ];

  const workers = [
    { id: 1, name: '이스타', score: 98, badge: '시간엄수', distance: '100m' },
    { id: 2, name: '박알바', score: 95, badge: '깔끔마무리', distance: '300m' },
    { id: 3, name: '김성실', score: 92, badge: '단골마스터', distance: '500m' },
  ];

  return (
    <main className="min-h-screen bg-gray-50/50 w-full relative pb-24 md:pb-12">
      <Header title="단기알바 매칭 홈" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 md:p-10 text-white mb-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-2xl md:text-4xl font-black mb-2 tracking-tight">내 시간, 내 위치에 딱 맞는<br/>마이크로 단기 알바</h1>
            <p className="text-blue-100 font-medium mb-6">지금 동네에서 실시간으로 매칭되는 일자리와 인재를 만나보세요.</p>
            <Link href="/list" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-shadow">
              맞춤 조건(세부 시간) 검색하기 👉
            </Link>
          </div>
          <div className="absolute -right-10 -bottom-10 text-9xl opacity-20">🎯</div>
        </div>

        {/* Section 1: Jobs */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-5">
            <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">🔥 우리 동네 급구 알바</h2>
            <Link href="/list" className="text-sm font-bold text-blue-600 hover:underline">전체보기</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x">
            {jobs.map(job => (
              <div key={job.id} className="min-w-[280px] md:min-w-[320px] bg-white p-6 rounded-3xl shadow-sm border border-gray-100 snap-center hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
                <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[11px] font-black rounded-lg mb-3 inline-block">{job.tag}</span>
                <h3 className="font-black text-gray-900 text-lg mb-1">{job.title}</h3>
                <p className="text-gray-500 text-sm font-medium mb-6">{job.time}</p>
                <div className="flex justify-between items-end border-t border-gray-50 pt-4">
                  <span className="text-xs text-gray-400 font-bold">예상 시급</span>
                  <span className="font-black text-gray-900 text-2xl">{job.wage.toLocaleString()}<span className="text-sm font-bold text-gray-500 ml-0.5">원</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Workers */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-5">
            <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">🏃‍♂️ 지금 일할 수 있는 준비된 알바생</h2>
            <Link href="/employer" className="text-sm font-bold text-blue-600 hover:underline">공고 올리기</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x">
            {workers.map(worker => (
              <div key={worker.id} className="min-w-[240px] md:min-w-[280px] bg-white p-6 rounded-3xl shadow-sm border border-gray-100 snap-center hover:border-blue-300 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center font-black text-blue-600 text-xl border border-blue-100 group-hover:scale-105 transition-transform">
                    {worker.name[0]}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 text-lg">{worker.name}</h3>
                    <p className="text-xs text-gray-500 font-medium">📍 반경 {worker.distance} 이내</p>
                  </div>
                </div>
                <div className="bg-gray-50/80 rounded-2xl p-4 border border-gray-100 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 font-bold">신뢰 스코어</span>
                    <span className="font-black text-blue-600 text-lg">{worker.score}<span className="text-xs text-gray-400 font-normal">점</span></span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 font-bold">보유 강점</span>
                    <span className="font-bold text-gray-800 text-xs px-2.5 py-1 bg-white border border-gray-200 rounded-lg shadow-sm">{worker.badge}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
