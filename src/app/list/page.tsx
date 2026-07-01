import Header from "@/components/Header";

export default function ListPage() {
  const jobs = [
    { id: 1, title: '스타벅스 강남점 런치 타임', wage: 13000, distance: '도보 5분', time: '오늘 11:30~13:30', tags: ['당일지급', '급구'] },
    { id: 2, title: '올리브영 물류 정리 보조', wage: 12500, distance: '자전거 10분', time: '내일 14:00~16:00', tags: ['단순업무'] },
    { id: 3, title: '개인 카페 마감 청소', wage: 14000, distance: '도보 8분', time: '오늘 21:00~22:30', tags: ['시급높음', '초보가능'] },
    { id: 4, title: '편의점 야간 땜빵 (단기)', wage: 15000, distance: '차량 15분', time: '내일 02:00~06:00', tags: ['야간수당', '급구'] },
    { id: 5, title: '당근마켓 동네 전단지 배포', wage: 12000, distance: '도보 3분', time: '아무때나 (2시간)', tags: ['시간자유'] },
    { id: 6, title: '코엑스 박람회 안내요원', wage: 13500, distance: '지하철 2정거장', time: '이번주 토 09:00~18:00', tags: ['단기알바', '식사제공'] },
  ];

  return (
    <main className="min-h-screen bg-gray-50/50 w-full relative">
      <Header title="단기 알바 찾기" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        {/* Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 hide-scrollbar sticky top-[64px] md:top-[80px] z-30 bg-gray-50/90 backdrop-blur py-2">
          <button className="whitespace-nowrap px-5 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-full shadow-sm">가까운 순</button>
          <button className="whitespace-nowrap px-5 py-2.5 bg-white border border-gray-200 text-gray-600 text-sm font-bold rounded-full hover:bg-gray-50 transition-colors">시급 높은 순</button>
          <button className="whitespace-nowrap px-5 py-2.5 bg-white border border-gray-200 text-gray-600 text-sm font-bold rounded-full hover:bg-gray-50 transition-colors">내 시간대 매칭</button>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 pb-24 md:pb-12">
          {jobs.map(job => (
            <div key={job.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 cursor-pointer hover:border-blue-500 hover:shadow-lg transform hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[11px] font-black rounded-lg">{tag}</span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs font-bold bg-gray-50 border border-gray-100 px-2 py-1 rounded-lg">{job.distance}</span>
                </div>
                <h3 className="font-black text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                <p className="text-gray-500 text-sm font-medium">{job.time}</p>
              </div>
              <div className="flex justify-between items-end border-t border-gray-100 pt-4 mt-6">
                <span className="text-xs text-gray-400 font-bold">예상 시급</span>
                <span className="font-black text-blue-600 text-2xl">{job.wage.toLocaleString()}<span className="text-base text-gray-500 font-bold ml-0.5">원</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
