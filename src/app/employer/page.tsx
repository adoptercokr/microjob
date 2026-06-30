import Header from "@/components/Header";

export default function EmployerPage() {
  const templates = [
    { id: 1, title: '홀서빙', emoji: '🍽️', time: '2시간' },
    { id: 2, title: '단순포장', emoji: '📦', time: '3시간' },
    { id: 3, title: '행사보조', emoji: '🎉', time: '4시간' },
    { id: 4, title: '짐나르기', emoji: '💪', time: '1시간' },
  ];

  return (
    <main className="pb-24">
      <Header title="단기 구인 등록" />
      
      <div className="p-4">
        {/* Quick Templates */}
        <section className="mb-8">
          <h2 className="font-bold text-gray-900 mb-3 flex items-center justify-between">
            <span>자주 찾는 초단기 알바 템플릿</span>
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {templates.map(t => (
              <button key={t.id} className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-start hover:border-blue-500 hover:shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                <span className="text-2xl mb-2">{t.emoji}</span>
                <span className="font-bold text-gray-800">{t.title} <span className="text-blue-600 font-normal">{t.time}</span></span>
              </button>
            ))}
          </div>
        </section>

        {/* Custom Form */}
        <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-gray-900 mb-4">직접 입력하기</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">어떤 일을 하나요?</label>
              <input type="text" placeholder="예: 점심시간 홀서빙 보조" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">언제 필요한가요?</label>
                <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">몇 시간 인가요?</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all">
                  <option>1시간</option>
                  <option>2시간</option>
                  <option>3시간</option>
                  <option>4시간 (초단기)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">시급</label>
              <div className="relative">
                <input type="number" placeholder="10,030" defaultValue="12000" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 pr-10 font-bold text-lg text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
                <span className="absolute right-4 top-3.5 font-bold text-gray-500">원</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">올해 최저시급은 10,030원 입니다.</p>
            </div>
            
            <div className="pt-2">
              <label className="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg border border-blue-100">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="text-sm font-bold text-blue-900">급구 알림 (반경 3km 내 푸시 알림 발송)</span>
              </label>
            </div>
          </div>

          <button className="w-full mt-6 bg-gray-900 text-white font-bold py-4 rounded-xl shadow-md hover:bg-gray-800 transition-colors">
            10초 만에 공고 올리기
          </button>
        </section>
      </div>
    </main>
  );
}
