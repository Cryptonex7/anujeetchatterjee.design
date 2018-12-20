webpackJsonp([2],{114:function(n,e,r){"use strict";function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function a(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),s=r.n(o),c=r(138),A=r(9),p=r(116),l=(r.n(p),function(){function n(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e}}()),d=function(n){function e(n){t(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.setURL=function(n,e){return"https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+n+"&maxResults=50&key="+e},r.state={MusicData:[]},r}return a(e,n),l(e,[{key:"componentDidMount",value:function(){var n=this;fetch(this.setURL("PLhX689A0mXH24GxnPzkaZAcyAi5Gla56I",A.f)).then(function(n){return n.json()}).then(function(e){return n.setState({MusicData:e.items})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"maincont"},s.a.createElement("h1",null,"My Musical Journey"),s.a.createElement("p",{id:"content"},"I am very fortunate to be born in a family of musical background. I have been involved in various forms of music since my childhood days. I sing and also play the Keyboard(Piano and other key based instruments), Guitar, Drums, Tabla(and most of the Indian percussion instruments), Cajon, and I do have an interest for unconventional music styles and I love playing any kind of percussion the most. My favourite music genre is Indian-Classical Fusion (or Indo-Western Fusion). In conventional forms of music I am a fan of Rock - favourite bands being Queen, Pink Floyd, Led Zeppelin, and artists including Bon Jovi, Bryan Adams and more."),s.a.createElement("div",{className:"grid-container"},s.a.createElement(c.a,{list:this.state.MusicData})))}}]),e}(o.Component);e.default=d},116:function(n,e,r){var t=r(117);"string"===typeof t&&(t=[[n.i,t,""]]);var i={hmr:!1};i.transform=void 0;r(110)(t,i);t.locals&&(n.exports=t.locals)},117:function(n,e,r){e=n.exports=r(34)(!0),e.push([n.i,".music-card{background-color:var(--ac-gray);padding:1rem;display:inline-block;width:380px;-webkit-filter:drop-shadow(8px 8px 5px var(--ac-primary));filter:drop-shadow(8px 8px 5px var(--ac-primary));margin:10px;-webkit-transition:-webkit-filter .35s ease-in;transition:-webkit-filter .35s ease-in;-o-transition:filter .35s ease-in;transition:filter .35s ease-in;transition:filter .35s ease-in,-webkit-filter .35s ease-in}.music-card:hover{-webkit-filter:drop-shadow(0 0 100px var(--ac-white));filter:drop-shadow(0 0 100px var(--ac-white))}#content{width:85%;margin:auto;margin-bottom:20px}.grid-container{width:75%;margin:auto}.thumb{width:100%;margin:auto}.caption{text-decoration:none;color:var(--ac-text-gray);text-align:left}.design-title{font-size:3rem;font-weight:500;margin-bottom:15px}@media only screen and (max-width:1250px){.music-card{width:90%;float:none;margin:20px auto;-webkit-filter:drop-shadow(4px 4px 5px var(--ac-primary));filter:drop-shadow(4px 4px 5px var(--ac-primary))}.grid-container{width:95%}.music-card:hover{-webkit-filter:drop-shadow(4px 4px 5px var(--ac-primary));filter:drop-shadow(4px 4px 5px var(--ac-primary));-webkit-transition:none;-o-transition:none;transition:none}}","",{version:3,sources:["C:/Users/KIIT/Documents/GitHub/anujeetchatterjee.design/src/css/MusicCard.css"],names:[],mappings:"AAAA,YACI,gCAAiC,AACjC,aAAc,AACd,qBAAsB,AACtB,YAAa,AACb,0DAA2D,AACnD,kDAAmD,AAC3D,YAAa,AACb,+CAAiD,AACjD,uCAAyC,AACzC,kCAAoC,AACpC,+BAAiC,AACjC,0DAA+D,CAClE,AAED,kBACI,sDAA2D,AACnD,6CAAmD,CAE9D,AAED,SACI,UAAW,AACX,YAAa,AACb,kBAAoB,CACvB,AAED,gBACI,UAAW,AACX,WAAa,CAChB,AAED,OACI,WAAY,AACZ,WAAa,CAChB,AAED,SACI,qBAAsB,AACtB,0BAA2B,AAC3B,eAAiB,CACpB,AAED,cACI,eAAgB,AAChB,gBAAiB,AACjB,kBAAoB,CACvB,AAED,0CACI,YACI,UAAW,AACX,WAAY,AACZ,iBAAkB,AAClB,0DAA2D,AACnD,iDAAmD,CAE9D,AACD,gBACI,SAAW,CACd,AACD,kBACI,0DAA2D,AACnD,kDAAmD,AAC3D,wBAAyB,AACzB,mBAAoB,AACpB,eAAiB,CAEpB,CACJ",file:"MusicCard.css",sourcesContent:[".music-card{\r\n    background-color: var(--ac-gray);\r\n    padding: 1rem;\r\n    display: inline-block;\r\n    width: 380px;\r\n    -webkit-filter: drop-shadow(8px 8px 5px var(--ac-primary));\r\n            filter: drop-shadow(8px 8px 5px var(--ac-primary));\r\n    margin: 10px;\r\n    -webkit-transition: -webkit-filter 350ms ease-in;\r\n    transition: -webkit-filter 350ms ease-in;\r\n    -o-transition: filter 350ms ease-in;\r\n    transition: filter 350ms ease-in;\r\n    transition: filter 350ms ease-in, -webkit-filter 350ms ease-in;\r\n}\r\n\r\n.music-card:hover{\r\n    -webkit-filter: drop-shadow(0px 0px 100px var(--ac-white));\r\n            filter: drop-shadow(0px 0px 100px var(--ac-white));\r\n\r\n}\r\n\r\n#content{\r\n    width: 85%;\r\n    margin: auto;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.grid-container{\r\n    width: 75%;\r\n    margin: auto;\r\n}\r\n\r\n.thumb{\r\n    width: 100%;\r\n    margin: auto;\r\n}\r\n\r\n.caption{\r\n    text-decoration: none;\r\n    color: var(--ac-text-gray);\r\n    text-align: left;\r\n}\r\n\r\n.design-title{\r\n    font-size: 3rem;\r\n    font-weight: 500;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n@media only screen and (max-width: 1250px){\r\n    .music-card{\r\n        width: 90%;\r\n        float: none;\r\n        margin: 20px auto;\r\n        -webkit-filter: drop-shadow(4px 4px 5px var(--ac-primary));\r\n                filter: drop-shadow(4px 4px 5px var(--ac-primary));\r\n\r\n    }\r\n    .grid-container{\r\n        width: 95%;\r\n    }\r\n    .music-card:hover{\r\n        -webkit-filter: drop-shadow(4px 4px 5px var(--ac-primary));\r\n                filter: drop-shadow(4px 4px 5px var(--ac-primary));\r\n        -webkit-transition: none;\r\n        -o-transition: none;\r\n        transition: none;\r\n\r\n    }\r\n}"],sourceRoot:""}])},138:function(n,e,r){"use strict";var t=r(0),i=r.n(t),a=r(139),o=function(n){var e=n.list;return i.a.createElement("div",null,e.map(function(n,r){return i.a.createElement(a.a,{key:r,img:e[r].snippet.thumbnails.high.url,caption:e[r].snippet.title,link:e[r].snippet.resourceId.videoId,src:e[r].snippet.resourceId.videoId})}))};e.a=o},139:function(n,e,r){"use strict";var t=r(0),i=r.n(t),a=function(n){var e=(n.img,n.caption),r=(n.link,n.src);return i.a.createElement("div",{className:"music-card"},i.a.createElement("a",{href:"https://www.youtube.com/watch?v="+r,target:"blank",id:"yt-link"},i.a.createElement("div",{className:"thumbnail"},i.a.createElement("iframe",{width:"100%",height:"210",title:"iframe",src:"https://www.youtube.com/embed/"+r+"?controls=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),i.a.createElement("div",{className:"caption"},e)))};e.a=a}});
//# sourceMappingURL=2.13c030ab.chunk.js.map