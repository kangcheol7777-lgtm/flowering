/* 꽃피는 커튼 블라인드 — 공통 머리글/바닥글/상담 띠/하단 버튼 */
(function(){
  var SITE = {
    name: "꽃피는 커튼 블라인드",
    tel: "070-8098-8555",
    telHref: "tel:07080988555"
  };
  window.SITE = SITE;

  var page = (location.pathname.split("/").pop() || "index.html").replace(/\?.*$/, "");
  if (page === "") page = "index.html";
  var MENU = [
    ["index.html", "홈"],
    ["gallery.html", "시공 사례"],
    ["about.html", "회사 소개"],
    ["areas.html", "시공 지역"],
    ["faq.html", "자주 묻는 질문"],
    ["inquiry.html", "견적 문의"]
  ];
  function links(){
    return MENU.map(function(m){
      return '<a href="'+m[0]+'"'+(m[0]===page?' aria-current="page"':'')+'>'+m[1]+'</a>';
    }).join("");
  }
  var logo = '<svg width="28" height="28" viewBox="0 0 30 30" aria-hidden="true"><g transform="translate(15 15)" fill="#8A5A36">'
    + [0,72,144,216,288].map(function(r,i){return '<ellipse rx="5" ry="9" cy="-6" transform="rotate('+r+')" opacity="'+(i%2?'.7':'.95')+'"/>';}).join("")
    + '</g><circle cx="15" cy="15" r="3.4" fill="#F7F1E6"/></svg>';

  var h = document.getElementById("site-header");
  if (h) {
    h.outerHTML =
      '<header class="top"><div class="wrap">'
      + '<a class="brand" href="index.html">'+logo+SITE.name+'</a>'
      + '<nav class="menu" aria-label="주요 메뉴">'+links()+'</nav>'
      + '<a class="tel tnum" href="'+SITE.telHref+'">📞 '+SITE.tel+'</a>'
      + '<button class="burger" type="button" id="burger" aria-expanded="false" aria-controls="mnav" aria-label="메뉴 열기">☰</button>'
      + '</div><nav class="mnav" id="mnav" hidden aria-label="모바일 메뉴">'+links()+'</nav></header>';
    var b = document.getElementById("burger"), mn = document.getElementById("mnav");
    b.addEventListener("click", function(){
      var open = mn.hidden; mn.hidden = !open;
      b.setAttribute("aria-expanded", open ? "true" : "false");
      b.textContent = open ? "✕" : "☰";
    });
  }

  var c = document.getElementById("site-cta");
  if (c) {
    c.outerHTML =
      '<section class="cta"><div class="wrap narrow">'
      + '<h2>우리 집 창에 어울리는 커튼, 무료로 상담받으세요</h2>'
      + '<p>방문 실측과 견적은 무료입니다. 편한 방법으로 문의해 주세요.</p>'
      + '<div class="btns"><a class="btn pri tnum" href="'+SITE.telHref+'">📞 '+SITE.tel+'</a>'
      + '<a class="btn line" href="inquiry.html">📋 온라인 견적 신청</a></div>'
      + '</div></section>';
  }

  var f = document.getElementById("site-footer");
  if (f) {
    f.outerHTML =
      '<footer><div class="wrap">'
      + '<div><h4>'+SITE.name+'</h4><p style="margin-bottom:12px">창가에 피어나는 편안함을 만듭니다.</p>'
      + '<p class="tnum">📞 '+SITE.tel+'</p></div>'
      + '<div><h4>바로가기</h4><ul>'+MENU.map(function(m){return '<li><a href="'+m[0]+'">'+m[1]+'</a></li>';}).join("")+'</ul></div>'
      + '<div><h4><a href="areas.html">시공 지역 →</a></h4><p>서울 · 경기 · 인천</p>'
      + '<p style="margin-top:6px">강남 · 서초 · 송파 · 강동 · 구로 · 금천 · 광명 · 부천 · 안양 · 시흥 · 부평 · 계양 · 남동 · 인천 서구</p></div>'
      + '<div class="copy">© 2026 '+SITE.name+'. All Rights Reserved.</div>'
      + '</div></footer>'
      + '<nav class="dock" aria-label="빠른 상담"><a class="a tnum" href="'+SITE.telHref+'">📞 전화</a><a class="b" href="inquiry.html">📋 견적</a></nav>';
  }
})();
