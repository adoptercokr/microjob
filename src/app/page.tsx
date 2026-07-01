'use client';
import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Link from "next/link";
import { Plus, X, CalendarDays, Clock, MapPin, Search, ChevronRight, Briefcase, User, Star, Award, CircleDollarSign, Coins, Landmark, Wallet, ClipboardList, CalendarRange, ThumbsUp, CheckCircle2 } from 'lucide-react';
import { getDistance } from '@/utils/distance';

interface ScheduleCondition {
  id: number;
  days: string[];
  startTime: string;
  endTime: string;
}

export default function Home() {
  const [conditions, setConditions] = useState<ScheduleCondition[]>([
    { id: 1, days: ['월', '수', '목'], startTime: '14:00', endTime: '19:00' }
  ]);
  const [duration, setDuration] = useState('모든 기간');

  // 사용자 현재 위치 상태
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          setLocationError('위치 권한 차단됨 (기본값: 강남역)');
          setUserLocation({ lat: 37.498095, lng: 127.027610 }); // 권한 거부시 강남역 디폴트
        }
      );
    } else {
      setUserLocation({ lat: 37.498095, lng: 127.027610 });
    }
  }, []);

  const addCondition = () => {
    setConditions([...conditions, { id: Date.now(), days: [], startTime: '09:00', endTime: '18:00' }]);
  };

  const removeCondition = (id: number) => {
    setConditions(conditions.filter(c => c.id !== id));
  };

  const toggleDay = (conditionId: number, day: string) => {
    setConditions(conditions.map(c => {
      if (c.id === conditionId) {
        const newDays = c.days.includes(day) ? c.days.filter(d => d !== day) : [...c.days, day];
        return { ...c, days: newDays };
      }
      return c;
    }));
  };

  const updateTime = (conditionId: number, field: 'startTime'|'endTime', value: string) => {
    setConditions(conditions.map(c => c.id === conditionId ? { ...c, [field]: value } : c));
  };

  const jobs = [
    { id: 1, title: '스타벅스 강남점 런치 타임', wage: 13000, payType: '시급', time: '오늘 11:30~13:30', tag: '급구', score: 98, lat: 37.498, lng: 127.028, tasks: '매장 정리 및 음료 제조 보조', schedule: '주 2일, 하루 2시간' },
    { id: 2, title: '올리브영 물류 정리 보조', wage: 100000, payType: '일급', time: '내일 14:00~16:00', tag: '단순업무', score: 91, lat: 37.495, lng: 127.025, tasks: '박스 운반 및 매대 진열 보조', schedule: '단기 1일, 총 2시간' },
    { id: 3, title: '개인 카페 주말 마감', wage: 1200000, payType: '월급', time: '매주 주말 21:00~23:00', tag: '장기', score: 95, lat: 37.502, lng: 127.030, tasks: '홀 청소 및 쓰레기 분리수거', schedule: '주 2일, 하루 2시간' },
  ];

  const workers = [
    { id: 1, name: '이스타', score: 98, badge: '시간엄수', lat: 37.497, lng: 127.026, possibleTasks: '홀서빙, 포장, 단순노무', diligence: '매우 우수', attitude: '친절함', commuteRate: '100%' },
    { id: 2, name: '박알바', score: 95, badge: '깔끔마무리', lat: 37.490, lng: 127.020, possibleTasks: '물류, 재고정리, 상하차', diligence: '우수', attitude: '체력좋음', commuteRate: '98%' },
    { id: 3, name: '김성실', score: 92, badge: '단골마스터', lat: 37.505, lng: 127.035, possibleTasks: '카페마감, 설거지, 청소', diligence: '우수', attitude: '꼼꼼함', commuteRate: '95%' },
  ];

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
    <main className="min-h-screen bg-gray-50/50 w-full relative pb-24 md:pb-12">
      <Header title="초단기 마이크로잡 홈" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        {/* 복합 다중 필터 콘솔 */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200 mb-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Search className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">맞춤 일정 매칭 콘솔</h2>
            </div>
            {userLocation ? (
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full flex items-center gap-1">
                <MapPin className="w-3 h-3" /> 내 위치 적용됨
              </span>
            ) : (
              <span className="text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full flex items-center gap-1 animate-pulse">
                <MapPin className="w-3 h-3" /> GPS 탐색 중...
              </span>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-black text-gray-700 mb-2 flex items-center gap-2">
              <CalendarDays className="w-4 h-4" /> 근무 기간
            </label>
            <select 
              className="w-full md:w-64 p-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option>모든 기간</option>
              <option>하루(1일) 단기</option>
              <option>1주일 이하 초단기</option>
              <option>1주일 ~ 1개월</option>
              <option>1개월 ~ 3개월</option>
              <option>3개월 이상 (장기)</option>
            </select>
          </div>

          <div className="space-y-4 mb-6">
            <label className="block text-sm font-black text-gray-700 flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4" /> 내 일정 조각 (다중 추가 가능)
            </label>
            
            {conditions.map((condition, index) => (
              <div key={condition.id} className="relative bg-gray-50 border border-gray-200 rounded-2xl p-4 md:p-5 flex flex-col xl:flex-row gap-5 xl:items-center">
                {conditions.length > 1 && (
                  <button onClick={() => removeCondition(condition.id)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                )}
                
                <div className="flex-1">
                  <div className="text-xs font-bold text-gray-500 mb-2">조건 {index + 1} - 요일 선택</div>
                  <div className="flex gap-1.5 md:gap-2">
                    {['월','화','수','목','금','토','일'].map((day) => {
                      const isSelected = condition.days.includes(day);
                      return (
                        <button 
                          key={day} 
                          onClick={() => toggleDay(condition.id, day)}
                          className={`w-9 h-9 md:w-11 md:h-11 rounded-xl text-sm font-black transition-all ${isSelected ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-100'}`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex-1 xl:max-w-md">
                  <div className="text-xs font-bold text-gray-500 mb-2">가능한 시간대</div>
                  <div className="flex items-center gap-2">
                    <select 
                      value={condition.startTime}
                      onChange={(e) => updateTime(condition.id, 'startTime', e.target.value)}
                      className="flex-1 p-3.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                      <option>09:00</option><option>10:00</option><option>11:00</option><option>12:00</option><option>13:00</option><option>14:00</option><option>18:00</option>
                    </select>
                    <span className="text-gray-400 font-black">~</span>
                    <select 
                      value={condition.endTime}
                      onChange={(e) => updateTime(condition.id, 'endTime', e.target.value)}
                      className="flex-1 p-3.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                      <option>12:00</option><option>15:00</option><option>18:00</option><option>19:00</option><option>20:00</option><option>22:00</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}

            <button 
              onClick={addCondition}
              className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-700 transition-all"
            >
              <Plus className="w-5 h-5" /> 내 일정 조각 추가하기
            </button>
          </div>

          <button className="w-full bg-gray-900 text-white font-black text-lg py-4 rounded-2xl shadow-md hover:bg-gray-800 hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
            위 복합 조건으로 매칭된 결과 보기 <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Registration Buttons */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-12">
          <Link href="/employer/dashboard" className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
            <Briefcase className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
            <span className="font-black text-sm md:text-lg">단기알바 공고 올리기</span>
          </Link>
          <Link href="/profile" className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
            <User className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
            <span className="font-black text-sm md:text-lg">내 인재정보 등록하기</span>
          </Link>
        </div>

        {/* Section 1: Jobs */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-5">
            <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-blue-600" /> 우리 동네 1~2시간 초단기 알바
            </h2>
            <Link href="/list" className="text-sm font-bold text-blue-600 hover:underline">전체보기</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x">
            {jobs.map(job => (
              <div key={job.id} className="min-w-[320px] md:min-w-[340px] bg-white p-6 rounded-3xl shadow-sm border border-gray-100 snap-center hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between">
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
                  <h3 className="font-black text-gray-900 text-lg mb-1">{job.title}</h3>
                  <p className="text-gray-500 text-sm font-medium mb-4 flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.time}</p>
                  
                  {/* Detailed Job Info */}
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

        {/* Section 2: Workers */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-5">
            <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <User className="w-6 h-6 text-indigo-600" /> 1시간도 틈틈이! 대기중인 초단기 인재
            </h2>
            <Link href="/workers" className="text-sm font-bold text-blue-600 hover:underline">전체보기</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x">
            {workers.map(worker => (
              <div key={worker.id} className="min-w-[320px] md:min-w-[340px] bg-white p-6 rounded-3xl shadow-sm border border-gray-100 snap-center hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between">
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

      </div>
    </main>
  );
}
