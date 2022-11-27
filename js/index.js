(function (a) {
  a.fn.rwdImageMaps = function () {
    var c = this;
    var b = function () {
      c.each(function () {
        if (typeof a(this).attr("usemap") == "undefined") {
          return;
        }
        var e = this,
          d = a(e);
        a("<img />")
          .on("load", function () {
            var g = "width",
              m = "height",
              n = d.attr(g),
              j = d.attr(m);
            if (!n || !j) {
              var o = new Image();
              o.src = d.attr("src");
              if (!n) {
                n = o.width;
              }
              if (!j) {
                j = o.height;
              }
            }
            var f = d.width() / 100,
              k = d.height() / 100,
              i = d.attr("usemap").replace("#", ""),
              l = "coords";
            a('map[name="' + i + '"]')
              .find("area")
              .each(function () {
                var r = a(this);
                if (!r.data(l)) {
                  r.data(l, r.attr(l));
                }
                var q = r.data(l).split(","),
                  p = new Array(q.length);
                for (var h = 0; h < p.length; ++h) {
                  if (h % 2 === 0) {
                    p[h] = parseInt((q[h] / n) * 100 * f);
                  } else {
                    p[h] = parseInt((q[h] / j) * 100 * k);
                  }
                }
                r.attr(l, p.toString());
              });
          })
          .attr("src", d.attr("src"));
      });
    };
    a(window).resize(b).trigger("resize");
    return this;
  };
})(jQuery);

const container = document.querySelector(".album-container");
const text = document.querySelector(".text");
if (window.innerWidth <= 768) {
  text.innerHTML = ` <div class="ph-home">
 <a href="https://www.edgarallanpoets.com"> HOME</a>
</div>`;
  container.innerHTML = `
  <h2>CLICK ON THE NOIR PYRAMID AND BUY YOUR COPY</h2>
  <img class="phone-img" src="media/Phone Piramid.webp" usemap="#5">
  <map name="5">
      <area shape="poly" coords="2,375,58,448,194,389,166,308" href="https://google.com/1" alt="">
      <area shape="poly" coords="167,307,194,390,358,320,358,224" href="https://google.com/2" alt="">
      <area shape="poly" coords="358,223,363,321,523,387,551,307" href="https://google.com/3" alt="">
      <area shape="poly" coords="551,307,523,391,663,448,716,377" href="https://google.com/4" alt="">
      <area shape="poly" coords="58,449,108,522,221,472,194,390" href="https://google.com/5" alt="">
      <area shape="poly" coords="194,390,222,473,359,417,358,320" href="https://google.com/6" alt="">
      <area shape="poly" coords="358,320,360,418,494,470,522,391" href="https://google.com/7" alt="">
      <area shape="poly" coords="523,392,495,471,609,523,662,450" href="https://google.com/8" alt="">
      <area shape="poly" coords="109,521,158,591,250,555,222,473" href="https://google.com/9" alt="">
      <area shape="poly" coords="223,474,251,556,357,512,360,418" href="https://google.com/10" alt="">
      <area shape="poly" coords="358,417,358,513,464,555,494,472" href="https://google.com/11" alt="">
      <area shape="poly" coords="494,473,465,556,557,593,610,521" href="https://google.com/12" alt="">
      <area shape="poly" coords="159,592,211,666,279,638,251,556" href="https://google.com/13" alt="">
      <area shape="poly" coords="252,557,280,638,358,610,358,515" href="https://google.com/14" alt="">
      <area shape="poly" coords="359,513,359,609,435,637,464,555" href="https://google.com/15" alt="">
      <area shape="poly" coords="464,555,436,638,505,666,556,594" href="https://google.com/16" alt="">
      <area shape="poly" coords="212,665,262,739,308,723,279,639" href="https://google.com/17" alt="">
      <area shape="poly" coords="280,640,310,721,357,703,355,612" href="https://google.com/18" alt="">
      <area shape="poly" coords="356,613,358,703,404,720,434,640" href="https://google.com/19" alt="">
      <area shape="poly" coords="435,641,410,721,455,736,503,666" href="https://google.com/20" alt="">
      <area shape="poly" coords="263,740,315,812,357,800,309,722" href="https://google.com/21" alt="">
      <area shape="poly" coords="310,723,358,801,406,721,360,705" href="https://google.com/22" alt="">
      <area shape="poly" coords="403,724,360,799,402,812,453,739" href="https://google.com/23" alt="">
      <area shape="poly" coords="315,812,359,871,403,810,359,800" href="https://google.com/24" alt="">
  </map>
  `;
}

var bH = false;
var bZ = false;
var showMode = false;
function tn() {
  da();
  document.getElementById("neg").style.display = "block";
  document.getElementById("sn").src = "img-pix/btnneg1.gif";
  showMode = true;
}
function th() {
  da();
  document.getElementById("f").style.display = "block";
  bH = true;
}
function tz() {
  da();
  document.getElementById("sz").src = "img-pix/btnzoom1.gif";
  bZ = true;
  document.getElementById("een").style.display = "block";
  showMode = true;
}
function da2() {
  da();
  document.getElementById("so").src = "img-pix/btnnor1.gif";
  showMode = false;
}
function da() {
  document.getElementById("f").style.display = "none";
  document.getElementById("een").style.display = "none";
  document.getElementById("neg").style.display = "none";
  document.getElementById("sn").src = "img-pix/btnneg0.gif";
  document.getElementById("sz").src = "img-pix/btnzoom0.gif";
  document.getElementById("so").src = "img-pix/btnnor0.gif";
  bH = false;
}
var headerHeight = 0;

if (document.all) {
} else document.captureEvents(Event.MOUSEMOVE);
document.onmousemove = mtrack;
function mtrack(e) {
  var lhs = 0;
  var xcurs = 0;
  var ycurs = 0;

  if (navigator.appName == "Netscape") {
    xcurs = e.pageX;
    ycurs = e.pageY;
    //		showMode = false;
  } else {
    xcurs = event.clientX;
    ycurs = event.clientY;
  }

  var l_xcurs;
  var l_ycurs;

  if (navigator.appName == "Netscape") {
    document.getElementById("d").style.left = xcurs + 10;
    document.getElementById("d").style.top = ycurs;
    l_xcurs = Math.ceil((xcurs - lhs) / 10) + 1;
    l_ycurs = Math.ceil((ycurs - headerHeight) / 10);
  } else {
    l_xcurs = Math.ceil((xcurs - lhs) / 10) + 1;
    l_ycurs = Math.ceil((ycurs - headerHeight + document.body.scrollTop) / 10);
    document.getElementById("d").style.top =
      ycurs + document.body.scrollTop - 5;
    document.getElementById("d").style.left =
      xcurs + 14 + document.body.scrollLeft;
  }

  if (l_ycurs <= 0 || l_ycurs > 1000 || l_xcurs <= 0 || l_xcurs > 1000) {
    document.getElementById("d").style.display = "none";
  } else {
    document.getElementById("d").style.display = "";
    if (showMode) {
      document.getElementById("xcoord").innerHTML = "(" + l_xcurs + ",";
      document.getElementById("ycoord").innerHTML = l_ycurs + ")";
    } else {
      if (sTitle == "") {
        document.getElementById("d").style.display = "none";
        document.getElementById("xcoord").innerHTML = "These";
        document.getElementById("xcoord").innerHTML += " (" + l_xcurs + ",";
        document.getElementById("ycoord").innerHTML = l_ycurs + ")";
      } else {
        document.getElementById("xcoord").innerHTML = sTitle;
        document.getElementById("ycoord").innerHTML = "";
      }
    }
  }

  if (!bZ) {
    return;
  }
  var x,
    y,
    x1,
    x2,
    y1,
    y2,
    dx = 0,
    dy = 0;
  fact = 2;
  opp = 100;

  x = event.x;
  y = event.y;

  dx = window.document.body.scrollLeft;
  dy = window.document.body.scrollTop;

  x1 = -opp + (x + dx) * fact; //left
  y1 = -opp + (y + dy) * fact - document.body.scrollTop * fact; //top
  x2 = +opp + (x + dx) * fact; //right
  y2 = +opp + (y + dy) * fact - document.body.scrollTop * fact; //bottom

  document.getElementById("een").style.left = (x + dx) * (1 - fact);
  document.getElementById("een").style.top =
    (y + dy) * (1 - fact) + document.body.scrollTop;
  document.getElementById("een").style.clip =
    "rect(" + y1 + "px," + x2 + "px," + y2 + "px," + x1 + "px)";
}

function h(iL, iT, iW, iH) {
  if (!bH) {
    return;
  }
  document.getElementById("f").style.left = iL - 1;
  document.getElementById("f").style.top = 64 + iT;
  document.getElementById("f").style.width = iW + 4;
  document.getElementById("f").style.height = iH + 4;
}

var sTitle = "";
function d(o) {
  sTitle = o.alt;
}
function e(o) {
  sTitle = "";
}
