(this["webpackJsonplive-timing"]=this["webpackJsonplive-timing"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=(a(79),a(62)),o=a(22),s=a.n(o),u=a(34),m=a(11),d=a(59),f=a(60),p=function(){function e(t,a,n,r,l,c,i){Object(d.a)(this,e),this.clazz=t,this.name=a,this.time=this.parseTime(n),this.number=r,this.rawTimes=l,this.car=c,this.fastestIndex=i}return Object(f.a)(e,[{key:"parseTime",value:function(e){return e=parseFloat(e,10),isNaN(e)?999:e}}]),e}(),h=a(81),E=function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n,r,l,c,i,o,u,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(t);case 2:return n=e.sent,r=new DOMParser,l=r.parseFromString(n.data.contents,"text/html"),c={},i="",o=0,u=0,m=0,l.querySelectorAll("body > a > table:nth-child(4) > tbody > tr").forEach((function(e){if(e.querySelector("th"))i=e.querySelector("a").name,c[i]=[];else{var t=e.querySelector("td:nth-child(2)").innerText,a=e.querySelector("td:nth-child(3)").innerText,n=e.querySelector("td:nth-child(4)").innerText,r=e.querySelector("td:nth-child(5)").innerText,l=Array.prototype.slice.call(e.querySelectorAll("td:nth-child(n+7)"));l=l.slice(0,l.length-2);var s=[],d=[],f=999,h=-1;l.forEach((function(e,t){var a=e.innerText.split("+").map((function(e){return e.trim()}));if(d.push(e.innerText.trim()),1===a.length){if(""===a[0])return;var n=parseFloat(a,10);s.push(n),m++,n<f&&(f=n,h=t)}else if(2===a.length){if("dnf"===a[1]||"dns"===a[1])return void s.push(999);var r=parseFloat(a[1],10);isNaN(r)&&(r=0);var l=parseFloat(a,10)+2*r;u+=r,m++,s.push(l),l<f&&(f=l,h=t)}}));var E=s.sort((function(e,t){return e-t}))[0];c[i].push(new p(t,n,E,a,d,r,h)),d.length>o&&(o=d.length)}})),a({type:"RUNS_AND_CONES",data:{conesHit:u,runCount:m,maxRuns:o}}),e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),b=a(132),g=a(138),w=a(142),v=a(141),y=a(135),x=a(139),O=a(140),j=a(137),T=Object(n.createContext)(),S=function(e){var t=e.initialState,a=e.children,l=e.reducer;return r.a.createElement(T.Provider,{value:Object(n.useReducer)(l,t)},a)},D=function(){return Object(n.useContext)(T)},C=Object(b.a)({table:{minWidth:500},height:"35px"});function R(e){var t=e.data,a=e.name,n=D(),l=Object(m.a)(n,2),c=l[0].maxRuns,i=l[1],o=t.map((function(e){return function(e,t,a,n,r,l,c){return{name:e,number:t,time:a,clazz:n,rawTimes:r,car:l,fastestIndex:c}}(e.name,e.number,e.time,e.clazz,e.rawTimes,e.car,e.fastestIndex)})),s=null;o.length>1&&"PAX"===a&&(s=o[0].time);var u=C(),d=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{component:j.a},r.a.createElement("div",null,r.a.createElement(g.a,{className:u.table,"aria-label":"simple table"},r.a.createElement(x.a,null,r.a.createElement(O.a,{style:{background:"gray"}},r.a.createElement(v.a,{style:{width:25,color:"white"},align:"left"},"Position"),r.a.createElement(v.a,{style:{color:"white"}},"Name"),r.a.createElement(v.a,{style:{color:"white"},align:"left"},"Number"),r.a.createElement(v.a,{style:{color:"white"},align:"left"},"Best"),r.a.createElement(v.a,{style:{color:"white"},align:"left"},"Diff"),new Array(c).fill().map((function(e,t){return r.a.createElement(v.a,{style:{color:"white"},align:"left"},t+1)})),s&&r.a.createElement(v.a,{style:{color:"white"},align:"left"},"DOTY Points"))),r.a.createElement(w.a,null,o.map((function(e,t){return d++,r.a.createElement(O.a,{style:t%2?{background:"#f2f2f2"}:{}},r.a.createElement(v.a,{align:"left"},d),r.a.createElement(v.a,{onClick:function(){return i({type:"SELECTED_DRIVER",data:e})},component:"th",scope:"row"},r.a.createElement("div",{style:{color:"blue",cursor:"pointer"}},e.name)),r.a.createElement(v.a,{align:"left"},e.number+" "+e.clazz.toUpperCase()),r.a.createElement(v.a,{align:"left"},e.time),r.a.createElement(v.a,null,e&&e.fastestIndex&&e.rawTimes&&0===t||!o[t-1]?0:(o[t-1].time-e.time).toFixed(3)),new Array(c).fill().map((function(t,a){return e.fastestIndex===a?r.a.createElement(v.a,{align:"left",style:{backgroundColor:"lightgreen"}},e.rawTimes.length>a?e.rawTimes[a]:""):r.a.createElement(v.a,{align:"left"},e.rawTimes.length>a?e.rawTimes[a]:"")})),s&&r.a.createElement(v.a,null,(s/e.time*1e3).toFixed(3)))})))))))}a(102);var A=a(146),z=Object(b.a)({table:{minWidth:500,maxWidth:500,width:500}});function N(e){var t=z(),a=D(),n=Object(m.a)(a,1)[0].selected,l=n.clazz,c=n.name,i=n.rawTimes,o=n.car,s=n.fastestIndex,u=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{component:j.a},r.a.createElement("div",{style:{overflow:"auto"}},r.a.createElement("h2",{style:{marginLeft:"15px"}},c," (",l.toUpperCase(),")"),r.a.createElement("h4",{style:{marginLeft:"15px"}},o),r.a.createElement(g.a,{className:t.table,"aria-label":"simple table",style:{tableLayout:"fixed"}},r.a.createElement(x.a,null,r.a.createElement(O.a,null,r.a.createElement(v.a,{align:"left"},"Run"),r.a.createElement(v.a,{align:"left"},"Time"))),r.a.createElement(w.a,null,i.map((function(e,t){return u++,r.a.createElement(O.a,null,r.a.createElement(v.a,{align:"left"},u),s+1===u?r.a.createElement(v.a,{align:"left",style:{backgroundColor:"lightgreen"}},e):r.a.createElement(v.a,{align:"left"},e))})))))))}function P(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var k=Object(b.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),I=function(){var e=D(),t=Object(m.a)(e,2),a=t[0].selected,n=t[1],l=k(),c=r.a.useState(P),i=Object(m.a)(c,1)[0];return a?r.a.createElement("div",null,r.a.createElement(A.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:!!a,onClose:function(){return n({type:"DESELECT_DRIVER"})}},r.a.createElement("div",{style:i,className:l.paper},r.a.createElement(N,null)))):r.a.createElement("div",null)},F=a(148),W=a(145),_=a(143),U=a(144),q=Object(b.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),X=function(e){var t=e.clazzes,a=q(),n=D(),l=Object(m.a)(n,2),c=l[0].dropdown,i=l[1];return r.a.createElement(_.a,{className:a.formControl},r.a.createElement(F.a,null,"Class"),r.a.createElement(U.a,{value:c,onChange:function(e){window.history.pushState("","","".concat(window.location.pathname,"?class=").concat(e.target.value)),i({type:"UPDATE_DROPDOWN",data:e.target.value})}},t.map((function(e){return r.a.createElement(W.a,{value:e},e.toUpperCase())}))))},L={ss:.822,fsp:.823,as:.819,bs:.814,cs:.809,ds:.806,es:.794,fs:.803,gs:.792,hs:.78,hcs:.792,ssr:.843,"xs-a":.844,"xs-b":.864,ev:.824,ssp:.853,asp:.849,bsp:.852,csp:.865,dsp:.842,esp:.839,fsf:.823,sts:.812,stx:.816,str:.827,stu:.828,sth:.813,ssc:.801,smf:.841,sm:.854,ssm:.875,xp:.88,bp:.867,cp:.851,dp:.866,ep:.85,fp:.868,hcr:.815,am:1,bm:.962,cm:.893,dm:.895,em:.896,fm:.911,fsae:.963,km:.93,ja:.855,jb:.82,jc:.718,camc:.818,camt:.817,cams:.833},H=function(e){var t=[];return Object.keys(e).forEach((function(a){t="n"===a?t.concat(e[a].map((function(e){var t=e.time,a=e.clazz.substring(1);999!==t&&(t=(e.time/L[a]).toFixed(3));var n=e.rawTimes.map((function(e){return e=e.split("+")[0],console.log(L[a]),(e/L[a]).toFixed(3)}));return new p(e.clazz,e.name,t,e.number,n,e.car,e.fastestIndex)}))):t.concat(e[a])})),t.sort((function(e,t){return e.time-t.time})),t},V=function(e){var t=[];return Object.keys(e).forEach((function(a){t="n"===a?t.concat(e[a].map((function(e){return new p(e.clazz,e.name,e.time,e.number,e.rawTimes,e.car,e.fastestIndex)}))):t.concat(function(e,t){return e.map((function(e){return new p(e.clazz,e.name,(e.time*L[t]).toFixed(3),e.number,e.rawTimes,e.car,e.fastestIndex)}))}(e[a],a))})),t.sort((function(e,t){return e.time-t.time})),t},B=function(e){var t=Object(n.useState)(),a=Object(m.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),d=Object(m.a)(o,2),f=d[0],p=d[1],h=Object(n.useState)(""),b=Object(m.a)(h,2),g=b[0],w=b[1],v=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){if(window.location.search&&window.location.search.includes("?class=")){var e=window.location.search.replace("?class=","").trim();(Object.keys(L).includes(e)||"RAW"===e)&&A({type:"UPDATE_DROPDOWN",data:e})}else A({type:"UPDATE_DROPDOWN",data:"PAX"})},x=D(),O=Object(m.a)(x,2),j=O[0],T=j.dropdown,S=j.conesHit,C=j.runCount,A=O[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(E("https://api.allorigins.win/get?url=stcsolo.com/live/results_live.htm?cache="+(new Date).getTime(),A));case 2:t=e.sent,a=H(t),n=V(t),t.RAW=a,t.PAX=n,w(t.PAX[0].time),c(t),r=Object.keys(t),r=["PAX","RAW"].concat(Object(i.a)(r.slice(0,r.length-2))),p(r),y();case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),window.onpopstate=function(e){return y()},r.a.createElement(r.a.Fragment,null,l&&f&&T&&r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement(X,{clazzes:f}),r.a.createElement("a",{style:{float:"right",paddingRight:"1em",paddingTop:"1em"},href:"mailto:gosefroba22@gmail.com"},"Issue or Suggestion?"),"PAX"!==T&&"RAW"!==T?r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",null,"Time needed to match top PAX: ",(g/L[T]).toFixed(3))):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",null,"Number of runs: ",C," "),r.a.createElement("div",null,"Cones hit: ",S)),r.a.createElement(R,{class:"col",data:l[T],name:T,topPax:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(38);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,{initialState:{selected:null,dropdown:"PAX"},reducer:function(e,t){switch(t.type){case"SELECTED_DRIVER":return Object(J.a)({},e,{selected:t.data});case"DESELECT_DRIVER":return Object(J.a)({},e,{selected:null});case"UPDATE_DROPDOWN":return Object(J.a)({},e,{dropdown:t.data});case"RUNS_AND_CONES":return Object(J.a)({},e,{conesHit:t.data.conesHit,runCount:t.data.runCount,maxRuns:t.data.maxRuns});default:return e}}},r.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a(103)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.3bed3198.chunk.js.map