(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[810],{8438:function(n,t,e){"use strict";var i,r=e(7294),u=e(5944),o=function(n){var t=n.sketch,o=n.dispose,a=(0,r.useRef)(null);return(0,r.useEffect)((function(){i||(i=e(4035));var n=new i(t,a.current);return function(){o&&o(),n.setup=n.draw=null,n.noLoop(),n.remove(),window.cancelAnimationFrame(n._requestAnimId),n._setup=function(){n.remove(),window.cancelAnimationFrame(n._requestAnimId),n._setup=null},n._draw=function(){n.remove(),window.cancelAnimationFrame(n._requestAnimId),n._setup=null,n._draw=null}}}),[o,t]),(0,u.tZ)("div",{ref:a})};t.Z=(0,r.memo)(o)},1461:function(n,t,e){"use strict";var i=e(2962),r=e(7294),u=e(6123),o=e(9458),a=e(1023),c=e(6288),s=e(8438),h=e(4405),d=e(5944);var f={name:"ot4ncn",styles:"font-size:10px"};t.Z=function(n){var t=(0,n.usePage)({width:1200,height:650}),e=t.slug,l=t.title,v=t.width,w=t.height,p=t.sketch,g=t.dispose,m=(0,u.S)().hasher,_=(0,r.useState)(null),Z=_[0],k=_[1];return(0,r.useEffect)((function(){m&&k(m.h32ToString(p.toString()))}),[m,p]),(0,d.BX)(c.Z,{children:[(0,d.tZ)(i.PB,{title:l,openGraph:{images:[{url:"https://minodisk.github.io/sketches/".concat(e,".png"),width:1200,height:650,alt:l}]}}),(0,d.tZ)(a.Z,{title:l,children:(0,d.tZ)(h.xv,{css:f,children:Z})}),(0,d.tZ)("main",{children:(0,d.tZ)(h.Ug,{gap:2,children:(0,d.tZ)(h.xu,{width:v,height:w,children:(0,d.tZ)(s.Z,{sketch:p,dispose:g})})})}),(0,d.tZ)(o.Z,{})]})}},922:function(n,t,e){"use strict";e.d(t,{T:function(){return r}});var i=e(7294),r=function(n){var t=n.noLoop,e=n.width,r=n.height,u=n.setup,o=n.draw;return(0,i.useCallback)((function(n){n.setup=function(){n.frameRate(60);var i=n.createCanvas(e,r);t&&(n.noLoop(),i.mouseOver((function(){return n.loop()})),i.mouseOut((function(){return n.noLoop()}))),u&&u(n)},o&&(n.draw=function(){o(n)})}),[o,r,t,u,e])}},4441:function(n,t,e){"use strict";e.r(t),e.d(t,{usePage:function(){return o}});var i=e(1461),r=e(922),u=e(5944),o=function(n){var t=n.noLoop,e=void 0!==t&&t,i=n.width,u=void 0===i?900:i,o=n.height,a=void 0===o?600:o;return{slug:"wave",title:"Wave",width:u,height:a,sketch:(0,r.T)({noLoop:e,width:u,height:a,draw:function(n){var t=120,e=16*n.frameCount;n.background(0),n.stroke(255,255,255,51),n.noFill();for(var i=-120;i<=a+t;i+=5){n.beginShape();for(var r=-120;r<=u+t;r+=60){var o=n.noise(.003*r,.01*i,1e-4*e);n.curveVertex(r,i+(o-.5)*t*2)}n.endShape()}}})}};t.default=function(){return(0,u.tZ)(i.Z,{usePage:o})}},8346:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sketches/wave",function(){return e(4441)}])}},function(n){n.O(0,[6,578,774,888,179],(function(){return t=8346,n(n.s=t);var t}));var t=n.O();_N_E=t}]);