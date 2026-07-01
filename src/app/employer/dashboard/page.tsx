import Header from "@/components/Header";
import Link from "next/link";

export default function EmployerDashboard() {
  const applicants = [
    { name: '이스타', score: 95, time: '2분 전', status: '대기중' },
    { name: '박알바', score: 82, time: '10분 전', status: '대기중' },
  ];

  return (
    <main className="min-h-screen bg-gray-50/50 w-full relative">
      <Header title="사장님 대시보드" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 pb-24 md:pb-12">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">사장님 대시보드</h1>
            <p className="text-gray-500 text-sm mt-1">등록하신 공고와 지원자를 관리하세요.</p>
          </div>
        </div>

        {/* Active Job Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-6 md:p-8 shadow-xl mb-10">
          <div className="flex justify-between items-start mb-3">
            <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-black rounded-lg">현재 모집중</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-2 tracking-tight">스타벅스 강남점 런치 홀서빙</h2>
          <p className="text-gray-300 text-sm md:text-base mb-6 font-medium">오늘 13:00 ~ 15:00 (2시간) • 시급 13,000원</p>
          
          <div className="flex justify-between items-center bg-black/30 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
            <span className="text-sm font-bold text-gray-300">현재 대기중인 지원자</span>
            <span className="font-black text-blue-400 text-3xl">2<span className="text-base font-bold ml-1 text-gray-400">명</span></span>
          </div>
        </div>

        <h3 className="font-bold text-gray-900 mb-4 px-1 text-lg">지원자 관리 (2명)</h3>
        <div className="space-y-4 mb-10">
          {applicants.map((app, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center font-black text-blue-600 text-xl border border-blue-100">
                  {app.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-lg mb-0.5">{app.name}</h4>
                  <p className="text-sm text-gray-500 font-medium">신뢰 스코어: <span className="text-blue-600 font-black">{app.score}점</span> • 지원 시간: {app.time}</p>
                </div>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <button className="flex-1 md:flex-none px-6 py-3 bg-gray-50 border border-gray-200 text-gray-600 text-sm font-bold rounded-xl hover:bg-gray-100 transition-colors">거절</button>
                <button className="flex-[2] md:flex-none px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">수락하고 매칭 확정</button>
              </div>
            </div>
          ))}
        </div>
        
        <Link href="/employer" className="block w-full text-center text-gray-900 font-bold text-lg py-5 rounded-2xl border border-gray-200 bg-white shadow-sm hover:bg-gray-50 transition-colors">
          + 새 단기 알바 공고 작성하기
        </Link>
      </div>
    </main>
  );
}
