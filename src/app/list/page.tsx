'use client';
import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import { CalendarDays, Calendar, Clock, MapPin, Star, ChevronRight, CircleDollarSign, Coins, Landmark, Wallet, ClipboardList, CalendarRange } from 'lucide-react';
import { getDistance } from '@/utils/distance';

export default function ListPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);

  useEffect(() => {
    fetch('/api/jobs').then(res => res.json())
      .then(data => {
        setJobs(data || []);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    }
  }, []);

  const getPayBadge = (type: string) => {
    switch(type) {
      case '시급': return <span className="flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg text-[11px] font-black"><Clock className="w-3.5 h-3.5" /> 시급</span>;
      case '일급': return <span className="flex items-center gap-1 px-2.5 py-1 bg-orange-50 text-orange-700 rounded-lg text-[11px] font-black"><Coins className="w-3.5 h-3.5" /> 일급</span>;
      case '월급': return <span className="flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 rounded-lg text-[11px] font-black"><Wallet className="w-3.5 h-3.5" /> 월급</span>;
      case '연봉': return <span className="flex items-center gap-1 px-2.5 py-1 bg-purple-50 text-purple-700 rounded-lg text-[11px] font-black"><Landmark className="w-3.5 h-3.5" /> 연봉</span>;
      default: return <span className="flex items-center gap-1 px-2.5 py-1 bg-gray-50 text-gray-700 rounded-lg text-[11px] font-black"><CircleDollarSign className="w-3.5 h-3.5" /> {type}</span>;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50/50 w-full relative">
      <Header title="단기 알바 찾기" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        
        {/* Advanced Filters */}
        <div className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 mb-8 sticky top-[64px] md:top-[80px] z-30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 근무 기간 필터 */}
            <div>
              <label className="block text-sm font-black text-gray-900 mb-2 flex items-center gap-2"><CalendarDays className="w-4 h-4"/> 근무 기간</label>
              <select className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-gray-100 transition-colors">
                <option>모든 기간</option>
                <option>하루(1일) 단기</option>
                <option>1주일 이하 초단기</option>
                <option>1주일 ~ 1개월</option>
                <option>1개월 ~ 3개월</option>
                <option>3개월 이상 (장기)</option>
              </select>
            </div>
            
            {/* 요일 필터 */}
            <div>
              <label className="block text-sm font-black text-gray-900 mb-2 flex items-center gap-2"><Calendar className="w-4 h-4"/> 근무 요일 (다중 선택)</label>
              <div className="flex justify-between bg-gray-50 p-2 rounded-2xl border border-gray-200">
                {['월','화','수','목','금','토','일'].map((day, idx) => (
                  <button key={day} className={`w-9 h-9 md:w-10 md:h-10 rounded-xl text-sm font-black transition-colors ${idx === 5 || idx === 6 ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-200'}`}>{day}</button>
                ))}
              </div>
            </div>
            
            {/* 세부 시간대 필터 */}
            <div>
              <label className="block text-sm font-black text-gray-900 mb-2 flex items-center gap-2"><Clock className="w-4 h-4"/> 세부 시간대</label>
              <div className="flex items-center gap-2">
                <select className="flex-1 p-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-gray-100 transition-colors">
                  <option>09:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>18:00</option>
                </select>
                <span className="text-gray-400 font-black">~</span>
                <select className="flex-1 p-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-gray-100 transition-colors" defaultValue="18:00">
                  <option>12:00</option>
                  <option>15:00</option>
                  <option>18:00</option>
                  <option>22:00</option>
                  <option>02:00</option>
                </select>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 py-4 bg-gray-900 text-white text-base font-black rounded-2xl shadow-md hover:bg-gray-800 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
            위 조건으로 맞춤 알바 검색 <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 pb-24 md:pb-12">
          {isLoading ? (
            <div className="col-span-full text-center text-gray-500 py-10 font-bold">공고를 불러오는 중입니다...</div>
          ) : jobs.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-10 font-bold">조건에 맞는 공고가 없습니다.</div>
          ) : jobs.map(job => (
            <div key={job.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[11px] font-black rounded-lg inline-block">{job.tag}</span>
                    <span className="text-[11px] font-bold text-gray-700 bg-gray-50 px-2 py-1 rounded-md border border-gray-200 flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" fill="currentColor"/> {job.score}점</span>
                  </div>
                  {userLocation ? (
                    <span className="text-[11px] font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gray-400"/> {getDistance(userLocation.lat, userLocation.lng, job.lat, job.lng)}
                    </span>
                  ) : null}
                </div>
                
                <h3 className="font-black text-gray-900 text-xl mb-1 line-clamp-1">{job.title}</h3>
                <p className="text-gray-500 text-sm font-bold mb-4">{job.time}</p>

                <div className="bg-gray-50 rounded-xl p-3 mb-5 border border-gray-100 flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <ClipboardList className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-bold text-gray-600 leading-tight">업무: {job.tasks}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CalendarRange className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-bold text-gray-600 leading-tight">일정: {job.schedule}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-gray-50 pt-4 mt-1">
                {getPayBadge(job.payType)}
                <span className="font-black text-gray-900 text-2xl">{job.wage.toLocaleString()}<span className="text-sm font-bold text-gray-500 ml-0.5">원</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
