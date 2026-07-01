import Header from "@/components/Header";
import Link from "next/link";

export default function EmployerDashboard() {
  const applicants = [
    { name: '이스타', score: 95, time: '2분 전', status: '대기중' },
    { name: '박알바', score: 82, time: '10분 전', status: '대기중' },
  ];

  return (
    <main className="pb-24 bg-gray-50 min-h-screen">
      <Header title="사장님 대시보드" />
      
      <div className="p-4">
        {/* Active Job Card */}
        <div className="bg-gray-900 text-white rounded-2xl p-5 shadow-lg mb-8">
          <div className="flex justify-between items-start mb-2">
            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">모집중</span>
          </div>
          <h2 className="text-xl font-black mb-1">스타벅스 강남점 런치 홀서빙</h2>
          <p className="text-gray-300 text-sm mb-5 font-medium">오늘 13:00 ~ 15:00 (2시간) • 시급 13,000원</p>
          
          <div className="flex justify-between items-center bg-gray-800 p-4 rounded-xl border border-gray-700">
            <span className="text-sm font-bold text-gray-300">현재 지원자</span>
            <span className="font-black text-blue-400 text-2xl">2<span className="text-sm font-normal">명</span></span>
          </div>
        </div>

        <h3 className="font-bold text-gray-900 mb-3 px-1">지원자 관리 (2명)</h3>
        <div className="space-y-3 mb-8">
          {applicants.map((app, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-black text-gray-600 text-lg">
                  {app.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{app.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">신뢰 스코어: <span className="text-blue-600 font-black">{app.score}점</span> • {app.time}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-3 bg-gray-50 border border-gray-200 text-gray-600 text-sm font-bold rounded-xl hover:bg-gray-100 transition-colors">거절하기</button>
                <button className="flex-[2] py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">수락하고 매칭 확정</button>
              </div>
            </div>
          ))}
        </div>
        
        <Link href="/employer" className="block w-full text-center text-gray-900 font-bold py-4 rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 transition-colors">
          + 새 공고 작성하기
        </Link>
      </div>
    </main>
  );
}
