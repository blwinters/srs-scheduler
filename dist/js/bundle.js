!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(){a(this,e)}return r(e,[{key:"setIntervalMode",value:function(e){if(!this.intervalModes.hasOwnProperty(e))return!1;this.intervals=this.intervalModes[e]}},{key:"getReviewSchedule",value:function(e,t){var n={Memrise:[1,1,6,12,24,48,96,180],ClozeMaster:[],Anki:[]},i=function(e){return!!n.hasOwnProperty(e)&&n[e]}(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Memrise");if(i){for(var o=[],u=[0],s=function(){function e(t){a(this,e),this.batchSize=t,this.intervals=i,this.interval=0,this.daysUntilReview=i[0]}return r(e,[{key:"reviewsToday",value:function(){return 0===this.daysUntilReview?this.batchSize:0}},{key:"advanceInterval",value:function(){this.daysUntilReview>0?this.daysUntilReview=this.daysUntilReview-1:(this.interval=this.interval+1,this.interval<this.intervals.length?this.daysUntilReview=this.intervals[this.interval]:this.daysUntilReview=this.intervals[this.intervals.length-1])}}]),e}(),l=0;l<t;l++){o.push(new s(e));for(var c=0;c<o.length;c++)u[l]=u[l]?u[l]+o[c].reviewsToday():0+o[c].reviewsToday(),o[c].advanceInterval()}return u}return!1}}]),e}();t.default=i},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,a,i,o,u,s){if(r(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,a,i,o,u,s],f=0;(l=new Error(t.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,n){"use strict";function r(e){return function(){return e}}var a=function(){};a.thatReturns=r,a.thatReturnsFalse=r(!1),a.thatReturnsTrue=r(!0),a.thatReturnsNull=r(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(e){return e},e.exports=a},function(e,t,n){"use strict";var r=n(3),a=n(2),i=n(1);e.exports=function(){function e(e,t,n,r,o,u){u!==i&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";"function"==typeof Symbol&&Symbol.iterator;e.exports=n(4)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=i(n(5));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var u=new(i(n(0)).default),s=createPlotlyComponent(Plotly),l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={batch:e.batch,totalDays:e.totalDays},n.getSessionReviews=n.getSessionReviews.bind(n),n.updateBatch=n.updateBatch.bind(n),n.updateTotalDays=n.updateTotalDays.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),r(t,[{key:"getSessionReviews",value:function(e,t){return u.getReviewSchedule(e,t)}},{key:"parseToNumber",value:function(e){return isNaN(parseInt(e,10))?null:parseInt(e,10)}},{key:"updateBatch",value:function(e){var t=this.parseToNumber(e.target.value);this.setState({batch:t})}},{key:"updateTotalDays",value:function(e){var t=this.parseToNumber(e.target.value);this.setState({totalDays:t})}},{key:"render",value:function(){var e,t=this,n=t.getSessionReviews(t.state.batch,t.state.totalDays),r=[].concat(o(Array(n.length).fill(void 0).map(function(e,t){return t+1}))),a=[].concat(o(n));return React.createElement("div",null,React.createElement(s,{data:[{type:"bar",x:r,y:a}],layout:{width:600,height:480,title:"Review Schedule"}}),React.createElement("form",null,React.createElement("label",null,"Daily New Cards:",React.createElement("input",{type:"number",min:"0",max:"200",value:t.state.batch,onChange:t.updateBatch})),React.createElement("br",null),React.createElement("br",null),React.createElement("label",null,"Number of Days:",React.createElement("input",{type:"number",min:"0",max:"730",value:t.state.totalDays,onChange:t.updateTotalDays})),(e=t.state.batch*t.state.totalDays,React.createElement("p",null,"At that rate, you will learn ",e," flash cards."))))}}]),t}();l.propTypes={batch:a.default.number,totalDays:a.default.number},t.default=l},function(e,t,n){"use strict";var r,a=n(6),i=(r=a)&&r.__esModule?r:{default:r};ReactDOM.render(React.createElement(i.default,{batch:20,totalDays:90}),document.getElementById("root"))},function(e,t,n){e.exports=n(7)}]);