'use client';
import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import { Search, MapPin, Star, ChevronRight, Briefcase, ThumbsUp, CheckCircle2 } from 'lucide-react';
import { getDistance } from '@/utils/distance';

export default function WorkersPage() {
  const [workers, setWorkers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);

  useEffect(() => {
    fetch('/api/workers').then(res => res.json())
      .then(data => {
        setWorkers(data || []);
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

  return (
    <main className="min-h-screen bg-gray-50/50 w-full relative">
      <Header title="초단기 인재 찾기" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        
        {/* Search Bar */}
        <div className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 mb-8 sticky top-[64px] md:top-[80px] z-30 flex gap-2">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="원하는 인재의 업무나 강점을 검색하세요" 
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
            />
          </div>
          <button className="px-6 bg-indigo-600 text-white text-sm font-black rounded-2xl shadow-md hover:bg-indigo-700 transition-all hover:-translate-y-0.5 whitespace-nowrap">
            검색
          </button>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 pb-24 md:pb-12">
          {isLoading ? (
            <div className="col-span-full text-center text-gray-500 py-10 font-bold">인재 정보를 불러오는 중입니다...</div>
          ) : workers.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-10 font-bold">등록된 인재가 없습니다.</div>
          ) : workers.map(worker => (
            <div key={worker.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 text-[11px] font-black rounded-lg inline-block">{worker.badge}</span>
                    <span className="text-[11px] font-bold text-gray-700 bg-gray-50 px-2 py-1 rounded-md border border-gray-200 flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" fill="currentColor"/> {worker.score}점</span>
                  </div>
                  {userLocation ? (
                    <span className="text-[11px] font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gray-400"/> {getDistance(userLocation.lat, userLocation.lng, worker.lat, worker.lng)}
                    </span>
                  ) : null}
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-full flex items-center justify-center font-black text-indigo-600 text-lg border border-indigo-100 group-hover:scale-105 transition-transform flex-shrink-0">
                    {worker.name[0]}
                  </div>
                  <h3 className="font-black text-gray-900 text-lg">{worker.name}</h3>
                </div>
                
                {/* Detailed Worker Info */}
                <div className="bg-gray-50 rounded-xl p-3 mb-5 border border-gray-100 flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <Briefcase className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div className="text-xs font-bold text-gray-700">업무: <span className="font-medium text-gray-600">{worker.possibleTasks}</span></div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ThumbsUp className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div className="text-xs font-bold text-gray-700">태도: <span className="font-medium text-gray-600">{worker.diligence}, {worker.attitude}</span></div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-xs font-bold text-gray-700">출퇴근율: <span className="font-black text-green-600">{worker.commuteRate}</span></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-center border-t border-gray-50 pt-4 mt-1">
                <span className="font-black text-indigo-600 text-sm flex items-center gap-1 group-hover:underline">프로필 상세 보기 <ChevronRight className="w-4 h-4" /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
