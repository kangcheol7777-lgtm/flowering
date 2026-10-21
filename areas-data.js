/* 시공 지역 목록 — 시공 지역 페이지와 지역별 상세 페이지(area.html?a=키)가 이 목록을 씁니다.
   지역 추가: 해당 권역 areas 목록에 { key:"영문키", name:"지역명", dongs:"대표 동", note:"소개 문장(선택)" } 를 넣으세요. */
window.AREAS = [
  { group:"서울", other:"그 외 서울", areas:[
    { key:"gangnam",  name:"강남구", dongs:"도곡 · 역삼 · 대치 · 청담" },
    { key:"seocho",   name:"서초구", dongs:"반포 · 잠원 · 서초 · 방배" },
    { key:"songpa",   name:"송파구", dongs:"잠실 · 문정 · 가락 · 방이" },
    { key:"gangdong", name:"강동구", dongs:"고덕 · 명일 · 천호 · 둔촌" },
    { key:"guro",     name:"구로구", dongs:"신도림 · 개봉 · 고척 · 오류" },
    { key:"geumcheon",name:"금천구", dongs:"가산 · 독산 · 시흥" }
  ]},
  { group:"경기", other:"그 외 경기", areas:[
    { key:"gwangmyeong", name:"광명", dongs:"철산 · 하안 · 소하" },
    { key:"bucheon",     name:"부천", dongs:"중동 · 상동 · 송내 · 역곡" },
    { key:"anyang",      name:"안양", dongs:"평촌 · 범계 · 비산 · 호계" },
    { key:"siheung",     name:"시흥", dongs:"배곧 · 정왕 · 은행 · 대야" }
  ]},
  { group:"인천", other:"그 외 인천", areas:[
    { key:"bupyeong", name:"부평구", dongs:"부평 · 부개 · 삼산 · 산곡" },
    { key:"gyeyang",  name:"계양구", dongs:"작전 · 계산 · 귤현 · 효성" },
    { key:"namdong",  name:"남동구", dongs:"구월 · 논현 · 서창 · 간석" },
    { key:"seogu",    name:"서구",   dongs:"청라 · 검단 · 가정 · 석남" }
  ]}
];
window.findArea = function(key){
  for (var i=0;i<window.AREAS.length;i++){
    var g=window.AREAS[i];
    for (var j=0;j<g.areas.length;j++) if (g.areas[j].key===key) return { group:g.group, area:g.areas[j] };
  }
  return null;
};
