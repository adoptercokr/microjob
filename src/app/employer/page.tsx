import Header from "@/components/Header";

export default function EmployerPostPage() {
  return (
    <main className="min-h-screen bg-gray-50/50 w-full relative">
      <Header title="단기 구인 등록" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 pb-24 md:pb-12">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tight">알바생이 급하게 필요하신가요?</h1>
          <p className="text-gray-500 font-medium">복잡한 양식 없이, 템플릿으로 30초 만에 공고를 올려보세요.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 mb-8">
          <h2 className="font-bold text-gray-800 mb-4 text-lg">자주 찾는 알바 템플릿 <span className="text-sm font-normal text-gray-400">(터치하면 자동 입력)</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <button className="p-4 bg-blue-50 border border-blue-200 text-blue-700 font-bold rounded-2xl text-sm shadow-sm hover:bg-blue-100 transition-colors">☕ 카페 청소</button>
            <button className="p-4 bg-gray-50 border border-gray-200 text-gray-600 font-bold rounded-2xl text-sm hover:bg-gray-100 transition-colors">📦 상하차 보조</button>
            <button className="p-4 bg-gray-50 border border-gray-200 text-gray-600 font-bold rounded-2xl text-sm hover:bg-gray-100 transition-colors">🏪 편의점 땜빵</button>
            <button className="p-4 bg-gray-50 border border-gray-200 text-gray-600 font-bold rounded-2xl text-sm hover:bg-gray-100 transition-colors">🍽️ 바쁜시간 서빙</button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">어떤 일인가요?</label>
              <input type="text" placeholder="예) 홀서빙, 설거지, 물류 정리" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold" defaultValue="카페 마감 청소" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-bold text-gray-700 mb-2">언제 필요한가요?</label>
                <input type="date" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-bold text-gray-700 mb-2">몇 시간인가요?</label>
                <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold">
                  <option>1시간</option>
                  <option>2시간</option>
                  <option>3시간</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">시급 설정</label>
              <div className="relative">
                <input type="number" placeholder="최저시급 9,860원 이상" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-black text-xl transition-all text-blue-600" defaultValue="13000" />
                <span className="absolute right-5 top-4 text-gray-500 font-bold text-lg">원</span>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl py-5 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
          13,000원으로 30초만에 공고 올리기
        </button>
      </div>
    </main>
  );
}
