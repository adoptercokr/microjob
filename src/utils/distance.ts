// 두 좌표 간의 거리를 계산하는 유틸리티 (Haversine formula)
export function getDistance(lat1: number, lon1: number, lat2: number, lon2: number): string {
  const R = 6371; // 지구 반경 (km)
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
    
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const distanceKm = R * c; // km 단위

  if (distanceKm < 1) {
    // 1km 미만이면 m 단위로 표시 (10단위 절사)
    return Math.floor(distanceKm * 1000 / 10) * 10 + 'm';
  } else {
    // 1km 이상이면 소수점 1자리까지 표시
    return distanceKm.toFixed(1) + 'km';
  }
}

function deg2rad(deg: number): number {
  return deg * (Math.PI/180);
}
