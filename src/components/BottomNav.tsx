'use client';
import Link from 'next/link';
import { Home, Search, Map, Users, Briefcase, User, MapPin } from 'lucide-react';

export default function BottomNav() {
  return (
    <>
      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 pb-safe z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center h-[64px]">
          <Link href="/" className="flex flex-col items-center justify-center w-full h-full text-blue-600">
            <Home className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-black">홈</span>
          </Link>
          <Link href="/list" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 transition-colors">
            <Search className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-bold">단기알바 찾기</span>
          </Link>
          <Link href="/" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 transition-colors">
            <Users className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-bold">인재 정보</span>
          </Link>
          <Link href="/employer/dashboard" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 transition-colors">
            <Briefcase className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-bold">사람 구하기</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 transition-colors">
            <User className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-bold">프로필</span>
          </Link>
        </div>
      </nav>

      {/* Desktop Top Nav */}
      <nav className="hidden md:flex fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm h-16 items-center px-4 lg:px-8">
        <div className="flex-1 flex items-center gap-8 max-w-7xl mx-auto w-full">
          <Link href="/" className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-2xl tracking-tight">Micro Job</Link>
          <div className="flex gap-6 items-center flex-1 ml-4">
            <Link href="/" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5"><Home className="w-4 h-4"/> 홈(일정)</Link>
            <Link href="/list" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5"><Search className="w-4 h-4"/> 단기알바 찾기</Link>
            <Link href="/" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5"><Users className="w-4 h-4"/> 인재 정보</Link>
            <Link href="/map" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5"><MapPin className="w-4 h-4"/> 지도에서 찾기</Link>
            <Link href="/employer/dashboard" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5"><Briefcase className="w-4 h-4"/> 사람 구하기</Link>
            <Link href="/admin" className="text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors">관리자 센터</Link>
          </div>
          <div>
            <Link href="/profile" className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 text-xs">M</div>
              <span className="text-sm font-bold text-gray-700">마이페이지</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
