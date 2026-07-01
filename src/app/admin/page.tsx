export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 max-w-none w-full relative z-[100] pb-24">
      {/* Hide bottom nav specifically on this page using a dirty trick for MVP, ideally should use Next.js parallel routes or specific layout */}
      <style dangerouslySetInnerHTML={{__html: `nav { display: none !important; }`}} />

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black text-gray-900">타임블록 통합 관리자 센터 (Admin)</h1>
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg font-bold text-sm">최고관리자 모드</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-gray-500 font-bold mb-2">총 구직자 수</h3>
            <p className="text-4xl font-black text-blue-600">1,248</p>
            <p className="text-xs text-green-500 font-bold mt-2">↑ 12 오늘 가입</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-gray-500 font-bold mb-2">가입 사업장 수</h3>
            <p className="text-4xl font-black text-green-600">352</p>
            <p className="text-xs text-green-500 font-bold mt-2">↑ 3 오늘 가입</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-gray-500 font-bold mb-2">오늘 매칭 성사 건수</h3>
            <p className="text-4xl font-black text-purple-600">89</p>
            <p className="text-xs text-green-500 font-bold mt-2">↑ 14% 상승</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-gray-500 font-bold mb-2">총 거래액 (당일)</h3>
            <p className="text-4xl font-black text-gray-900">₩4,250,000</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-5 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
              <h2 className="font-bold text-gray-800 text-lg">최근 공고 승인 대기</h2>
              <button className="text-sm text-blue-600 font-bold hover:underline">전체보기</button>
            </div>
            <div className="p-5 space-y-4">
              {[1,2,3].map(i => (
                <div key={i} className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors">
                  <div>
                    <p className="font-bold text-gray-900 mb-1">GS25 강남대로점 - 야간 물류 보조</p>
                    <p className="text-xs text-gray-500 font-medium">사업자: 123-45-67*** | 시급: 12,000원</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-red-50 text-red-600 text-sm font-bold rounded-lg hover:bg-red-100">반려</button>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 shadow-sm">승인</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-5 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
              <h2 className="font-bold text-gray-800 text-lg">신고 접수 내역 (노쇼/분쟁)</h2>
              <button className="text-sm text-red-600 font-bold hover:underline">전체보기</button>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex justify-between items-center p-4 bg-red-50/50 rounded-xl border border-red-100">
                <div>
                  <span className="px-2 py-1 bg-red-600 text-white text-[10px] font-black rounded mb-2 inline-block shadow-sm">긴급</span>
                  <p className="font-bold text-red-900 mb-1">당일 무단 결근 (노쇼) 신고 접수</p>
                  <p className="text-xs text-red-500 font-bold">신고자: 메가커피 역삼점 👉 대상: 김** (구직자)</p>
                </div>
                <button className="px-4 py-2 bg-white border border-red-200 text-red-600 text-sm font-bold rounded-lg shadow-sm hover:bg-red-50">상세 확인</button>
              </div>
              <div className="flex justify-between items-center p-4 bg-orange-50/50 rounded-xl border border-orange-100">
                <div>
                  <span className="px-2 py-1 bg-orange-500 text-white text-[10px] font-black rounded mb-2 inline-block shadow-sm">주의</span>
                  <p className="font-bold text-orange-900 mb-1">임금 지연 지급 의심</p>
                  <p className="text-xs text-orange-600 font-bold">신고자: 박** (구직자) 👉 대상: 피자스쿨 대치점</p>
                </div>
                <button className="px-4 py-2 bg-white border border-orange-200 text-orange-600 text-sm font-bold rounded-lg shadow-sm hover:bg-orange-50">상세 확인</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
