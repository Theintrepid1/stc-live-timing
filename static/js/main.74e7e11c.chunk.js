(this["webpackJsonplive-timing"]=this["webpackJsonplive-timing"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=(a(79),a(68)),o=a(16),s=a.n(o),u=a(29),m=a(11),f=a(65),p=a(66),d=function(){function e(t,a,n,r,l,c,i){Object(f.a)(this,e),this.clazz=t,this.name=a,this.time=this.parseTime(n),this.number=r,this.rawTimes=l,this.car=c,this.fastestIndex=i}return Object(p.a)(e,[{key:"parseTime",value:function(e){return e=parseFloat(e,10),isNaN(e)?999:e}}]),e}(),E=a(81),h=function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n,r,l,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get(t);case 2:return n=e.sent,r=new DOMParser,l=r.parseFromString(n.data.contents,"text/html"),c={},i=!1,l.querySelectorAll("body > table:nth-child(6) > tbody > tr").forEach((function(e){if(!i){var t=e.querySelectorAll("td"),a=(t=Array.prototype.slice.call(t))[1].innerText,n=(t=t.slice(4)).map((function(e){return parseFloat(e.innerText)}));if(n=n.filter((function(e){return!isNaN(e)})),!(i=n.length<5)){var r=0;(n=(n=n.sort((function(e,t){return t-e}))).slice(0,6)).length>5&&(r=n[5]),c[a]={name:a,lowTime:r,totalTimes:n.length,points:n}}}})),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n,r,l,c,i,o,u,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get(t);case 2:return n=e.sent,r=new DOMParser,l=r.parseFromString(n.data.contents,"text/html"),c={},i="",o=0,u=0,m=0,l.querySelectorAll("body > a > table:nth-child(4) > tbody > tr").forEach((function(e){if(e.querySelector("th"))i=e.querySelector("a").name,c[i]=[];else{var t=e.querySelector("td:nth-child(2)").innerText,a=e.querySelector("td:nth-child(3)").innerText,n=e.querySelector("td:nth-child(4)").innerText,r=e.querySelector("td:nth-child(5)").innerText,l=Array.prototype.slice.call(e.querySelectorAll("td:nth-child(n+7)"));l=l.slice(0,l.length-2);var s=[],f=[],p=999,E=-1;l.forEach((function(e,t){var a=e.innerText.split("+").map((function(e){return e.trim()}));if(f.push(e.innerText.trim()),1===a.length){if(""===a[0])return;var n=parseFloat(a,10);s.push(n),m++,n<p&&(p=n,E=t)}else if(2===a.length){if("dnf"===a[1]||"dns"===a[1])return void s.push(999);var r=parseFloat(a[1],10);isNaN(r)&&(r=0);var l=parseFloat(a,10)+2*r;u+=r,m++,s.push(l),l<p&&(p=l,E=t)}}));var h=s.sort((function(e,t){return e-t}))[0];c[i].push(new d(t,n,h,a,f,r,E)),f.length>o&&(o=f.length)}})),a({type:"RUNS_AND_CONES",data:{conesHit:u,runCount:m,maxRuns:o}}),e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),b=a(132),v=a(138),w=a(142),y=a(141),x=a(135),O=a(139),T=a(140),j=a(137),S=Object(n.createContext)(),z=function(e){var t=e.initialState,a=e.children,l=e.reducer;return r.a.createElement(S.Provider,{value:Object(n.useReducer)(l,t)},a)},C=function(){return Object(n.useContext)(S)},D=Object(b.a)({table:{minWidth:500},height:"35px"});function k(e){var t=e.data,a=e.name,n=C(),l=Object(m.a)(n,2),c=l[0].maxRuns,i=l[1],o=t.map((function(e){return function(e,t,a,n,r,l,c){return{name:e,number:t,time:a,clazz:n,rawTimes:r,car:l,fastestIndex:c}}(e.name,e.number,e.time,e.clazz,e.rawTimes,e.car,e.fastestIndex)})),s=null;(o&&o.length>1&&"PAX"===a||o&&"RAW"!==a)&&(s=o[0].time);var u=D(),f=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{component:j.a},r.a.createElement("div",null,r.a.createElement(v.a,{className:u.table,"aria-label":"simple table"},r.a.createElement(O.a,null,r.a.createElement(T.a,{style:{background:"gray"}},r.a.createElement(y.a,{style:{width:25,color:"white"},align:"left"},"Position"),r.a.createElement(y.a,{style:{color:"white"}},"Name"),r.a.createElement(y.a,{style:{color:"white"},align:"left"},"Number"),r.a.createElement(y.a,{style:{color:"white"},align:"left"},"Best"),r.a.createElement(y.a,{style:{color:"white"},align:"left"},"Diff"),new Array(c).fill().map((function(e,t){return r.a.createElement(y.a,{style:{color:"white"},align:"left"},t+1)})),s&&r.a.createElement(y.a,{style:{color:"white"},align:"left"},"DOTY Points"))),r.a.createElement(w.a,null,o.map((function(e,t){return f++,r.a.createElement(T.a,{style:t%2?{background:"#f2f2f2"}:{}},r.a.createElement(y.a,{align:"left"},f),r.a.createElement(y.a,{onClick:function(){return i({type:"SELECTED_DRIVER",data:e})},component:"th",scope:"row"},r.a.createElement("div",{style:{color:"blue",cursor:"pointer"}},e.name)),r.a.createElement(y.a,{align:"left"},e.number+" "+e.clazz.toUpperCase()),r.a.createElement(y.a,{align:"left"},e.time),r.a.createElement(y.a,null,e&&e.fastestIndex&&e.rawTimes&&0===t||!o[t-1]?0:(o[t-1].time-e.time).toFixed(3)),new Array(c).fill().map((function(t,a){return e.fastestIndex===a?r.a.createElement(y.a,{align:"left",style:{backgroundColor:"lightgreen"}},e.rawTimes.length>a?e.rawTimes[a]:""):r.a.createElement(y.a,{align:"left"},e.rawTimes.length>a?e.rawTimes[a]:"")})),s&&r.a.createElement(y.a,null,(s/e.time*1e3).toFixed(3)))})))))))}a(102);var R=a(146),A=Object(b.a)({table:{minWidth:500,maxWidth:500,width:500}});function F(e){var t=A(),a=C(),n=Object(m.a)(a,1)[0].selected,l=n.clazz,c=n.name,i=n.rawTimes,o=n.car,s=n.fastestIndex,u=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{component:j.a},r.a.createElement("div",{style:{overflow:"auto"}},r.a.createElement("h2",{style:{marginLeft:"15px"}},c," (",l.toUpperCase(),")"),r.a.createElement("h4",{style:{marginLeft:"15px"}},o),r.a.createElement(v.a,{className:t.table,"aria-label":"simple table",style:{tableLayout:"fixed"}},r.a.createElement(O.a,null,r.a.createElement(T.a,null,r.a.createElement(y.a,{align:"left"},"Run"),r.a.createElement(y.a,{align:"left"},"Time"))),r.a.createElement(w.a,null,i.map((function(e,t){return u++,r.a.createElement(T.a,null,r.a.createElement(y.a,{align:"left"},u),s+1===u?r.a.createElement(y.a,{align:"left",style:{backgroundColor:"lightgreen"}},e):r.a.createElement(y.a,{align:"left"},e))})))))))}function N(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var P=Object(b.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),W=function(){var e=C(),t=Object(m.a)(e,2),a=t[0].selected,n=t[1],l=P(),c=r.a.useState(N),i=Object(m.a)(c,1)[0];return a?r.a.createElement("div",null,r.a.createElement(R.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:!!a,onClose:function(){return n({type:"DESELECT_DRIVER"})}},r.a.createElement("div",{style:i,className:l.paper},r.a.createElement(F,null)))):r.a.createElement("div",null)},_=a(148),I=a(145),q=a(143),L=a(144),U=Object(b.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),X=function(e){var t=e.clazzes,a=U(),n=C(),l=Object(m.a)(n,2),c=l[0].dropdown,i=l[1];return r.a.createElement(q.a,{className:a.formControl},r.a.createElement(_.a,null,"Class"),r.a.createElement(L.a,{value:c,onChange:function(e){window.history.pushState("","","".concat(window.location.pathname,"?class=").concat(e.target.value)),i({type:"UPDATE_DROPDOWN",data:e.target.value})}},t.map((function(e){return r.a.createElement(I.a,{value:e},e.toUpperCase())}))))},H=Object(b.a)({table:{minWidth:500},height:"35px"});function M(e){var t=e.data,a=e.onClose,n=t.map((function(e){return t=e.name,a=e.sum,n=e.lowest,r=e.currentEventScore,l=e.currentTime,c=e.clazz,{name:t,sum:a,lowest:n,currentEventScore:r,currentTime:l,clazz:c};var t,a,n,r,l,c})),l=H(),c=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"#",onClick:a},"Back"),r.a.createElement(x.a,{component:j.a},r.a.createElement("div",null,r.a.createElement(v.a,{className:l.table,"aria-label":"simple table"},r.a.createElement(O.a,null,r.a.createElement(T.a,{style:{background:"gray"}},r.a.createElement(y.a,{style:{width:25,color:"white"},align:"left"},"Position"),r.a.createElement(y.a,{style:{color:"white"}},"Name"),r.a.createElement(y.a,{style:{color:"white"},align:"left"},"Score"),r.a.createElement(y.a,{style:{color:"white"},align:"left"},"Lowest scored Event"),r.a.createElement(y.a,{style:{color:"white"},align:"left"},"Raw time need to move up"))),r.a.createElement(w.a,null,n.map((function(t,a){return 0===a?r.a.createElement(T.a,{style:a%2?{background:"#f2f2f2"}:{}},r.a.createElement(y.a,{align:"left"},"DSQ"),r.a.createElement(y.a,{component:"th",scope:"row"},r.a.createElement("div",null,t.name)),r.a.createElement(y.a,{align:"left"},t.sum.toFixed(2)),r.a.createElement(y.a,{align:"left"},"Disqualified for an illegal tune in HS"),r.a.createElement(y.a,{align:"left"})):(c++,r.a.createElement(T.a,{style:a%2?{background:"#f2f2f2"}:{}},r.a.createElement(y.a,{align:"left"},c),r.a.createElement(y.a,{component:"th",scope:"row"},r.a.createElement("div",null,t.name)),r.a.createElement(y.a,{align:"left"},t.sum.toFixed(2)),r.a.createElement(y.a,{align:"left"},t.lowest),r.a.createElement(y.a,{align:"left"},function(e,t,a,n){if(!t)return"Lonely at the top Caleb";var r=t.sum-e.sum;if(1e3<r+e.currentEventScore)return"Can't move up";if(e.currentEventScore){e.lowest!==e.currentEventScore&&(r+=e.lowest-e.currentEventScore);var l=(parseFloat(e.currentEventScore)+parseFloat(r))/1e3;return(a/n[e.clazz]/l).toFixed(3)}return"Can't move up if not running"}(t,n[a-1],e.topPax,e.paxMap))))})))))))}var B={ss:.822,fsp:.823,as:.819,bs:.814,cs:.809,ds:.806,es:.794,fs:.803,gs:.792,hs:.78,hcs:.792,ssr:.843,"xs-a":.844,"xs-b":.864,ev:.824,ssp:.853,asp:.849,bsp:.852,csp:.865,dsp:.842,esp:.839,fsf:.823,sts:.812,stx:.816,str:.827,stu:.828,sth:.813,ssc:.801,smf:.841,sm:.854,ssm:.875,xp:.88,bp:.867,cp:.851,dp:.866,ep:.85,fp:.868,hcr:.815,am:1,bm:.962,cm:.893,dm:.895,em:.896,fm:.911,fsae:.963,km:.93,ja:.855,jb:.82,jc:.718,camc:.818,camt:.817,cams:.833},V=function(e){var t=[];return Object.keys(e).forEach((function(a){t="n"===a?t.concat(e[a].map((function(e){var t=e.time,a=e.clazz.substring(1);999!==t&&(t=(e.time/B[a]).toFixed(3));var n=e.rawTimes.map((function(e){return((e=e.split("+")[0])/B[a]).toFixed(3)}));return new d(e.clazz,e.name,t,e.number,n,e.car,e.fastestIndex)}))):t.concat(e[a])})),t.sort((function(e,t){return e.time-t.time})),t},J=function(e){var t=[];return Object.keys(e).forEach((function(a){t="n"===a?t.concat(e[a].map((function(e){return new d(e.clazz,e.name,e.time,e.number,e.rawTimes,e.car,e.fastestIndex)}))):t.concat(function(e,t){return e.map((function(e){return new d(e.clazz,e.name,(e.time*B[t]).toFixed(3),e.number,e.rawTimes,e.car,e.fastestIndex)}))}(e[a],a))})),t.sort((function(e,t){return e.time-t.time})),t},Y=function(e){var t=Object(n.useState)(),a=Object(m.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),f=Object(m.a)(o,2),p=f[0],d=f[1],E=Object(n.useState)(""),b=Object(m.a)(E,2),v=b[0],w=b[1],y=Object(n.useState)(null),x=Object(m.a)(y,2),O=x[0],T=x[1],j=Object(n.useState)(!1),S=Object(m.a)(j,2),z=S[0],D=S[1],R=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){if(window.location.search&&window.location.search.includes("?class=")){var e=window.location.search.replace("?class=","").trim();(Object.keys(B).includes(e)||"RAW"===e)&&U({type:"UPDATE_DROPDOWN",data:e})}else U({type:"UPDATE_DROPDOWN",data:"PAX"})},F=function(e,t){t.forEach((function(a){if(e[a.name]){var n=(t[0].time/a.time*1e3).toFixed(2);e[a.name].clazz=a.clazz,e[a.name].currentEventScore=n,e[a.name].currentTime=a.time,e[a.name].lowTime<n&&(6==e[a.name].totalTimes?(e[a.name].points.pop(),e[a.name].points.push(n)):e[a.name].points.push(n))}}));var a=function(e,t){return parseFloat(e)+parseFloat(t)};Object.keys(e).forEach((function(t){var n=1001;e[t].points.forEach((function(e){parseFloat(e)<n&&(n=parseFloat(e))})),e[t].sum=e[t].points.reduce(a),e[t].lowest=n}));var n=Object.keys(e).map((function(t){return e[t]}));n=n.sort((function(e,t){return t.sum-e.sum})),T(n)},N=C(),P=Object(m.a)(N,2),_=P[0],I=_.dropdown,q=_.conesHit,L=_.runCount,U=P[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t,a,n,r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(g("https://api.allorigins.win/get?url=stcsolo.com/live/results_live.htm?cache="+(new Date).getTime(),U));case 2:return t=e.sent,e.next=5,R(h("https://api.allorigins.win/get?url=stcsolo.com/wp-content/uploads/2020/09/2020_event9_paxpoints_6scores.htm?cache="+(new Date).getTime(),U));case 5:a=e.sent,n=V(t),r=J(t),t.RAW=n,t.PAX=r,w(t.PAX[0].time),c(t),l=Object.keys(t),l=["PAX","RAW"].concat(Object(i.a)(l.slice(0,l.length-2))),d(l),A(),F(a,r);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),window.onpopstate=function(e){return A()},r.a.createElement(r.a.Fragment,null,l&&p&&I&&!z&&r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement(X,{clazzes:p}),r.a.createElement("a",{style:{float:"right",paddingRight:"1em",paddingTop:"1em"},href:"mailto:gosefroba22@gmail.com"},"Issue or Suggestion?"),r.a.createElement("br",null),r.a.createElement("a",{style:{float:"right",paddingRight:"1em",paddingTop:"1em"},onClick:function(){D(!0)},href:"#"},"Show Live DOTY"),"PAX"!==I&&"RAW"!==I?r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",null,"Time needed to match top PAX: ",(v/B[I]).toFixed(3))):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",null,"Number of runs: ",L," "),r.a.createElement("div",null,"Cones hit: ",q)),r.a.createElement(k,{class:"col",data:l[I],name:I,topPax:v})),l&&p&&I&&z&&O&&r.a.createElement(M,{data:O,onClose:function(){D(!1)},topPax:v,paxMap:B}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=a(38);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,{initialState:{selected:null,dropdown:"PAX"},reducer:function(e,t){switch(t.type){case"SELECTED_DRIVER":return Object(Q.a)({},e,{selected:t.data});case"DESELECT_DRIVER":return Object(Q.a)({},e,{selected:null});case"UPDATE_DROPDOWN":return Object(Q.a)({},e,{dropdown:t.data});case"RUNS_AND_CONES":return Object(Q.a)({},e,{conesHit:t.data.conesHit,runCount:t.data.runCount,maxRuns:t.data.maxRuns});default:return e}}},r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a(103)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.74e7e11c.chunk.js.map