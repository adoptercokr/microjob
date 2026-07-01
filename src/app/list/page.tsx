import Header from "@/components/Header";

export default function ListPage() {
  const jobs = [
    { id: 1, title: '스타벅스 강남점 런치 타임', wage: 13000, distance: '도보 5분', time: '오늘 11:30~13:30', tags: ['당일지급', '급구'] },
    { id: 2, title: '올리브영 물류 정리 보조', wage: 12500, distance: '자전거 10분', time: '내일 14:00~16:00', tags: ['단순업무'] },
    { id: 3, title: '개인 카페 마감 청소', wage: 14000, distance: '도보 8분', time: '오늘 21:00~22:30', tags: ['시급높음', '초보가능'] },
    { id: 4, title: '편의점 야간 땜빵 (단기)', wage: 15000, distance: '차량 15분', time: '내일 02:00~06:00', tags: ['야간수당', '급구'] },
  ];

  return (
    <main className="pb-24 bg-gray-50 min-h-screen">
      <Header title="단기 알바 리스트" />
      
      {/* Filters */}
      <div className="bg-white px-4 py-3 border-b border-gray-100 flex gap-2 overflow-x-auto hide-scrollbar sticky top-[53px] z-40">
        <button className="whitespace-nowrap px-4 py-1.5 bg-gray-900 text-white text-sm font-bold rounded-full shadow-sm">가까운 순</button>
        <button className="whitespace-nowrap px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-sm font-bold rounded-full hover:bg-gray-50">시급 높은 순</button>
        <button className="whitespace-nowrap px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-sm font-bold rounded-full hover:bg-gray-50">내 시간대 매칭</button>
      </div>

      {/* Feed */}
      <div className="p-4 space-y-3">
        {jobs.map(job => (
          <div key={job.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:border-blue-500 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-2">
              <div className="flex gap-1.5">
                {job.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-black rounded">{tag}</span>
                ))}
              </div>
              <span className="text-gray-400 text-xs font-bold bg-gray-50 px-2 py-0.5 rounded">{job.distance}</span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">{job.title}</h3>
            <p className="text-gray-500 text-sm mb-4 font-medium">{job.time}</p>
            <div className="flex justify-between items-end border-t border-gray-50 pt-3">
              <span className="text-xs text-gray-400 font-bold">예상 시급</span>
              <span className="font-black text-blue-600 text-2xl">{job.wage.toLocaleString()}<span className="text-sm text-gray-500 font-normal">원</span></span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
