"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[122],{9122:function(e,o,n){n.r(o),n.d(o,{default:function(){return Z}});var t=n(9439),r=n(1087),a=n(7689),s=n(7155),c={container:"MoodDetails_container__wx-iI","data-container":"MoodDetails_data-container__1Jb5S","buttons-container":"MoodDetails_buttons-container__csn8I"},i=n(1961),l=n(5675),u=n(2791),d=n(9186),v=n(9143),f=n(2250),m=n(1267),g=n(184);var Z=function(){var e,o=(0,r.lr)(),n=(0,t.Z)(o,1)[0].get("id"),Z=(0,a.s0)(),h=(0,s.Z)({url:"/moodDetails?id=".concat(n)}),x=(0,t.Z)(h,3),C=x[0],j=x[1],k=x[2],b=(0,u.useState)(""),S=(0,t.Z)(b,2),w=S[0],y=S[1],_=(0,u.useState)(""),p=(0,t.Z)(_,2),N=p[0],A=p[1],M=(0,u.useState)(!1),E=(0,t.Z)(M,2),T=E[0],D=E[1],H=(0,u.useState)(!1),I=(0,t.Z)(H,2),P=I[0],R=I[1],z=(0,u.useState)(""),G=(0,t.Z)(z,2),O=G[0],q=G[1],B=(0,u.useState)(""),F=(0,t.Z)(B,2),J=F[0],K=F[1],W=(0,f.Z)(),L=W.alert,Q=W.AlertComponent,U=(0,s.Z)({url:"/removeMood",options:{data:{id:n},method:"PATCH"},fetch:!1}),V=(0,t.Z)(U,4),X=V[0],Y=V[1],$=V[2],ee=V[3],oe=(0,s.Z)({url:"/recallMood",options:{data:{id:n},method:"PATCH"},fetch:!1}),ne=(0,t.Z)(oe,4),te=ne[0],re=ne[1],ae=ne[2],se=ne[3],ce=(0,s.Z)({url:"/editMood",options:{data:{id:n,name:w,color:N},method:"PATCH"},fetch:!1}),ie=(0,t.Z)(ce,4),le=ie[0],ue=ie[1],de=ie[2],ve=ie[3],fe=function(){q(""),K("")};return(0,u.useEffect)((function(){fe(),C&&(y(null===C||void 0===C?void 0:C.name),A(null===C||void 0===C?void 0:C.color),D(null===C||void 0===C?void 0:C.status))}),[C]),(0,u.useEffect)((function(){fe(),X?(D(X.status),L({backgroundColor:"green",message:"Mood successfully removed"})):Y&&L({backgroundColor:"red",message:"Some error occured while removing"})}),[X,Y]),(0,u.useEffect)((function(){fe(),te?(D(te.status),L({backgroundColor:"green",message:"Mood successfully recalled"})):re&&L({backgroundColor:"red",message:"Some error occured while recalling"})}),[te,re]),(0,u.useEffect)((function(){if(le)y(le.name),A(le.color),R(!1),L({backgroundColor:"green",message:"Mood successfully edited"});else if(ue){var e,o;if(Array.isArray(null===(e=ue.response)||void 0===e?void 0:e.data))(null===(o=ue.response)||void 0===o?void 0:o.data).forEach((function(e){"name"===e.field?q(e.message):"color"===e.field&&K(e.message)}));else L({backgroundColor:"red",message:"Some error occured while saving"})}}),[le,ue]),(0,g.jsxs)("div",{className:c.container,children:[Q,j?(0,g.jsx)(d.Z,{text:"Some error occured"}):k?(0,g.jsx)(i.Z,{color:"black"}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:c["data-container"],children:[(0,g.jsxs)("div",{className:c.id,children:["Id: ",(0,g.jsx)("strong",{style:{color:N},children:null!==(e=null===C||void 0===C?void 0:C._id)&&void 0!==e?e:""})]}),(0,g.jsxs)("div",{className:c.status,children:["Status: ",(0,g.jsx)("strong",{style:{color:T?"green":"red"},children:T?"Active":"Not-active"})]}),(0,g.jsx)(l.Z,{error:O,readonly:!P,width:"100%",label:"Name",value:w,onChange:function(e){q(""),y(e.target.value)}}),(0,g.jsx)(l.Z,{error:J,readonly:!P,width:"100%",label:"Color",value:N,onChange:function(e){K(""),A(e.target.value)}}),P?(0,g.jsxs)("div",{className:c["buttons-container"],children:[(0,g.jsx)(v.Z,{loading:de,width:"50%",text:"Save",onClick:function(){fe(),w===(null===C||void 0===C?void 0:C.name)&&N===(null===C||void 0===C?void 0:C.color)?L({backgroundColor:"red",message:"No changes to save"}):ve()}}),(0,g.jsx)(v.Z,{width:"50%",text:"Cancel",type:"reject",onClick:function(){fe(),R(!1),C&&(y(null===C||void 0===C?void 0:C.name),A(null===C||void 0===C?void 0:C.color),D(null===C||void 0===C?void 0:C.status))}})]}):(0,g.jsxs)("div",{className:c["buttons-container"],children:[(0,g.jsx)(v.Z,{width:"50%",text:"Edit",onClick:function(){return R(!0)}}),T?(0,g.jsx)(v.Z,{loading:$,width:"50%",color:"red",text:"Remove",type:"reject",onClick:function(){ee()}}):(0,g.jsx)(v.Z,{loading:ae,width:"50%",color:"green",text:"Recall",type:"reject",onClick:function(){se()}})]}),(0,g.jsx)(m.Z,{text:"GO BACK",onClick:function(){return Z(-1)}})]})," "]})]})}},9186:function(e,o,n){n.d(o,{Z:function(){return a}});var t={container:"ErrorMessage_container__9e608"},r=(n(2791),n(184));var a=function(e){var o=e.size,a=void 0===o?"20px":o,s=e.text,c=void 0===s?"Try again":s,i=n(573);return(0,r.jsxs)("div",{className:t.container,children:[(0,r.jsx)("img",{src:i,alt:"error",style:{maxWidth:a,maxHeight:a}}),(0,r.jsx)("div",{className:t.text,style:{fontSize:a},children:c})]})}},2250:function(e,o,n){n.d(o,{Z:function(){return l}});var t=n(8683),r=n(9439),a=n(2791),s="Alert_container__37xgO",c=n(184);var i=function(e){var o=e.backgroundColor,n=e.message;return o="var(--".concat(o,"-color)"),(0,c.jsx)("div",{className:s,style:{backgroundColor:o},children:n})};var l=function(){var e=(0,a.useState)(!1),o=(0,r.Z)(e,2),n=o[0],s=o[1],l=(0,a.useState)({backgroundColor:"black",message:"message"}),u=(0,r.Z)(l,2),d=u[0],v=u[1],f=(0,a.useState)(),m=(0,r.Z)(f,2),g=m[0],Z=m[1],h=(0,a.useCallback)((function(e){clearTimeout(g),v(e),s(!0);var o=window.setTimeout((function(){s(!1)}),2e3);Z(o)}),[g]);return{AlertComponent:n?(0,c.jsx)(i,(0,t.Z)({},d)):null,alert:h}}},7155:function(e,o,n){var t=n(8683),r=n(9439),a=n(2791),s=n(1243);o.Z=function(e){var o=e.url,n=e.options,c=void 0===n?{method:"GET"}:n,i=e.fetch,l=void 0===i||i,u=(0,a.useState)(null),d=(0,r.Z)(u,2),v=d[0],f=d[1],m=(0,a.useState)(null),g=(0,r.Z)(m,2),Z=g[0],h=g[1],x=(0,a.useState)(l),C=(0,r.Z)(x,2),j=C[0],k=C[1],b=(0,a.useState)(null),S=(0,r.Z)(b,2),w=S[0],y=S[1],_=(0,a.useState)(l),p=(0,r.Z)(_,2),N=p[0],A=p[1],M=(0,a.useState)(!1),E=(0,r.Z)(M,2),T=E[0],D=E[1],H=(0,a.useCallback)((function(){A(!0),k(!0),D((function(e){return!e}))}),[]);return(0,a.useEffect)((function(){var e=s.Z.CancelToken.source();return y(e),N&&(0,s.Z)(o,(0,t.Z)((0,t.Z)({},c),{},{cancelToken:e.token})).then((function(e){f(e.data),k(!1)})).catch((function(e){s.Z.isCancel(e)||(h(e),k(!1))})),function(){e.cancel("API Request was cancelled!")}}),[N,T]),[v,Z,j,H,null===w||void 0===w?void 0:w.cancel]}}}]);
//# sourceMappingURL=122.4cacef78.chunk.js.map