(this["webpackJsonplive-timing"]=this["webpackJsonplive-timing"]||[]).push([[0],{35:function(e,t,n){e.exports=n(65)},40:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),i=n.n(c),s=(n(40),n(10)),o=n.n(s),l=n(12),u=n(32),m=n(29),f=n(30),p=function(){function e(t,n,a,r){Object(m.a)(this,e),this.clazz=t,this.name=n,this.time=this.parseTime(a),this.number=r}return Object(f.a)(e,[{key:"parseTime",value:function(e){return e=parseFloat(e,10),isNaN(e)?999:e}}]),e}(),h=n(42),b=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(t);case 2:return n=e.sent,a=new DOMParser,r=a.parseFromString(n.data.contents,"text/html"),c={},i="",r.querySelectorAll("body > a > table:nth-child(3) > tbody > tr").forEach((function(e){if(e.querySelector("a"))i=e.querySelector("a").name,c[i]=[];else{var t=e.querySelector("td:nth-child(2)").innerText.split(" "),n=t[0],a=t[1],r=e.querySelector("td:nth-child(3)").innerText,s=e.querySelector("td:nth-child(4) > font").innerText;c[i].push(new p(n,r,s,a))}})),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=n(85),v=n(89),E=n(92),g=n(93),y=n(87),w=n(90),x=n(91),z=n(88),j=Object(d.a)({table:{minWidth:500,maxWidth:500,width:500},height:"35px"});function k(e){var t=e.data,n=e.name,a=t.map((function(e){return function(e,t,n,a){return{name:e,number:t,time:n,clazz:a}}(e.name,e.number,e.time,e.clazz)})),c=j(),i=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{component:z.a},r.a.createElement("div",{style:{overflow:"auto",height:"350px",borderStyle:"solid"}},r.a.createElement("h2",{style:{marginLeft:"15px"}},n.toUpperCase()),r.a.createElement(v.a,{className:c.table,"aria-label":"simple table",style:{tableLayout:"fixed"}},r.a.createElement(w.a,null,r.a.createElement(x.a,null,r.a.createElement(g.a,{align:"left"},"Position"),r.a.createElement(g.a,{align:"left"},"Number"),r.a.createElement(g.a,null,"Name"),r.a.createElement(g.a,{align:"right"},"Time"))),r.a.createElement(E.a,null,a.map((function(e){return i++,r.a.createElement(x.a,{key:e.name},r.a.createElement(g.a,{align:"left"},i),r.a.createElement(g.a,{align:"left"},e.number+" "+e.clazz.toUpperCase()),r.a.createElement(g.a,{component:"th",scope:"row"},e.name),r.a.createElement(g.a,{align:"right"},e.time))})))))))}n(64);var O={ss:.822,as:.819,bs:.814,cs:.809,ds:.806,es:.794,fs:.803,gs:.792,hs:.78,hcs:.792,ssr:.843,"xs-a":.844,"xs-b":.864,ev:.824,ssp:.853,asp:.849,bsp:.852,csp:.865,dsp:.842,esp:.839,fsf:.823,sts:.812,stx:.816,str:.827,stu:.828,sth:.813,ssc:.801,smf:.841,sm:.854,ssm:.875,xp:.88,bp:.867,cp:.851,dp:.866,ep:.85,fp:.868,hcr:.815,am:1,bm:.962,cm:.893,dm:.895,em:.896,fm:.911,fsae:.963,km:.93,ja:.855,jb:.82,jc:.718,camc:.818,camt:.817,cams:.833},S=function(e){var t=[];return Object.keys(e).forEach((function(n){t="n"===n?t.concat(e[n].map((function(e){var t=e.time;if(999!==t){var n=e.clazz.substring(1);t=(e.time/O[n]).toFixed(3)}return new p(e.clazz,e.name,t,e.number)}))):t.concat(e[n])})),t.sort((function(e,t){return e.time-t.time})),t},A=function(e){var t=[];return Object.keys(e).forEach((function(n){t="n"===n?t.concat(e[n].map((function(e){return new p(e.clazz,e.name,e.time,e.number)}))):t.concat(function(e,t){return e.map((function(e){return new p(e.clazz,e.name,(e.time*O[t]).toFixed(3),e.number)}))}(e[n],n))})),t.sort((function(e,t){return e.time-t.time})),t},W=function(e){var t=Object(a.useState)(),n=Object(u.a)(t,2),c=n[0],i=n[1],s=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(b("https://api.allorigins.win/get?url=stcsolo.com/live/results_live.htm"));case 2:t=e.sent,n=S(t),a=A(t),t.RAW=n,t.PAX=a,i(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"flex-grid"},c&&r.a.createElement(k,{class:"col",data:c.PAX,name:"PAX"}),c&&r.a.createElement(k,{class:"col",data:c.RAW,name:"RAW"}),c&&Object.keys(c).map((function(e){return r.a.createElement(k,{class:"col",data:c[e],name:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.d57c1001.chunk.js.map