/* 시공 사례 데이터 — 지금은 페이지 구성을 보여주기 위한 "예시"입니다.
   실제 사례로 바꿀 때: 각 항목의 내용을 고치고 photo에 사진 파일 경로(예: "photos/case1.jpg")를 넣으면
   원단 무늬 대신 사진이 나옵니다. */
window.CASES = [
  {id:1, cat:"linen",    product:"린넨 커튼",     fx:"fx-linen",    photo:"", place:"예시 지역 A", room:"거실",   area:"32평 아파트", size:"가로 320 × 세로 230cm", color:"내추럴 베이지",
   request:"낮에도 은은하게 빛이 들어오는 거실을 원하셨습니다.", point:"속지 없이 린넨 한 겹으로 가볍게 연출했습니다.", note:"주름 간격을 넉넉히 잡아 열었을 때 창이 넓게 보이도록 했습니다."},
  {id:2, cat:"blackout", product:"암막 커튼",     fx:"fx-blackout", photo:"", place:"예시 지역 B", room:"침실",   area:"25평 아파트", size:"가로 240 × 세로 220cm", color:"다크 브라운",
   request:"교대 근무로 낮에 주무셔서 빛 차단이 가장 중요했습니다.", point:"레일 양 끝을 창보다 넓게 빼서 옆 틈으로 새는 빛을 줄였습니다.", note:"커튼 상단을 천장에 붙여 위쪽 빛샘도 막았습니다."},
  {id:3, cat:"wood",     product:"우드 블라인드", fx:"fx-wood",     photo:"", place:"예시 지역 C", room:"서재",   area:"40평 아파트", size:"가로 180 × 세로 150cm", color:"월넛",
   request:"원목 가구와 어울리는 따뜻한 분위기를 원하셨습니다.", point:"가구 색에 맞춰 월넛 컬러 50mm 살을 골랐습니다.", note:"책상 쪽 눈부심을 살 각도로 조절할 수 있게 했습니다."},
  {id:4, cat:"roll",     product:"롤스크린",      fx:"fx-roll",     photo:"", place:"예시 지역 D", room:"주방",   area:"오피스텔",     size:"가로 120 × 세로 110cm", color:"아이보리",
   request:"주방 창이라 기름때가 덜 타고 관리가 쉬운 제품을 찾으셨습니다.", point:"오염에 강한 원단으로 창틀 안쪽에 딱 맞게 달았습니다.", note:"싱크대 앞이라 조작줄 대신 손잡이로 올리고 내리게 했습니다."},
  {id:5, cat:"combi",    product:"콤비 블라인드", fx:"fx-combi",    photo:"", place:"예시 지역 E", room:"아이방", area:"34평 아파트", size:"가로 200 × 세로 210cm", color:"샌드 그레이",
   request:"앞 동과 가까워 낮에도 밖에서 안 보이길 원하셨습니다.", point:"망사와 원단 폭을 조절해 채광은 살리고 시선은 막았습니다.", note:"아이 안전을 위해 줄이 손에 닿지 않게 정리했습니다."},
  {id:6, cat:"honey",    product:"허니콤",        fx:"fx-honey",    photo:"", place:"예시 지역 F", room:"매장",   area:"상가 1층",     size:"가로 400 × 세로 240cm", color:"크림",
   request:"통유리 매장이라 여름 열기와 겨울 외풍이 고민이셨습니다.", point:"이중 허니콤으로 단열층을 두껍게 만들었습니다.", note:"위아래 양방향으로 열 수 있게 해 진열대 시야를 확보했습니다."}
];
window.caseMedia = function(c, h){
  return c.photo
    ? '<div class="fabric" style="height:'+h+'px;border-radius:0;background:url(\''+c.photo+'\') center/cover"><span class="tag">'+c.product+'</span></div>'
    : '<div class="fabric '+c.fx+'" style="height:'+h+'px;border-radius:0"><span class="tag">'+c.product+'</span></div>';
};
window.CATS =[["all","전체"],["linen","린넨 커튼"],["blackout","암막 커튼"],["wood","우드 블라인드"],["roll","롤스크린"],["combi","콤비 블라인드"],["honey","허니콤"]];
