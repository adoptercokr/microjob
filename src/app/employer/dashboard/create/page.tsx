'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from "@/components/Header";

export default function CreateJob() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    wage: '',
    payType: '시급',
    time: '',
    tag: '급구',
    score: '100',
    lat: '37.498',
    lng: '127.028',
    tasks: '',
    schedule: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert('공고가 성공적으로 등록되었습니다.');
        router.push('/');
      } else {
        alert('공고 등록에 실패했습니다.');
      }
    } catch (error) {
      console.error(error);
      alert('공고 등록에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50/50 w-full relative">
      <Header title="새 단기 알바 공고 작성" />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 md:py-12 pb-24 md:pb-12">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-sm font-black text-gray-900 mb-2">공고 제목</label>
              <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="예) 스타벅스 강남점 런치 타임 보조" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-black text-gray-900 mb-2">급여 타입</label>
                <select value={formData.payType} onChange={e => setFormData({...formData, payType: e.target.value})} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>시급</option>
                  <option>일급</option>
                  <option>월급</option>
                  <option>연봉</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-black text-gray-900 mb-2">급여 금액</label>
                <input required type="number" value={formData.wage} onChange={e => setFormData({...formData, wage: e.target.value})} placeholder="금액 숫자만 입력" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-black text-gray-900 mb-2">근무 시간 (텍스트)</label>
              <input required type="text" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} placeholder="예) 오늘 11:30~13:30" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-black text-gray-900 mb-2">강조 태그</label>
                <select value={formData.tag} onChange={e => setFormData({...formData, tag: e.target.value})} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>급구</option>
                  <option>단순업무</option>
                  <option>초보가능</option>
                  <option>당일지급</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-black text-gray-900 mb-2">사업장 평가 점수(1~100)</label>
                <input required type="number" min="1" max="100" value={formData.score} onChange={e => setFormData({...formData, score: e.target.value})} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-black text-gray-900 mb-2">상세 업무 내용</label>
              <input required type="text" value={formData.tasks} onChange={e => setFormData({...formData, tasks: e.target.value})} placeholder="예) 매장 정리 및 음료 제조 보조" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-black text-gray-900 mb-2">상세 일정</label>
              <input required type="text" value={formData.schedule} onChange={e => setFormData({...formData, schedule: e.target.value})} placeholder="예) 단기 1일, 총 2시간" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-blue-600 text-white text-lg font-black rounded-2xl shadow-md hover:bg-blue-700 transition-all disabled:opacity-50">
              {isSubmitting ? '등록 중...' : '공고 등록하기'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
