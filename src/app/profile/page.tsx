import Header from "@/components/Header";

export default function ProfilePage() {
  return (
    <main className="pb-24 bg-gray-50 min-h-screen">
      <Header title="내 프로필" />
      
      <div className="p-4">
        {/* User Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4 flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-black text-2xl">엠</div>
          <div>
            <h2 className="text-xl font-black text-gray-900 mb-1">엠제이 대표님</h2>
            <p className="text-gray-500 text-sm font-medium">서울시 강남구 역삼동</p>
          </div>
        </div>

        {/* Trust Score */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4">
          <div className="flex justify-between items-end mb-3">
            <h3 className="font-bold text-gray-700 flex items-center gap-1">
              <span>신뢰 스코어</span>
              <span className="text-lg">🔥</span>
            </h3>
            <span className="font-black text-blue-600 text-3xl">98<span className="text-base font-bold text-gray-400"> / 100</span></span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-4 mb-2 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-4 rounded-full" style={{ width: '98%' }}></div>
          </div>
          <p className="text-sm text-gray-500 font-bold text-right">상위 2% 우수 근로자입니다!</p>
        </div>

        {/* Badges */}
        <h3 className="font-bold text-gray-900 mb-3 px-1 mt-6">획득한 뱃지 (나의 강점)</h3>
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-100 shadow-sm">
            <span className="text-3xl mb-2">⏰</span>
            <span className="text-xs font-bold text-gray-700">시간 엄수</span>
          </div>
          <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-100 shadow-sm">
            <span className="text-3xl mb-2">🧹</span>
            <span className="text-xs font-bold text-gray-700">깔끔한 마무리</span>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center justify-center border border-dashed border-gray-200 opacity-60">
            <span className="text-3xl mb-2 grayscale">🔒</span>
            <span className="text-xs font-bold text-gray-400">단골 마스터</span>
          </div>
        </div>

        <button className="w-full bg-white border border-gray-200 text-red-500 font-bold py-4 rounded-xl shadow-sm hover:bg-red-50 transition-colors">
          로그아웃
        </button>
      </div>
    </main>
  );
}
