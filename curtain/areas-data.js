/* 시공 지역 목록 — 시공 지역 페이지, 지역별 상세 페이지(area.html?a=키), 견적 폼의 지역 선택이 모두 이 목록을 씁니다.
   행정구역 기준: 2026년 10월 (인천 2026.7.1 개편, 화성시 2026.2 일반구 신설 반영)

   ▶ 항목 설명
   key   : 페이지 주소에 쓰는 영문 키 (겹치면 안 됩니다)
   name  : 지역명
   dongs : 대표 동네 (선택) — 적으면 지역 페이지에 동네 이름이 표시됩니다
   gu    : (경기 시만) 시 아래 구 목록 */
window.AREAS = [
  { group:"서울", prefix:"서울", other:"서울 전 지역 방문 가능", areas:[
    { key:"gangnam",      name:"강남구",   dongs:"도곡 · 역삼 · 대치 · 청담" },
    { key:"gangdong",     name:"강동구",   dongs:"고덕 · 명일 · 천호 · 둔촌" },
    { key:"gangbuk",      name:"강북구" },
    { key:"gangseo",      name:"강서구" },
    { key:"gwanak",       name:"관악구" },
    { key:"gwangjin",     name:"광진구" },
    { key:"guro",         name:"구로구",   dongs:"신도림 · 개봉 · 고척 · 오류" },
    { key:"geumcheon",    name:"금천구",   dongs:"가산 · 독산 · 시흥" },
    { key:"nowon",        name:"노원구" },
    { key:"dobong",       name:"도봉구" },
    { key:"dongdaemun",   name:"동대문구" },
    { key:"dongjak",      name:"동작구" },
    { key:"mapo",         name:"마포구" },
    { key:"seodaemun",    name:"서대문구" },
    { key:"seocho",       name:"서초구",   dongs:"반포 · 잠원 · 서초 · 방배" },
    { key:"seongdong",    name:"성동구" },
    { key:"seongbuk",     name:"성북구" },
    { key:"songpa",       name:"송파구",   dongs:"잠실 · 문정 · 가락 · 방이" },
    { key:"yangcheon",    name:"양천구" },
    { key:"yeongdeungpo", name:"영등포구" },
    { key:"yongsan",      name:"용산구" },
    { key:"eunpyeong",    name:"은평구" },
    { key:"jongno",       name:"종로구" },
    { key:"seoul-jung",   name:"중구" },
    { key:"jungnang",     name:"중랑구" }
  ]},
  { group:"인천", prefix:"인천", other:"강화군 · 옹진군은 전화로 문의해 주세요", areas:[
    { key:"jemulpo",   name:"제물포구" },
    { key:"yeongjong", name:"영종구" },
    { key:"michuhol",  name:"미추홀구" },
    { key:"yeonsu",    name:"연수구",  dongs:"송도 · 연수 · 옥련 · 동춘" },
    { key:"namdong",   name:"남동구",  dongs:"구월 · 논현 · 서창 · 간석" },
    { key:"bupyeong",  name:"부평구",  dongs:"부평 · 부개 · 삼산 · 산곡" },
    { key:"gyeyang",   name:"계양구",  dongs:"작전 · 계산 · 귤현 · 효성" },
    { key:"seohae",    name:"서해구",  dongs:"청라 · 가정 · 석남" },
    { key:"geomdan",   name:"검단구" }
  ]},
  { group:"경기", prefix:"경기", other:"양평군 · 가평군 · 연천군은 전화로 문의해 주세요", areas:[
    { key:"suwon",       name:"수원시", gu:[
      { key:"suwon-jangan",    name:"장안구" }, { key:"suwon-gwonseon", name:"권선구" },
      { key:"suwon-paldal",    name:"팔달구" }, { key:"suwon-yeongtong", name:"영통구" } ]},
    { key:"seongnam",    name:"성남시", gu:[
      { key:"seongnam-sujeong", name:"수정구" }, { key:"seongnam-jungwon", name:"중원구" },
      { key:"seongnam-bundang", name:"분당구", dongs:"정자 · 서현 · 수내 · 판교" } ]},
    { key:"goyang",      name:"고양시", gu:[
      { key:"goyang-deogyang",  name:"덕양구" }, { key:"goyang-ilsandong", name:"일산동구" },
      { key:"goyang-ilsanseo",  name:"일산서구" } ]},
    { key:"yongin",      name:"용인시", gu:[
      { key:"yongin-cheoin",  name:"처인구" }, { key:"yongin-giheung", name:"기흥구" },
      { key:"yongin-suji",    name:"수지구" } ]},
    { key:"bucheon",     name:"부천시", gu:[
      { key:"bucheon-wonmi", name:"원미구" }, { key:"bucheon-sosa", name:"소사구" },
      { key:"bucheon-ojeong", name:"오정구" } ]},
    { key:"ansan",       name:"안산시", gu:[
      { key:"ansan-sangnok", name:"상록구" }, { key:"ansan-danwon", name:"단원구" } ]},
    { key:"anyang",      name:"안양시", gu:[
      { key:"anyang-manan", name:"만안구" }, { key:"anyang-dongan", name:"동안구", dongs:"평촌 · 범계 · 비산 · 호계" } ]},
    { key:"hwaseong",    name:"화성시", gu:[
      { key:"hwaseong-manse",     name:"만세구" }, { key:"hwaseong-hyohaeng",  name:"효행구" },
      { key:"hwaseong-byeongjeom", name:"병점구" }, { key:"hwaseong-dongtan",  name:"동탄구" } ]},
    { key:"siheung",     name:"시흥시", dongs:"목감 · 배곧 · 정왕 · 은행 · 대야" },
    { key:"gwangmyeong", name:"광명시", dongs:"철산 · 하안 · 소하" },
    { key:"gwacheon",    name:"과천시" },
    { key:"gunpo",       name:"군포시" },
    { key:"uiwang",      name:"의왕시" },
    { key:"gimpo",       name:"김포시" },
    { key:"namyangju",   name:"남양주시" },
    { key:"pyeongtaek",  name:"평택시" },
    { key:"uijeongbu",   name:"의정부시" },
    { key:"paju",        name:"파주시" },
    { key:"gg-gwangju",  name:"광주시" },
    { key:"hanam",       name:"하남시" },
    { key:"osan",        name:"오산시" },
    { key:"icheon",      name:"이천시" },
    { key:"anseong",     name:"안성시" },
    { key:"yangju",      name:"양주시" },
    { key:"guri",        name:"구리시" },
    { key:"pocheon",     name:"포천시" },
    { key:"dongducheon", name:"동두천시" },
    { key:"yeoju",       name:"여주시" }
  ]}
];

/* 키로 지역 찾기 → { group, prefix, area, city(구일 때 소속 시), full(전체 이름) } */
window.findArea = function(key){
  for (var i=0;i<window.AREAS.length;i++){
    var g=window.AREAS[i];
    for (var j=0;j<g.areas.length;j++){
      var a=g.areas[j];
      if (a.key===key) return { group:g.group, prefix:g.prefix, area:a, city:null, full:g.prefix+" "+a.name };
      if (a.gu) for (var k=0;k<a.gu.length;k++){
        if (a.gu[k].key===key) return { group:g.group, prefix:g.prefix, area:a.gu[k], city:a, full:g.prefix+" "+a.name+" "+a.gu[k].name };
      }
    }
  }
  return null;
};

/* 견적 폼 지역 선택용 전체 목록: [{group, items:[전체 이름...]}] */
window.areaOptions = function(){
  return window.AREAS.map(function(g){
    var items=[];
    g.areas.forEach(function(a){
      if (a.gu) a.gu.forEach(function(u){ items.push(g.prefix+" "+a.name+" "+u.name); });
      else items.push(g.prefix+" "+a.name);
    });
    return { group:g.group, items:items };
  });
};
