/* 꽃피는 커튼 블라인드 — 공통 머리글/바닥글/상담 띠/하단 버튼 */
(function(){
  /* ▶ 회사 정보 — 빈칸("")을 채우면 사이트 전체(푸터, 상담 버튼, 회사 소개)에 자동으로 나타납니다. */
  var SITE = {
    name: "꽃피는 커튼 블라인드",
    tel: "070-8098-8555",
    telHref: "tel:07080988555",
    kakao: "",        // 카카오톡 채널 주소 — 채널을 만들면 넣으세요 (예: "http://pf.kakao.com/_abcde")
    hours: "오전 8시 ~ 오후 8시",
    ceo: "양인철",
    bizNo: "438-53-00822",
    address: "경기도 시흥시 목감둘레로 253-12, 1층 105호"
  };
  window.SITE = SITE;

  /* 고객 후기 카드 그리기: renderReviews(담을 요소, 최대 개수) */
  window.renderReviews = function(box, limit){
    function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
    function mask(n){n=String(n||"").trim();if(n.length<=1)return n||"고객";if(n.length===2)return n[0]+"*";return n[0]+"*".repeat(n.length-2)+n[n.length-1];}
    var list=(window.REVIEWS||[]).slice().sort(function(a,b){return String(b.date||"").localeCompare(String(a.date||""));});
    if(limit) list=list.slice(0,limit);
    if(!list.length){
      box.innerHTML='<div class="rv-empty"><p class="rv-empty-t">아직 등록된 후기가 없어요</p><p>시공을 마친 고객님들의 이야기가 곧 이곳에 채워집니다.<br>첫 후기의 주인공이 되어 주세요.</p><a class="btn pri" href="inquiry.html">무료 견적 신청</a></div>';
      box.classList.remove("grid","g3");return;
    }
    box.classList.add("grid","g3");
    box.innerHTML=list.map(function(r){
      var n=Math.max(0,Math.min(5,Math.round(+r.rating||0)));
      return '<article class="rv">'
        +'<div class="rv-stars" aria-label="별점 '+n+'점">'+"★".repeat(n)+'<span>'+"★".repeat(5-n)+'</span></div>'
        +(r.title?'<h3>'+esc(r.title)+'</h3>':'')+'<p class="rv-text">'+esc(r.text)+'</p>'
        +'<p class="rv-who">'+(r.name?esc(mask(r.name))+' 고객님':'고객님')+' · '+esc(r.region)+(r.product?' · '+esc(r.product):'')+(r.date?'<span class="tnum"> · '+esc(r.date)+'</span>':'')+(r.source?'<span class="rv-src">'+esc(r.source)+' 후기</span>':'')+'</p>'
        +'</article>';
    }).join("");
  };

  /* 블로그 카드 그리기: renderPosts(담을 요소, 최대 개수) */
  window.renderPosts = function(box, limit){
    function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
    var list=(window.BLOG||[]).slice().sort(function(a,b){return String(b.date).localeCompare(String(a.date));});
    if(limit) list=list.slice(0,limit);
    if(!list.length){box.innerHTML='<p style="color:var(--umber);text-align:center">준비 중인 글이 곧 올라옵니다.</p>';return;}
    box.innerHTML=list.map(function(p){
      return '<a class="post" href="post.html?id='+encodeURIComponent(p.id)+'">'
        +(p.cat&&window.randomCase ? '<div class="fabric photo"><img src="'+window.casePhoto(window.randomCase(p.cat),true)+'" alt="" loading="lazy"><span class="tag">'+esc(p.tag)+'</span></div>' : '<div class="fabric '+esc(p.fx||"fx-linen")+'"><span class="tag">'+esc(p.tag)+'</span></div>')
        +'<div class="t"><h3>'+esc(p.title)+'</h3><p>'+esc(p.summary)+'</p>'
        +'<span class="pm tnum">'+esc(p.date)+' · '+(+p.readMin||3)+'분 읽기</span></div></a>';
    }).join("");
  };

  var page = (location.pathname.split("/").pop() || "index.html").replace(/\?.*$/, "");
  if (page === "") page = "index.html";
  var MENU = [
    ["index.html", "홈"],
    ["gallery.html", "시공 사례"],
    ["reviews.html", "고객 후기"],
    ["about.html", "회사 소개"],
    ["areas.html", "시공 지역"],
    ["faq.html", "자주 묻는 질문"],
    ["blog.html", "블로그"],
    ["inquiry.html", "견적 문의"]
  ];
  function links(){
    return MENU.map(function(m){
      return '<a href="'+m[0]+'"'+(m[0]===page?' aria-current="page"':'')+'>'+m[1]+'</a>';
    }).join("");
  }
  var logo = '<img class="logo" src="img/logo.png" alt="꽃피는 커튼" width="77" height="48">';

  var h = document.getElementById("site-header");
  if (h) {
    h.outerHTML =
      '<header class="top"><div class="wrap">'
      + '<a class="brand" href="index.html" aria-label="'+SITE.name+' 홈">'+logo+'<span class="brand-sub">커튼 &amp; 블라인드</span></a>'
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
      + (SITE.kakao ? '<a class="btn line" href="'+SITE.kakao+'" target="_blank" rel="noopener">💬 카카오톡 상담</a>' : '')
      + '<a class="btn line" href="inquiry.html">📋 온라인 견적 신청</a></div>'
      + '</div></section>';
  }

  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
  var biz = [["대표", SITE.ceo],["사업자등록번호", SITE.bizNo],["주소", SITE.address]]
    .filter(function(x){return x[1];}).map(function(x){return x[0]+' '+esc(x[1]);}).join(" | ");

  var f = document.getElementById("site-footer");
  if (f) {
    f.outerHTML =
      '<footer><div class="wrap">'
      + '<div><img class="flogo" src="img/logo-light.png" alt="꽃피는 커튼" width="103" height="64"><h4 style="margin-top:10px">'+SITE.name+'</h4><p style="margin-bottom:12px">창가에 피어나는 편안함을 만듭니다.</p>'
      + '<p class="tnum">📞 '+SITE.tel+'</p>'
      + (SITE.hours ? '<p>🕘 '+esc(SITE.hours)+'</p>' : '')
      + (SITE.kakao ? '<p><a href="'+SITE.kakao+'" target="_blank" rel="noopener">💬 카카오톡 채널</a></p>' : '')
      + '</div>'
      + '<div><h4>바로가기</h4><ul>'+MENU.map(function(m){return '<li><a href="'+m[0]+'">'+m[1]+'</a></li>';}).join("")+'</ul></div>'
      + '<div><h4><a href="areas.html">시공 지역 →</a></h4><p>서울 · 경기 · 인천</p>'
      + '<p style="margin-top:6px"><a href="areas.html#seoul">서울 25개 구</a> · <a href="areas.html#incheon">인천 9개 구</a> · <a href="areas.html#gyeonggi">경기 28개 시</a></p></div>'
      + '<div class="copy">'
      + (biz ? '<p style="margin-bottom:6px">상호 '+SITE.name+' | '+biz+'</p>' : '')
      + '<p><a href="privacy.html" style="font-weight:700">개인정보처리방침</a> · © 2026 '+SITE.name+'. All Rights Reserved.</p></div>'
      + '</div></footer>'
      + '<nav class="dock" aria-label="빠른 상담"><a class="a tnum" href="'+SITE.telHref+'">📞 전화</a>'
      + (SITE.kakao ? '<a class="a" href="'+SITE.kakao+'" target="_blank" rel="noopener">💬 카톡</a>' : '')
      + '<a class="b" href="inquiry.html">📋 견적</a></nav>';
  }

  /* data-site="키" 가 붙은 곳에 회사 정보를 채워 넣음 (비어 있으면 원래 안내 문구 유지) */
  Array.prototype.forEach.call(document.querySelectorAll("[data-site]"), function(el){
    var v = SITE[el.getAttribute("data-site")];
    if (v) { el.textContent = v; el.classList.remove("todo"); }
  });
})();
