(this.webpackJsonpmoodify=this.webpackJsonpmoodify||[]).push([[6],{271:function(e,t,a){"use strict";a.r(t);var n=a(16),o=a(11),c=a.n(o),i=a(20),r=a(8),s=a(2),l=a(0),u=a(64),d=a(19),m=a(1),p=a(255),b=a(53);var g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(p.a)(e,Object(m.a)({defaultTheme:b.a},t))},f=a(3),j=(a(6),a(4)),h=a(110),O=a(5),v=l.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.raised,c=void 0!==o&&o,i=Object(f.a)(e,["classes","className","raised"]);return l.createElement(h.a,Object(m.a)({className:Object(j.a)(a.root,n),elevation:c?8:1,ref:t},i))})),y=Object(O.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(v),x=a(81),w=l.forwardRef((function(e,t){var a=e.children,n=e.classes,o=e.className,c=e.focusVisibleClassName,i=Object(f.a)(e,["children","classes","className","focusVisibleClassName"]);return l.createElement(x.a,Object(m.a)({className:Object(j.a)(n.root,o),focusVisibleClassName:Object(j.a)(c,n.focusVisible),ref:t},i),a,l.createElement("span",{className:n.focusHighlight}))})),N=Object(O.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(w),S=["video","audio","picture","iframe","img"],T=l.forwardRef((function(e,t){var a=e.children,n=e.classes,o=e.className,c=e.component,i=void 0===c?"div":c,r=e.image,s=e.src,u=e.style,d=Object(f.a)(e,["children","classes","className","component","image","src","style"]),p=-1!==S.indexOf(i),b=!p&&r?Object(m.a)({backgroundImage:'url("'.concat(r,'")')},u):u;return l.createElement(i,Object(m.a)({className:Object(j.a)(n.root,o,p&&n.media,-1!=="picture img".indexOf(i)&&n.img),ref:t,style:b,src:p?r||s:void 0},d),a)})),k=Object(O.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(T),I=l.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.component,c=void 0===o?"div":o,i=Object(f.a)(e,["classes","className","component"]);return l.createElement(c,Object(m.a)({className:Object(j.a)(a.root,n),ref:t},i))})),C=Object(O.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(I),P=a(50),L=a(220),R=a(238),E=g({card:{width:300,height:260,display:"inline-block",margin:"10px",whiteSpace:"pre-wrap"},media:{height:160}}),F=function(e){var t=e.songs,a=e.categotyTitle,n=Object(l.useContext)(d.a),o=Object(r.a)(n,2);Object(u.a)(o[0]);var c=o[1],i=function(e){c({type:"setCurrentVideoSnippet",snippet:e})},m=E();if(console.log("card re rendered"),t){var p=t.map((function(e){return Object(s.jsx)(y,{className:m.card,children:Object(s.jsxs)(N,{onClick:function(){return(t=e).snippet.resourceId?i({id:t.snippet.resourceId.videoId,title:t.snippet.title,channelTitle:t.snippet.channelTitle,maxThumbnail:"https://img.youtube.com/vi/".concat(t.snippet.resourceId.videoId,"/maxresdefault.jpg"),sdThumbnail:"https://img.youtube.com/vi/".concat(t.snippet.resourceId.videoId,"/sddefault.jpg")}):i({id:t.id,title:t.snippet.title,channelTitle:t.snippet.channelTitle,maxThumbnail:"https://img.youtube.com/vi/".concat(t.id,"/maxresdefault.jpg"),sdThumbnail:"https://img.youtube.com/vi/".concat(t.id,"/sddefault.jpg")}),void console.log(t);var t},children:[Object(s.jsx)(k,{className:m.media,component:"img",src:e.snippet.thumbnails.high.url,loading:"lazy"}),Object(s.jsx)(C,{children:Object(s.jsx)(P.a,{gutterBottom:!0,variant:"body2",component:"p",children:e.snippet.title.slice(0,50)+" ..."})})]})},e.id)}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(P.a,{variant:"h5",style:{marginLeft:"15px"},children:a}),Object(s.jsx)("div",{className:"cardSlider",children:p})]})}return Object(s.jsx)(L.a,{style:{height:"25vh"},children:Object(s.jsx)(R.a,{color:"secondary"})})},M=a(63),V="PLFgquLnL59akA2PflFpeQG9L01VFg90wS",A="PL64G6j8ePNureM8YCKy5nRFyzYf8I2noy",B="PLcRN7uK9CFpPkvCc-08tWOQo6PAg4u0lA";t.default=function(){var e=Object(l.useState)({}),t=Object(r.a)(e,2),a=t[0],o=t[1],u=function(){setTimeout((function(){}),5e3);var e=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("videos",{params:{chart:"mostPopular",videoCategoryId:"10",regionCode:localStorage.getItem("country_code")}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(i.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("playlistItems",{params:{playlistId:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e().then((function(e){o((function(t){return Object(n.a)(Object(n.a)({},t),{trending:e})}))})),t(V).then((function(e){o((function(t){return Object(n.a)(Object(n.a)({},t),{latestSongs:e})}))})),t(A).then((function(e){o((function(t){return Object(n.a)(Object(n.a)({},t),{romanticSongs:e})}))})),t(B).then((function(e){o((function(t){return Object(n.a)(Object(n.a)({},t),{topBolloywood:e})}))}))};return Object(l.useEffect)((function(){var e=new Date,t=localStorage.getItem("trackTime"),a=JSON.parse(localStorage.getItem("homePageSongObj"));window.navigator.onLine||alert("You don't have internet!");t?function(){var n=(new Date-Date.parse(t))/36e5;console.log("Saved song",a),n>12||!a.latestSongs?(u(),localStorage.setItem("trackTime",e)):o(a)}():(localStorage.setItem("trackTime",e),u())}),[]),Object(l.useEffect)((function(){localStorage.setItem("homePageSongObj",JSON.stringify(a))}),[a]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("br",{}),Object(s.jsx)(F,{songs:a.trending,categotyTitle:"Trending Now"}),Object(s.jsx)(F,{songs:a.latestSongs,categotyTitle:"Latest Music"}),Object(s.jsx)(F,{songs:a.romanticSongs,categotyTitle:"Romantic Mood"}),Object(s.jsx)(F,{songs:a.topBolloywood,categotyTitle:"Top Bollywood"})]})}}}]);
//# sourceMappingURL=6.f4a63ab8.chunk.js.map