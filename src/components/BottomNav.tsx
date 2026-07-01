import Link from 'next/link';

export default function BottomNav() {
  return (
    <>
      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 pb-safe z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center h-16">
          <Link href="/" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span className="text-[10px] font-bold">홈(일정)</span>
          </Link>
          <Link href="/list" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
            <span className="text-[10px] font-bold">리스트</span>
          </Link>
          <Link href="/map" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span className="text-[10px] font-bold">지도</span>
          </Link>
          <Link href="/employer/dashboard" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            <span className="text-[10px] font-bold">구인/관리</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            <span className="text-[10px] font-bold">프로필</span>
          </Link>
        </div>
      </nav>

      {/* Desktop Top Nav */}
      <nav className="hidden md:flex fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm h-16 items-center px-4 lg:px-8">
        <div className="flex-1 flex items-center gap-8 max-w-7xl mx-auto w-full">
          <Link href="/" className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-2xl tracking-tight">TimeBlock</Link>
          <div className="flex gap-6 items-center flex-1 ml-4">
            <Link href="/" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">홈(일정)</Link>
            <Link href="/list" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">단기알바 찾기</Link>
            <Link href="/map" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">지도에서 찾기</Link>
            <Link href="/employer/dashboard" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">사장님 서비스</Link>
            <Link href="/admin" className="text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors">관리자 센터</Link>
          </div>
          <div>
            <Link href="/profile" className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-sm">M</div>
              마이페이지
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
