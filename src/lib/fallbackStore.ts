export interface JobItem {
  id: number;
  title: string;
  wage: number;
  payType: string;
  time: string;
  tag: string;
  score: number;
  lat: number;
  lng: number;
  tasks: string;
  schedule: string;
}

export interface WorkerItem {
  id: number;
  name: string;
  score: number;
  badge: string;
  lat: number;
  lng: number;
  possibleTasks: string;
  diligence: string;
  attitude: string;
  commuteRate: string;
}

export const defaultJobs: JobItem[] = [
  { id: 1, title: '스타벅스 강남점 런치 타임', wage: 13000, payType: '시급', time: '오늘 11:30~13:30', tag: '급구', score: 98, lat: 37.498, lng: 127.028, tasks: '매장 정리 및 음료 제조 보조', schedule: '주 2일, 하루 2시간' },
  { id: 2, title: '올리브영 물류 정리 보조', wage: 100000, payType: '일급', time: '내일 14:00~16:00', tag: '단순업무', score: 91, lat: 37.495, lng: 127.025, tasks: '박스 운반 및 매대 진열 보조', schedule: '단기 1일, 총 2시간' },
  { id: 3, title: '개인 카페 주말 마감', wage: 1200000, payType: '월급', time: '매주 주말 21:00~23:00', tag: '장기', score: 95, lat: 37.502, lng: 127.030, tasks: '홀 청소 및 쓰레기 분리수거', schedule: '주 2일, 하루 2시간' },
];

export const defaultWorkers: WorkerItem[] = [
  { id: 1, name: '이스타', score: 98, badge: '시간엄수', lat: 37.497, lng: 127.026, possibleTasks: '홀서빙, 포장, 단순노무', diligence: '매우 우수', attitude: '친절함', commuteRate: '100%' },
  { id: 2, name: '박알바', score: 95, badge: '깔끔마무리', lat: 37.490, lng: 127.020, possibleTasks: '물류, 재고정리, 상하차', diligence: '우수', attitude: '체력좋음', commuteRate: '98%' },
  { id: 3, name: '김성실', score: 92, badge: '단골마스터', lat: 37.505, lng: 127.035, possibleTasks: '카페마감, 설거지, 청소', diligence: '우수', attitude: '꼼꼼함', commuteRate: '95%' },
];

const memoryStore = globalThis as unknown as {
  __fallbackJobs?: JobItem[];
  __fallbackWorkers?: WorkerItem[];
};

export function getFallbackJobs(): JobItem[] {
  if (!memoryStore.__fallbackJobs) {
    memoryStore.__fallbackJobs = [...defaultJobs];
  }
  return memoryStore.__fallbackJobs;
}

export function addFallbackJob(data: Omit<JobItem, 'id'>): JobItem {
  const list = getFallbackJobs();
  const nextId = list.reduce((max, item) => Math.max(max, item.id), 0) + 1;
  const created: JobItem = { id: nextId, ...data };
  list.unshift(created);
  return created;
}

export function getFallbackWorkers(): WorkerItem[] {
  if (!memoryStore.__fallbackWorkers) {
    memoryStore.__fallbackWorkers = [...defaultWorkers];
  }
  return memoryStore.__fallbackWorkers;
}

export function addFallbackWorker(data: Omit<WorkerItem, 'id'>): WorkerItem {
  const list = getFallbackWorkers();
  const nextId = list.reduce((max, item) => Math.max(max, item.id), 0) + 1;
  const created: WorkerItem = { id: nextId, ...data };
  list.unshift(created);
  return created;
}
