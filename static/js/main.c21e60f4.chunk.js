(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={feedbackBlock:"Feedback_feedbackBlock__qgn_k",title:"Feedback_title__11yKQ",button:"Feedback_button__3OZ33",info:"Feedback_info__2tFs4"}},17:function(e,t,a){},18:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(6),i=a.n(s),o=(a(17),a(18),a(7)),r=a(8),d=a(9),b=a(12),u=a(11),l=a(1),j=a.n(l),h=a(3),f=a.n(h),k=a(0);Notification.propTypes={good:f.a.number.isRequired,bad:f.a.number.isRequired,neutral:f.a.number.isRequired,total:f.a.func.isRequired,positivePercentage:f.a.func.isRequired};var v=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,s=e.positivePercentage;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h2",{className:j.a.title,children:"Statistics"}),Object(k.jsxs)("span",{className:j.a.info,children:["Good:",t]}),Object(k.jsxs)("span",{className:j.a.info,children:["Neutral:",a]}),Object(k.jsxs)("span",{className:j.a.info,children:["Bad:",n]}),Object(k.jsxs)("span",{className:j.a.info,children:["Total:",c]}),Object(k.jsxs)("span",{className:j.a.info,children:["Positive feedback:",s,"%"]})]})},O=a(10),p=a.n(O),g=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(k.jsx)(k.Fragment,{children:t.map((function(e){return Object(k.jsx)("button",{className:j.a.button,type:"button",name:e,onClick:a,children:e},p.a.generate())}))})},m=function(e){var t=e.message;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("h2",{className:j.a.title,children:t})})},x=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var a=t.target.name;e.setState((function(e){return Object(o.a)({},a,e[a]+1)}))},e}return Object(d.a)(a,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.countTotalFeedback();return(100*this.state.good/e).toFixed()}},{key:"render",value:function(){var e=Object.keys(this.state);return Object(k.jsxs)("div",{className:j.a.feedbackBlock,children:[Object(k.jsx)("h1",{className:j.a.title,children:"Please leave feedback"}),Object(k.jsx)(g,{options:e,onLeaveFeedback:this.onLeaveFeedback}),0===this.countTotalFeedback()?Object(k.jsx)(m,{message:"No feedback given"}):Object(k.jsx)(v,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),a}(n.Component);var F=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(x,{})})};i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(F,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c21e60f4.chunk.js.map