import Header from "@/components/Header";

export default function Home() {
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  const times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  return (
    <main className="pb-8">
      <Header title="내 알바 시간 설정" />
      <div className="p-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-5 rounded-2xl mb-6 shadow-md">
          <h2 className="font-bold text-xl mb-2">언제 일하고 싶으신가요?</h2>
          <p className="text-sm text-blue-100">원하는 시간만 블록으로 지정해두면,<br/>조건에 맞는 일자리를 실시간으로 매칭해드려요.</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-8 border-b border-gray-100">
            <div className="p-2 border-r border-gray-100 bg-gray-50 text-center text-[10px] text-gray-400 font-medium">시간</div>
            {days.map(day => (
              <div key={day} className="p-2 text-center text-sm font-bold text-gray-700 bg-gray-50 border-r border-gray-100 last:border-0">{day}</div>
            ))}
          </div>
          
          <div className="h-[420px] overflow-y-auto">
            {times.map((time, timeIdx) => (
              <div key={time} className="grid grid-cols-8 border-b border-gray-100 h-12">
                <div className="p-2 border-r border-gray-100 text-center text-xs text-gray-400 bg-gray-50 font-medium flex items-center justify-center">
                  {time}
                </div>
                {days.map((day, dayIdx) => {
                  // Mock pre-selected blocks (Mon & Wed 13:00 - 15:00)
                  const isSelected = (dayIdx === 0 || dayIdx === 2) && (timeIdx >= 4 && timeIdx <= 6);
                  return (
                    <div 
                      key={`${day}-${time}`} 
                      className={`border-r border-gray-100 transition-colors cursor-pointer relative
                        ${isSelected ? 'bg-blue-500' : 'bg-white hover:bg-gray-50'}
                      `}
                    >
                      {isSelected && timeIdx === 4 && (
                        <div className="absolute top-1 left-0 right-0 text-center">
                          <span className="text-[10px] font-bold text-white bg-blue-700/30 px-1 rounded">선택됨</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 flex gap-3">
          <button className="flex-1 bg-white border border-gray-200 text-gray-700 font-bold py-4 rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
            초기화
          </button>
          <button className="flex-[2] bg-gray-900 text-white font-bold py-4 rounded-xl shadow-md hover:bg-gray-800 transition-colors">
            블록 저장하고 매칭받기
          </button>
        </div>
      </div>
    </main>
  );
}
