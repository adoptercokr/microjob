export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 w-full relative pb-24 md:pb-12">
      {/* Hide bottom nav specifically on this page for mobile using CSS */}
      <style dangerouslySetInnerHTML={{__html: `nav.md\\:hidden { display: none !important; }`}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">마이크로잡 통합 관리자 센터 (Admin)</h1>
            <p className="text-gray-500 mt-1 font-medium">플랫폼 전체의 유저 및 거래 현황을 실시간으로 모니터링합니다.</p>
          </div>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md">
            최고관리자 모드 접속중
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-gray-500 font-bold mb-2">총 구직자 수</h3>
            <div className="flex items-end gap-3">
              <p className="text-4xl md:text-5xl font-black text-blue-600">1,248</p>
              <p className="text-xs text-green-500 font-bold mb-1 bg-green-50 px-2 py-0.5 rounded-full">↑ 12 오늘 가입</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-gray-500 font-bold mb-2">가입 사업장 수</h3>
            <div className="flex items-end gap-3">
              <p className="text-4xl md:text-5xl font-black text-green-600">352</p>
              <p className="text-xs text-green-500 font-bold mb-1 bg-green-50 px-2 py-0.5 rounded-full">↑ 3 오늘 가입</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-gray-500 font-bold mb-2">오늘 매칭 건수</h3>
            <div className="flex items-end gap-3">
              <p className="text-4xl md:text-5xl font-black text-purple-600">89</p>
              <p className="text-xs text-green-500 font-bold mb-1 bg-green-50 px-2 py-0.5 rounded-full">↑ 14% 상승</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-gray-500 font-bold mb-2">총 거래액 (당일)</h3>
            <div className="flex items-end gap-3">
              <p className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">₩4,250,000</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50/80 flex justify-between items-center">
              <div>
                <h2 className="font-bold text-gray-900 text-lg">최근 공고 승인 대기</h2>
                <p className="text-xs text-gray-500 mt-1">사업자 인증이 완료된 신규 공고입니다.</p>
              </div>
              <button className="text-sm text-blue-600 font-bold hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">전체보기</button>
            </div>
            <div className="p-6 space-y-4">
              {[1,2,3].map(i => (
                <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 hover:bg-gray-50 rounded-2xl border border-gray-100 transition-all gap-4">
                  <div>
                    <p className="font-black text-gray-900 mb-1.5 text-lg">GS25 강남대로점 - 야간 물류 보조</p>
                    <p className="text-sm text-gray-500 font-medium">사업자: <span className="text-gray-700">123-45-67***</span> | 시급: <span className="text-blue-600 font-bold">12,000원</span></p>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                    <button className="flex-1 sm:flex-none px-5 py-2.5 bg-red-50 text-red-600 text-sm font-bold rounded-xl hover:bg-red-100 transition-colors">반려</button>
                    <button className="flex-1 sm:flex-none px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 shadow-sm transition-colors">승인</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50/80 flex justify-between items-center">
              <div>
                <h2 className="font-bold text-gray-900 text-lg">신고 접수 내역 (노쇼/분쟁)</h2>
                <p className="text-xs text-gray-500 mt-1">긴급 처리가 필요한 노쇼 및 분쟁 건입니다.</p>
              </div>
              <button className="text-sm text-red-600 font-bold hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors">전체보기</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-red-50/40 rounded-2xl border border-red-100 gap-4">
                <div>
                  <span className="px-2.5 py-1 bg-red-600 text-white text-xs font-black rounded-lg mb-2 inline-block shadow-sm">긴급</span>
                  <p className="font-black text-red-900 mb-1.5 text-lg">당일 무단 결근 (노쇼) 신고 접수</p>
                  <p className="text-sm text-red-600 font-bold">신고자: 메가커피 역삼점 👉 대상: 김** (구직자)</p>
                </div>
                <button className="w-full sm:w-auto px-5 py-2.5 bg-white border border-red-200 text-red-600 text-sm font-bold rounded-xl shadow-sm hover:bg-red-50 transition-colors">상세 확인</button>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-orange-50/40 rounded-2xl border border-orange-100 gap-4">
                <div>
                  <span className="px-2.5 py-1 bg-orange-500 text-white text-xs font-black rounded-lg mb-2 inline-block shadow-sm">주의</span>
                  <p className="font-black text-orange-900 mb-1.5 text-lg">임금 지연 지급 의심</p>
                  <p className="text-sm text-orange-600 font-bold">신고자: 박** (구직자) 👉 대상: 피자스쿨 대치점</p>
                </div>
                <button className="w-full sm:w-auto px-5 py-2.5 bg-white border border-orange-200 text-orange-600 text-sm font-bold rounded-xl shadow-sm hover:bg-orange-50 transition-colors">상세 확인</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
