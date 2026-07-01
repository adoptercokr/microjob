import Header from "@/components/Header";

export default function Home() {
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  const times = ['오전 (09-12)', '오후 (12-18)', '저녁 (18-22)', '야간 (22-06)'];

  return (
    <main className="min-h-screen bg-gray-50/50 w-full relative">
      <Header title="내 알바 시간 설정" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 pb-24 md:pb-12">
        
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tight">이번 주, 언제 일할까요?</h1>
          <p className="text-gray-500 font-medium">원하는 요일과 시간을 선택하면 내 주변 꿀알바를 찾아드려요.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 mb-8">
          <h2 className="font-bold text-gray-800 mb-4 text-lg">1. 요일 선택 <span className="text-sm font-normal text-gray-400">(다중 선택 가능)</span></h2>
          <div className="flex justify-between gap-2 mb-10">
            {days.map((day, idx) => (
              <button 
                key={day}
                className={`flex-1 aspect-square md:aspect-auto md:h-14 rounded-2xl flex items-center justify-center font-bold transition-all text-sm md:text-base ${
                  idx === 1 || idx === 3 ? 'bg-blue-600 text-white shadow-md transform md:scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <h2 className="font-bold text-gray-800 mb-4 text-lg">2. 시간대 선택</h2>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {times.map((time, idx) => (
              <button 
                key={time}
                className={`p-4 rounded-2xl text-center font-bold text-sm md:text-base transition-all border-2 ${
                  idx === 1 ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-sm' : 'border-transparent bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold text-lg py-5 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
          이 시간에 할 수 있는 알바 찾기 (12건)
        </button>
      </div>
    </main>
  );
}
