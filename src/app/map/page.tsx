import Header from "@/components/Header";

export default function MapPage() {
  return (
    <main className="h-screen flex flex-col">
      <Header title="내 주변 일자리" />
      
      {/* Map Area Mockup */}
      <div className="flex-1 relative bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center bg-[url('https://maps.gstatic.com/mapfiles/api-3/images/cb_pano_1x.png')] bg-cover opacity-50">
          <span className="text-gray-500 font-bold">지도 영역 (카카오맵 API 연동 예정)</span>
        </div>
        
        {/* Mock Radius */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 border-2 border-blue-500/50 rounded-full animate-pulse"></div>
        
        {/* Mock Location Pin (Me) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

        {/* Mock Job Pins */}
        <div className="absolute top-[40%] left-[60%] flex flex-col items-center">
          <div className="bg-white px-2 py-1 rounded-md shadow-md text-xs font-bold text-gray-800 mb-1">
            시급 1.3만
          </div>
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-sm"></div>
        </div>

        <div className="absolute top-[55%] left-[30%] flex flex-col items-center">
          <div className="bg-white px-2 py-1 rounded-md shadow-md text-xs font-bold text-gray-800 mb-1">
            시급 1.1만
          </div>
          <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-sm"></div>
        </div>
        
        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
          </button>
          <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </button>
        </div>
      </div>

      {/* Bottom Sheet - Job Detail */}
      <div className="bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-5 pb-24 z-10 relative mt-[-20px]">
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4"></div>
        
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded mb-2">매칭률 95%</span>
            <h3 className="text-xl font-bold text-gray-900">홀서빙 (점심 피크타임)</h3>
            <p className="text-gray-500 text-sm">스타벅스 강남대로점 • 도보 5분 거리</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">시급</p>
            <p className="text-2xl font-black text-blue-600">13,000<span className="text-lg">원</span></p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 my-4 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400 mb-1">근무 요일/시간</p>
            <p className="font-bold text-gray-800">월, 수 <span className="text-blue-600">13:00 ~ 15:00</span> (총 2시간)</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 mb-1">예상 일급</p>
            <p className="font-bold text-gray-800">26,000원</p>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-md hover:bg-blue-700 transition-colors">
          수락하고 매칭 확정하기
        </button>
      </div>
    </main>
  );
}
