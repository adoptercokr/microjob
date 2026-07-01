import Header from "@/components/Header";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50/50 w-full relative">
      <Header title="내 프로필" />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 pb-24 md:pb-12">
        {/* User Card */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6 flex items-center gap-5">
          <div className="w-20 h-20 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-black text-3xl shadow-md">
            M
          </div>
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-1">엠제이 대표님</h2>
            <p className="text-gray-500 text-sm font-medium">서울시 강남구 역삼동</p>
          </div>
        </div>

        {/* Trust Score */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
          <div className="flex justify-between items-end mb-4">
            <h3 className="font-bold text-gray-700 flex items-center gap-1.5 text-lg">
              <span>신뢰 스코어</span>
              <span className="text-xl">🔥</span>
            </h3>
            <span className="font-black text-blue-600 text-4xl tracking-tight">98<span className="text-lg font-bold text-gray-400"> / 100</span></span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-4 mb-3 overflow-hidden shadow-inner">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-4 rounded-full" style={{ width: '98%' }}></div>
          </div>
          <p className="text-sm text-gray-500 font-bold text-right">상위 2% 우수 근로자입니다! 🎉</p>
        </div>

        {/* Badges */}
        <h3 className="font-bold text-gray-900 mb-3 px-2 mt-8 text-lg">획득한 뱃지 (나의 강점)</h3>
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-10">
          <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-4xl mb-3">⏰</span>
            <span className="text-sm font-bold text-gray-700">시간 엄수</span>
          </div>
          <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-4xl mb-3">🧹</span>
            <span className="text-sm font-bold text-gray-700">깔끔한 마무리</span>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5 flex flex-col items-center justify-center border border-dashed border-gray-200 opacity-60">
            <span className="text-4xl mb-3 grayscale">🔒</span>
            <span className="text-sm font-bold text-gray-400">단골 마스터</span>
          </div>
        </div>

        <button className="w-full bg-white border border-gray-200 text-red-500 font-bold text-lg py-4 rounded-2xl shadow-sm hover:bg-red-50 hover:border-red-200 transition-colors">
          로그아웃
        </button>
      </div>
    </main>
  );
}
