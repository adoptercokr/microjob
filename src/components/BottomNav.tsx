import Link from 'next/link';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-200 pb-safe z-50">
      <div className="flex justify-around items-center h-16">
        <Link href="/" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 focus:text-blue-600">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <span className="text-[10px]">일정</span>
        </Link>
        <Link href="/map" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 focus:text-blue-600">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <span className="text-[10px]">내주변</span>
        </Link>
        <Link href="/employer" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 focus:text-blue-600">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          <span className="text-[10px]">공고등록</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 focus:text-blue-600">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          <span className="text-[10px]">내정보</span>
        </Link>
      </div>
    </nav>
  );
}
