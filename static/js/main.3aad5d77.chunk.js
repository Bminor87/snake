(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i),c=n(3),r=n.n(c),d=(n(12),n(13),n(4)),a=n(5),s=n(7),u=n(6),l=(n(14),n(0)),f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e,t,n=20,i=100,o=[{x:200,y:200},{x:190,y:200},{x:180,y:200},{x:170,y:200},{x:160,y:200}],c=0,r=!1,d=n,a=0,s=document.getElementById("snakeboard"),u=s.getContext("2d"),l=function(){u.fillStyle="rgba(0, 0, 0, 0.5)",u.strokestyle="black",u.fillRect(0,0,s.width,s.height),u.strokeRect(0,0,s.width,s.height)},f=function(){o.forEach(y)},h=function(){u.fillStyle="tomato",u.strokestyle="tomato",u.fillRect(e,t,n,n),u.strokeRect(e,t,n,n)},y=function(e){u.fillStyle="rgba(200, 200, 0, 0.8)",u.strokestyle="rgba(255,255,255,0)",u.lineWidth=0,u.fillRect(e.x,e.y,n,n),u.strokeRect(e.x,e.y,n,n)},x=function(){for(var e=4;e<o.length;e++)if(o[e].x===o[0].x&&o[e].y===o[0].y)return!0;var t=o[0].x<0,i=o[0].x>s.width-n,c=o[0].y<0,r=o[0].y>s.height-n;return t||i||c||r},j=function(e,t){return Math.round((Math.random()*(t-e)+e)/n)*n},b=function i(){e=j(0,s.width-n),t=j(0,s.height-n),o.forEach((function(n){n.x===e&&n.y===t&&i()}))},p=function(){var n={x:o[0].x+d,y:o[0].y+a};o.unshift(n),o[0].x===e&&o[0].y===t?(i-=5,c+=10,document.getElementById("score").innerHTML=c,document.getElementById("speed").innerHTML=100-i,b()):o.pop()};!function e(){if(x()){var t="You died you loser! ";return t+='Final score: <span id="score">'+c+"</span>",void(document.getElementById("ScoreContainer").innerHTML=t)}r=!1,setTimeout((function(){l(),h(),p(),f(),e()}),i)}(),b(),document.addEventListener("keydown",(function(e){if(!r){r=!0;var t=e.keyCode,i=-20===a,o=a===n,c=d===n,s=-20===d;13===t&&(window.location.href="/"),37!==t||c||(d=-20,a=0),38!==t||o||(d=0,a=-20),39!==t||s||(d=n,a=0),40!==t||i||(d=0,a=n)}}))}},{key:"render",value:function(){return Object(l.jsxs)("div",{id:"SnakeGame",children:[Object(l.jsxs)("div",{id:"ScoreContainer",children:["Score: ",Object(l.jsx)("span",{id:"score",children:"0"})]}),Object(l.jsxs)("div",{id:"SpeedContainer",children:["Speed: ",Object(l.jsx)("span",{id:"speed",children:"0"})]}),Object(l.jsx)("canvas",{id:"snakeboard",width:"800",height:"800"})]})}}]),n}(o.a.Component);var h=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(f,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),o(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.3aad5d77.chunk.js.map