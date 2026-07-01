'use client';
import { useState } from 'react';
import Header from "@/components/Header";
import Link from "next/link";
import { Plus, X, CalendarDays, Clock, MapPin, Search, ChevronRight, Briefcase, User, Star, Award, Zap } from 'lucide-react';

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
    { id: 1, title: '스타벅스 강남점 런치 타임', wage: 13000, time: '오늘 11:30~13:30', tag: '급구' },
    { id: 2, title: '올리브영 물류 정리 보조', wage: 12500, time: '내일 14:00~16:00', tag: '단순업무' },
    { id: 3, title: '개인 카페 마감 청소', wage: 14000, time: '오늘 21:00~22:30', tag: '초보가능' },
  ];

  const workers = [
    { id: 1, name: '이스타', score: 98, badge: '시간엄수', distance: '100m' },
    { id: 2, name: '박알바', score: 95, badge: '깔끔마무리', distance: '300m' },
    { id: 3, name: '김성실', score: 92, badge: '단골마스터', distance: '500m' },
  ];

  return (
    <main className="min-h-screen bg-gray-50/50 w-full relative pb-24 md:pb-12">
      <Header title="마이크로잡 홈" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        {/* 복합 다중 필터 콘솔 */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Search className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">맞춤 일정 매칭 콘솔</h2>
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

        {/* Section 1: Jobs */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-5">
            <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-blue-600" /> 우리 동네 급구 알바
            </h2>
            <Link href="/list" className="text-sm font-bold text-blue-600 hover:underline">전체보기</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x">
            {jobs.map(job => (
              <div key={job.id} className="min-w-[280px] md:min-w-[320px] bg-white p-6 rounded-3xl shadow-sm border border-gray-100 snap-center hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
                <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[11px] font-black rounded-lg mb-3 inline-block">{job.tag}</span>
                <h3 className="font-black text-gray-900 text-lg mb-1">{job.title}</h3>
                <p className="text-gray-500 text-sm font-medium mb-6 flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.time}</p>
                <div className="flex justify-between items-end border-t border-gray-50 pt-4">
                  <span className="text-xs text-gray-400 font-bold flex items-center gap-1"><Zap className="w-3 h-3 text-yellow-500" /> 예상 시급</span>
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
              <User className="w-6 h-6 text-indigo-600" /> 지금 일할 수 있는 알바생
            </h2>
            <Link href="/employer/dashboard" className="text-sm font-bold text-blue-600 hover:underline">공고 올리기</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x">
            {workers.map(worker => (
              <div key={worker.id} className="min-w-[240px] md:min-w-[280px] bg-white p-6 rounded-3xl shadow-sm border border-gray-100 snap-center hover:border-blue-300 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center font-black text-blue-600 text-xl border border-blue-100 group-hover:scale-105 transition-transform">
                    {worker.name[0]}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 text-lg">{worker.name}</h3>
                    <p className="text-xs text-gray-500 font-medium flex items-center gap-1"><MapPin className="w-3 h-3" /> 반경 {worker.distance}</p>
                  </div>
                </div>
                <div className="bg-gray-50/80 rounded-2xl p-4 border border-gray-100 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 font-bold flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500" /> 신뢰 스코어</span>
                    <span className="font-black text-blue-600 text-lg">{worker.score}<span className="text-xs text-gray-400 font-normal">점</span></span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 font-bold flex items-center gap-1"><Award className="w-4 h-4 text-indigo-500" /> 보유 강점</span>
                    <span className="font-bold text-gray-800 text-xs px-2.5 py-1 bg-white border border-gray-200 rounded-lg shadow-sm">{worker.badge}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
