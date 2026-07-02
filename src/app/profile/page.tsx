'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from "@/components/Header";

export default function RegisterProfile() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    score: '100',
    badge: '시간엄수',
    lat: '37.498',
    lng: '127.028',
    possibleTasks: '',
    diligence: '우수',
    attitude: '친절함',
    commuteRate: '100%'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/workers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert('인재 정보가 성공적으로 등록되었습니다.');
        router.push('/');
      } else {
        alert('인재 정보 등록에 실패했습니다.');
      }
    } catch (error) {
      console.error(error);
      alert('인재 정보 등록에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50/50 w-full relative">
      <Header title="내 인재정보 등록하기" />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 md:py-12 pb-24 md:pb-12">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-black text-gray-900 mb-2">이름 (또는 닉네임)</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="예) 이스타" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-black text-gray-900 mb-2">보유 강점 (배지)</label>
                <select value={formData.badge} onChange={e => setFormData({...formData, badge: e.target.value})} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>시간엄수</option>
                  <option>깔끔마무리</option>
                  <option>단골마스터</option>
                  <option>빠른손</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-black text-gray-900 mb-2">가능 업무 (쉼표로 구분)</label>
              <input required type="text" value={formData.possibleTasks} onChange={e => setFormData({...formData, possibleTasks: e.target.value})} placeholder="예) 홀서빙, 포장, 단순노무" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-black text-gray-900 mb-2">성실도</label>
                <select value={formData.diligence} onChange={e => setFormData({...formData, diligence: e.target.value})} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>매우 우수</option>
                  <option>우수</option>
                  <option>보통</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-black text-gray-900 mb-2">태도</label>
                <select value={formData.attitude} onChange={e => setFormData({...formData, attitude: e.target.value})} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>친절함</option>
                  <option>체력좋음</option>
                  <option>꼼꼼함</option>
                  <option>신속함</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-black text-gray-900 mb-2">출퇴근율</label>
                <select value={formData.commuteRate} onChange={e => setFormData({...formData, commuteRate: e.target.value})} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>100%</option>
                  <option>98%</option>
                  <option>95%</option>
                  <option>90%</option>
                </select>
              </div>
            </div>

            <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-indigo-600 text-white text-lg font-black rounded-2xl shadow-md hover:bg-indigo-700 transition-all disabled:opacity-50">
              {isSubmitting ? '등록 중...' : '내 정보 등록하기'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
